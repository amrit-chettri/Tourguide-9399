export type TripDuration = { min: number; max: number; itinerary: string; source: string; category: 'Trekking' | 'Culture' | 'Wildlife' | 'Lakes & villages' };
export type PackageTier = 'best' | 'luxury';
export type TransportOption = 'Private taxi' | 'Tourist bus' | 'Domestic flight';
export type AccommodationOption = 'Comfort hotels' | 'Best available hotels';

export type DestinationPackage = {
  tier: PackageTier;
  name: string;
  priceMin: number;
  priceMax: number;
  description: string;
  inclusions: string[];
};

export function transportPriceMultiplier(transport: TransportOption) {
  if (transport === 'Tourist bus') return 0.82;
  if (transport === 'Domestic flight') return 1.28;
  return 1;
}

export function accommodationPriceMultiplier(accommodation: AccommodationOption) {
  return accommodation === 'Best available hotels' ? 1.32 : 1;
}

// Planning ranges, not schedules. Each journey starts and finishes in Kathmandu.
export const tripDurations: Record<string, TripDuration> = {
  everest: { min: 14, max: 18, itinerary: 'Everest Base Camp journey, including flight transfers and acclimatization. Gokyo/Three Passes needs a separate estimate.', source: 'https://www.acethehimalaya.com/trip/everest-base-camp-trek/', category: 'Trekking' },
  annapurna: { min: 10, max: 14, itinerary: 'Annapurna Base Camp via Pokhara. Longer Circuit or combined routes require a revised estimate.', source: 'https://www.nepalhikingteam.com/package/annapurna-base-camp-trek', category: 'Trekking' },
  langtang: { min: 9, max: 12, itinerary: 'Langtang Valley and Kyanjin Gompa with road transfers. Gosaikunda extensions take longer.', source: 'https://www.nepalhikingteam.com/package/langtang-valley-trek', category: 'Trekking' },
  'poon-hill': { min: 6, max: 8, itinerary: 'Ghorepani–Poon Hill trek with Kathmandu–Pokhara transfers.', source: 'https://destinationhimalayatreks.com/trip/poon-hill-trek', category: 'Trekking' },
  'mardi-himal': { min: 7, max: 9, itinerary: 'Mardi Himal ridge trek with Pokhara transfers and gradual ascent.', source: 'https://www.havenholidaysnepal.com/trips/mardi-himal-trek-7-days', category: 'Trekking' },
  manaslu: { min: 14, max: 18, itinerary: 'Manaslu Circuit with permit preparation, road travel, acclimatization and Larkya La crossing.', source: 'https://www.trekcurator.com/manaslu-circuit-trek', category: 'Trekking' },
  kathmandu: { min: 2, max: 3, itinerary: 'Kathmandu Valley heritage visits and local transfers; no mountain trekking.', source: 'https://ntb.gov.np/kathmandu', category: 'Culture' },
  chitwan: { min: 4, max: 5, itinerary: 'Road travel to/from Kathmandu and two to three days for guided nature activities.', source: 'https://www.travellocal.com/en/nepal/tours/t/kathmandu-chitwan-pokhara-tour', category: 'Wildlife' },
  pokhara: { min: 4, max: 5, itinerary: 'Kathmandu–Pokhara return travel, lake time and local viewpoints. Trekking is separate.', source: 'https://www.travellocal.com/en/nepal/tours/t/kathmandu-chitwan-pokhara-tour', category: 'Lakes & villages' },
  sikles: { min: 5, max: 7, itinerary: 'Village visit and walking around Sikles via Pokhara; allow the upper range for a Kapuche extension.', source: 'https://www.mountmania.com/sikles-trek', category: 'Lakes & villages' },
  'upper-mustang': { min: 14, max: 18, itinerary: 'Classic walking journey to Lo Manthang via Pokhara/Jomsom, including access travel and permit preparation.', source: 'https://www.magicalnepal.com/trip/upper-mustang-trek/', category: 'Trekking' },
  'limi-valley': { min: 20, max: 24, itinerary: 'Remote Humla/Limi walking expedition with Nepalgunj/Simikot flight access and preparation.', source: 'https://www.kimkim.com/c/limi-valley-trek-18-days', category: 'Trekking' },
  'nar-phu': { min: 12, max: 16, itinerary: 'Nar and Phu valley trek with road access, permits and acclimatization; pass options depend on conditions.', source: 'https://www.visithimalayastrek.com/nar-phu-valley-trek', category: 'Trekking' },
  rara: { min: 7, max: 9, itinerary: 'Rara Lake road journey with local walks and return travel. Fly-in or extended trekking routes differ.', source: 'https://www.nepalhighlandtreks.com/rara-lake-jeep-tour', category: 'Lakes & villages' },
  'tsum-valley': { min: 14, max: 18, itinerary: 'Tsum Valley trek with road access, preparation and time around the upper monasteries. Manaslu Circuit is not included.', source: 'https://www.nepalhikingteam.com/package/tsum-valley-trek', category: 'Trekking' },
  'upper-dolpo': { min: 26, max: 30, itinerary: 'Remote Upper Dolpo walking expedition via Nepalgunj/Juphal, including camping logistics and acclimatization.', source: 'https://www.visithimalayastrek.com/upper-dolpo-trek', category: 'Trekking' },
  jiri: { min: 3, max: 5, itinerary: 'Jiri town, local foothill walks and Kathmandu return road travel. This is not the Jiri–Everest trek.', source: 'https://hikeontreks.com/dolakha-kalinchowk-jiri-nepal/', category: 'Lakes & villages' },
};

export function durationText(slug: string) {
  const duration = tripDurations[slug];
  return `${duration.min}–${duration.max} days`;
}

export function estimateTrip(slugs: string[]) {
  const items = [...new Set(slugs)].map(slug => tripDurations[slug]).filter(Boolean);
  return { min: items.reduce((total, item) => total + item.min, 0), max: items.reduce((total, item) => total + item.max, 0) };
}

export const estimateNotice = 'Provisional Kathmandu-to-Kathmandu planning ranges include access travel and acclimatization where relevant. Multi-destination totals add each independent return journey; they are not an optimized connected itinerary. Shared transfers may shorten a plan; weather, flights, road access, permits or extra rest may extend it. We will confirm the route and timing with you.';

const packageNames: Record<string, string> = {
  everest: 'Everest Base Camp essentials',
  annapurna: 'Annapurna mountain escape',
  langtang: 'Langtang valley discovery',
  'poon-hill': 'Poon Hill sunrise escape',
  'mardi-himal': 'Mardi ridge adventure',
  manaslu: 'Manaslu circuit journey',
  kathmandu: 'Kathmandu heritage weekend',
  chitwan: 'Chitwan jungle retreat',
  pokhara: 'Pokhara lake escape',
  sikles: 'Sikles village experience',
  'upper-mustang': 'Upper Mustang explorer',
  'limi-valley': 'Limi Valley expedition',
  'nar-phu': 'Nar Phu hidden valleys',
  rara: 'Rara Lake getaway',
  'tsum-valley': 'Tsum Valley culture trek',
  'upper-dolpo': 'Upper Dolpo expedition',
  jiri: 'Jiri foothills escape',
};

const categoryInclusions: Record<TripDuration['category'], string[]> = {
  Trekking: ['Airport pickup and drop', 'Licensed trekking guide and permits', 'Breakfast, lunch and dinner on trek', 'Trek briefing, safety support and adventure activities'],
  Culture: ['Airport pickup and drop', 'Comfortable hotel stay', 'Daily breakfast and local food experiences', 'Private heritage sightseeing and cultural activities'],
  Wildlife: ['Airport pickup and drop', 'Jungle lodge or hotel stay', 'Breakfast, lunch and dinner', 'Guided safari, nature walk and adventure activities'],
  'Lakes & villages': ['Airport pickup and drop', 'Hotel and village lodge stays', 'Breakfast and selected local meals', 'Guided walks, viewpoints and adventure activities'],
};

export function destinationPackages(slug: string): DestinationPackage[] {
  const duration = tripDurations[slug];
  if (!duration) return [];
  const base = Math.max(220, duration.min * 75);
  const inclusions = categoryInclusions[duration.category];
  return [
    {
      tier: 'best',
      name: packageNames[slug] ?? `${duration.category} best value`,
      priceMin: Math.round(base / 10) * 10,
      priceMax: Math.round((base * 1.28) / 10) * 10,
      description: 'The best price for a well-organised Nepal journey.',
      inclusions,
    },
    {
      tier: 'luxury',
      name: `${packageNames[slug] ?? duration.category} luxury`,
      priceMin: Math.round((base * 2.15) / 10) * 10,
      priceMax: Math.round((base * 2.8) / 10) * 10,
      description: 'A slower, more comfortable journey with premium stays and private service.',
      inclusions: ['Everything in Best value', 'Private vehicle or scenic domestic flights', 'Best available hotels and premium lodges', 'Private guide, flexible pacing and curated experiences'],
    },
  ];
}