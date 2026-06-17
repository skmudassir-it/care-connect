import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeartPulse, faChalkboardTeacher, faDumbbell, faHouseChimney, faScissors, faShield, faStar, faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "CareConnect — Pet & Personal Care Services" };

const services = [
  { icon: faPaw, title: "Dog Walking & Pet Sitting", desc: "Daily walks, feeding, playtime, and overnight sitting for your furry family.", href: "/services/dog-walking-pet-sitting", color: "bg-teal-100 text-teal-700" },
  { icon: faScissors, title: "Mobile Pet Grooming", desc: "Full-service grooming at your doorstep — bath, trim, nails, and ear cleaning.", href: "/services/mobile-pet-grooming", color: "bg-cyan-100 text-cyan-700" },
  { icon: faHouseChimney, title: "House Sitting", desc: "Peace of mind while you're away — plant care, mail, security checks.", href: "/services/house-sitting", color: "bg-purple-100 text-purple-700" },
  { icon: faHeartPulse, title: "Senior Care & Companion", desc: "Compassionate companionship, medication reminders, errands, and light housekeeping.", href: "/services/senior-care-companion", color: "bg-rose-100 text-rose-600" },
  { icon: faDumbbell, title: "Personal Training", desc: "Customized fitness plans — in-home, gym, or outdoor sessions.", href: "/services/personal-training", color: "bg-orange-100 text-orange-700" },
  { icon: faChalkboardTeacher, title: "Tutoring", desc: "One-on-one academic support across all subjects and grade levels.", href: "/services/tutoring", color: "bg-blue-100 text-blue-700" },
];

const testimonials = [
  { name: "Sarah M.", role: "Dog Mom of 2", text: "CareConnect has been a lifesaver! My pups adore their daily walks and I love the photo updates.", rating: 5 },
  { name: "Robert K.", role: "Son of Senior Client", text: "The companion care for my mother is exceptional. Kind, patient, and truly caring.", rating: 5 },
  { name: "Emily T.", role: "Parent of 3rd Grader", text: "Our tutor is fantastic — patient, knowledgeable, and my daughter's grades improved in weeks.", rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 text-white">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-bg.svg')] bg-cover bg-center opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36 sm:px-6 lg:px-8">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 bg-white/20 text-white border-white/20 text-sm px-4 py-1">Trusted Care Since 2018</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Caring for <span className="text-amber-300">Pets</span> & <span className="text-coral-300">People</span> — Right at Home
            </h1>
            <p className="text-lg sm:text-xl text-teal-100 mb-8 max-w-xl">Professional dog walking, pet grooming, senior care, tutoring, and personal training. Fully insured, background-checked, and compassionate.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/booking"><Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-base">Book a Service</Button></Link>
              <Link href="/services"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Our Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-wrap justify-center gap-6 sm:gap-10 text-sm text-slate-600">
          {["Background Checked", "Fully Insured", "Pet First Aid Certified", "CPR Trained", "5-Star Rated"].map(b => (
            <span key={b} className="inline-flex items-center gap-1.5"><FontAwesomeIcon icon={faShield} className="size-4 text-teal-500" />{b}</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-3 border-teal-200 text-teal-700">What We Offer</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Pet Care & Personal Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">From daily dog walks to senior companionship and everything in between — we bring professional care to your doorstep.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0,3).map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
          <div className="mt-4 text-center">
            <Badge className="mb-4 bg-rose-50 text-rose-600 border-rose-200 px-4 py-1.5 text-sm font-semibold">Personal Care & Learning</Badge>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(3).map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Families Trust CareConnect</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We treat every pet and person like family — with respect, reliability, and genuine care.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[{icon:faShield,title:"Vetted & Insured",desc:"Every caregiver passes rigorous background checks and is fully insured."},{icon:faStar,title:"5-Star Reviews",desc:"Hundreds of happy families across our service area."},{icon:faCheckCircle,title:"Personalized Care",desc:"Custom care plans tailored to your pet's or loved one's unique needs."},{icon:faHeartPulse,title:"Compassion First",desc:"We hire for empathy and character — not just qualifications."}].map(w => (
              <div key={w.title} className="text-center p-6 rounded-xl glass">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 text-teal-600 mb-4"><FontAwesomeIcon icon={w.icon} className="size-6" /></div>
                <h3 className="font-bold text-slate-900 mb-2">{w.title}</h3>
                <p className="text-sm text-slate-500">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map(t => (
              <Card key={t.name} className="glass border-0">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">{Array.from({length:t.rating}).map((_,i)=><FontAwesomeIcon key={i} icon={faStar} className="size-4 text-amber-400" />)}</div>
                  <p className="text-slate-600 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <div><p className="font-semibold text-slate-900">{t.name}</p><p className="text-sm text-slate-400">{t.role}</p></div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews"><Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50">Read All Reviews <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-500 text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-teal-100 mb-8 text-lg">Book a free consultation and let us create the perfect care plan for your family.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking"><Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold">Book Now</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Contact Us</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, desc, href, color }: any) {
  return (
    <Link href={href}>
      <Card className="glass border-0 hover:shadow-lg transition-shadow h-full group cursor-pointer">
        <CardContent className="p-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} mb-4 group-hover:scale-110 transition-transform`}>
            <FontAwesomeIcon icon={icon} className="size-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-teal-600 transition-colors">{title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
