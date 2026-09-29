'use client'

import { useState } from 'react'
import { ArrowUpRight, Clock3, MapPin, Menu, Phone, X } from 'lucide-react'

const servicesFR = [
  { title: 'Coiffure & Coupe', items: ['Coiffeur', 'Coiffage', 'Coupe Homme', 'Coupe Enfant', 'Mise en plis', 'Chignons', 'Tresses', 'Permanentes'] },
  { title: 'Coloration & Technique', items: ['Coloration', 'Balayage', 'Ombré Hair', 'Mèches'] },
  { title: 'Soins & Traitements', items: ['Traitements Kératine', 'Lissage', 'Soins Cheveux Bouclés', 'Shampooing & Soin'] },
  { title: 'Beauté & Maquillage', items: ['Coiffure Mariée', 'Services Maquillage', 'Maquillage Porcelaine'] },
]

const servicesEN = [
  { title: 'Styling & Haircut', items: ['Hairdresser', 'Hairstyling', "Men's Haircut", "Kids' Cuts", 'Blowouts', 'Updos', 'Braids', 'Perms'] },
  { title: 'Color & Technique', items: ['Hair Coloring', 'Balayage', 'Ombre Hair Color', 'Hair Highlighting'] },
  { title: 'Care & Treatments', items: ['Keratin Treatments', 'Hair Straightening', 'Curly Hair Care', 'Shampoo & Conditioning'] },
  { title: 'Beauty & Makeup', items: ['Bridal Hair', 'Makeup Services', 'Porcelain Makeup'] },
]

const gallery = [
  { src: '/balayge.jpg', label: 'Balayage' },
  { src: '/styling.jpg', label: 'Styling' },
  { src: '/makeup.jpg', label: 'Makeup' },
]

export default function Page() {
  const [language, setLanguage] = useState<'FR' | 'EN'>('FR')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const isFrench = language === 'FR'
  const activeServices = isFrench ? servicesFR : servicesEN

  return (
    <main className="min-h-screen overflow-hidden bg-[#0d0d0d] text-[#f4f3f0] selection:bg-[#9bb4c4] selection:text-[#0d0d0d]">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0d0d0d]/85 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="L'Urbain Coiffure home">
            <img src="/logo..jpg" alt="L'Urbain Coiffure logo" className="size-14 border border-white/20 object-cover" />
          </a>
          <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-white/60 md:flex">
            <a className="transition-colors hover:text-white" href="#services">{isFrench ? 'Services' : 'Services'}</a>
            <a className="transition-colors hover:text-white" href="#gallery">{isFrench ? 'Galerie' : 'Gallery'}</a>
            <a className="transition-colors hover:text-white" href="#contact">{isFrench ? 'Contact' : 'Contact'}</a>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => setLanguage(isFrench ? 'EN' : 'FR')} className="text-[11px] font-medium tracking-[0.2em] text-white/60 transition-colors hover:text-white" aria-label="Switch language">
              {language}<span className="mx-1 text-white/20">/</span>{isFrench ? 'EN' : 'FR'}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 text-xs uppercase tracking-[0.2em] md:hidden">
            <a href="#services" onClick={() => setMenuOpen(false)}>{isFrench ? 'Services' : 'Services'}</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>{isFrench ? 'Galerie' : 'Gallery'}</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>{isFrench ? 'Contact' : 'Contact'}</a>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="top" className="relative flex min-h-[92vh] items-end px-6 pb-16 pt-36 lg:px-10 lg:pb-24">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(74,107,130,0.25),transparent_40%),linear-gradient(110deg,#0d0d0d_35%,rgba(13,13,13,0.85)),url('/salon.jpg')] bg-cover bg-center opacity-90" 
          aria-hidden="true" 
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#9bb4c4]">
            <span className="h-px w-10 bg-[#9bb4c4]" /> Montréal · Québec
          </p>
          <h1 className="max-w-4xl font-serif text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] tracking-[-0.05em]">
            L'Urbain<br /><span className="text-white/45">Coiffure</span>
          </h1>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a href="#appointment" className="inline-flex items-center gap-4 bg-[#f4f3f0] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#0d0d0d] transition-transform hover:translate-x-1">
              {isFrench ? 'Prendre rendez-vous' : 'Book an appointment'} <ArrowUpRight size={16} />
            </a>
            <a href="tel:15143271001" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/70 hover:text-white">
              <Phone size={15} /> 514 327-1001
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="border-t border-b border-white/10 bg-[#121416] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center text-[#9bb4c4] gap-1 text-lg">
            ★ ★ ★ ★ ★
          </div>
          <p className="mt-6 font-serif text-lg leading-relaxed text-white/90 italic md:text-xl">
            {isFrench 
              ? "« La couleur et la coupe sont exactement ce que je voulais, et le résultat est encore plus beau que ce que j'avais imaginé. Le travail était incroyable et je suis tellement contente de mes cheveux ! Merci beaucoup de me faire sentir si belle. Je reviendrai définitivement ! »"
              : "“The color and cut are exactly what I wanted, and the result looks even better than I imagined. The work was amazing, and I’m so happy with my hair! Thank you so much for making me feel so beautiful. I’ll definitely be coming back!”"
            }
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-[#9bb4c4]">
            — Ash Prit
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-16 flex flex-col justify-between gap-6 border-t border-white/15 pt-5 md:flex-row">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#9bb4c4]">01 / {isFrench ? 'Expertise' : 'Expertise'}</span>
          <p className="max-w-md text-sm leading-7 text-white/55">
            {isFrench ? 'Des gestes précis, une écoute attentive et un résultat qui vous ressemble.' : 'Precise gestures, attentive listening, and a result that feels entirely yours.'}
          </p>
        </div>
        <div className="grid gap-0 md:grid-cols-2">
          {activeServices.map((service, index) => (
            <article key={service.title} className="border-b border-white/15 py-8 md:min-h-72 md:border-r md:px-8 md:first:pl-0 md:nth-[2n]:border-r-0 md:nth-[n+3]:border-b-0 md:nth-[n+3]:pt-12">
              <span className="text-xs text-white/35">0{index + 1}</span>
              <h2 className="mt-8 font-serif text-3xl tracking-tight">{service.title}</h2>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.12em] text-white/50">
                {service.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION (3 IMAGES) */}
      <section id="gallery" className="bg-[#151719] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between border-t border-white/15 pt-5">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9bb4c4]">02 / {isFrench ? 'Galerie' : 'Gallery'}</span>
            <span className="hidden text-xs text-white/40 md:block">{isFrench ? 'Une sélection de notre travail' : 'A selection of our work'}</span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:auto-rows-[320px]">
            {gallery.map(image => (
              <button key={image.src} onClick={() => setSelectedImage(image.src)} className="group relative overflow-hidden text-left h-72 sm:h-auto" aria-label={`View ${image.label}`}>
                <img src={image.src} alt={image.label} className="size-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <span className="absolute inset-x-4 bottom-4 text-xs uppercase tracking-[0.2em] opacity-0 transition group-hover:opacity-100">{image.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM SECTION */}
      <section id="appointment" className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-32">
        <div>
          <div className="border-t border-white/15 pt-5">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9bb4c4]">03 / {isFrench ? 'Votre moment' : 'Your moment'}</span>
          </div>
          <h2 className="mt-14 max-w-md font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            {isFrench ? 'Réservez votre moment.' : 'Reserve your moment.'}
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
            {isFrench ? 'Remplissez le formulaire et notre équipe vous contactera pour confirmer votre rendez-vous.' : 'Fill out the form and our team will contact you to confirm your appointment.'}
          </p>
        </div>
        <form action="https://api.web3forms.com/submit" method="POST" className="grid gap-5">
          <input type="hidden" name="access_key" value="3ca5e5e1-a73d-4872-89ca-c9e767339e72" />
          <input type="hidden" name="subject" value="New appointment request — L'Urbain Coiffure" />
          <label className="grid gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
            {isFrench ? 'Nom complet' : 'Full name'}
            <input required name="name" className="border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none transition focus:border-[#9bb4c4]" />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
              {isFrench ? 'Téléphone' : 'Phone'}
              <input required type="tel" name="phone" className="border-b border-white/20 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#9bb4c4]" />
            </label>
            <label className="grid gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
              {isFrench ? 'Service' : 'Service'}
              <select name="service" className="border-b border-white/20 bg-[#0d0d0d] px-0 py-3 text-sm outline-none focus:border-[#9bb4c4]">
                <option>{isFrench ? 'Balayage & Coloration' : 'Balayage & Color'}</option>
                <option>{isFrench ? 'Coupe & Coiffage' : 'Haircut & Styling'}</option>
                <option>{isFrench ? 'Soins & Kératine' : 'Care & Keratin'}</option>
                <option>{isFrench ? 'Maquillage & Mariage' : 'Makeup & Bridal'}</option>
              </select>
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
              {isFrench ? 'Date souhaitée' : 'Preferred date'}
              <input required type="date" name="date" className="border-b border-white/20 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#9bb4c4]" />
            </label>
            <label className="grid gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
              {isFrench ? 'Heure' : 'Time'}
              <input required type="time" name="time" className="border-b border-white/20 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#9bb4c4]" />
            </label>
          </div>
          <label className="grid gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
            {isFrench ? 'Notes (optionnel)' : 'Notes (optional)'}
            <textarea name="message" rows={3} className="resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#9bb4c4]" />
          </label>
          <button type="submit" className="mt-5 inline-flex w-fit items-center gap-4 bg-[#f4f3f0] px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#0d0d0d] hover:bg-[#9bb4c4]">
            {isFrench ? 'Envoyer la demande' : 'Send request'} <ArrowUpRight size={16} />
          </button>
        </form>
      </section>

      {/* CONTACT & LOCATION SECTION */}
      <section id="contact" className="border-t border-white/10 bg-[#151719] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <MapPin className="mb-5 text-[#9bb4c4]" size={20} />
            <p className="text-sm leading-7 text-white/70">5050 Boulevard Henri-Bourassa E<br />Montréal, QC H1G 2R9</p>
            <a href="https://www.google.com/maps/search/?api=1&query=5050+Boulevard+Henri-Bourassa+E+Montreal" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white hover:text-[#9bb4c4]">
              {isFrench ? 'Itinéraire' : 'Directions'} <ArrowUpRight size={14} />
            </a>
          </div>
          <div>
            <Clock3 className="mb-5 text-[#9bb4c4]" size={20} />
            <div className="grid gap-2 text-sm text-white/70">
              <p>{isFrench ? 'Lun — Mer' : 'Mon — Wed'} <span className="float-right">10h — 18h</span></p>
              <p>{isFrench ? 'Jeu — Ven' : 'Thu — Fri'} <span className="float-right">10h — 19h</span></p>
              <p>{isFrench ? 'Samedi' : 'Saturday'} <span className="float-right">9h — 17h</span></p>
              <p className="text-white/35">{isFrench ? 'Dimanche' : 'Sunday'} <span className="float-right">{isFrench ? 'Fermé' : 'Closed'}</span></p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div>
              <Phone className="mb-5 text-[#9bb4c4]" size={20} />
              <a href="tel:15143271001" className="text-lg hover:text-[#9bb4c4]">+1 514 327 1001</a>
            </div>
            <div className="flex gap-4 text-white/70">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-[#9bb4c4] transition-all hover:border-[#9bb4c4] hover:bg-white/10 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-[#9bb4c4] transition-all hover:border-[#9bb4c4] hover:bg-white/10 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto flex max-w-7xl justify-between px-6 py-8 text-[10px] uppercase tracking-[0.2em] text-white/35 lg:px-10">
        <span>© 2026 L'Urbain Coiffure</span>
        <span>Montréal, QC</span>
      </footer>

      {/* FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <div role="dialog" aria-modal="true" aria-label="Expanded gallery image" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6" onClick={() => setSelectedImage(null)}>
          <button className="absolute right-6 top-6 text-white hover:text-[#9bb4c4]" onClick={() => setSelectedImage(null)} aria-label="Close image">
            <X size={24} />
          </button>
          <img src={selectedImage} alt="Expanded salon work" className="max-h-[85vh] max-w-full object-contain rounded-md" />
        </div>
      )}
    </main>
  )
}
