import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Gallery" };

const photos = [
  { src: "/images/gallery/pet-1.svg", category: "pets", caption: "Happy pup after a walk" },
  { src: "/images/gallery/pet-2.svg", category: "pets", caption: "Grooming session" },
  { src: "/images/gallery/pet-3.svg", category: "pets", caption: "Playtime fun" },
  { src: "/images/gallery/pet-4.svg", category: "pets", caption: "Calm kitty care" },
  { src: "/images/gallery/care-1.svg", category: "care", caption: "Senior companion visit" },
  { src: "/images/gallery/care-2.svg", category: "care", caption: "Training session" },
  { src: "/images/gallery/care-3.svg", category: "care", caption: "Tutoring in action" },
  { src: "/images/gallery/care-4.svg", category: "care", caption: "Reading together" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 className="text-4xl font-extrabold mb-3">Gallery</h1><p className="text-teal-100 text-lg">Happy pets, happy people — moments from our care community.</p></div></section>
      <section className="py-16 bg-stone-50"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-3 mb-10">
          <Badge className="cursor-pointer bg-teal-100 text-teal-700 border-teal-200 px-4 py-2 font-semibold"><FontAwesomeIcon icon={faPaw} className="mr-1.5 size-3.5" />Pets</Badge>
          <Badge className="cursor-pointer bg-rose-100 text-rose-600 border-rose-200 px-4 py-2 font-semibold"><FontAwesomeIcon icon={faHeartPulse} className="mr-1.5 size-3.5" />People</Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map(p => (<div key={p.src} className="group relative overflow-hidden rounded-xl aspect-square"><img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"><p className="text-white text-sm font-medium">{p.caption}</p></div></div>))}
        </div>
      </div></section>
    </>
  );
}
