import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowDown, ArrowRight, ArrowUpRight, Compass, MapPin, Mountain, Phone, Users } from 'lucide-react';
import { SiteHeader, ContactSection, SiteFooter } from '../components/site-layout';
import { destinations } from '../lib/site-config';

export default function Home() {
  const [location] = useLocation();
  useEffect(() => {
    const section = location === '/home' ? 'home' : location.slice(1);
    document.getElementById(section)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    const titles: Record<string, string> = { '/home': 'Explore Nepal with a local', '/how-it-works': 'How it works', '/contact': 'Contact us' };
    document.title = `nepguide — ${titles[location] ?? 'Explore Nepal with a local'}`;
  }, [location]);
  return <>
    <SiteHeader/>
    <main>
      <section className="hero" aria-labelledby="hero-title"><img className="hero-image" src="/images/himalayan-sunrise.jpg" alt="Golden sunrise lighting the snow-covered Himalayan mountain peaks" fetchPriority="high"/><div className="hero-shade"/><div className="hero-content container"><div className="eyebrow hero-eyebrow"><span/>LOCAL PEOPLE. EXTRAORDINARY JOURNEYS.</div><h1 id="hero-title">Big mountains.<br/>A local by your side.</h1><p>Discover Nepal’s trails, valleys, and mountain communities.<br className="desktop-break"/> Your next adventure begins with the right local guide.</p><Link to="/guides" className="hero-button">Find a guide <ArrowUpRight size={19}/></Link><div className="hero-small"><span><MapPin size={14}/>Rooted in Nepal</span><span><Users size={15}/>Connect directly</span></div></div><div className="hero-bottom container"><span><span className="tiny-label">A LITTLE CLOSER TO THE HIMALAYAS</span>A Himalayan sunrise</span><button aria-label="Explore our trekking destinations" onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}><ArrowDown size={20}/></button></div></section>
      <div className="promise-bar"><div className="container"><span><Compass size={22}/>Local knowledge, personal journeys</span><span><Phone size={22}/>No middleman. Just a conversation.</span><span><Mountain size={22}/>Your trek, your pace</span></div></div>
      <section id="destinations" className="destinations-section container"><div className="section-heading"><div><p className="eyebrow">FIND YOUR NEXT JOURNEY</p><h2>Six destinations.<br/>Endless possibilities.</h2></div><p>From sunrise viewpoints to high mountain trails,<br/>find the landscape that speaks to you.</p></div>
        <div className="destinations-grid">{destinations.map((destination, index) => <Link to={`/destinations/${destination.slug}`} className="destination-card" key={destination.region} aria-label={`Explore ${destination.region}`}><div className="destination-image"><img src={destination.image} alt={`Mountain scenery around ${destination.region}, Nepal`} loading="lazy"/><span className="destination-number">0{index + 1}</span><span className="destination-image-arrow"><ArrowUpRight size={21}/></span></div><div className="destination-body"><p className="eyebrow">{destination.subtitle}</p><h3>{destination.region}</h3><p className="destination-description">{destination.description}</p><ul className="destination-highlights">{destination.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><span className="destination-link">Discover {destination.region}<ArrowUpRight size={18}/></span></div></Link>)}</div>
        <div className="destination-cta"><div><h3>Found your next adventure?</h3><p>Meet the people who can help you explore it.</p></div><Link to="/guides" className="browse-guides">Browse all 10 guides<ArrowRight size={18}/></Link></div>
      </section>
      <section id="how-it-works" className="how-section container"><div className="how-intro"><p className="eyebrow">LESS PLANNING. MORE EXPLORING.</p><h2>A great trek starts<br/>with a simple hello.</h2><p>No booking forms or complicated steps.<br/>Just you, your guide, and the trail ahead.</p></div><div className="steps"><div><span className="step-number">01</span><h3>Find your person</h3><p>Open our guide directory and browse by region, experience, and daily fee.</p></div><div><span className="step-number">02</span><h3>Say hello on WhatsApp</h3><p>Share your dates, your route, and what you have in mind.</p></div><div><span className="step-number">03</span><h3>Make a plan together</h3><p>Confirm availability, fees, and what’s included directly with your guide.</p></div></div></section>
      <ContactSection/>
    </main>
    <SiteFooter/>
  </>;
}