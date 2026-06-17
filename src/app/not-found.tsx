import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="text-8xl font-bold text-teal-100 mb-4">404</div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Page Not Found</h1>
        <p className="text-slate-400 mb-8">Looks like this page wandered off. Maybe it&apos;s out for a walk?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/"><Button><FontAwesomeIcon icon={faHouse} className="mr-2 size-4" />Back Home</Button></Link>
          <Link href="/contact"><Button variant="outline">Contact Us</Button></Link>
        </div>
      </div>
    </section>
  );
}
