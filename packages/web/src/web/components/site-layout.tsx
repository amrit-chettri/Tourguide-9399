import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Mountain, Menu, X, Mail } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { siteConfig } from '../lib/site-config';

function Logo({ light = false }: { light?: boolean }) {
  return <Link to="/home" className={`logo ${light ? 'light' : ''}`} aria-label="True Guide Nepal home"><Mountain size={32} strokeWidth={1.5}/><span>True <span className="logo-thin">Guide Nepal</span></span></Link>;
}

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [location] = useLocation();
  return <header className="site-header" id="home"><div className="nav-wrap"><Logo/><nav aria-label="Main navigation" className={menu ? 'open' : ''}>
    <Link to="/home" aria-current={location === '/home' ? 'page' : undefined} onClick={() => setMenu(false)}>Explore Nepal</Link>
    <Link to="/guides" aria-current={location === '/guides' ? 'page' : undefined} onClick={() => setMenu(false)}>Find a guide</Link>
    <Link to="/plan" aria-current={location === '/plan' ? 'page' : undefined} onClick={() => setMenu(false)}>Plan a trip</Link>
    <Link to="/enquiry" aria-current={location === '/enquiry' ? 'page' : undefined} onClick={() => setMenu(false)} className="nav-contact">Make an enquiry <ArrowUpRight size={16}/></Link>
  </nav><button className="menu-button" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div></header>;
}

export function ContactSection() {
  const contacts = [
    { name: 'WhatsApp', subtitle: 'Let’s talk trekking', icon: FaWhatsapp, href: siteConfig.contacts.whatsapp || 'https://www.whatsapp.com/' },
    { name: 'Facebook', subtitle: 'Find us on Facebook', icon: FaFacebookF, href: siteConfig.contacts.facebook || 'https://www.facebook.com/' },
    { name: 'Instagram', subtitle: 'A little mountain inspiration', icon: FaInstagram, href: siteConfig.contacts.instagram || 'https://www.instagram.com/' },
    { name: 'Email', subtitle: 'Prices, routes & enquiries', icon: Mail, href: `mailto:${siteConfig.contacts.email}` },
  ];
  return <section className="contact-section" id="contact"><div className="container"><div className="contact-heading"><div><p className="eyebrow">WE’RE JUST A MESSAGE AWAY</p><h2>Every journey starts<br/>with a connection.</h2></div><p>Have a question or want to be listed as a guide?<br/>We’d love to hear from you.</p></div><div className="contact-grid">{contacts.map(({ name, subtitle, icon: Icon, href }) => <a key={name} href={href} target={name === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" className={`contact-channel contact-${name.toLowerCase()}`}><Icon size={25}/><div><h3>{name}</h3><p>{subtitle}</p></div><ArrowUpRight className="channel-arrow" size={19}/></a>)}</div></div></section>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-main"><Logo light/><p>Local hearts. Himalayan adventures.</p><span>© {new Date().getFullYear()} True Guide Nepal</span></div><div className="container footer-details"><div className="payment-marks"><span>We accept</span><span className="payment-visa" aria-label="Visa" role="img">VISA</span><span className="payment-mastercard" aria-label="Mastercard" role="img"><i/><i/><b>mastercard</b></span><span className="payment-amex" aria-label="American Express" role="img">AMERICAN<br/>EXPRESS</span><span className="payment-stripe" aria-label="Stripe" role="img">stripe</span></div><p></p><Link to="/enquiry" className="text-link">Ask about prices<ArrowUpRight size={15}/></Link></div></footer>;
}