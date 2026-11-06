import { useEffect } from 'react';
import { Link, Redirect, useParams } from 'wouter';
import { ArrowLeft, ArrowUpRight, MapPin, Mountain, Compass } from 'lucide-react';
import { SiteHeader, ContactSection, SiteFooter } from '../components/site-layout';
import { destinations, guides } from '../lib/site-config';
import { destinationDetails } from '../lib/destination-details';

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = destinations.find(item => item.slug === slug);
  const details = destination ? destinationDetails[destination.region] : undefined;
  useEffect(() => {
    document.title = `nepguide — Explore ${destination?.region ?? 'Nepal'}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug, destination?.region]);
  if (!destination || !details) return <Redirect to="/home" replace/>;
  const count = guides.filter(guide => guide.region === destination.guideRegion).length;
  const guideLink = destination.guideRegion ? `/guides?region=${encodeURIComponent(destination.guideRegion)}` : '/contact';
  const guideLabel = count ? `Explore ${destination.guideRegion} guides` : 'Ask about a Manaslu trek';
  return <>
    <SiteHeader/>
    <main className="destination-page">
      <section className="destination-hero" aria-labelledby="destination-title">
        <img src={details.gallery[0].image} alt={details.gallery[0].caption} fetchPriority="high"/>
        <div className="destination-hero-shade"/>
        <div className="container destination-hero-content">
          <Link to="/home" className="back-link"><ArrowLeft size={16}/>All destinations</Link>
          <p className="eyebrow"><MapPin size={13}/>{destination.subtitle} · NEPAL</p>
          <h1 id="destination-title">{destination.region}</h1>
          <p className="destination-tagline">{details.tagline}</p>
          <Link to={guideLink} className="hero-button">{guideLabel}<ArrowUpRight size={19}/></Link>
        </div>
        <span className="destination-hero-caption">{details.gallery[0].caption}</span>
      </section>
      <section className="region-story container">
        <div className="region-story-intro"><p className="eyebrow">A CLOSER LOOK</p><h2>More than a place.{' '}<br/>A way to feel Nepal.</h2><p>{details.introduction}</p></div>
        <div className="region-story-copy">{details.story.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="region-feeling"><Compass size={22}/><span>{details.feeling}</span></div></div>
      </section>
      <section className="region-gallery-section container" aria-labelledby="gallery-title">
        <div className="region-section-title"><p className="eyebrow">WORTH THE JOURNEY</p><h2 id="gallery-title">A window into {destination.region}.</h2></div>
        <div className="region-gallery">{details.gallery.map((photo, index) => <figure key={photo.image}><div><img src={photo.image} alt={photo.caption} loading="lazy"/></div><figcaption><span>0{index + 1}</span>{photo.caption}</figcaption></figure>)}</div>
      </section>
      <section className="region-routes container" aria-labelledby="routes-title"><div className="region-section-title"><p className="eyebrow">CHOOSE YOUR OWN PATH</p><h2 id="routes-title">Journeys to talk about.</h2><p>These are route ideas, not fixed packages. Shape the details with your guide.</p></div><div className="region-routes-grid">{details.routes.map((route, index) => <article key={route.name}><span className="route-index">0{index + 1}</span><h3>{route.name}</h3><p>{route.description}</p></article>)}</div><p className="region-planning-note"><Mountain size={20}/><span>{details.planningNote ?? 'Plan for altitude, acclimatization, and changing mountain weather. Confirm current trail conditions, required permits, and a suitable itinerary with your guide before travelling.'}</span></p><a href={details.source} target="_blank" rel="noopener noreferrer" className="region-source">{details.sourceLabel ?? 'Region information from Nepal Tourism Board'}<ArrowUpRight size={14}/></a></section>
      <section className="region-guide-cta container"><div><p className="eyebrow">THE RIGHT PLACE. THE RIGHT PERSON.</p><h2>{count ? `See ${destination.region} with a local.` : 'Start planning your Manaslu journey.'}</h2><p>{count ? `Explore ${count} ${destination.guideRegion} guides in our directory. Confirm experience on your chosen route directly.` : 'Manaslu-specific guides are not yet listed. Get in touch to discuss your plans.'}</p></div><Link to={guideLink} className="browse-guides">{guideLabel}<ArrowUpRight size={19}/></Link></section>
      <ContactSection/>
    </main>
    <SiteFooter/>
  </>;
}