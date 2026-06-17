import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faHeartPulse, faGraduationCap, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Our Team" };

const team = [
  { name:"Maria Gonzalez", role:"Lead Caregiver & Dog Walker", img:"/images/team/team-1.svg", badges:["Background Checked","Pet First Aid","CPR Certified","5 yrs exp"], bio:"Maria has been with CareConnect since day one. Her gentle approach wins over even the most anxious pets." },
  { name:"David Chen", role:"Senior Care Specialist", img:"/images/team/team-2.svg", badges:["Background Checked","CPR & First Aid","Dementia Trained","8 yrs exp"], bio:"David brings warmth and patience to every senior care visit. Former hospital caregiver with a heart for elder companionship." },
  { name:"Aisha Patel", role:"Tutor & Academic Coach", img:"/images/team/team-3.svg", badges:["Background Checked","MA Education","K-12 Certified","6 yrs exp"], bio:"Aisha is a certified teacher specializing in math and science. Her students average a full letter grade improvement." },
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Our Caregivers & Staff</h1><p className="text-teal-100 text-lg">Vetted, certified, compassionate — meet the people behind CareConnect.</p></div></section>
      <section className="py-16 bg-stone-50"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(m => (<div key={m.name} className="glass rounded-2xl p-6 text-center"><img src={m.img} alt={m.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-teal-100" /><h3 className="text-xl font-bold text-slate-900">{m.name}</h3><p className="text-teal-600 font-medium text-sm mb-3">{m.role}</p><p className="text-slate-500 text-sm mb-4">{m.bio}</p><div className="flex flex-wrap justify-center gap-1.5">{m.badges.map(b=><Badge key={b} variant="outline" className="text-xs border-teal-200 text-teal-700"><FontAwesomeIcon icon={faShield} className="size-3 mr-1" />{b}</Badge>)}</div></div>))}
        </div>
      </div></section>
    </>
  );
}
