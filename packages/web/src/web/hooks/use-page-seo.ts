import { useEffect } from 'react';

const siteOrigin = 'https://trueguidenepal.com';
const socialImage = `${siteOrigin}/og-image.png`;

function setMeta(name: string, value: string, attribute: 'name' | 'property') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.append(element);
  }
  element.content = value;
}

export function usePageSEO(title: string, description: string, path: string) {
  useEffect(() => {
    const canonicalUrl = new URL(path, siteOrigin).href;
    document.title = title;

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = canonicalUrl;

    setMeta('description', description, 'name');
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('og:image', socialImage, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('twitter:image', socialImage, 'name');
  }, [title, description, path]);
}
