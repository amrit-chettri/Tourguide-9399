// Edit this file to publish your real guides and contact accounts.
import { extraDestinations } from './extended-destinations';
// Phone numbers: international format, e.g. +977 followed by the real number.
// Set sample to false only after replacing the sample profile with real details.
export type Guide = {
  id: number; name: string; initials: string; region: string; location: string;
  experience: number; dailyCost: number; currency: string; languages: string;
  description: string; image: string; phone: string; sample: boolean;
};

export const siteConfig = {
  name: 'True Guide Nepal',
  whatsappNumber: '+9779866449988',
  contacts: {
    whatsapp: 'https://wa.me/9779866449988',
    facebook: 'https://www.facebook.com/profile.php?id=61596417215395', 
    instagram: 'https://www.instagram.com/true_guide_nepal?rpxt=OThiOXpyYW1xa3Jr', 
    email: 'trueguidenepal@gmail.com',
  },
};

// Illustrative biographies only. Replace these with real guide biographies before launch.
export const guideBiographies: Record<number, string> = {
  1: 'Pasang is a Solukhumbu-based trekking guide with 12 years of experience in the Everest region. He enjoys sharing Khumbu village stories and taking a steady, unhurried approach to high-altitude trails.',
  2: 'Based in Pokhara, Bikram has spent 8 years guiding in the Annapurna region. His interests include forest walks, village culture, and helping trekkers find a comfortable rhythm on the trail.',
  3: 'Nima is a Rasuwa-based guide with 10 years of trekking experience in Langtang. He enjoys introducing visitors to Tamang culture, alpine valleys, and the quieter moments of mountain life.',
  4: 'Dawa is based in Namche Bazaar and has 15 years of experience guiding in the Everest region. He likes connecting mountain journeys with village visits and time to appreciate the Khumbu landscape.',
  5: 'Maya is a Pokhara-based guide with 7 years of experience around Annapurna. She enjoys sunrise walks, hillside villages, and creating a friendly atmosphere for trekkers exploring Nepal.',
  6: 'Tenzing is based in Dhunche and has 9 years of experience on Langtang trails. He enjoys valley walks toward Kyanjin Gompa and sharing the everyday traditions of the communities along the route.',
  7: 'Tenzing is a Solukhumbu-based guide with 11 years of experience in the Everest region. His interests include Gokyo’s lakes, scenic viewpoints, and shaping each walk around a trekker’s pace.',
  8: 'Suman is based in Kathmandu and has 6 years of trekking experience in Annapurna. He enjoys helping visitors plan approachable mountain journeys, from foothill walks to longer circuit itineraries.',
  9: 'Sonam is a Rasuwa-based guide with 8 years of experience in Langtang. He likes combining peaceful valley walks with cultural conversations and a closer look at the region’s landscapes.',
  10: 'Kiran is based in Kathmandu and has 10 years of experience guiding in the Everest region. He enjoys flexible itineraries, scenic rest stops, and helping trekkers make the most of each day.',
};

// Homepage operating areas. Edit descriptions and routes here as your coverage changes.
export type Destination = {
  region: string; slug: string; guideRegion?: string; subtitle: string;
  image: string; description: string; highlights: string[];
};
export const destinations: Destination[] = [
  { region: 'Everest', slug: 'everest', guideRegion: 'Everest', subtitle: 'THE KHUMBU', image: '/images/everest.jpg', description: 'Follow the trails of the Khumbu through Sherpa villages, mountain monasteries, and dramatic high-altitude scenery. Explore routes toward Everest Base Camp or the lakes of Gokyo.', highlights: ['Sherpa culture', 'High mountain trails', 'Gokyo lakes'] },
  { region: 'Annapurna', slug: 'annapurna', guideRegion: 'Annapurna', subtitle: 'BEYOND POKHARA', image: '/images/annapurna.jpg', description: 'From terraced hills and rhododendron forests to towering Himalayan peaks, Annapurna offers a rich variety of journeys. Discover village life, the Annapurna Circuit, or trails toward base camp.', highlights: ['Forest & village walks', 'Annapurna Circuit', 'Base camp trails'] },
  { region: 'Langtang', slug: 'langtang', guideRegion: 'Langtang', subtitle: 'VALLEYS & VILLAGE LIFE', image: '/images/langtang.jpg', description: 'Discover a quieter mountain journey through the Langtang Valley, where Tamang culture meets alpine scenery. Walk toward Kyanjin Gompa or explore routes around the lakes of Gosaikunda.', highlights: ['Tamang culture', 'Alpine valleys', 'Gosaikunda lakes'] },
  { region: 'Poon Hill', slug: 'poon-hill', guideRegion: 'Annapurna', subtitle: 'SUNRISE ABOVE THE CLOUDS', image: '/images/poon-hill-sunrise.jpg', description: 'Welcome the morning with sweeping views of Annapurna and Dhaulagiri. Walk through rhododendron forests and the villages around Ghorepani on a memorable foothill journey.', highlights: ['Sunrise panoramas', 'Ghorepani trails', 'Forest & village life'] },
  { region: 'Mardi Himal', slug: 'mardi-himal', guideRegion: 'Annapurna', subtitle: 'ALONG THE HIGH RIDGE', image: '/images/mardi-himal-ridge.jpg', description: 'Follow forest paths onto an open mountain ridge, with Machhapuchhre rising ahead. Mardi Himal brings close-up Himalayan views and a changing landscape above the Pokhara hills.', highlights: ['Ridge walks', 'Machhapuchhre views', 'Forest to alpine trails'] },
  { region: 'Manaslu', slug: 'manaslu', subtitle: 'THE MOUNTAIN OF THE SPIRIT', image: '/images/manaslu-mountain.jpg', description: 'Trace the Budhi Gandaki valley into mountain villages and dramatic high country. Discover Tibetan-influenced culture and the Manaslu Circuit, with careful planning for permits and altitude.', highlights: ['Mountain communities', 'Manaslu Circuit', 'High-pass landscapes'] },
  ...extraDestinations,
];

export const guides: Guide[] = [
  { id: 1, name: 'Pasang Sherpa', initials: 'PS', region: 'Everest', location: 'Solukhumbu, Nepal', experience: 12, dailyCost: 35, currency: 'USD', languages: 'English, Nepali, Sherpa', description: 'High passes, quiet trails, and the heart of the Khumbu. A companion for your Everest adventure.', image: '/images/everest.jpg', phone: '', sample: true },
  { id: 2, name: 'Bikram Gurung', initials: 'BG', region: 'Annapurna', location: 'Pokhara, Nepal', experience: 8, dailyCost: 30, currency: 'USD', languages: 'English, Nepali, Hindi', description: 'From rhododendron forests to the Annapurna Circuit. Discover the mountains at your own pace.', image: '/images/annapurna.jpg', phone: '', sample: true },
  { id: 3, name: 'Nima Tamang', initials: 'NT', region: 'Langtang', location: 'Rasuwa, Nepal', experience: 10, dailyCost: 32, currency: 'USD', languages: 'English, Nepali, Tamang', description: 'Explore alpine valleys, village life, and the beautiful trails of Langtang and Gosaikunda.', image: '/images/langtang.jpg', phone: '', sample: true },
  { id: 4, name: 'Dawa Sherpa', initials: 'DS', region: 'Everest', location: 'Namche Bazaar, Nepal', experience: 15, dailyCost: 40, currency: 'USD', languages: 'English, Nepali, Sherpa', description: 'Take the scenic route through the Khumbu, with time for mountain views and village conversations.', image: '/images/everest.jpg', phone: '', sample: true },
  { id: 5, name: 'Maya Gurung', initials: 'MG', region: 'Annapurna', location: 'Pokhara, Nepal', experience: 7, dailyCost: 30, currency: 'USD', languages: 'English, Nepali, Gurung', description: 'Enjoy forest paths, hillside villages, and sunrise walks on the trails around Annapurna.', image: '/images/annapurna.jpg', phone: '', sample: true },
  { id: 6, name: 'Tenzing Tamang', initials: 'PT', region: 'Langtang', location: 'Dhunche, Nepal', experience: 9, dailyCost: 32, currency: 'USD', languages: 'English, Nepali, Tamang', description: 'Follow the valley toward Kyanjin Gompa, taking in alpine scenery and local life along the way.', image: '/images/langtang.jpg', phone: '', sample: true },
  { id: 7, name: 'Tenzing Sherpa', initials: 'TS', region: 'Everest', location: 'Solukhumbu, Nepal', experience: 11, dailyCost: 36, currency: 'USD', languages: 'English, Nepali, Sherpa', description: 'Discover the lakes and mountain trails of Gokyo with a journey shaped around your interests.', image: '/images/hero.jpg', phone: '', sample: true },
  { id: 8, name: 'Suman Thapa', initials: 'ST', region: 'Annapurna', location: 'Kathmandu, Nepal', experience: 6, dailyCost: 28, currency: 'USD', languages: 'English, Nepali, Hindi', description: 'Plan a relaxed Himalayan escape, from shorter foothill walks to longer days on the circuit.', image: '/images/annapurna.jpg', phone: '', sample: true },
  { id: 9, name: 'Sonam Tamang', initials: 'ST', region: 'Langtang', location: 'Rasuwa, Nepal', experience: 8, dailyCost: 30, currency: 'USD', languages: 'English, Nepali, Tamang', description: 'Combine peaceful valley walks with cultural stops and a closer look at the Langtang landscape.', image: '/images/langtang.jpg', phone: '', sample: true },
  { id: 10, name: 'Kiran Rai', initials: 'KR', region: 'Everest', location: 'Kathmandu, Nepal', experience: 10, dailyCost: 34, currency: 'USD', languages: 'English, Nepali, Hindi', description: 'Explore the Everest region one step at a time, with a flexible itinerary and room to enjoy the views.', image: '/images/everest.jpg', phone: '', sample: true },
];