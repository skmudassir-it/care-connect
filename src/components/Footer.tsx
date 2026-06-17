import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-3">CareConnect</h3>
            <p className="text-sm leading-relaxed mb-4">Professional pet & personal care services. Dog walking, pet grooming, senior care, tutoring, and personal training — we come to you with compassion and excellence.</p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} className="size-5 hover:text-teal-400 transition-colors" /></a>
              <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} className="size-5 hover:text-teal-400 transition-colors" /></a>
              <a href="#" aria-label="Yelp"><FontAwesomeIcon icon={faYelp} className="size-5 hover:text-teal-400 transition-colors" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Home','Services','Gallery','Pricing','Team','Reviews','About','FAQ','Contact'].map(l => (
                <Link key={l} href={`/${l.toLowerCase().replace(/\s+/g,'-') === 'home' ? '' : l.toLowerCase().replace(/\s+/g,'-')}`} className="text-sm hover:text-white transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Services</h4>
            <div className="flex flex-col gap-2">
              <Link href="/services/dog-walking-pet-sitting" className="text-sm hover:text-white transition-colors">Dog Walking & Pet Sitting</Link>
              <Link href="/services/mobile-pet-grooming" className="text-sm hover:text-white transition-colors">Mobile Pet Grooming</Link>
              <Link href="/services/house-sitting" className="text-sm hover:text-white transition-colors">House Sitting</Link>
              <Link href="/services/senior-care-companion" className="text-sm hover:text-white transition-colors">Senior Care</Link>
              <Link href="/services/personal-training" className="text-sm hover:text-white transition-colors">Personal Training</Link>
              <Link href="/services/tutoring" className="text-sm hover:text-white transition-colors">Tutoring</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faPhone} className="size-3.5 text-coral-400" style={{color:'#fb7185'}} />(555) 123-CARE</span>
              <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} className="size-3.5" style={{color:'#fb7185'}} />hello@careconnect.com</span>
              <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faLocationDot} className="size-3.5" style={{color:'#fb7185'}} />We Come To You</span>
              <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faClock} className="size-3.5" style={{color:'#fb7185'}} />Mon-Sat 7AM-8PM</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-700 text-center text-xs">© 2026 CareConnect. Background-Checked · Insured · Certified · Pet First Aid Trained.</div>
      </div>
    </footer>
  );
}
