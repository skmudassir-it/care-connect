import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Reviews" };

const reviews = [
  { name:"Jennifer L.", role:"Dog Mom", text:"CareConnect has been walking our golden retriever for 2 years. Reliable, loving, and we get the cutest photo updates!", rating:5 },
  { name:"Michael R.", role:"Son of Client", text:"The senior care for my father has been outstanding. David is patient, kind, and genuinely cares. A true blessing.", rating:5 },
  { name:"Amanda K.", role:"Parent", text:"Aisha tutored our daughter through algebra and she went from a C to an A. Incredible progress and confidence boost!", rating:5 },
  { name:"Carlos V.", role:"Fitness Client", text:"Lost 25 pounds in 4 months with my trainer. The at-home sessions make it so convenient — no gym anxiety.", rating:5 },
  { name:"Priya S.", role:"Cat & Dog Owner", text:"Mobile grooming is a game changer. No more stressful vet trips — my anxious cat actually purrs during sessions.", rating:5 },
  { name:"Thomas W.", role:"Homeowner", text:"Used house sitting for a 2-week vacation. Came back to thriving plants, no issues, and a spotless home.", rating:5 },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Client Reviews</h1><p className="text-teal-100 text-lg">Hundreds of happy families trust CareConnect.</p></div></section>
      <section className="py-16 bg-stone-50"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map(r => (<Card key={r.name} className="glass border-0"><CardContent className="p-6"><div className="flex gap-1 mb-3">{Array.from({length:r.rating}).map((_,i)=><FontAwesomeIcon key={i} icon={faStar} className="size-4 text-amber-400"/>)}</div><p className="text-slate-600 mb-4 italic">&ldquo;{r.text}&rdquo;</p><div><p className="font-semibold text-slate-900">{r.name}</p><p className="text-sm text-slate-400">{r.role}</p></div></CardContent></Card>))}
      </div></div></section>
    </>
  );
}
