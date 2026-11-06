import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Mountain, Menu, X, Mail } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { siteConfig } from '../lib/site-config';

function Logo({ light = false }: { light?: boolean }) {
  return <Link to="/home" className={`logo ${light ? 'light' : ''}`} aria-label="nepguide home"><Mountain size={32} strokeWidth={1.5}/><span>nep<span className="logo-thin">guide</span><i>.</i></span></Link>;
}

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [location] = useLocation();
  return <header className="site-header" id="home"><div className="nav-wrap"><Logo/><nav aria-label="Main navigation" className={menu ? 'open' : ''}>
    <Link to="/home" aria-current={location === '/home' ? 'page' : undefined} onClick={() => setMenu(false)}>Explore Nepal</Link>
    <Link to="/guides" aria-current={location === '/guides' ? 'page' : undefined} onClick={() => setMenu(false)}>Find a guide</Link>
    <Link to="/how-it-works" onClick={() => setMenu(false)}>How it works</Link>
    <Link to="/contact" onClick={() => setMenu(false)} className="nav-contact">Get in touch <ArrowUpRight size={16}/></Link>
  </nav><button className="menu-button" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div></header>;
}

export function ContactSection() {
  const contacts = [
    { name: 'WhatsApp', subtitle: 'Let’s talk trekking', icon: FaWhatsapp, href: siteConfig.contacts.whatsapp || 'https://www.whatsapp.com/' },
    { name: 'Facebook', subtitle: 'Find us on Facebook', icon: FaFacebookF, href: siteConfig.contacts.facebook || 'https://www.facebook.com/' },
    { name: 'Instagram', subtitle: 'A little mountain inspiration', icon: FaInstagram, href: siteConfig.contacts.instagram || 'https://www.instagram.com/' },
    { name: 'Email', subtitle: 'Drop us a line', icon: Mail, href: `mailto:${siteConfig.contacts.email}` },
  ];
  return <section className="contact-section" id="contact"><div className="container"><div className="contact-heading"><div><p className="eyebrow">WE’RE JUST A MESSAGE AWAY</p><h2>Every journey starts<br/>with a connection.</h2></div><p>Have a question or want to be listed as a guide?<br/>We’d love to hear from you.</p></div><div className="contact-grid">{contacts.map(({ name, subtitle, icon: Icon, href }) => <a key={name} href={href} target={name === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" className="contact-channel"><Icon size={25}/><div><h3>{name}</h3><p>{subtitle}</p></div><ArrowUpRight className="channel-arrow" size={19}/></a>)}</div></div></section>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container"><Logo light/><p>Local hearts. Himalayan adventures.</p><span>© {new Date().getFullYear()} nepguide</span></div></footer>;
}