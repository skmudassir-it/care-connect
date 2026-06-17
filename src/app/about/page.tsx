import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShield, faEye } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">About CareConnect</h1><p className="text-teal-100 text-lg">Caring for pets and people since 2018 — with heart, integrity, and professionalism.</p></div></section>
      <section className="py-16 bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div><h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2><p className="text-slate-500 leading-relaxed mb-4">CareConnect was founded in 2018 by a registered nurse and a professional dog trainer who saw a gap in the market: families needed one trusted provider for both pet care and personal care services.</p><p className="text-slate-500 leading-relaxed">Today, we serve hundreds of families with a team of 30+ vetted, certified, and compassionate caregivers. Every team member undergoes rigorous background checks, certification verification, and ongoing training.</p></div>
          <img src="/images/about/about-hero.svg" alt="CareConnect team" className="rounded-2xl shadow-lg w-full object-cover aspect-video" />
        </div>
      </div></section>
      <section className="py-16 bg-stone-50"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {[{icon:faHeart,title:"Compassion First",desc:"We hire for empathy and character. Every caregiver genuinely loves what they do."},{icon:faShield,title:"Safety & Trust",desc:"Background checks, insurance, certifications — we leave nothing to chance."},{icon:faEye,title:"Transparency",desc:"Photo updates, detailed visit summaries, and open communication with every family."}].map(v=>(<div key={v.title} className="text-center p-6 glass rounded-xl"><div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 text-teal-600 mb-4"><FontAwesomeIcon icon={v.icon} className="size-6" /></div><h3 className="font-bold text-slate-900 mb-2">{v.title}</h3><p className="text-sm text-slate-500">{v.desc}</p></div>))}
        </div>
        <div className="text-center mt-12"><Link href="/booking"><Button size="lg" className="bg-teal-600 hover:bg-teal-700">Book a Service</Button></Link></div>
      </div></section>
    </>
  );
}
