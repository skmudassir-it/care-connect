import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPaw, faHeartPulse, faChalkboardTeacher, faDumbbell, faHouseChimney, faScissors } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Pricing" };

const plans = [
  { cat:"Pet Care", icon:faPaw, items:[{name:"Dog Walking (30min)",price:"$25/visit"},{name:"Dog Walking (60min)",price:"$38/visit"},{name:"Overnight Pet Sitting",price:"$85/night"},{name:"Mobile Grooming Basic",price:"$65/session"},{name:"Mobile Grooming Full",price:"$95/session"},{name:"House Sitting Drop-In",price:"$30/visit"},{name:"House Sitting Live-In",price:"$120/night"}]},
  { cat:"Personal Care", icon:faHeartPulse, items:[{name:"Senior Companion (4hr)",price:"$95/visit"},{name:"Senior Full Day (8hr)",price:"$175/day"},{name:"Senior Live-In Care",price:"$280/day"},{name:"Personal Training Single",price:"$75/session"},{name:"Training 4-Pack",price:"$260/mo"},{name:"Tutoring Single",price:"$55/hr"},{name:"Tutoring Weekly (4hr)",price:"$200/mo"}]},
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Transparent Pricing</h1><p className="text-teal-100 text-lg">No hidden fees. All caregivers are insured, background-checked, and certified.</p></div></section>
      <section className="py-16 bg-stone-50"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {plans.map(p => (<Card key={p.cat} className="glass border-0"><CardContent className="p-6 sm:p-8"><div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center"><FontAwesomeIcon icon={p.icon} className="size-5" /></div><h2 className="text-2xl font-bold text-slate-900">{p.cat}</h2></div><div className="space-y-2">{p.items.map(i=>(<div key={i.name} className="flex justify-between items-center py-2.5 border-b border-stone-100 last:border-0"><span className="text-slate-700">{i.name}</span><span className="font-bold text-teal-600 text-lg">{i.price}</span></div>))}</div></CardContent></Card>))}
        </div>
        <div className="text-center mt-10"><p className="text-slate-500 mb-4">Packages and subscriptions available for recurring services.</p><Link href="/booking"><Button size="lg" className="bg-teal-600 hover:bg-teal-700">Book Now</Button></Link></div>
      </div></section>
    </>
  );
}
