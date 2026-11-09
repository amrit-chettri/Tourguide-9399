import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowDown, ArrowRight, ArrowUpRight, Compass, MapPin, Mountain, Phone, Users } from 'lucide-react';
import { SiteHeader, ContactSection, SiteFooter } from '../components/site-layout';
import { destinations } from '../lib/site-config';
import { durationText, tripDurations } from '../lib/trip-data';
import { useParallax } from '../hooks/use-parallax';
import { usePageSEO } from '../hooks/use-page-seo';

export default function Home() {
  const [location] = useLocation();
  const imageRef = useParallax();
  const [category, setCategory] = useState('All journeys');
  const categories = ['All journeys', 'Trekking', 'Culture', 'Wildlife', 'Lakes & villages'];
  const visible = destinations.filter(destination => category === 'All journeys' || tripDurations[destination.slug].category === category);
  const titles: Record<string, string> = {
    '/home': 'True Guide Nepal | Local Trekking Guides & Nepal Journeys',
    '/how-it-works': 'How It Works | True Guide Nepal',
    '/contact': 'Contact True Guide Nepal',
  };
  const descriptions: Record<string, string> = {
    '/home': 'Explore Nepal with local trekking guides. Discover Himalayan destinations, learn about your options, and plan a journey with True Guide Nepal.',
    '/how-it-works': 'Learn how to explore Nepal destinations, connect with local guides, and plan a trekking journey with True Guide Nepal.',
    '/contact': 'Contact True Guide Nepal to ask about trekking destinations, local guides, trip planning, and your Himalayan journey.',
  };
  usePageSEO(titles[location] ?? titles['/home'], descriptions[location] ?? descriptions['/home'], location);
  useEffect(() => {
    const section = location === '/home' ? 'home' : location.slice(1);
    document.getElementById(section)?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, [location]);
  return <>
    <SiteHeader/>
    <main>    
      <section className="hero" aria-labelledby="hero-title"><img ref={imageRef} className="hero-image" src="/images/trekker-hero.jpg" alt="A backpacker looking across a natural Himalayan mountain landscape in Nepal" fetchPriority="high"/><div className="hero-shade"/><div className="hero-content container"><div className="eyebrow hero-eyebrow">LOCAL PEOPLE. EXTRAORDINARY JOURNEYS.</div><h1 id="hero-title">Big mountains.<br/>A local by your side.</h1><p>From quiet villages to the high Himalayas,<br className="desktop-break"/> find a Nepal journey that feels like you.</p><div className="hero-actions"><Link to="/plan" className="hero-button">Plan your journey <ArrowUpRight size={19}/></Link><Link to="/guides" className="hero-secondary">Find a local guide<ArrowUpRight size={18}/></Link></div><div className="hero-small"><span><MapPin size={15}/>Kathmandu pickup</span><span><Users size={16}/>A personal conversation</span></div></div><div className="hero-bottom container"><span><span className="tiny-label">TAKE THE SCENIC ROUTE</span>There’s more to Nepal than the summit.</span><button aria-label="Explore our trekking destinations" onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}><ArrowDown size={20}/></button></div></section>
      <div className="promise-bar"><div className="container"><span><Compass size={22}/>Local knowledge, personal journeys</span><span><Phone size={22}/>No middleman. Just a conversation.</span><span><Mountain size={22}/>Your trek, your pace</span></div></div>
      <section id="destinations" className="destinations-section container"><div className="section-heading"><div><p className="eyebrow">FIND YOUR NEXT JOURNEY</p><h2>Seventeen destinations.<br/>Endless possibilities.</h2></div><p>Mountain trails. Living heritage. Lakeside days.<br/>Find the landscape that speaks to you.</p></div><div className="filter-row"><fieldset className="filters" aria-label="Filter destinations">{categories.map(item => <button key={item} aria-pressed={category === item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</fieldset><span className="guide-count" aria-live="polite">{visible.length} journeys to explore</span></div>
        <div className="destinations-grid">{visible.map(destination => <Link to={`/destinations/${destination.slug}`} className="destination-card" key={destination.region} aria-label={`Explore ${destination.region}`}><div className="destination-image"><img src={destination.image} alt={`${destination.region}, Nepal: ${destination.highlights.join(', ')}`} loading="lazy"/><span className="destination-number">{tripDurations[destination.slug].category}</span><span className="destination-image-arrow"><ArrowUpRight size={21}/></span></div><div className="destination-body"><p className="eyebrow">{destination.subtitle}</p><h3>{destination.region}</h3><span className="duration-badge">{durationText(destination.slug)}<small> · Kathmandu return</small></span><p className="destination-description">{destination.description}</p><ul className="destination-highlights">{destination.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><span className="destination-link">Discover {destination.region}<ArrowUpRight size={18}/></span></div></Link>)}</div>
        <div className="destination-cta"><div><p className="eyebrow">A LITTLE OF THIS. A LITTLE OF THAT.</p><h3>Your journey doesn’t have to stop at one place.</h3><p>Choose a single destination or build a multi-stop wish list in our trip planner.</p></div><Link to="/plan" className="browse-guides">Open the trip planner<ArrowRight size={18}/></Link></div>
      </section>
      <section id="how-it-works" className="how-section container"><div className="how-intro"><p className="eyebrow">LESS GUESSWORK. MORE EXPLORING.</p><h2>A great journey starts<br/>with a simple hello.</h2><p>No online bookings or complicated steps.<br/>Just a thoughtful plan and a conversation.</p><Link to="/enquiry" className="text-link">No hidden charges. Ask for a clear quote<ArrowUpRight size={17}/></Link></div><div className="steps"><div><span className="step-number">01</span><h3>Find your places</h3><p>Explore all 17 destinations, then choose one or more in the separate trip planner.</p></div><div><span className="step-number">02</span><h3>Start a conversation</h3><p>Share your plan by email or WhatsApp. Pickup starts in Kathmandu; estimates stay provisional.</p></div><div><span className="step-number">03</span><h3>Confirm the details</h3><p>Agree the route, availability and full price—including transport, permits, stays and exclusions.</p></div></div></section>
      <ContactSection/>
    </main>
    <SiteFooter/>
  </>;
}