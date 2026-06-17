'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Book Now' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/team', label: 'Our Team' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-teal-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo.svg" alt="CareConnect" className="h-9 w-9" />
          <span className="text-xl font-bold text-teal-600">CareConnect</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${pathname === l.href ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:text-teal-600 hover:bg-teal-50'}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/booking"><Button size="sm" className="hidden sm:inline-flex bg-teal-600 hover:bg-teal-700"><FontAwesomeIcon icon={faCalendarCheck} className="mr-1.5 size-3.5" />Book Now</Button></Link>
          <a href="tel:+1555123CARE"><Button size="sm" className="hidden sm:inline-flex bg-amber-500 hover:bg-amber-600 text-slate-900"><FontAwesomeIcon icon={faPhone} className="mr-1.5 size-3.5" />Call</Button></a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden">
              <Button variant="ghost" size="icon"><FontAwesomeIcon icon={faBars} className="size-5" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <nav className="flex flex-col gap-1">
                {links.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${pathname === l.href ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-teal-50'}`}>
                    {l.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Link href="/booking"><Button className="bg-teal-600 hover:bg-teal-700" onClick={() => setOpen(false)}>Book Now</Button></Link>
                  <a href="tel:+1555123CARE"><Button variant="outline">Call (555) 123-CARE</Button></a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
