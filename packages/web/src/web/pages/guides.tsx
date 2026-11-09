import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearch } from 'wouter';
import { ArrowLeft, Check, Compass, Mountain, X } from 'lucide-react';
import { SiteHeader, ContactSection, SiteFooter } from '../components/site-layout';
import { GuideCard } from '../components/guide-card';
import { guides } from '../lib/site-config';
import { usePageSEO } from '../hooks/use-page-seo';

export default function GuidesPage() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const regions = ['All regions', 'Everest', 'Annapurna', 'Langtang'];
  const requestedRegion = new URLSearchParams(search).get('region') ?? 'All regions';
  const region = regions.includes(requestedRegion) ? requestedRegion : 'All regions';
  const filtered = guides.filter(guide => region === 'All regions' || guide.region === region);
  const [notice, setNotice] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  usePageSEO(
    'Local Trekking Guides in Nepal | True Guide Nepal',
    'Meet Nepali trekking guides, explore their experience and daily fees, and connect directly for your Himalayan adventure.',
    '/guides',
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  useEffect(() => { if (notice) dialog.current?.showModal(); }, [notice]);
  return <>
    <SiteHeader/>
    <main className="guides-page">
      <section className="guide-page-intro"><div className="container"><Link to="/home" className="back-link"><ArrowLeft size={15}/>Back to exploring Nepal</Link><p className="eyebrow">GOOD COMPANY STARTS HERE</p><h1>Find your mountain person.</h1><p className="guide-page-description">Meet Nepali trekking guides, get to know their stories,<br className="desktop-break"/> and connect directly for your next adventure.</p><div className="guide-page-detail"><Mountain size={17}/><span>10 guides · 3 trekking regions · Direct contact</span></div></div></section>
      <section className="directory container" id="guides" aria-label="Trekking guide directory">
        <div className="filter-row"><fieldset className="filters" aria-label="Filter guides by trekking region">{regions.map(r => <button key={r} aria-pressed={region === r} className={region === r ? 'active' : ''} onClick={() => navigate(r === 'All regions' ? '/guides' : `/guides?region=${encodeURIComponent(r)}`)}>{r === 'All regions' && <Mountain size={15}/>} {r}</button>)}</fieldset><span className="guide-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'guide' : 'guides'} to explore</span></div>
        <div className="guide-grid">{filtered.map(guide => <GuideCard key={guide.id} guide={guide} onMissing={setNotice}/>)}</div>
      </section>
      <ContactSection/>
    </main>
    <SiteFooter/>
    <dialog ref={dialog} className="notice-dialog" aria-labelledby="notice-title" onClose={() => setNotice('')}><button className="dialog-close" aria-label="Close notice" onClick={() => dialog.current?.close()}><X size={20}/></button><div className="notice-icon"><Compass size={28}/></div><h2 id="notice-title">One more step before launch.</h2><p>{notice}</p><button className="whatsapp-button" onClick={() => dialog.current?.close()}><Check size={17}/>Got it</button></dialog>
  </>;
}