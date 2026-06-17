'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeartPulse, faChalkboardTeacher, faDumbbell, faHouseChimney, faScissors, faArrowRight, faArrowLeft, faCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const steps = ["Service", "Details", "Schedule", "Contact", "Review"];

const serviceTypes = [
  { id: "dog-walking", icon: faPaw, label: "Dog Walking & Pet Sitting", category: "pet" },
  { id: "pet-grooming", icon: faScissors, label: "Mobile Pet Grooming", category: "pet" },
  { id: "house-sitting", icon: faHouseChimney, label: "House Sitting", category: "pet" },
  { id: "senior-care", icon: faHeartPulse, label: "Senior Care & Companion", category: "personal" },
  { id: "personal-training", icon: faDumbbell, label: "Personal Training", category: "personal" },
  { id: "tutoring", icon: faChalkboardTeacher, label: "Tutoring", category: "personal" },
];

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const timeSlots = ["7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];

const schema = z.object({
  service: z.string().min(1, "Please select a service"),
  petName: z.string().optional(), petBreed: z.string().optional(), petAge: z.string().optional(), petNotes: z.string().optional(),
  clientNeeds: z.string().optional(), mobilityNotes: z.string().optional(), emergencyContact: z.string().optional(),
  subject: z.string().optional(), gradeLevel: z.string().optional(), goals: z.string().optional(),
  fitnessGoals: z.string().optional(), experience: z.string().optional(), prefLocation: z.string().optional(),
  frequency: z.string().min(1, "Select frequency"),
  selectedDays: z.array(z.string()).optional(),
  preferredTime: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
});

type FormData = z.infer<typeof schema>;

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { selectedDays: [], service: "", frequency: "one-time" } });
  const svc = watch("service");
  const freq = watch("frequency");
  const selDays = watch("selectedDays") || [];

  const isPet = ["dog-walking","pet-grooming","house-sitting"].includes(svc);
  const isSenior = svc === "senior-care";
  const isTutoring = svc === "tutoring";
  const isTraining = svc === "personal-training";

  const toggleDay = (d: string) => {
    const next = selDays.includes(d) ? selDays.filter(x => x !== d) : [...selDays, d];
    setValue("selectedDays", next);
  };

  const onSubmit = async (data: FormData) => {
    await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20"><div className="mx-auto max-w-lg px-4 text-center"><div className="w-20 h-20 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-6"><FontAwesomeIcon icon={faCheck} className="size-10" /></div><h1 className="text-3xl font-bold text-slate-900 mb-3">Booking Received!</h1><p className="text-slate-500 mb-6">We&apos;ll reach out within 2 hours to confirm your schedule.</p><a href="/"><Button className="bg-teal-600">Back Home</Button></a></div></section>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-12"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-3xl font-extrabold mb-2">Book a Service</h1><p className="text-teal-100">Fill out the form and we&apos;ll match you with the perfect caregiver.</p></div></section>
      <section className="py-10 bg-stone-50">
        <div className="mx-auto max-w-3xl px-4">
          {/* Step indicators */}
          <div className="flex justify-between mb-8">{steps.map((s,i)=>(<div key={s} className={`flex flex-col items-center gap-1 ${i<=step?'text-teal-600':'text-slate-300'}`}><div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i<step?'bg-teal-600 text-white':i===step?'bg-teal-600 text-white':'bg-slate-200'}`}>{i<step?'✓':i+1}</div><span className="text-xs hidden sm:block">{s}</span></div>))}</div>

          <Card className="glass border-0"><CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Step 0: Service */}
              {step === 0 && (<div className="animate-fade-in"><h2 className="text-xl font-bold text-slate-900 mb-4">What service do you need?</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceTypes.map(st => (<button key={st.id} type="button" onClick={() => { setValue("service", st.id); setStep(1); }} className={`p-4 rounded-xl border-2 text-left transition-all ${svc===st.id?'border-teal-500 bg-teal-50':'border-stone-200 hover:border-teal-300'}`}><FontAwesomeIcon icon={st.icon} className="size-5 text-teal-600 mb-2" /><div className="font-semibold text-slate-800">{st.label}</div><Badge variant="outline" className="mt-1 text-xs">{st.category==='pet'?'Pet Care':'Personal Care'}</Badge></button>))}
                </div>
              </div>)}

              {/* Step 1: Details */}
              {step === 1 && (<div className="animate-fade-in"><h2 className="text-xl font-bold text-slate-900 mb-4">Tell us more</h2>
                {isPet && (<div className="space-y-3"><Label>Pet Name</Label><Input {...register("petName")} placeholder="Buddy" /><div className="grid sm:grid-cols-2 gap-3"><div><Label>Breed</Label><Input {...register("petBreed")} placeholder="Golden Retriever" /></div><div><Label>Age</Label><Input {...register("petAge")} placeholder="3 years" /></div></div><Label>Medical / Behavioral Notes</Label><Textarea {...register("petNotes")} placeholder="Allergies, medications, temperament..." rows={2} /></div>)}
                {isSenior && (<div className="space-y-3"><Label>Client Needs</Label><Textarea {...register("clientNeeds")} placeholder="Describe the care needed..." rows={3} /><Label>Mobility Notes</Label><Input {...register("mobilityNotes")} placeholder="Walker, wheelchair, etc." /><Label>Emergency Contact</Label><Input {...register("emergencyContact")} placeholder="Name & phone" /></div>)}
                {isTutoring && (<div className="space-y-3"><Label>Subject(s)</Label><Input {...register("subject")} placeholder="Math, Science, etc." /><div className="grid sm:grid-cols-2 gap-3"><div><Label>Grade Level</Label><Input {...register("gradeLevel")} placeholder="5th grade" /></div></div><Label>Current Goals</Label><Textarea {...register("goals")} placeholder="What are you hoping to achieve?" rows={2} /></div>)}
                {isTraining && (<div className="space-y-3"><Label>Fitness Goals</Label><Textarea {...register("fitnessGoals")} placeholder="Weight loss, strength, mobility..." rows={2} /><Label>Experience Level</Label><Input {...register("experience")} placeholder="Beginner / Intermediate / Advanced" /><Label>Preferred Location</Label><Input {...register("prefLocation")} placeholder="Home / Gym / Outdoor" /></div>)}
              </div>)}

              {/* Step 2: Schedule */}
              {step === 2 && (<div className="animate-fade-in"><h2 className="text-xl font-bold text-slate-900 mb-4">When do you need care?</h2>
                <Label className="mb-2 block">Frequency</Label>
                <div className="flex gap-3 mb-6">{["one-time","recurring"].map(f => (<button key={f} type="button" onClick={() => setValue("frequency", f)} className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${freq===f?'border-teal-500 bg-teal-50 text-teal-700':'border-stone-200'}`}>{f==='one-time'?'One-Time':'Recurring'}</button>))}</div>
                {freq === "recurring" && (<div className="mb-6"><Label className="mb-2 block">Select Days</Label><div className="flex flex-wrap gap-2">{days.map(d => (<button key={d} type="button" onClick={() => toggleDay(d)} className={`px-3 py-1.5 rounded-lg border-2 text-sm font-medium transition-all ${selDays.includes(d)?'border-teal-500 bg-teal-50 text-teal-700':'border-stone-200'}`}>{d}</button>))}</div></div>)}
                <Label className="mb-2 block">Preferred Time</Label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">{timeSlots.map(t => (<button key={t} type="button" onClick={() => setValue("preferredTime", t)} className={`px-2 py-1.5 rounded-lg border-2 text-xs font-medium transition-all ${watch("preferredTime")===t?'border-teal-500 bg-teal-50 text-teal-700':'border-stone-200'}`}>{t}</button>))}</div>
              </div>)}

              {/* Step 3: Contact */}
              {step === 3 && (<div className="animate-fade-in"><h2 className="text-xl font-bold text-slate-900 mb-4">Where & who are we helping?</h2>
                <div className="space-y-3"><div><Label>Service Address</Label><Input {...register("address")} placeholder="123 Main St, City, State" /><p className="text-red-400 text-xs mt-1">{errors.address?.message}</p></div>
                  <div className="grid sm:grid-cols-2 gap-3"><div><Label>Your Name</Label><Input {...register("name")} placeholder="Jane Smith" /><p className="text-red-400 text-xs mt-1">{errors.name?.message}</p></div><div><Label>Phone</Label><Input {...register("phone")} placeholder="(555) 000-0000" /><p className="text-red-400 text-xs mt-1">{errors.phone?.message}</p></div></div>
                  <div><Label>Email</Label><Input {...register("email")} placeholder="jane@email.com" /><p className="text-red-400 text-xs mt-1">{errors.email?.message}</p></div>
                </div>
              </div>)}

              {/* Step 4: Review */}
              {step === 4 && (<div className="animate-fade-in"><h2 className="text-xl font-bold text-slate-900 mb-4">Review your booking</h2>
                <div className="space-y-2 text-sm"><div className="flex justify-between py-2 border-b"><span className="text-slate-500">Service</span><span className="font-semibold">{serviceTypes.find(s=>s.id===svc)?.label||svc}</span></div>
                  {watch("petName") && <div className="flex justify-between py-2 border-b"><span className="text-slate-500">Pet</span><span className="font-semibold">{watch("petName")} ({watch("petBreed")}, {watch("petAge")})</span></div>}
                  <div className="flex justify-between py-2 border-b"><span className="text-slate-500">Frequency</span><span className="font-semibold capitalize">{freq}{freq==='recurring'&&selDays.length?` (${selDays.join(', ')})`:''}{watch("preferredTime")?` at ${watch("preferredTime")}`:''}</span></div>
                  <div className="flex justify-between py-2 border-b"><span className="text-slate-500">Address</span><span className="font-semibold">{watch("address")}</span></div>
                  <div className="flex justify-between py-2 border-b"><span className="text-slate-500">Contact</span><span className="font-semibold">{watch("name")} · {watch("email")} · {watch("phone")}</span></div>
                </div>
              </div>)}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button type="button" variant="outline" onClick={() => setStep(s=>s-1)} disabled={step===0}><FontAwesomeIcon icon={faArrowLeft} className="mr-2 size-3" />Back</Button>
                {step < 4 ? <Button type="button" className="bg-teal-600 hover:bg-teal-700" onClick={() => { if(step===0&&!svc)return; setStep(s=>s+1); }}>Next <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-3" /></Button> :
                  <Button type="submit" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold"><FontAwesomeIcon icon={faCalendarCheck} className="mr-2 size-4" />Confirm Booking</Button>}
              </div>
            </form>
          </CardContent></Card>
        </div>
      </section>
    </>
  );
}
