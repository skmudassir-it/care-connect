import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";

type ServiceSlug = "dog-walking-pet-sitting" | "mobile-pet-grooming" | "house-sitting" | "senior-care-companion" | "personal-training" | "tutoring";

const services: Record<ServiceSlug, {
  title: string; category: string; accent: string;
  hero: string; desc: string;
  includes: string[];
  pricing: { name: string; price: string; features: string[] }[];
  faqs: { q: string; a: string }[];
}> = {
  "dog-walking-pet-sitting": { title: "Dog Walking & Pet Sitting", category: "Pet Care", accent: "teal",
    hero: "/images/services/dog-walking.svg", desc: "Daily dog walks, pet sitting visits, and overnight care — all in the comfort of your pet's own home. We follow your routine so your furry family stays happy and stress-free.",
    includes: ["30/45/60-min walks", "Feeding & fresh water", "Playtime & enrichment", "Medication administration", "Photo updates each visit", "Overnight sitting available", "Litter box / cage cleaning"],
    pricing: [{name:"Daily Walk (30min)",price:"$25/visit",features:["1 dog","Mon-Fri","Photo update"]},{name:"Extended Walk (60min)",price:"$38/visit",features:["Up to 2 dogs","Playtime included","Photo update"]},{name:"Overnight Sitting",price:"$85/night",features:["12-hr stay","Walks & feeding","Home secure check"]}],
    faqs: [{q:"Are you insured and bonded?",a:"Yes! All our pet caregivers are fully insured, bonded, and Pet First Aid certified."},{q:"Can you handle multiple pets?",a:"Absolutely. Our extended visits accommodate multi-pet households at no extra charge for the second pet."},{q:"Do you send updates?",a:"Yes! You'll receive photo updates and a visit summary after each walk or sitting session."}]},
  "mobile-pet-grooming": { title: "Mobile Pet Grooming", category: "Pet Care", accent: "cyan",
    hero: "/images/services/pet-grooming.svg", desc: "Full-service grooming at your doorstep. No stressful car rides or kennel stays — just a calm, professional grooming experience right outside your home.",
    includes: ["Bath & blow-dry", "Breed-specific haircut", "Nail trimming & filing", "Ear cleaning", "Teeth brushing", "De-shedding treatment", "Sanitary trim"],
    pricing: [{name:"Basic Groom",price:"$65/session",features:["Bath, brush, nails","Ear cleaning","Up to 30 lbs"]},{name:"Full Groom",price:"$95/session",features:["Haircut & style","All Basic features","Any size"]},{name:"Spa Package",price:"$130/session",features:["Full Groom +","Teeth brushing","De-shedding treatment"]}],
    faqs: [{q:"What do you need from me?",a:"Just access to an outdoor outlet and water spigot. Our mobile van is self-contained!"},{q:"How long does grooming take?",a:"Typically 60-90 minutes depending on breed, size, and coat condition."}]},
  "house-sitting": { title: "House Sitting", category: "Pet Care", accent: "purple",
    hero: "/images/services/house-sitting.svg", desc: "Live-in or drop-in house care while you travel. We'll keep your home secure, plants watered, mail collected, and can also care for your pets.",
    includes: ["Daily home check", "Mail & package collection", "Plant watering", "Trash take-out", "Security walk-through", "Pet care add-on available", "Emergency contact"],
    pricing: [{name:"Drop-In Visit",price:"$30/visit",features:["30-min home check","Mail/plants/trash","Photo confirmation"]},{name:"Live-In Sitting",price:"$120/night",features:["Overnight stay","Full home care","Includes basic pet care"]}],
    faqs: [{q:"Are you background checked?",a:"Yes, every house sitter undergoes a thorough background check and is fully insured."}]},
  "senior-care-companion": { title: "Senior Care & Companion", category: "Personal Care", accent: "rose",
    hero: "/images/services/senior-care.svg", desc: "Compassionate in-home companion care for seniors. We provide friendship, assistance with daily activities, medication reminders, and peace of mind for families.",
    includes: ["Companionship & conversation", "Medication reminders", "Light housekeeping", "Meal preparation", "Errands & transportation", "Mobility assistance", "Cognitive engagement"],
    pricing: [{name:"Companion Visit (4hr)",price:"$95/visit",features:["Companionship","Light housekeeping","Meal prep"]},{name:"Full Day Care (8hr)",price:"$175/day",features:["All Companion features","Errands/transportation","Medication reminders"]},{name:"Live-In Care",price:"$280/day",features:["24/7 companionship","Full assistance","Peace of mind"]}],
    faqs: [{q:"Are caregivers certified?",a:"Yes. All senior caregivers are CPR/First Aid certified, background-checked, and trained in elder care."},{q:"Can you help with dementia care?",a:"We have caregivers with specialized dementia and Alzheimer's training. Let us know your needs during booking."}]},
  "personal-training": { title: "Personal Training", category: "Personal Care", accent: "orange",
    hero: "/images/services/personal-training.svg", desc: "Certified personal trainers who come to you — at home, in your building gym, or outdoors. Customized fitness plans for all ages and fitness levels.",
    includes: ["Initial fitness assessment", "Custom workout plan", "Form correction & safety", "Progress tracking", "Nutritional guidance", "Flexible locations", "All equipment provided"],
    pricing: [{name:"Single Session",price:"$75/session",features:["60-min session","Custom workout","Form guidance"]},{name:"4-Pack",price:"$260/mo",features:["4 sessions/month","Fitness assessment","Progress tracking"]},{name:"12-Pack",price:"$720/mo",features:["12 sessions/month","Nutrition plan","Priority scheduling"]}],
    faqs: [{q:"Do I need equipment?",a:"No! We bring all necessary equipment — resistance bands, mats, weights — everything."},{q:"What fitness levels do you work with?",a:"All levels — from complete beginners to experienced athletes. Programs are fully customized."}]},
  "tutoring": { title: "Tutoring", category: "Personal Care", accent: "blue",
    hero: "/images/services/tutoring.svg", desc: "One-on-one academic tutoring for students of all ages. Licensed teachers and subject-matter experts help your child excel in any subject.",
    includes: ["K-12 all subjects", "College prep & SAT/ACT", "Homework help", "Study skills coaching", "Progress reports", "Flexible scheduling", "Online or in-person"],
    pricing: [{name:"Single Session",price:"$55/hr",features:["1-hr session","One subject","Homework help"]},{name:"Weekly (4 sessions)",price:"$200/mo",features:["4 x 1-hr sessions","Progress tracking","Custom study plan"]},{name:"Intensive (8 sessions)",price:"$380/mo",features:["8 x 1-hr sessions","Test prep focus","Priority scheduling"]}],
    faqs: [{q:"What subjects do you cover?",a:"Everything: math, science, English, history, foreign languages, computer science, and test prep."},{q:"Are tutors background-checked?",a:"Yes. All tutors are background-checked and many are credentialed teachers with classroom experience."}]},
};

export function generateStaticParams() {
  return Object.keys(services).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services[slug as ServiceSlug];
  if (!s) return { title: "Not Found" };
  return { title: s.title };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services[slug as ServiceSlug];
  if (!s) notFound();

  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-r ${s.accent==='teal'?'from-teal-600 to-teal-500':s.accent==='cyan'?'from-cyan-600 to-cyan-500':s.accent==='purple'?'from-purple-600 to-purple-500':s.accent==='rose'?'from-rose-500 to-rose-400':s.accent==='orange'?'from-orange-500 to-orange-400':'from-blue-600 to-blue-500'} text-white`}>
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{backgroundImage:`url(${s.hero})`}} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <Badge className="mb-3 bg-white/20 text-white border-white/20">{s.category}</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{s.title}</h1>
          <p className="text-white/80 text-lg max-w-xl">{s.desc}</p>
          <div className="mt-6"><Link href="/booking"><Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold"><FontAwesomeIcon icon={faCalendarCheck} className="mr-2 size-4" />Book This Service</Button></Link></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">What&apos;s Included</h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {s.includes.map(i => (<div key={i} className="flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="size-4 text-teal-500 mt-0.5 shrink-0" /><span className="text-slate-600">{i}</span></div>))}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">FAQ</h2>
              <div className="space-y-3">
                {s.faqs.map(f => (<details key={f.q} className="border border-stone-200 rounded-lg p-4 group"><summary className="font-medium text-slate-800 cursor-pointer list-none flex justify-between items-center"><span>{f.q}</span><span className="text-teal-500 group-open:hidden">+</span><span className="text-teal-500 hidden group-open:inline">−</span></summary><p className="mt-3 text-slate-500 text-sm leading-relaxed">{f.a}</p></details>))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing</h2>
              <div className="space-y-4">
                {s.pricing.map(p => (<Card key={p.name} className="glass border-0"><CardContent className="p-5"><h3 className="font-bold text-slate-900">{p.name}</h3><p className="text-2xl font-extrabold text-teal-600 my-1">{p.price}</p><ul className="mt-3 space-y-1">{p.features.map(f=><li key={f} className="text-sm text-slate-500 flex items-start gap-2"><FontAwesomeIcon icon={faCheckCircle} className="size-3 text-teal-500 mt-0.5 shrink-0" />{f}</li>)}</ul></CardContent></Card>))}
              </div>
              <div className="mt-6"><Link href="/booking"><Button className="w-full bg-teal-600 hover:bg-teal-700">Book Now</Button></Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
