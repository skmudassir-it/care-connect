import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Contact Us</h1><p className="text-teal-100 text-lg">We&apos;d love to hear from you. Reach out anytime.</p></div></section>
      <section className="py-16 bg-stone-50"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-6">
            {[{icon:faPhone,label:"Phone",val:"(555) 123-CARE"},{icon:faEnvelope,label:"Email",val:"hello@careconnect.com"},{icon:faLocationDot,label:"Service Area",val:"25-mile radius — We come to you!"},{icon:faClock,label:"Hours",val:"Mon-Sat 7AM-8PM | Sun by appt"}].map(c=>(<div key={c.label} className="flex items-start gap-3"><div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0"><FontAwesomeIcon icon={c.icon} className="size-4" /></div><div><h3 className="font-semibold text-slate-900 text-sm">{c.label}</h3><p className="text-slate-500 text-sm">{c.val}</p></div></div>))}
          </div>
          <div className="lg:col-span-2 glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            <form action="/api/contact" method="POST" className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4"><div><Label>Name</Label><Input name="name" placeholder="Your name" required /></div><div><Label>Email</Label><Input name="email" type="email" placeholder="you@email.com" required /></div></div>
              <div><Label>Phone</Label><Input name="phone" placeholder="(555) 000-0000" /></div>
              <div><Label>Message</Label><Textarea name="message" placeholder="How can we help?" rows={4} required /></div>
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">Send Message</Button>
            </form>
          </div>
        </div>
      </div></section>
    </>
  );
}
