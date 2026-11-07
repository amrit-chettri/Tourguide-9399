import type { Destination } from './site-config';
import type { DestinationDetails } from './destination-details';

type ExtendedDestination = Destination & { tagline: string; story: string; secondImage: string; captions: [string, string]; routes: [string, string, string]; routeDescriptions: [string, string, string]; source: string; planningNote?: string };

const remoteNote = 'This journey includes restricted or remote areas. Confirm current permits, authorized guiding arrangements, accommodation/camping, communications, evacuation cover and access conditions before travel. Allow additional contingency days when required.';

const extended: ExtendedDestination[] = [
  {
    region: 'Kathmandu', slug: 'kathmandu', subtitle: 'LIVING HERITAGE', image: '/images/kathmandu-stupa.jpg', secondImage: '/images/kathmandu-heritage.jpg',
    description: 'Explore ancient courtyards, sacred stupas and the everyday life of Nepal’s capital. Kathmandu offers an unhurried introduction to Newar heritage, craftsmanship and the rhythms of the valley.',
    highlights: ['Sacred stupas', 'Newar heritage', 'Valley walks'], tagline: 'A thousand stories, one living city.',
    story: 'Walk through the old city’s lanes, pause around Boudhanath, and explore the architecture and community life of the Kathmandu Valley. Build your days around a few meaningful visits rather than rushing between monuments. Respect worshippers, ask before taking portraits, and confirm opening times and entry fees with your local guide.',
    captions: ['Boudhanath Stupa in Kathmandu', 'The sacred architecture of Boudhanath'], routes: ['Old-city heritage walk', 'Boudhanath & sacred sites', 'Valley day trips'], routeDescriptions: ['Explore courtyards, markets and historic public squares on foot.', 'Discover Buddhist and Hindu heritage with respectful local guidance.', 'Discuss visits to Patan or Bhaktapur without turning the day into a checklist.'], source: 'https://ntb.gov.np/kathmandu'
  },
  {
    region: 'Chitwan', slug: 'chitwan', subtitle: 'INTO THE LOWLANDS', image: '/images/chitwan-rhinos.jpg', secondImage: '/images/chitwan-wildlife.jpg',
    description: 'Trade mountain air for the forests, grasslands and rivers of Nepal’s Terai. Explore Chitwan with naturalist-led wildlife activities and time to learn about local Tharu culture.',
    highlights: ['Wildlife & birdlife', 'River landscapes', 'Tharu culture'], tagline: 'A different kind of wild.',
    story: 'Chitwan National Park protects habitats for the greater one-horned rhinoceros and many other species. Plan responsible jeep excursions, birdwatching or permitted river activities with trained local staff. Wildlife sightings are never guaranteed; keep a respectful distance and let the forest set the pace.',
    captions: ['Greater one-horned rhinoceroses in Nepal', 'Wildlife in the Chitwan landscape'], routes: ['Guided wildlife excursions', 'Birdwatching & river time', 'Tharu community visits'], routeDescriptions: ['Choose permitted naturalist-led activities and follow park guidance.', 'Look for birds and enjoy the riverside scenery without disturbing wildlife.', 'Learn about local traditions through respectful community-led visits.'], source: 'https://ntb.gov.np/chitwan-national-park', planningNote: 'Confirm park access, seasonal activity availability and trained naturalist arrangements. Follow wildlife safety guidance; sightings are not guaranteed. We favour responsible activities, not elephant rides.'
  },
  {
    region: 'Pokhara', slug: 'pokhara', subtitle: 'LAKESIDE, AT YOUR PACE', image: '/images/pokhara-lake.jpg', secondImage: '/images/pokhara-panorama.jpg',
    description: 'Slow down beside Phewa Lake, explore hillside viewpoints and enjoy Nepal’s lakeside city. Pokhara pairs relaxed days on the water with clear-day views toward the Annapurna range.',
    highlights: ['Phewa Lake', 'Hilltop views', 'Lakeside walks'], tagline: 'Leave a little room to simply be.',
    story: 'Spend a morning on the lakeshore, take a gentle walk above the city or arrange an early viewpoint visit when the weather is clear. Pokhara is also a practical base for Annapurna-region journeys, but a lakeside stay is worth enjoying in its own right. Boats, viewpoints and optional activities can be arranged around your comfort and interests.',
    captions: ['Phewa Lake and the Pokhara hills', 'Lakeside scenery in Pokhara'], routes: ['Phewa lakeside days', 'Sunrise viewpoints', 'Foothill day walks'], routeDescriptions: ['Enjoy lakeside walks and discuss safe boating options.', 'Plan a clear-weather visit to a hilltop viewpoint near the city.', 'Choose a manageable local walk rather than a multi-day trek.'], source: 'https://ntb.gov.np/pokhara'
  },
  {
    region: 'Sikles', slug: 'sikles', guideRegion: 'Annapurna', subtitle: 'GURUNG VILLAGE LIFE', image: '/images/sikles-hills.jpg', secondImage: '/images/sikles-village.jpg',
    description: 'Discover Gurung village life and mountain landscapes above the Pokhara hills. Sikles invites slower walks, local conversations and a journey shaped around community and scenery.',
    highlights: ['Gurung culture', 'Village hospitality', 'Foothill trails'], tagline: 'The mountains, with a human heartbeat.',
    story: 'The journey to Sikles brings you into a hillside community known for its Gurung heritage. Make time for village walks, local food and the views around the settlement. A longer walking plan can explore the Hugu valley and Kapuche area, but conditions, trail access and your fitness should decide any extension.',
    captions: ['Hills and mountain scenery around Sikles', 'The landscape of the Sikles village journey'], routes: ['Sikles village stay', 'Foothill walks', 'Kapuche extension'], routeDescriptions: ['Spend time in the village and learn about everyday community life.', 'Explore suitable nearby trails with a local guide.', 'Discuss a longer Hugu/Kapuche walking route and its current conditions.'], source: 'https://www.mountmania.com/sikles-trek'
  },
  {
    region: 'Upper Mustang', slug: 'upper-mustang', subtitle: 'THE ANCIENT KINGDOM OF LO', image: '/images/upper-mustang-lo.jpg', secondImage: '/images/upper-mustang-landscape.jpg',
    description: 'Explore ochre cliffs, wind-carved valleys and the walled settlement of Lo Manthang. Upper Mustang is a journey through Tibetan-influenced culture and a striking Himalayan rain-shadow landscape.',
    highlights: ['Lo Manthang', 'Monastery heritage', 'Desert-like valleys'], tagline: 'A world of earth, sky and living tradition.',
    story: 'From the gateway around Kagbeni, walking routes lead through settlements, dry river valleys and dramatic eroded hills toward Lo Manthang. Monasteries and local traditions give the landscape depth, so approach visits with time and respect. The classic trek is different from a shorter jeep journey; discuss the travel style, permits and pace before choosing your itinerary.',
    captions: ['Lo Manthang in the Upper Mustang landscape', 'The walled settlement and hills of Upper Mustang'], routes: ['Classic Lo Manthang trek', 'Monastery & village visits', 'Tailored overland journey'], routeDescriptions: ['Walk the traditional valley stages toward Lo Manthang with gradual ascent.', 'Build respectful cultural visits into the route.', 'Ask about road-based alternatives; timing differs from the walking estimate.'], source: 'https://www.magicalnepal.com/trip/upper-mustang-trek/', planningNote: remoteNote
  },
  {
    region: 'Limi Valley', slug: 'limi-valley', subtitle: 'REMOTE HUMLA', image: '/images/limi-valley.jpg', secondImage: '/images/limi-landscape.jpg',
    description: 'Journey into far-northwestern Nepal, where remote valleys, high passes and Tibetan-influenced villages shape the landscape. Limi is for travellers with time, patience and a love of wild places.',
    highlights: ['Remote villages', 'High passes', 'Humla landscapes'], tagline: 'Further from the familiar.',
    story: 'Access commonly involves flights through Nepalgunj to Simikot before the walking expedition begins. Routes through Limi connect villages such as Halji, Til and Jang with broad valleys and demanding high country. Limited services, seasonal access and uncertain flight schedules make careful logistics and contingency time part of the journey, not optional extras.',
    captions: ['The broad landscape of the Limi Valley journey', 'High-country scenery in Humla'], routes: ['Limi village circuit', 'High-valley walking', 'Cultural village stays'], routeDescriptions: ['Discuss a supported circuit linking the valley settlements.', 'Plan pass crossings with acclimatization and weather flexibility.', 'Make time for local traditions without treating villages as exhibits.'], source: 'https://www.kimkim.com/c/limi-valley-trek-18-days', planningNote: remoteNote
  },
  {
    region: 'Nar Phu', slug: 'nar-phu', subtitle: 'HIDDEN VALLEYS OF MANANG', image: '/images/nar-phu-village.jpg', secondImage: '/images/nar-phu-valley.jpg',
    description: 'Follow a quieter branch of the Annapurna region into stone-built villages, narrow gorges and open alpine country. Nar and Phu combine dramatic landscapes with deeply rooted mountain traditions.',
    highlights: ['Stone villages', 'Alpine valleys', 'Monastery visits'], tagline: 'Beyond the main trail, another world.',
    story: 'From road access around Koto, the trail enters more remote valleys toward Phu and Nar. Village visits and acclimatization days deserve space in the plan. A Kang La crossing may be part of some itineraries, but it adds demanding high-altitude terrain and must be assessed against conditions and your experience.',
    captions: ['Stone-built settlement in the Nar Phu region', 'Mountain scenery on the Nar Phu journey'], routes: ['Phu village journey', 'Nar & monastery visits', 'Kang La route option'], routeDescriptions: ['Walk gradually into the upper valley with time for acclimatization.', 'Explore local culture and suitable walks around Nar.', 'Discuss a high-pass extension only when fitness, weather and trail conditions allow.'], source: 'https://www.visithimalayastrek.com/nar-phu-valley-trek', planningNote: remoteNote
  },
  {
    region: 'Rara', slug: 'rara', subtitle: 'A LAKE WORTH THE JOURNEY', image: '/images/rara-lake.jpg', secondImage: '/images/rara-shore.jpg',
    description: 'Discover the blue waters and forested shores of Rara Lake in northwestern Nepal. Take time for lakeside walks, quiet viewpoints and the changing colours of the surrounding landscape.',
    highlights: ['Rara Lake', 'Forest & shore walks', 'Remote road journey'], tagline: 'Let the horizon slow you down.',
    story: 'Rara sits in a remote part of Nepal, so reaching the lake is a meaningful part of the trip. Our estimate is for an overland journey from Kathmandu with local walking, not a long trekking circuit. Road conditions can change significantly; a fly-in plan through Nepalgunj and Talcha has different logistics and should be estimated separately.',
    captions: ['Blue water and mountain scenery at Rara Lake', 'A closer view of Rara’s lake landscape'], routes: ['Rara road journey', 'Lakeside walks', 'Viewpoints & village time'], routeDescriptions: ['Plan staged road travel and rest stops rather than rushing the approach.', 'Enjoy suitable walks around the shore and follow park guidance.', 'Discuss viewpoints and nearby communities according to local access.'], source: 'https://www.nepalhighlandtreks.com/rara-lake-jeep-tour'
  },
  {
    region: 'Tsum Valley', slug: 'tsum-valley', subtitle: 'THE VALLEY OF MONASTERIES', image: '/images/tsum-monastery.jpg', secondImage: '/images/tsum-valley.jpg',
    description: 'Explore a mountain valley of monasteries, villages and Tibetan-influenced traditions northeast of the Manaslu route. Tsum rewards a patient pace and respectful curiosity about local life.',
    highlights: ['Monastery heritage', 'Mountain villages', 'Sacred landscapes'], tagline: 'A journey with room to listen.',
    story: 'The route branches from the Budhi Gandaki approach into a valley where settlements and monasteries connect across a remarkable mountain landscape. Plan time around places such as Rachen and Mu Gompa where access allows. This is a Tsum Valley journey on its own; combining it with the Manaslu Circuit requires a longer, separately planned itinerary.',
    captions: ['Monastery architecture and prayer flags in Tsum Valley', 'The mountain landscape of the Tsum journey'], routes: ['Tsum village trek', 'Monastery visits', 'Upper-valley exploration'], routeDescriptions: ['Follow gradual walking stages into the valley communities.', 'Make respectful visits around local monastery schedules.', 'Choose suitable upper-valley walks with your guide and allow rest days.'], source: 'https://www.nepalhikingteam.com/package/tsum-valley-trek', planningNote: remoteNote
  },
  {
    region: 'Upper Dolpo', slug: 'upper-dolpo', subtitle: 'BEYOND THE BLUE LAKE', image: '/images/dolpo-phoksundo.jpg', secondImage: '/images/dolpo-landscape.jpg',
    description: 'Venture into remote trans-Himalayan valleys, high passes and living Buddhist and Bon traditions. Upper Dolpo is a supported expedition, often linking Phoksundo’s blue waters with a much deeper mountain journey.',
    highlights: ['Remote expedition', 'High-pass trails', 'Buddhist & Bon heritage'], tagline: 'The long way into something extraordinary.',
    story: 'Many Upper Dolpo routes begin with flights via Nepalgunj to Juphal before continuing toward Phoksundo and the high country beyond. The lake alone is not an Upper Dolpo expedition. A full journey requires restricted-area permissions, camping support, high-pass planning and plenty of time for acclimatization and unpredictable access.',
    captions: ['Phoksundo Lake on the approach to the Dolpo high country', 'The blue waters and cliffs of Phoksundo'], routes: ['Phoksundo approach', 'Upper Dolpo expedition', 'Village & monastery time'], routeDescriptions: ['Enjoy the lake landscape as one stage of a longer journey.', 'Plan supported camping stages and pass crossings with an experienced team.', 'Build time for cultural visits into the expedition rather than rushing through.'], source: 'https://www.visithimalayastrek.com/upper-dolpo-trek', planningNote: remoteNote
  },
  {
    region: 'Jiri', slug: 'jiri', subtitle: 'A FOOTHILL ESCAPE', image: '/images/jiri-hills.jpg', secondImage: '/images/jiri-town.jpg',
    description: 'Enjoy green hills, a small-town atmosphere and gentle local walks in the Dolakha foothills. Jiri is a standalone countryside escape, separate from our Everest trekking destination.',
    highlights: ['Green foothills', 'Local village walks', 'Countryside stay'], tagline: 'Fresh air, green hills, a slower day.',
    story: 'Reach Jiri by road from Kathmandu, then spend time around the town and its surrounding hills. Local walks and nearby villages offer an approachable way to explore the countryside. Although Jiri is associated with the historic overland Everest approach, this itinerary does not continue to Everest or include a high-altitude base-camp trek.',
    captions: ['Green hills and settlement around Jiri', 'The countryside around Jiri town'], routes: ['Jiri town stay', 'Local foothill walks', 'Nearby village visits'], routeDescriptions: ['Settle into the town and enjoy its relaxed atmosphere.', 'Choose manageable local trails with plenty of rest stops.', 'Explore nearby communities according to road and trail conditions.'], source: 'https://hikeontreks.com/dolakha-kalinchowk-jiri-nepal/'
  }
];

export const extraDestinations: Destination[] = extended.map(({ region, slug, guideRegion, subtitle, image, description, highlights }) => ({ region, slug, guideRegion, subtitle, image, description, highlights }));

export const extraDestinationDetails: Record<string, DestinationDetails> = Object.fromEntries(extended.map(item => [item.region, {
  tagline: item.tagline, introduction: item.description, story: [item.story], feeling: item.highlights.join(' · '),
  routes: item.routes.map((name, index) => ({ name, description: item.routeDescriptions[index] })),
  gallery: [{ image: item.image, caption: item.captions[0] }, { image: item.secondImage, caption: item.captions[1] }],
  source: item.source, sourceLabel: `Read more about ${item.region}`, planningNote: item.planningNote
}]));