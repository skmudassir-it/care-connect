import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeartPulse, faChalkboardTeacher, faDumbbell, faHouseChimney, faScissors, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Our Services" };

const petServices = [
  { icon: faPaw, title: "Dog Walking & Pet Sitting", desc: "Daily walks, feeding, playtime, overnight sitting. Your pets stay happy in their own home.", href: "/services/dog-walking-pet-sitting", color: "bg-teal-100 text-teal-700" },
  { icon: faScissors, title: "Mobile Pet Grooming", desc: "Full grooming at your doorstep — bath, haircut, nail trim, ear cleaning, and more.", href: "/services/mobile-pet-grooming", color: "bg-cyan-100 text-cyan-700" },
  { icon: faHouseChimney, title: "House Sitting", desc: "Live-in or drop-in house care while you travel — plants, mail, security, and pet add-ons.", href: "/services/house-sitting", color: "bg-purple-100 text-purple-700" },
];
const personalServices = [
  { icon: faHeartPulse, title: "Senior Care & Companion", desc: "Compassionate companionship, medication reminders, light housekeeping, errands, transportation.", href: "/services/senior-care-companion", color: "bg-rose-100 text-rose-600" },
  { icon: faDumbbell, title: "Personal Training", desc: "Custom fitness — weight loss, strength, mobility. In-home, gym, or outdoor sessions.", href: "/services/personal-training", color: "bg-orange-100 text-orange-700" },
  { icon: faChalkboardTeacher, title: "Tutoring", desc: "One-on-one academic support — K-12, college prep, test prep, all subjects.", href: "/services/tutoring", color: "bg-blue-100 text-blue-700" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Our Services</h1><p className="text-teal-100 text-lg max-w-xl mx-auto">Professional care for pets and people — delivered with compassion to your doorstep.</p></div>
      </section>
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10"><Badge className="mb-2 bg-teal-100 text-teal-700 border-teal-200 px-4 py-1 font-semibold"><FontAwesomeIcon icon={faPaw} className="mr-1.5 size-3.5" />Pet Care</Badge></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">{petServices.map(s => <ServiceCard key={s.title} {...s} />)}</div>
          <div className="mb-10"><Badge className="mb-2 bg-rose-100 text-rose-600 border-rose-200 px-4 py-1 font-semibold"><FontAwesomeIcon icon={faHeartPulse} className="mr-1.5 size-3.5" />Personal Care & Learning</Badge></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{personalServices.map(s => <ServiceCard key={s.title} {...s} />)}</div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, desc, href, color }: any) {
  return (
    <Link href={href}><Card className="glass border-0 hover:shadow-lg transition-shadow h-full group"><CardContent className="p-6"><div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} mb-4 group-hover:scale-110 transition-transform`}><FontAwesomeIcon icon={icon} className="size-5" /></div><h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-teal-600 transition-colors">{title}</h3><p className="text-sm text-slate-500 leading-relaxed mb-3">{desc}</p><span className="text-teal-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <FontAwesomeIcon icon={faArrowRight} className="size-3" /></span></CardContent></Card></Link>
  );
}
