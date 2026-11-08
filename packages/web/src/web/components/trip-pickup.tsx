import { useId, useState } from 'react';
import { Link } from 'wouter';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowUpRight, MapPin, Clock, ShieldCheck } from 'lucide-react';
import type { Destination } from '../lib/site-config';
import { businessWhatsApp } from '../lib/contact-links';
import { durationText, tripDurations } from '../lib/trip-data';

export function TripPickup({ destination }: { destination: Destination }) {
  const id = useId();
  const [pickup, setPickup] = useState('Kathmandu');
  const duration = tripDurations[destination.slug];
  const message = `Hi True Guide Nepal, I would like to enquire about ${destination.region}.\nPickup: ${pickup}\nEstimated trip: ${durationText(destination.slug)} (Kathmandu return journey).\nPlan: ${duration.itinerary}\nPlease confirm availability, route, total price, inclusions/exclusions and pickup arrangements. I understand this is a provisional estimate, not a booking.`;
  return <section className="pickup-section container" aria-labelledby={`${id}-title`}>
    <div><p className="eyebrow">YOUR JOURNEY STARTS HERE</p><h2 id={`${id}-title`}>Let’s make it yours.</h2><p className="pickup-description">Choose your pickup location and talk to us directly.<br/>The route, timing and price are confirmed together.</p><span className="honest-quote"><ShieldCheck size={18}/>No hidden charges. Clear inclusions before you confirm.</span></div>
    <div className="pickup-panel"><div className="pickup-duration"><Clock size={19}/><strong>{durationText(destination.slug)}</strong><span>Estimated from Kathmandu</span></div><p>{duration.itinerary}</p><label htmlFor={`${id}-pickup`}><MapPin size={16}/>Pickup location</label><select id={`${id}-pickup`} value={pickup} onChange={event => setPickup(event.target.value)}><option value="Kathmandu">Kathmandu</option></select><a href={businessWhatsApp(message)} target="_blank" rel="noopener noreferrer" className="action-button whatsapp-action"><FaWhatsapp size={20}/>Enquire on WhatsApp<ArrowUpRight size={17}/></a><small>Opens WhatsApp with your details. You review and send.</small><Link to={`/plan?destinations=${destination.slug}`} className="text-link">Prefer a multi-destination plan?<ArrowUpRight size={15}/></Link></div>
  </section>;
}