import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {q:"Are your caregivers background checked?",a:"Yes. Every CareConnect caregiver undergoes a comprehensive background check, reference verification, and certification validation before their first visit."},
  {q:"Are you insured?",a:"Absolutely. We carry full liability insurance and bonding for all services — pet care, senior care, tutoring, and personal training."},
  {q:"How do I book a service?",a:"Use our online booking form, call us at (555) 123-CARE, or email hello@careconnect.com. We'll match you with the perfect caregiver within 24 hours."},
  {q:"Can I meet my caregiver before the first visit?",a:"Yes! We encourage a free meet-and-greet so you and your pet or loved one feel completely comfortable."},
  {q:"What if I need to cancel?",a:"We have a flexible cancellation policy — just give us 24 hours notice and there's no charge."},
  {q:"Do you offer recurring scheduling?",a:"Yes! For dog walking, senior care, and tutoring, you can set up a recurring weekly schedule (e.g., Mon/Wed/Fri at 3pm)."},
  {q:"What areas do you serve?",a:"We currently serve the greater metro area within a 25-mile radius. Contact us to confirm coverage for your address."},
  {q:"Can you handle pets with special needs?",a:"Yes. Let us know about medications, mobility issues, or behavioral concerns during booking and we'll match you with an experienced caregiver."},
  {q:"Do tutors work with special education students?",a:"Absolutely. Several of our tutors have special education training and experience with IEPs and 504 plans."},
  {q:"What COVID/safety protocols do you follow?",a:"All caregivers follow current CDC guidelines. Masks, hand sanitizer, and health screening are standard. We adapt to each family's comfort level."},
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Frequently Asked Questions</h1><p className="text-teal-100 text-lg">Everything you need to know about CareConnect.</p></div></section>
      <section className="py-16 bg-stone-50"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-3">
        {faqs.map(f=>(<details key={f.q} className="bg-white border border-stone-200 rounded-lg p-4 group"><summary className="font-medium text-slate-800 cursor-pointer list-none flex justify-between items-center"><span>{f.q}</span><span className="text-teal-500 text-xl group-open:hidden">+</span><span className="text-teal-500 text-xl hidden group-open:inline">−</span></summary><p className="mt-3 text-slate-500 text-sm leading-relaxed pl-1">{f.a}</p></details>))}
      </div></section>
    </>
  );
}
