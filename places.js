/* ==========================================================================
   Santorini · 17–22 Aug — candidate places
   --------------------------------------------------------------------------
   This is the ONLY file to edit when adding a place. index.html reads it.

   One entry per place:
     name   required   what you'll recognise it by
     cat    required   one of the keys in CATS below (wine, dinner, snack,
                       beach, bar, site, hike, sail, stay). This order is also the
                       order sections appear in the app — rearrange it to reorder them.
     lat/lon required   decimal degrees. Right-click a spot in Google Maps and
                       the first menu item is "lat, lon" — paste it here.
     area   optional   village or coast, shown under the name
     note   optional   one line, why it's on the list
     status optional   'seed' (unverified idea, default) | 'maybe' | 'pick'
     url    optional   its own website — shown as "Website" in the app
     q      optional   override the Google Maps search text
     price  optional   what it costs, free text: '€8-20 tastings'
     dur    optional   duration / opening hours / booking note
     type   optional   what kind of place: 'taverna', 'falafel counter', 'ouzeri'
     also   optional   extra categories it also belongs to, e.g. also: ['bar']
     group  optional   sub-heading inside its category, e.g. 'Beach clubs'
     rank   optional   1 = top of its category; the app sorts by it
     verdict optional  one line on why it sits where it does in the order

   Adding a place = one line. Nothing else needs touching.
   ========================================================================== */

const CATS = {
  wine:   { label: 'Wine tasting',    color: '#7D4B6E', shape: 'hexagon'  },
  dinner: { label: 'Dinners',         color: '#B4653C', shape: 'circle'   },
  snack:  { label: 'Snacks & coffee', color: '#8C7A3F', shape: 'pill'     },
  beach:  { label: 'Beaches',         color: '#2E8B92', shape: 'pentagon' },
  bar:    { label: 'Bars & clubs',    color: '#A24B58', shape: 'octagon'  },
  site:   { label: 'Sites & indoor',  color: '#6C6497', shape: 'square'   },
  hike:   { label: 'Hiking & walks',  color: '#4E7C3F', shape: 'diamond'  },
  sail:   { label: 'Sailing',         color: '#3D6B87', shape: 'triangle' },
  stay:   { label: 'Where to stay',   color: '#54606B', shape: 'star'     },
};

const PLACES = [
  // ---- wine · ordered by rank: price / location / offering / vibe / reviews ----
  { name: 'Artemis Karamolegos', cat: 'wine', img: 'img/artemis-karamolegos.webp', imgKind: 'venue', imgFrom: 'artemiskaramolegos-winery.com', lat: 36.4064, lon: 25.4537, area: 'Exo Gonia', rank: 1,
    price: '€8–20 tastings · €65–140 with food', dur: 'hourly tours 12:00–18:00, open 11–20 daily',
    url: 'https://www.artemiskaramolegos-winery.com/en/tasting-room/wine-tasting/',
    note: 'Tiered flights: 3 wines €8, 4 for €11, 5 for €14, 5 PDO for €15, 7 for €20. Sea-view courtyard, own restaurant.',
    verdict: 'Best value and the most flexible — drop-ins welcome, hourly tours, cheapest way to taste properly.' },
  { name: 'Vassaltis Vineyards', cat: 'wine', img: 'img/vassaltis-vineyards.jpg', imgKind: 'venue', imgFrom: 'vassaltis.com', lat: 36.4344, lon: 25.4386, area: 'Vourvoulos', rank: 2,
    price: '€40 tasting · €30 cellar tour', dur: 'cellar tour 16:00–17:00, max 12 people',
    url: 'https://vassaltis.com/best-wine-experience-in-santorini/',
    note: '€40 = 4 wines with 4 designed bites. €30 = 1h cellar tour then 4 wines. Modern, small, close to Fira.',
    verdict: 'The best actual tasting — small groups, food thought through, no bus crowds.' },
  { name: 'Domaine Sigalas', cat: 'wine', img: 'img/domaine-sigalas.jpg', imgKind: 'venue', imgFrom: 'sigalas-wine.com', lat: 36.4586, lon: 25.4030, area: 'Baxedes, near Oia', rank: 3,
    price: 'from €12 · pairing menus €100–150', dur: 'tasting room 11:00–21:00',
    url: 'https://sigalas-wine.com/food-pairing-en/',
    note: 'Top-100 world winery listings, relaxed vineyard setting. Entry tastings are cheap; the 6-plate degustation is the splurge.',
    verdict: 'Most acclaimed wine, calm setting — and it is the one that pairs with an Oia or Ammoudi evening.' },
  { name: 'Estate Argyros', cat: 'wine', img: 'img/estate-argyros.webp', imgKind: 'venue', imgFrom: 'estateargyros.com', lat: 36.4040, lon: 25.4560, area: 'Episkopi Gonia', rank: 4,
    price: '€15 (60 min) · €40 (90 min)', dur: '4 wines + cheese, or 7 wines + platters',
    url: 'https://estateargyros.com/',
    note: 'Family estate since 1903, oldest vines on the island. Inland, no caldera view.',
    verdict: 'Most serious old-vine tasting per euro; skip if you want a view with it.' },
  { name: 'Hatzidakis Winery', cat: 'wine', img: 'img/hatzidakis-winery.jpg', imgKind: 'venue', imgFrom: 'hatzidakiswines.gr', lat: 36.3861, lon: 25.4409, area: 'Pyrgos Kallistis', rank: 5,
    price: '€20 for 6 wines · premium tiers €40–160', dur: '45–60 min, appointment only',
    url: 'https://www.hatzidakiswines.gr/en/visit-us',
    note: 'Organic, carved into a cave under its own vineyard. First to revive Mavrotragano.',
    verdict: 'Great story and cellar, but reviews split — some report short tours and small pours.', status: 'maybe' },
  { name: 'Venetsanos', cat: 'wine', img: 'img/venetsanos.jpg', imgKind: 'venue', imgFrom: 'venetsanoswinery.com', lat: 36.3861, lon: 25.4275, area: 'Megalochori, above Athinios', rank: 6,
    price: '€2 tour + €10 tasting', dur: 'short visit',
    url: 'https://venetsanoswinery.com/',
    note: 'The 1947 gravity-fed industrial winery built into the cliff above the ferry port.',
    verdict: 'Cheapest stop and the most dramatic building — a view with wine, not a deep tasting.' },
  { name: 'Pelican Kipos', cat: 'wine', img: 'img/pelican-kipos.png', imgKind: 'venue', imgFrom: 'pelicankipos.com', lat: 36.4155, lon: 25.4318, area: 'Fira centre', rank: 7,
    price: '€30', dur: '1 hour, 5 wines',
    url: 'https://www.pelicankipos.com/',
    note: 'Not a winery — a garden wine restaurant over a 400-year-old cave cellar, 600 labels. 3 whites, a red, a Vinsanto, with cheese and bread.',
    verdict: 'The in-town option: no driving, works as an evening or a hot-afternoon escape.' },
  { name: 'Santo Wines', cat: 'wine', img: 'img/santo-wines.jpg', imgKind: 'venue', imgFrom: 'santowines.gr', lat: 36.3897, lon: 25.4361, area: 'Pyrgos', rank: 8,
    price: 'flights €18–55', dur: 'book ahead for sunset',
    url: 'https://santowines.gr/',
    note: 'The big caldera-facing terrace. Reviews repeatedly call it commercial and crowded.',
    verdict: 'Last for the wine, first if the goal is sunset — book a front table or do not bother.' },

  // ---- dinners · sit-down meals, ranked ----
  { name: 'Metaxi Mas', cat: 'dinner', img: 'img/metaxi-mas.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · C messier', type: 'taverna', lat: 36.4083, lon: 25.4519, area: 'Exo Gonia', rank: 1,
    note: 'The island favourite. Inland, no caldera view, and it books out well ahead.',
    verdict: 'Best-loved proper dinner on the island — reserve now or lose it.' },
  { name: 'Pentozali', cat: 'dinner', img: 'img/pentozali.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · C messier', type: 'mezedopoleio', lat: 36.3999, lon: 25.4478, area: 'Mesaria', rank: 2,
    price: '€15–20 per person', dur: 'no reservation needed, short wait possible',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g968383-d28123856-Reviews-Pentozali-Mesaria_Santorini_Cyclades_South_Aegean.html',
    note: 'Run by two Cretans: hot and cold mezedes, raki, house wine. Shaded patio, more Greeks than tourists. 4.8 over 745 reviews.',
    verdict: 'Best value real meal, and the only good one you can walk into.' },
  { name: 'Fratzeskos Fish Tavern', cat: 'dinner', img: 'img/fratzeskos-fish-tavern.jpg', imgKind: 'satellite', imgFrom: 'satellite view', type: 'fish taverna', lat: 36.3568, lon: 25.4694, area: 'Perissa beachfront', rank: 3,
    price: 'grilled fish platter for two €45',
    url: 'https://www.e-table.gr/en/restaurant/fratzeskos',
    note: 'Family-run since 2006, catch landed daily and you pick your fish. Right on the sand, away from the hyped villages.',
    verdict: 'The fish dinner that is about the fish — pairs with a Perissa beach day.' },
  { name: 'Lava Tavern', cat: 'dinner', img: 'img/lava-tavern.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · ArticCynda', type: 'beach taverna', lat: 36.3452, lon: 25.4530, area: 'Perivolos, Agios Georgios end', rank: 4,
    url: 'https://www.tripadvisor.com/Restaurant_Review-g635608-d1167801-Reviews-Lava-Perissa_Santorini_Cyclades_South_Aegean.html',
    note: 'No fixed menu — staff show you the day\'s dishes, bought that morning from fishermen and farmers. 4.4–4.5 across thousands of reviews.',
    verdict: 'Quiet end of the beach, whatever was fresh that morning. Unfussy and consistently loved.' },
  { name: 'Ouzeri', cat: 'dinner', img: 'img/ouzeri.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · Norbert Nagel', type: 'ouzeri', lat: 36.4158, lon: 25.4315, area: 'Fira, Fabrika centre', rank: 5,
    dur: 'lunch walk-in, book for dinner',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g482942-d1103026-Reviews-Ouzeri-Fira_Santorini_Cyclades_South_Aegean.html',
    note: 'Open since 2003, chef trained at Cordon Bleu. Sharing plates, grilled meat and seafood, moderate prices for Fira.',
    verdict: 'The in-town dinner: no driving, shared plates, reliably good value.' },
  { name: 'To Psaraki', cat: 'dinner', img: 'img/to-psaraki.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · ArticCynda', type: 'fish taverna', lat: 36.3436, lon: 25.4297, area: 'Vlychada', rank: 6,
    note: 'Above the marina on the south coast.',
    verdict: 'Well regarded, but I have not verified prices or hours yet.' },
  { name: 'Dimitris Ammoudi Taverna', cat: 'dinner', img: 'img/dimitris-ammoudi-taverna.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · Anthony Baratier', type: 'fish taverna', lat: 36.4650, lon: 25.3733, area: 'Ammoudi Bay, below Oia', rank: 7,
    price: '≈€70 per person with wine', dur: 'book a waterside table an hour before sunset',
    url: 'https://www.tripadvisor.com/Restaurant_Review-g482941-d3221585-Reviews-Dimitris_Ammoudi_Taverna-Oia_Santorini_Cyclades_South_Aegean.html',
    note: 'Since 1989, tables at the waterline under the Oia cliff. 4.8 over 3,495 reviews, though several call it overpriced for what arrives.',
    verdict: 'The splurge you pay for the setting — worth one evening, not two.' },

  // ---- snacks & quick bites · ranked ----
  { name: 'Falafeland', cat: 'snack', img: 'img/falafeland.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · Norbert Nagel', type: 'falafel counter', lat: 36.4172, lon: 25.4306, area: 'Fira', rank: 1,
    price: '≈€3 a wrap', url: 'https://falafeland.gr/',
    note: 'Vegan street food in the middle of Fira. Wraps, homemade mayo, gluten-free options, vegan brownie.',
    verdict: 'Cheapest edible thing in Fira and genuinely good — the default hot-afternoon lunch.' },
  { name: 'Golden Grill House', cat: 'snack', img: 'img/golden-grill-house.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · C messier', type: 'charcoal grill', lat: 36.4030, lon: 25.4450, area: 'Fira–Perissa road', rank: 2,
    price: 'gyros ≈€4.50',
    note: 'Charcoal grill, generous portions, sea view from the terrace, mostly locals. Seftalia is the thing to order.',
    verdict: 'Best cheap grill, but it is on the ring road — needs wheels or a bus.' },
  { name: "Brown's Espresso Bar", cat: 'snack', img: 'img/brown-s-espresso-bar.jpg', imgKind: 'area', imgFrom: 'area photo · Wikimedia · Zde', type: 'espresso bar', lat: 36.4330, lon: 25.4243, area: 'Imerovigli', rank: 3,
    url: 'https://mindtrip.ai/restaurant/imerovigli-south-aegean/browns-espresso-bar/re-Sl5MGtIS',
    note: 'Proper espresso, banana bread and cinnamon rolls. Sits right by the walking path — takeaway or sit down.',
    verdict: 'The coffee stop for the rim walk: it is on the Fira → Oia path, at the Imerovigli halfway point.' },

  // ---- sailing ----
  { name: 'Catamaran day cruise', cat: 'sail', img: 'img/catamaran-day-cruise.jpg', imgKind: 'photo', imgFrom: 'Wikimedia · Dietmar Rabich', lat: 36.3403, lon: 25.4325, area: 'Vlychada marina',
    note: 'Half-day along the south coast — Red and White beaches, hot springs.' },
  { name: 'Volcano & hot springs boat', cat: 'sail', img: 'img/volcano-hot-springs-boat.jpg', imgKind: 'photo', imgFrom: 'Wikimedia · Bernard Gagnon', lat: 36.4042, lon: 25.3961, area: 'Nea Kameni',
    note: 'Shorter and cheaper. The crater walk has no shade at all.' },
  { name: 'Small-group sailboat', cat: 'sail', img: 'img/small-group-sailboat.jpg', imgKind: 'photo', imgFrom: 'Wikimedia · Moonik', lat: 36.4645, lon: 25.3742, area: 'Ammoudi port',
    note: 'Fewer people than the catamarans, costs more.', status: 'maybe' },

  // ---- beaches · natural beaches only; beach clubs live under Bars & clubs ----
  { name: 'Perissa / Perivolos', cat: 'beach', img: 'img/perissa-perivolos.jpg', imgKind: 'satellite', imgFrom: 'satellite view', type: 'beach',
    lat: 36.3556, lon: 25.4664, area: 'south-east', rank: 1,
    note: 'Kilometres of black sand, the most organised stretch on the island.',
    verdict: 'Easiest full beach day, and where most of the beach clubs are.' },
  { name: 'Vlychada beach', cat: 'beach', img: 'img/vlychada-beach.jpg', imgKind: 'photo', imgFrom: 'Wikimedia · Dietmar Rabich', type: 'beach',
    lat: 36.3389, lon: 25.4258, area: 'south', rank: 2,
    note: 'Wind-carved pale cliffs standing behind the sand, quieter than Perivolos.',
    verdict: 'The one worth seeing for the landscape rather than the sunbeds.' },
  { name: 'Kamari', cat: 'beach', img: 'img/kamari.jpg', imgKind: 'photo', imgFrom: 'Wikimedia · Jules Verne Times Two', type: 'beach',
    lat: 36.3769, lon: 25.4744, area: 'east', rank: 3,
    note: 'Under Mesa Vouno — dark pebbles, long promenade, sunbeds.',
    verdict: 'Good if you want shops and food right behind the beach.' },
  { name: 'White Beach', cat: 'beach', img: 'img/white-beach.jpg', imgKind: 'venue', imgFrom: 'daytripsfromsantorini.com', type: 'beach, boat access',
    lat: 36.3455, lon: 25.3903, area: 'Akrotiri, past Red Beach', rank: 4,
    price: '≈€15 boat round trip',
    url: 'https://daytripsfromsantorini.com/articles/white-beach-santorini',
    note: 'Aspri Paralia — a cove of grey pebbles under white limestone cliffs. Boat from Akrotiri harbour, 10–15 min, or a rough scramble from Red Beach. Wading ashore is likely.',
    verdict: 'A short excursion, not a beach day — bring your own food, facilities are minimal.' },

  // ---- bars & clubs · night venues only. Beach clubs live under Beaches, tagged 'Beach clubs' ----
  { name: 'Wet Stories', cat: 'beach', img: 'img/wet-stories.jpg', imgKind: 'venue', imgFrom: 'wetstoriessantorini.gr', type: 'beach club', group: 'Beach clubs',
    lat: 36.3474, lon: 25.4589, area: 'Perivolos beach', rank: 5,
    price: 'sunbeds ≈€20–60 · front row €80+ · VIP €125+',
    dur: 'daily ≈10:00–22:00, later when busy; reserve ahead in August',
    url: 'https://wetstoriessantorini.gr/',
    note: 'Sunbeds and cabanas on the black sand, towels, showers, changing rooms, Mediterranean food, a boutique, and local and international DJs playing house and deep house that builds through the afternoon.',
    verdict: 'A day club, not a night club — the party peaks late afternoon and it winds down around 21:00–22:00. Prices quoted vary wildly by source; confirm what €20 actually buys before you sit down.' },
  { name: 'Hassapiko', cat: 'bar', img: 'img/hassapiko.webp', imgKind: 'venue', imgFrom: 'welltraveledclub.com', type: 'bar & dance floor', group: 'Night bars & clubs',
    lat: 36.4612, lon: 25.3759, area: 'Oia', rank: 11,
    dur: 'open almost around the clock',
    url: 'https://www.welltraveledclub.com/santorini/hassapiko-bar',
    note: 'Also listed as Marykay\'s. Cocktails, DJs and actual dancing in a rustic room off the main street. 4.5 across 438 reviews.',
    verdict: 'Widely called the only real bar in Oia — the one place up there that is not a sunset terrace.' },

  // ---- hiking ----
  { name: 'Fira → Imerovigli → Oia path', cat: 'hike', img: 'img/fira-imerovigli-oia-path.jpg', imgKind: 'photo', imgFrom: 'Wikimedia · Bernard Gagnon', lat: 36.4400, lon: 25.4100, area: 'caldera rim',
    note: 'The classic rim path, roughly 10 km. Early morning in August, or not at all.' },
  { name: 'Ancient Thera climb', cat: 'hike', img: 'img/ancient-thera-climb.jpg', imgKind: 'photo', imgFrom: 'Wikimedia · Norbert Nagel', lat: 36.3625, lon: 25.4747, area: 'Mesa Vouno',
    note: 'Steep path up from Kamari — the site plus a view over both coasts.' },
  { name: 'Vlychada cliffs walk', cat: 'hike', img: 'img/vlychada-cliffs-walk.jpg', imgKind: 'satellite', imgFrom: 'satellite view', lat: 36.3392, lon: 25.4200, area: 'south coast',
    note: 'Short and flat. Check Red Beach access — rockfall closures happen.' },

  // ---- sites & indoor · ranked ----
  { name: 'Symposion by La Ponta', cat: 'site', img: 'img/symposion-by-la-ponta.jpg', imgKind: 'venue', imgFrom: 'symposionsantorini.com', type: 'arts, music & wine venue', lat: 36.3800, lon: 25.4331,
    area: 'Megalochori', rank: 1,
    price: 'grounds free · tour €12 · workshop €20 · evening show €15',
    dur: 'Tue–Sun 10:00–19:00, closed Mondays. Tour 12:00, workshop 13:30. Odysseus Returns: Wednesdays. Booking required',
    url: 'https://www.symposionsantorini.com/your-visit',
    note: 'A restored late-1700s winery run by instrument maker Yannis Pantazis: vintage Greek instruments, an artisan workshop, photography, a mythological botanical garden, the Homeric wine café, and wine tasting of four Greek wines on request.',
    verdict: 'The one place here that is music, art and wine at once — and Wed 20 Aug is your only shot at the Odysseus Returns performance.' },
  { name: 'MATI Mesaria', cat: 'site', img: 'img/mati-mesaria.jpg', imgKind: 'venue', imgFrom: 'matiartgallery.com', type: 'gallery in a canava', lat: 36.4009, lon: 25.4455,
    area: 'Mesaria', rank: 2,
    dur: 'Tue–Sun 11:00–19:00, closed Mondays (1 May – 15 Oct)',
    url: 'https://matiartgallery.com/location/mati-mesaria/',
    note: 'Opened 2024 in a restored 1900s canava: a permanent Yorgos Kypris solo show, changing exhibitions, artist residencies, plus guided art tours with wine pairing from a local vineyard.',
    verdict: 'The art stop that doubles as a wine stop, in a quiet village — closest thing to Symposion in spirit. Tour prices are not published.' },
  { name: 'Akrotiri excavation', cat: 'site', img: 'img/akrotiri-excavation.jpg', imgKind: 'photo', imgFrom: 'Wikimedia · Norbert Nagel', type: 'archaeological site', lat: 36.3517, lon: 25.4033, area: 'Akrotiri', rank: 3,
    note: 'Bronze Age town under a roof — the good midday-heat option.',
    verdict: 'The island\'s essential site, and shaded.' },
  { name: 'MATI Fira', cat: 'site', img: 'img/mati-fira.jpg', imgKind: 'venue', imgFrom: 'matiartgallery.com', type: 'gallery', lat: 36.4159, lon: 25.4311,
    area: 'Fira, Fabrica centre', rank: 4,
    dur: 'August: Mon–Fri 10:00–23:00, Sat–Sun 10:00–20:00',
    url: 'https://matiartgallery.com/location/mati-fira/',
    note: 'Kypris\'s contemporary sculpture — the Frozen Fish, Shipwrecks and Cages & Flights series — plus etchings and jewellery. "Mati" means eye.',
    verdict: 'Open until 23:00 in August, in the same courtyard as Ouzeri. A walk-in after dinner, not a plan.' },
];

/* Fixed points — always on the map, never filtered. */
const ANCHORS = [
  { name: 'Thira airport (JTR)', lat: 36.3992, lon: 25.4793, note: 'Land 13:30 Sun 17 · fly 19:30 Fri 22' },
  { name: 'Athinios port', lat: 36.3843, lon: 25.4271, note: 'Ferries leave from here' },
  // { name: 'Hotel', lat: 0, lon: 0, note: 'Not booked yet' },
];

/* Routes drawn as lines rather than pins. */
const ROUTES = [
  { name: 'Fira → Imerovigli → Oia rim path', color: '#4E7C3F',
    points: [[36.4167, 25.4286], [36.4260, 25.4250], [36.4325, 25.4220], [36.4420, 25.4080],
             [36.4520, 25.3930], [36.4600, 25.3800], [36.4618, 25.3755]] },
];
