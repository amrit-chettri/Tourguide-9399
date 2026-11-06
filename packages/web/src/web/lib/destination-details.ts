export type DestinationDetails = {
  tagline: string;
  introduction: string;
  story: string[];
  feeling: string;
  routes: { name: string; description: string }[];
  gallery: { image: string; caption: string }[];
  source: string;
  sourceLabel?: string;
  planningNote?: string;
};

export const destinationDetails: Record<string, DestinationDetails> = {
  Everest: {
    tagline: 'Where the mountains become a world of their own.',
    introduction: 'Beyond the famous summit lies the Khumbu: a landscape of Sherpa settlements, prayer flags, deep valleys, and extraordinary mountain horizons.',
    story: [
      'The journey is as memorable as the destination. Trails connect mountain villages and monasteries, with Namche Bazaar offering a lively meeting point along many Everest-region itineraries. Between the big views, there is time for tea, conversations, and a closer look at everyday life in the Khumbu.',
      'The classic trail toward Everest Base Camp brings you into a landscape of glaciers and towering peaks. Gokyo offers another perspective, with turquoise lakes and wide mountain panoramas. These are demanding high-altitude journeys: build in acclimatization days and shape the route around your experience, not just a checklist.'
    ],
    feeling: 'Big horizons, Sherpa heritage, and the rhythm of life at altitude.',
    routes: [
      { name: 'Everest Base Camp', description: 'The classic Khumbu journey through mountain villages toward the foot of Everest. Allow time for a gradual ascent and acclimatization.' },
      { name: 'Gokyo Valley', description: 'A lake-filled alternative to the main base-camp trail, with dramatic views from the surrounding high ground.' },
      { name: 'Khumbu village walks', description: 'Plan a journey around village life, monasteries, and mountain viewpoints without making base camp the only goal.' }
    ],
    gallery: [
      { image: '/images/everest-peaks.jpg', caption: 'Evening light across the Everest region' },
      { image: '/images/gokyo-lake.jpg', caption: 'Turquoise water and mountain horizons in Gokyo' },
      { image: '/images/everest.jpg', caption: 'The high-mountain landscape of the Khumbu' }
    ],
    source: 'https://ntb.gov.np/gokyo'
  },
  Annapurna: {
    tagline: 'A different landscape around every bend.',
    introduction: 'Terraced foothills, forest trails, welcoming villages, and a sweeping mountain amphitheatre. Annapurna is a region of remarkable contrasts.',
    story: [
      'Many Annapurna journeys begin around Pokhara, then wind into hills where cultivated terraces and stone villages meet forested slopes. The region is home to diverse communities, including Gurung villages, and the landscapes change dramatically as you gain height.',
      'Choose a foothill walk with sunrise viewpoints, head toward the Annapurna Sanctuary, or follow a longer circuit into drier high-mountain country. These routes are not interchangeable: their altitude, terrain, and time requirements differ. A local guide can help match the journey to your pace and the conditions.'
    ],
    feeling: 'Village hospitality, forest paths, and mountains that fill the sky.',
    routes: [
      { name: 'Annapurna Base Camp', description: 'Walk toward the Annapurna Sanctuary, where the surrounding peaks form a striking high-mountain amphitheatre.' },
      { name: 'Annapurna Circuit', description: 'A longer journey through changing landscapes and high-altitude terrain. Plan your stages and acclimatization carefully.' },
      { name: 'Ghorepani & village trails', description: 'Explore forest walks, foothill communities, and sunrise viewpoints on a shorter itinerary tailored to your interests.' }
    ],
    gallery: [
      { image: '/images/annapurna-valley.jpg', caption: 'Prayer flags and mountain scenery in Annapurna' },
      { image: '/images/annapurna-village.jpg', caption: 'Terraced foothills beneath the Annapurna range' },
      { image: '/images/annapurna.jpg', caption: 'A closer look at Annapurna’s mountain landscape' }
    ],
    source: 'https://ntb.gov.np/annapurnaregion'
  },
  Langtang: {
    tagline: 'Find a little more space to slow down.',
    introduction: 'North of Kathmandu, the Langtang region opens into forested trails, alpine valleys, and mountain communities shaped by Tamang and Tibetan cultural influences.',
    story: [
      'The Langtang Valley trail leads through forests and riverside landscapes before opening into broad mountain country. Around Kyanjin Gompa, the scenery invites a slower approach: spend time in the village, look up at the surrounding peaks, and explore nearby viewpoints when conditions allow.',
      'Gosaikunda’s sacred lakes offer a separate high-altitude journey within the wider region, and can be combined with other trails on a carefully planned itinerary. Shorter does not mean easy: both valley and lake routes reach significant altitude, so leave room for rest, weather, and acclimatization.'
    ],
    feeling: 'Alpine stillness, mountain villages, and a deeply human journey.',
    routes: [
      { name: 'Langtang Valley', description: 'Follow the valley toward Kyanjin Gompa, with time for mountain scenery and the communities along the trail.' },
      { name: 'Kyanjin viewpoints', description: 'Base yourself around Kyanjin Gompa and discuss suitable day walks with your guide, taking altitude and weather into account.' },
      { name: 'Gosaikunda lakes', description: 'Discover sacred alpine lakes on a distinct high-altitude route, or discuss a longer combination trek with your guide.' }
    ],
    gallery: [
      { image: '/images/langtang-valley.jpg', caption: 'Open mountain country in the Langtang Valley' },
      { image: '/images/kyanjin-village.jpg', caption: 'Kyanjin Gompa beneath the surrounding peaks' },
      { image: '/images/langtang.jpg', caption: 'Alpine scenery in the Langtang region' }
    ],
    source: 'https://trade.ntb.gov.np/tourist-destination/langtang-region/'
  },
  'Poon Hill': {
    tagline: 'A sunrise worth getting up for.',
    introduction: 'Above Ghorepani, Poon Hill looks out toward the Annapurna and Dhaulagiri ranges. The walk is about more than that first light: forests, foothill villages, and mountain hospitality make the whole journey memorable.',
    story: [
      'The trail winds through the Annapurna foothills, linking stone stairways, hillside settlements, and rhododendron forests. Ghorepani is a natural stopping point before the early-morning climb to Poon Hill, where changing light brings the mountain skyline to life on clear days.',
      'This is a shorter alternative to the region’s longer high-mountain routes, but the steps and sustained climbs still ask for energy. Build a route around your fitness and interests, with time for village stops and a relaxed return toward Pokhara. Sunrise views depend on weather, so enjoy the journey as much as the viewpoint.'
    ],
    feeling: 'Early morning light, forest air, and a whole horizon of peaks.',
    routes: [
      { name: 'Ghorepani & Poon Hill', description: 'Walk to Ghorepani and make an early start for the classic sunrise viewpoint, leaving room for weather and your preferred pace.' },
      { name: 'Tadapani & Ghandruk', description: 'Discuss an extended village loop through forested trails and Gurung communities rather than returning by exactly the same path.' },
      { name: 'Annapurna foothill walks', description: 'Combine shorter village stages and viewpoints around the foothills with an itinerary planned from Pokhara.' }
    ],
    gallery: [
      { image: '/images/poon-hill-sunrise.jpg', caption: 'First light over the mountain skyline from Poon Hill' },
      { image: '/images/poon-hill-peaks.jpg', caption: 'Warm sunrise colours on the peaks seen from Poon Hill' },
      { image: '/images/poon-hill-panorama.jpg', caption: 'Layered hills and Himalayan views around Poon Hill' }
    ],
    source: 'https://www.thecommonwanderer.com/blog/poon-hill-trek-nepal',
    sourceLabel: 'Read more about the Ghorepani–Poon Hill trek'
  },
  'Mardi Himal': {
    tagline: 'Follow the ridge. Let the mountains come closer.',
    introduction: 'In the Annapurna region, Mardi Himal takes you from shaded forest to open ridgelines, with striking views toward Machhapuchhre and the surrounding peaks.',
    story: [
      'Many Mardi Himal journeys begin in the hills above Pokhara. Forest paths gradually open into a more exposed landscape, where the trail follows a ridge and clouds drift through the valleys below. The changing scenery is part of the appeal, from quiet woodland to close-up mountain horizons.',
      'Above the higher lodges, viewpoint walks require careful decisions about weather, altitude, and footing. You do not need to reach the highest possible point to enjoy the trek. Choose your turnaround with your guide, allow time to acclimatize, and keep the itinerary flexible when conditions change.'
    ],
    feeling: 'A ribbon of trail, drifting clouds, and mountains close enough to fill the sky.',
    routes: [
      { name: 'Forest & ridge journey', description: 'Link forest lodges and open ridge stages, taking time to enjoy the transition from woodland to alpine scenery.' },
      { name: 'High Camp viewpoints', description: 'Discuss suitable viewpoint walks above High Camp with your guide, based on weather, trail conditions, and your acclimatization.' },
      { name: 'Village return routes', description: 'Explore alternative descents toward the foothill villages where current trail access and transport make them practical.' }
    ],
    gallery: [
      { image: '/images/mardi-himal-ridge.jpg', caption: 'The Mardi Himal ridgeline with Machhapuchhre ahead' },
      { image: '/images/mardi-himal-view.jpg', caption: 'Close-up mountain scenery on the Mardi Himal trek' },
      { image: '/images/mardi-himal-trail.jpg', caption: 'An open ridge trail above the forest on Mardi Himal' }
    ],
    source: 'https://www.acethehimalaya.com/trip/mardi-himal-trek/',
    sourceLabel: 'Read more about the Mardi Himal route'
  },
  Manaslu: {
    tagline: 'A deeper journey into the mountain world.',
    introduction: 'Around Manaslu, river gorges give way to high valleys, Tibetan-influenced villages, and immense mountain scenery. This is a journey that rewards time and thoughtful preparation.',
    story: [
      'The Manaslu Circuit follows the Budhi Gandaki valley into a landscape of stone villages, monasteries, and alpine pastures. Places such as Samagaun invite you to pause, look beyond the trail, and appreciate the daily rhythm of communities living beneath these enormous peaks.',
      'The circuit’s high crossing at Larkya La makes acclimatization and weather planning essential. Manaslu also includes restricted trekking areas, so arrange the necessary permissions and compliant guiding arrangements through an authorized agency before setting out. Do not treat this as an itinerary to rush or organize on the trail.'
    ],
    feeling: 'River valleys, living traditions, and a high-mountain journey with depth.',
    routes: [
      { name: 'Manaslu Circuit', description: 'A longer high-altitude journey through the valley and over Larkya La, with carefully spaced stages and contingency time.' },
      { name: 'Samagaun & acclimatization', description: 'Build in rest and suitable day walks around the upper valley, choosing any excursions with your guide according to conditions.' },
      { name: 'Village & monastery stops', description: 'Make cultural visits part of the journey, with time to listen, respectful photography, and consideration for local customs.' }
    ],
    gallery: [
      { image: '/images/manaslu-mountain.jpg', caption: 'Mountain scenery and a chorten in the Manaslu region' },
      { image: '/images/manaslu-village.jpg', caption: 'Samagaun and the surrounding high valley' },
      { image: '/images/manaslu-peaks.jpg', caption: 'The scale of the mountains above Samagaun' }
    ],
    source: 'https://ntb.gov.np/manaslu-conservation-area',
    planningNote: 'Manaslu includes restricted trekking areas. Arrange current restricted-area and conservation permits and required guiding arrangements through an authorized agency. Confirm eligibility, altitude planning, and pass conditions before travelling.'
  }
};