import { MapPin, Footprints, Globe } from 'lucide-react';
import { guideBiographies, type Guide } from '../lib/site-config';

export function GuideCard({ guide }: { guide: Guide; onMissing: (message: string) => void }) {
  return <article className="guide-card">
    <div className="card-photo"><img src={guide.image} alt={`${guide.region} mountain landscape, not a guide portrait`} loading="lazy"/><span className="region-label"><MapPin size={12}/>{guide.region} region</span>{guide.sample && <span className="sample-label"></span>}</div>
    <div className="card-body">
      <div className="guide-heading"><div><h3>{guide.name}</h3><p className="location"><MapPin size={12}/>{guide.location}</p></div></div>
      <div className="guide-bio"><h4>ABOUT {guide.name.split(' ')[0].toUpperCase()}</h4><p className="guide-description">{guideBiographies[guide.id] ?? guide.description}</p></div>
      <div className="guide-stats"><div><span>TREKKING EXPERIENCE</span><strong><Footprints size={16}/>{guide.experience} years</strong></div><div><span>GUIDE FEE / DAY</span><strong>${guide.dailyCost}<small>{guide.currency}</small></strong></div></div>
      <p className="languages"><Globe size={13}/>{guide.languages}</p>
      {/* {guide.phone ? <a className="phone-link" href={`tel:${guide.phone}`}><Phone size={14}/>{guide.phone}</a> : <button className="phone-link unset" onClick={() => onMissing('This sample guide does not have a phone number yet. Add a real number in site-config.ts to enable calls.')}><Phone size={14}/></button>} */}
    </div>
  </article>;
}