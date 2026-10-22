export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  flag: string;
  region: "Middle East" | "Europe" | "Asia" | "Spiritual";
  image: string;
  tagline: string;
  description: string;
  bestTimeToVisit: string;
  visaEase: "e-Visa / Instant" | "Easy Sticker" | "Embassy Appointment" | "Visa on Arrival";
  startingPricePKR: string;
  toursCount: number;
  popularSpots: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  country: string;
  duration: string;
  days: number;
  nights: number;
  category: "Group Tour" | "Family Vacation" | "Honeymoon Luxury" | "Adventure" | "Spiritual";
  pricePKR: string;
  pricePerPerson: string;
  rating: number;
  reviewsCount: number;
  image: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export interface VisaService {
  id: string;
  slug: string;
  country: string;
  flag: string;
  visaType: string;
  processingTime: string;
  validity: string;
  entryType: "Single Entry" | "Multiple Entry" | "Single / Multiple Entry";
  pricePKR: string;
  embassyFeeNote: string;
  requirements: string[];
  features: string[];
}

export interface UmrahPackage {
  id: string;
  slug: string;
  title: string;
  tier: "Economy" | "4-Star Executive" | "5-Star VIP Royal";
  duration: string;
  makkahHotel: string;
  makkahDistance: string;
  madinahHotel: string;
  madinahDistance: string;
  pricePKR: string;
  airline: string;
  inclusions: string[];
  highlights: string[];
}

export interface TravellerReview {
  id: string;
  name: string;
  city: string;
  trip: string;
  date: string;
  rating: number;
  avatar: string;
  comment: string;
  verified: boolean;
}

// ==========================================
// DESTINATIONS DATA
// ==========================================
export const DESTINATIONS: Destination[] = [
  {
    id: "dest-1",
    slug: "turkey",
    name: "Istanbul & Cappadocia",
    country: "Türkiye",
    flag: "🇹🇷",
    region: "Europe",
    image: "/images/dest-istanbul.jpg",
    tagline: "Where history meets modern charm & magical fairy chimneys",
    description: "Experience the vibrant crossroads of East and West. Sail along the majestic Bosphorus, explore the Hagia Sophia and Blue Mosque, and soar in hot air balloons over Cappadocia's surreal valleys.",
    bestTimeToVisit: "March – May & Sept – Nov",
    visaEase: "Easy Sticker",
    startingPricePKR: "285,000",
    toursCount: 4,
    popularSpots: ["Hagia Sophia", "Bosphorus Cruise", "Cappadocia Valleys", "Grand Bazaar"],
  },
  {
    id: "dest-2",
    slug: "dubai",
    name: "Dubai & Abu Dhabi",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    image: "/images/dest-dubai.jpg",
    tagline: "Dream bigger, travel further with futuristic luxury",
    description: "Marvel at the world's tallest skyscrapers, experience exhilarating desert safaris, explore the Ferrari World and Sheikh Zayed Grand Mosque in Abu Dhabi, and indulge in world-class shopping.",
    bestTimeToVisit: "November – April",
    visaEase: "e-Visa / Instant",
    startingPricePKR: "195,000",
    toursCount: 5,
    popularSpots: ["Burj Khalifa", "Desert Safari", "Sheikh Zayed Mosque", "Dubai Mall"],
  },
  {
    id: "dest-3",
    slug: "switzerland",
    name: "Zurich, Lucerne & Interlaken",
    country: "Switzerland",
    flag: "🇨🇭",
    region: "Europe",
    image: "/images/dest-switzerland.jpg",
    tagline: "Alpine beauty, emerald lakes & timeless memories",
    description: "Take iconic mountain trains up to Jungfraujoch (Top of Europe), cruise on Lake Lucerne, stroll through medieval Old Towns, and witness pristine alpine landscapes.",
    bestTimeToVisit: "May – October & Dec – Feb (Snow)",
    visaEase: "Embassy Appointment",
    startingPricePKR: "640,000",
    toursCount: 3,
    popularSpots: ["Jungfraujoch", "Mount Titlis", "Lake Lucerne", "Chapel Bridge"],
  },
  {
    id: "dest-4",
    slug: "saudi-arabia",
    name: "Makkah & Madinah",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    region: "Spiritual",
    image: "/images/hero-istanbul-sunset.jpg",
    tagline: "Sacred pilgrimages with heartfelt peace & comfort",
    description: "Perform your Umrah with peace of mind. Stay in world-class hotels within walking distance of the Haram and Masjid an-Nabawi, with guided Ziyarat to historical Islamic sites.",
    bestTimeToVisit: "All Year Round & Ramadan",
    visaEase: "e-Visa / Instant",
    startingPricePKR: "230,000",
    toursCount: 6,
    popularSpots: ["Masjid al-Haram", "Masjid an-Nabawi", "Mount Uhud", "Jabal al-Nour"],
  },
  {
    id: "dest-5",
    slug: "azerbaijan",
    name: "Baku & Gabala",
    country: "Azerbaijan",
    flag: "🇦🇿",
    region: "Asia",
    image: "/images/dest-dubai.jpg",
    tagline: "The Pearl of the Caspian Sea & Caucasus Mountain Retreats",
    description: "Wander through the UNESCO-listed Old City (Icherisheher), gaze at the futuristic Flame Towers, and take a scenic cable car ride across the green peaks of Gabala.",
    bestTimeToVisit: "April – June & Sept – October",
    visaEase: "e-Visa / Instant",
    startingPricePKR: "175,000",
    toursCount: 3,
    popularSpots: ["Flame Towers", "Old City Baku", "Gabala Cable Car", "Nizami Street"],
  },
  {
    id: "dest-6",
    slug: "malaysia",
    name: "Kuala Lumpur & Langkawi",
    country: "Malaysia",
    flag: "🇲🇾",
    region: "Asia",
    image: "/images/dest-switzerland.jpg",
    tagline: "Lush tropical rainforests, pristine beaches & twin towers",
    description: "Ascend the iconic Petronas Twin Towers, explore the ancient limestone Batu Caves, and unwind on the pristine white-sand beaches and cable cars of Langkawi island.",
    bestTimeToVisit: "November – August",
    visaEase: "e-Visa / Instant",
    startingPricePKR: "210,000",
    toursCount: 3,
    popularSpots: ["Petronas Towers", "Batu Caves", "Langkawi Sky Bridge", "Genting Highlands"],
  },
];

// ==========================================
// TOURS PACKAGES DATA
// ==========================================
export const TOURS: TourPackage[] = [
  {
    id: "tour-1",
    slug: "classic-istanbul-cappadocia",
    title: "7 Days Classic Istanbul & Cappadocia Discovery",
    destinationSlug: "turkey",
    destinationName: "Istanbul & Cappadocia",
    country: "Türkiye",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    category: "Group Tour",
    pricePKR: "285,000",
    pricePerPerson: "PKR 285,000 / person",
    rating: 4.9,
    reviewsCount: 142,
    image: "/images/dest-istanbul.jpg",
    isPopular: true,
    isFeatured: true,
    highlights: [
      "Full-day historic Istanbul tour (Hagia Sophia, Blue Mosque, Topkapi Palace)",
      "Scenic Bosphorus Sunset Cruise with Turkish refreshments",
      "Hot Air Balloon flight over Cappadocia's fairy chimneys",
      "Cave hotel stay & Goreme Open Air Museum guided tour",
      "Domestic flights Istanbul - Cappadocia included",
    ],
    inclusions: [
      "4-star hotel accommodations with daily breakfast",
      "Domestic air tickets (Istanbul - Nevsehir/Kayseri round trip)",
      "Airport VIP transfers in luxury Mercedes Sprinter",
      "Professional English & Urdu speaking certified guide",
      "All entrance fees to monuments as per itinerary",
    ],
    exclusions: [
      "International flights (available as add-on)",
      "Türkiye visa fee (assistance provided)",
      "Personal expenses & optional balloon ride surcharge",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Istanbul", description: "VIP pickup from Istanbul International Airport (IST) and check-in to your 4-star hotel in Sultanahmet. Evening at leisure on Taksim Istiklal Street." },
      { day: 2, title: "Imperial Istanbul Heritage", description: "Visit the legendary Hagia Sophia, Sultanahmet Blue Mosque, Hippodrome, and Grand Bazaar with over 4,000 artisan shops." },
      { day: 3, title: "Bosphorus Cruise & Flight to Cappadocia", description: "Morning scenic cruise between Europe and Asia along the Bosphorus Strait. Afternoon flight to Cappadocia and check-in to luxury cave hotel." },
      { day: 4, title: "Cappadocia Hot Air Balloon & Valleys", description: "Early morning hot air balloon experience (optional) at sunrise. Visit Goreme Open Air Museum, Devrent Valley, and Pasabag fairy chimneys." },
      { day: 5, title: "Underground City & Pottery Workshop", description: "Explore Derinkuyu Underground City and watch master potters at Avanos riverbanks. Sunset viewpoint at Uchisar Castle." },
      { day: 6, title: "Return Flight to Istanbul", description: "Flight back to Istanbul. Free afternoon for shopping at Cevahir Mall or Galata Port waterfront dining." },
      { day: 7, title: "Departure", description: "Transfer to Istanbul Airport for your return flight to Pakistan with treasured memories." },
    ],
  },
  {
    id: "tour-2",
    slug: "glamour-dubai-desert-safari",
    title: "5 Days Glamour of Dubai & Abu Dhabi Grandeur",
    destinationSlug: "dubai",
    destinationName: "Dubai & Abu Dhabi",
    country: "United Arab Emirates",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    category: "Family Vacation",
    pricePKR: "195,000",
    pricePerPerson: "PKR 195,000 / person",
    rating: 4.8,
    reviewsCount: 198,
    image: "/images/dest-dubai.jpg",
    isPopular: true,
    isFeatured: true,
    highlights: [
      "Burj Khalifa 124th floor observation deck tickets at sunset",
      "Premium Desert Safari with dune bashing, camel rides & BBQ dinner",
      "Full-day Abu Dhabi excursion including Sheikh Zayed Grand Mosque",
      "Marina Luxury Dhow Dinner Cruise with live Tanoura dance",
      "Dubai Frame & Miracle Garden tour (seasonal)",
    ],
    inclusions: [
      "4-star hotel in Downtown/Bur Dubai with daily breakfast buffet",
      "4x4 Land Cruiser desert safari with BBQ buffet and live show",
      "Private AC coach transfers for all tours and airport runs",
      "All admission tickets as stated in program",
      "UAE Tourist Visa included with travel insurance",
    ],
    exclusions: [
      "International flights (available on Emirates/Airblue/Flydubai)",
      "Tourism Dirham hotel tax paid directly at check-in",
      "Optional water sports at JBR",
    ],
    itinerary: [
      { day: 1, title: "Welcome to Dubai", description: "Arrival at Dubai International Airport (DXB), private transfer to hotel. Evening Marina Dhow Cruise with international buffet dinner." },
      { day: 2, title: "Dubai City Tour & Burj Khalifa", description: "Half-day guided city tour: Dubai Frame, Jumeirah Mosque, Burj Al Arab photo stop. Sunset entry to Burj Khalifa 124th & 125th floor." },
      { day: 3, title: "Desert Safari Extravaganza", description: "Morning leisure for shopping at Dubai Mall. Afternoon pickup for thrilling dune bashing, sandboarding, camel rides, and Arabic BBQ feast under the stars." },
      { day: 4, title: "Full Day Abu Dhabi Grand Tour", description: "Day trip to Abu Dhabi capital. Visit the breathtaking Sheikh Zayed Grand Mosque, Emirates Palace photo stop, and Yas Island." },
      { day: 5, title: "Final Shopping & Farewell", description: "Check-out, last-minute shopping at Deira Gold & Spice Souk, transfer to airport for departure." },
    ],
  },
  {
    id: "tour-3",
    slug: "swiss-alpine-panorama",
    title: "8 Days Swiss Alpine Panorama & Scenic Lakes",
    destinationSlug: "switzerland",
    destinationName: "Zurich, Lucerne & Interlaken",
    country: "Switzerland",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    category: "Honeymoon Luxury",
    pricePKR: "640,000",
    pricePerPerson: "PKR 640,000 / person",
    rating: 5.0,
    reviewsCount: 86,
    image: "/images/dest-switzerland.jpg",
    isPopular: true,
    isFeatured: true,
    highlights: [
      "Swiss Travel Pass 1st Class unlimited trains, boats and buses",
      "Excursion to Jungfraujoch — Top of Europe (3,454m) through Eiger Glacier",
      "Mount Titlis revolving cable car & Ice Flyer glacier chair",
      "Lake Lucerne panoramic steam boat cruise",
      "Romantic stays in Zurich, Interlaken, and Lucerne",
    ],
    inclusions: [
      "7 nights in curated 4-star boutique alpine hotels",
      "8-Day Swiss Travel Pass (consecutive) for seamless transit",
      "Mountain mountain railway tickets (Jungfraujoch & Titlis)",
      "Daily Swiss breakfast spread",
      "Comprehensive Schengen visa document file preparation",
    ],
    exclusions: [
      "International airfare from Pakistan",
      "Schengen visa embassy fee",
      "Lunches and dinners not specified",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Zurich", description: "Arrive at Zurich Airport, board scenic train to your hotel. Walk along Bahnhofstrasse and Lake Zurich promenade." },
      { day: 2, title: "Zurich to Lucerne", description: "Short train to Lucerne. Walk across the historic wooden Chapel Bridge and Lion Monument. Afternoon cruise on Lake Lucerne." },
      { day: 3, title: "Mount Titlis & Glacier Wonder", description: "Ascend to 10,000 feet on the Rotair revolving cable car. Walk the Titlis Cliff Walk and explore glacier caves." },
      { day: 4, title: "Lucerne to Interlaken via GoldenPass Line", description: "Scenic GoldenPass express train through emerald valleys and cascading waterfalls to Interlaken between Lakes Thun and Brienz." },
      { day: 5, title: "Jungfraujoch — Top of Europe", description: "Journey aboard the Eiger Express tri-cable gondola and cogwheel train to Europe's highest railway station. Breathtaking views of Aletsch Glacier." },
      { day: 6, title: "Lauterbrunnen & Grindelwald First", description: "Explore the valley of 72 waterfalls in Lauterbrunnen and ride the First Cliff Walk in Grindelwald." },
      { day: 7, title: "Return to Zurich", description: "Scenic train back to Zurich for gourmet chocolate tasting and farewell dinner." },
      { day: 8, title: "Homeward Bound", description: "Train to Zurich Airport for your flight back home." },
    ],
  },
  {
    id: "tour-4",
    slug: "executive-umrah-10days",
    title: "10 Days Executive Umrah Package with 5-Star Haram Proximity",
    destinationSlug: "saudi-arabia",
    destinationName: "Makkah & Madinah",
    country: "Saudi Arabia",
    duration: "10 Days / 9 Nights",
    days: 10,
    nights: 9,
    category: "Spiritual",
    pricePKR: "340,000",
    pricePerPerson: "PKR 340,000 / person",
    rating: 5.0,
    reviewsCount: 310,
    image: "/images/hero-istanbul-sunset.jpg",
    isPopular: true,
    isFeatured: true,
    highlights: [
      "5 Nights in Makkah: Swissôtel / Clock Tower (0 meters from courtyard)",
      "4 Nights in Madinah: Pullman Zamzam / Frontel (steps from Gate 300)",
      "Dedicated Umrah Visa processing & Saudi medical insurance",
      "High-speed Haramain High-Speed Rail between Makkah & Madinah",
      "Private VIP air-conditioned GMC Yukon / Coaster for all Ziyarat",
    ],
    inclusions: [
      "5-star hotel luxury accommodations with daily breakfast buffet",
      "Saudi Tourist / Umrah Visa fee with complete portal filing",
      "Haramain Bullet Train tickets (Business/Economy class)",
      "Comprehensive Ziyarat in Makkah (Ghar Hira, Thawr, Mina, Arafat, Muzdalifah)",
      "Comprehensive Ziyarat in Madinah (Masjid Quba, Uhud Martyrs, Qiblatayn)",
      "24/7 ground staff assistance in Urdu, Punjabi & English",
    ],
    exclusions: [
      "International flights (custom bookings with PIA/Saudia available)",
      "Personal laundry and room service expenses",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Jeddah / Makkah", description: "VIP reception at King Abdulaziz International Airport Jeddah. Private transfer to Makkah hotel. Perform first Umrah with our resident guide." },
      { day: 2, title: "Ibadah in Masjid al-Haram", description: "Day devoted to prayers, Tawaf, and recitation inside the Holy Kaaba courtyard." },
      { day: 3, title: "Historical Ziyarat Makkah", description: "Guided tour to Jabal al-Nour (Cave of Hira), Cave of Thawr, Mina tent city, Arafat plain, and Muzdalifah." },
      { day: 4, title: "Personal Prayers & Second Umrah Option", description: "Free day for personal worship, Nafli Tawaf, or second Umrah from Masjid Aisha (Tan'eem)." },
      { day: 5, title: "Makkah Sacred Reflections", description: "Spiritual contemplation and prayers at the Grand Mosque." },
      { day: 6, title: "Haramain Bullet Train to Madinah Munawwarah", description: "Board the fast bullet train to the City of the Prophet (PBUH). Check-in to hotel steps away from the Prophet's Mosque." },
      { day: 7, title: "Salam at Roza-e-Rasool (PBUH)", description: "Pay respects at the blessed rawdah and explore the serenity of the Prophet's Mosque." },
      { day: 8, title: "Holy Ziyarat of Madinah", description: "Visit Masjid Quba (prayer rewards equivalent to an Umrah), Mount Uhud & the Martyrs cemetery, and Masjid al-Qiblatayn." },
      { day: 9, title: "Madinah Date Market & Reflections", description: "Visit the renowned Madinah Ajwa date markets and evening prayers in the courtyard under the giant umbrellas." },
      { day: 10, title: "Departure", description: "Final Salam at Roza-e-Rasool (PBUH) and transfer to Madinah / Jeddah airport for departure to Pakistan." },
    ],
  },
  {
    id: "tour-5",
    slug: "baku-gabala-retreat",
    title: "6 Days Baku Highlights & Gabala Mountain Escape",
    destinationSlug: "azerbaijan",
    destinationName: "Baku & Gabala",
    country: "Azerbaijan",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    category: "Group Tour",
    pricePKR: "175,000",
    pricePerPerson: "PKR 175,000 / person",
    rating: 4.7,
    reviewsCount: 76,
    image: "/images/dest-dubai.jpg",
    isPopular: false,
    isFeatured: false,
    highlights: [
      "Baku Old City walking tour & Maiden Tower observation",
      "Ateshgah Fire Temple & Yanardag (Burning Mountain) natural gas fire",
      "Overnight stay in Gabala mountain resort with Tufandag cable car",
      "Nohur Lake boat ride & picturesque 7 Gozel (Seven Beauties) Waterfall",
      "Instant ASAN e-Visa included",
    ],
    inclusions: [
      "4-star hotel in Baku central + 1 night resort in Gabala",
      "ASAN Azerbaijan e-Visa with official confirmation",
      "All transfers in private Mercedes Sprinter coach",
      "Daily breakfast + English & Urdu speaking tour manager",
      "Entrance tickets to museums and cable cars",
    ],
    exclusions: [
      "International flights (available on Azerbaijan Airlines or Flydubai)",
      "Lunch and dinner meals",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Baku", description: "Pickup from Heydar Aliyev Airport, check-in to hotel, evening walk along Baku Boulevard." },
      { day: 2, title: "Old City & Modern Architecture", description: "Tour of Icherisheher, Shirvanshahs' Palace, Maiden Tower, and the world-renowned Heydar Aliyev Centre." },
      { day: 3, title: "Land of Fire Tour", description: "Visit Ateshgah Zoroastrian Fire Temple and the natural eternal flame of Yanar Dag." },
      { day: 4, title: "Journey to Gabala", description: "Drive through scenic mountain passes to Gabala. Visit serene Nohur Lake and check-in to mountain resort." },
      { day: 5, title: "Tufandag Cable Car & Return to Baku", description: "Ride the multi-stage ropeway at Tufandag Mountain Resort. Afternoon return to Baku for shopping on Nizami Street." },
      { day: 6, title: "Departure", description: "Transfer to airport for return flight." },
    ],
  },
  {
    id: "tour-6",
    slug: "malaysia-tropical-escape",
    title: "6 Days Kuala Lumpur & Langkawi Island Retreat",
    destinationSlug: "malaysia",
    destinationName: "Kuala Lumpur & Langkawi",
    country: "Malaysia",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    category: "Family Vacation",
    pricePKR: "210,000",
    pricePerPerson: "PKR 210,000 / person",
    rating: 4.8,
    reviewsCount: 92,
    image: "/images/dest-switzerland.jpg",
    isPopular: false,
    isFeatured: false,
    highlights: [
      "Petronas Twin Towers skybridge & observation deck",
      "Batu Caves 272 rainbow steps & giant Lord Murugan statue",
      "Domestic flights to Langkawi tropical island included",
      "Langkawi Cable Car & curved Sky Bridge mountain walk",
      "Mangrove boat tour with eagle feeding experience",
    ],
    inclusions: [
      "3 Nights in Kuala Lumpur + 2 Nights in Langkawi beachfront resort",
      "Domestic air tickets (KL to Langkawi return)",
      "Malaysia e-Visa / entry document assistance",
      "Daily breakfast buffet",
      "Private AC transfers and tour excursions",
    ],
    exclusions: [
      "International flights from Pakistan",
      "Tourism tax payable at hotel check-in",
      "Personal shopping and water sports expenses",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kuala Lumpur", description: "Meet & greet at KLIA airport, transfer to hotel in Bukit Bintang. Free evening." },
      { day: 2, title: "KL City Wonders & Batu Caves", description: "Petronas Towers photo stop, King's Palace, National Monument, and colorful Batu Caves." },
      { day: 3, title: "Flight to Langkawi Island", description: "Short flight to Langkawi. Transfer to seaside resort. Sunset at Cenang Beach." },
      { day: 4, title: "Langkawi Cable Car & Island Safari", description: "Ride the SkyCab to the peak and walk the SkyBridge. Afternoon boat tour through Kilim Karst Geoforest Park." },
      { day: 5, title: "Return to Kuala Lumpur", description: "Flight back to KL. Free evening for duty-free shopping at Pavilion Mall." },
      { day: 6, title: "Departure", description: "Transfer to airport for return flight to Pakistan." },
    ],
  },
];

// ==========================================
// VISA SERVICES DATA
// ==========================================
export const VISA_SERVICES: VisaService[] = [
  {
    id: "visa-1",
    slug: "turkey-visa",
    country: "Türkiye",
    flag: "🇹🇷",
    visaType: "Tourist Sticker / e-Visa",
    processingTime: "10 – 15 Working Days (Sticker) / 24 Hours (e-Visa with valid US/UK/Schengen)",
    validity: "90 Days Validity (30 Days Stay)",
    entryType: "Single Entry",
    pricePKR: "48,000",
    embassyFeeNote: "Includes Anatolia Travel Centre submission appointment fees & biometric tracking",
    requirements: [
      "Original Passport valid for at least 6 months",
      "Copies of previous passports and all valid/expired visas",
      "Two recent biometric photos (5x5 cm white background, matte finish)",
      "Bank Account Statement for last 6 months with minimum balance PKR 500,000+ stamped by bank",
      "Bank Account Maintenance Certificate",
      "Employment Letter / Salary Slips for employees or NTN & Company Registration for businessmen",
      "Valid CNIC copy & FRC (Family Registration Certificate) if traveling with family",
      "Confirmed hotel reservation and flight itinerary (provided by Bilal Travels)",
    ],
    features: [
      "Complete document scrutiny & file preparation",
      "Anatolia appointment booking assistance",
      "Travel insurance compliant with Turkish embassy standards",
      "Express processing guidance",
    ],
  },
  {
    id: "visa-2",
    slug: "dubai-visa",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    visaType: "30 Days & 60 Days Tourist e-Visa",
    processingTime: "24 – 48 Hours Express",
    validity: "60 Days from issue date",
    entryType: "Single Entry",
    pricePKR: "28,500",
    embassyFeeNote: "Direct GDRFA / ICP UAE Immigration government fee and mandatory health insurance included",
    requirements: [
      "Clear color scan of Passport Bio page (valid 6+ months)",
      "Passport size photograph with white background",
      "Front and back scan of valid Pakistani CNIC",
      "Confirmed return ticket (can be provided on request)",
    ],
    features: [
      "99.4% approval rate with direct UAE immigration tie-ups",
      "Super-fast turnaround within 1-2 business days",
      "Official government approved e-Visa PDF with QR code",
      "Comprehensive COVID and emergency medical cover included",
    ],
  },
  {
    id: "visa-3",
    slug: "uk-visa",
    country: "United Kingdom",
    flag: "🇬🇧",
    visaType: "Standard Visitor Visa (6 Months, 2 Years, 5 Years)",
    processingTime: "15 – 21 Working Days (Priority available in 5 days)",
    validity: "6 Months Multiple Entry",
    entryType: "Multiple Entry",
    pricePKR: "95,000",
    embassyFeeNote: "Home Office UKVI application fees and VFS Global biometric appointment fee",
    requirements: [
      "Valid Passport with blank visa pages",
      "Bank statement of 6 months showing legitimate source of funds and stable income",
      "Employment letter, tax returns (Active FBR Taxpayer status), and property/asset proofs",
      "Detailed travel itinerary & accommodation plans",
      "Cover letter explaining purpose of visit and strong ties to Pakistan",
    ],
    features: [
      "Comprehensive consultation on UKVI financial documentation rules",
      "Cover letter drafting by our Senior Immigration Consultant",
      "VFS appointment scheduling (Islamabad, Lahore, Karachi, Mirpur)",
      "Document scanning and upload directly to UKVI portal",
    ],
  },
  {
    id: "visa-4",
    slug: "schengen-visa",
    country: "Schengen Europe (France, Switzerland, Italy, Germany)",
    flag: "🇪🇺",
    visaType: "Short-stay Uniform Schengen Visa (Type C)",
    processingTime: "15 – 25 Working Days",
    validity: "Up to 90 Days within 180 Days",
    entryType: "Single / Multiple Entry",
    pricePKR: "85,000",
    embassyFeeNote: "Official European Embassy 80 Euro fee + Gerry's / VFS appointment charges",
    requirements: [
      "Passport valid at least 3 months beyond departure from Schengen territory",
      "Schengen compliant biometric photographs (3.5 x 4.5 cm)",
      "Bank statement (last 6 months) demonstrating adequate daily travel allowance",
      "FBR Tax Returns & Salary Certificates or Company NTN",
      "30,000 EUR minimum coverage Travel Medical Insurance (provided by Bilal Travels)",
      "Day-by-day confirmed flight reservation and hotel vouchers across European cities",
    ],
    features: [
      "Selection of most suitable Schengen country based on travel itinerary",
      "Flawless cover letter and itinerary builder",
      "Guaranteed compliant travel health insurance",
      "Mock interview preparation for embassy appointments",
    ],
  },
  {
    id: "visa-5",
    slug: "saudi-arabia-visa",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    visaType: "Umrah Visa & 1-Year Multiple Entry Tourist Visa",
    processingTime: "2 – 4 Working Days",
    validity: "90 Days for Umrah / 365 Days Multiple for Tourist",
    entryType: "Multiple Entry",
    pricePKR: "42,000",
    embassyFeeNote: "Saudi Ministry of Hajj & Umrah / MOFA platform charges + insurance",
    requirements: [
      "Original Passport valid for 6 months",
      "Photograph with white background",
      "Proof of accommodation in Makkah & Madinah (included in our packages)",
      "Valid CNIC copy",
    ],
    features: [
      "Fast-track issuance via official Saudi Nusuk / Enjaz platform",
      "Approved for performing Umrah and visiting Riyadh, Jeddah, AlUla",
      "Includes mandatory Saudi Council of Health Insurance policy",
    ],
  },
  {
    id: "visa-6",
    slug: "azerbaijan-visa",
    country: "Azerbaijan",
    flag: "🇦🇿",
    visaType: "ASAN Official Tourist e-Visa",
    processingTime: "Standard: 3 Days | Urgent: 3 Hours",
    validity: "90 Days Validity (30 Days Stay)",
    entryType: "Single Entry",
    pricePKR: "12,500",
    embassyFeeNote: "ASAN Visa portal fees and service tax included",
    requirements: [
      "High resolution scan of Passport Bio page (valid 3+ months beyond trip)",
      "Contact telephone number and home address in Pakistan",
      "Tentative travel dates and accommodation in Baku",
    ],
    features: [
      "Direct online approval delivered straight to your WhatsApp & Email",
      "No embassy visit or biometrics required",
      "Instant correction and re-filing support in case of typos",
    ],
  },
];

// ==========================================
// UMRAH PACKAGES DATA
// ==========================================
export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: "umrah-vip",
    slug: "5-star-royal-clock-tower",
    title: "VIP 5-Star Royal Clock Tower Umrah Package",
    tier: "5-Star VIP Royal",
    duration: "10 Days / 9 Nights (5 Makkah + 4 Madinah)",
    makkahHotel: "Swissôtel / Fairmont Makkah Clock Royal Tower",
    makkahDistance: "0 Meters (Direct access to Haram courtyard & Kaaba views)",
    madinahHotel: "Pullman Zamzam / The Oberoi Madinah",
    madinahDistance: "50 Meters from Bab as-Salam Gate",
    pricePKR: "395,000",
    airline: "Saudi Arabian Airlines / PIA Direct Executive",
    inclusions: [
      "5-Star luxury suite accommodations with daily international breakfast",
      "Saudi e-Visa with full health insurance coverage",
      "Private GMC Yukon / Cadillac luxury vehicle for all airport & Ziyarat trips",
      "Haramain Bullet Train Business Class tickets between Makkah & Madinah",
      "Exclusive guided Ziyarat in Makkah & Madinah with scholarly Islamic historian",
      "Complimentary 5 Litres Zamzam water canister per pilgrim",
      "24/7 dedicated Urdu & English speaking executive concierge",
    ],
    highlights: [
      "Zero-meter Haram proximity: Walk into prayer in 60 seconds",
      "Mesmerizing views of the Holy Kaaba from luxury suites",
      "Private transfers — no waiting for group buses",
    ],
  },
  {
    id: "umrah-exec",
    slug: "4-star-executive-comfort",
    title: "4-Star Executive Comfort Umrah Package",
    tier: "4-Star Executive",
    duration: "10 Days / 9 Nights (5 Makkah + 4 Madinah)",
    makkahHotel: "Anjum Hotel Makkah / Al Shohada",
    makkahDistance: "250 Meters (3 minutes flat walk to King Fahd gate)",
    madinahHotel: "Leader Al Muna Kareem / Al Aqeeq Hotel",
    madinahDistance: "150 Meters from Northern Courtyard",
    pricePKR: "285,000",
    airline: "PIA / Saudia / Airblue Direct",
    inclusions: [
      "4-Star hotels with daily breakfast buffet",
      "Umrah Visa processing & medical insurance",
      "Comfortable air-conditioned coach transfers",
      "Full Ziyarat in Makkah and Madinah with knowledgeable guide",
      "Free 5L Zamzam gift on return",
      "Support team stationed in Makkah & Madinah",
    ],
    highlights: [
      "Excellent value balancing short walking distance and reasonable cost",
      "Clean, modern hotel rooms with dedicated Pakistani guest services",
      "Seamless group Ziyarat with comfortable coaches",
    ],
  },
  {
    id: "umrah-econ",
    slug: "economy-value-14days",
    title: "14 Days Affordable Spiritual Umrah Package",
    tier: "Economy",
    duration: "14 Days / 13 Nights (7 Makkah + 6 Madinah)",
    makkahHotel: "Emaar Grand / Kiswah Towers Makkah",
    makkahDistance: "750 Meters (with complimentary 24/7 round-the-clock shuttle)",
    madinahHotel: "Dar Al Naeem / Karam Golden Madinah",
    madinahDistance: "400 Meters easy walk to Markaziya",
    pricePKR: "195,000",
    airline: "Fly Jinnah / AirSial / Gulf Air",
    inclusions: [
      "Clean and sanitized 3-star accommodations",
      "Umrah electronic visa & insurance",
      "24/7 dedicated free air-conditioned bus shuttle from hotel to Haram",
      "Complete historical Ziyarat tour in Makkah and Madinah",
      "Group assistance from departure to arrival",
    ],
    highlights: [
      "Maximum duration (14 days) for deep worship and Quran recitation",
      "Most budget-friendly package in Pakistan with verified reliability",
      "Special room configurations (Quad, Triple, Double sharing)",
    ],
  },
];

// ==========================================
// REVIEWS & STORIES DATA
// ==========================================
export const TRAVELLER_STORIES: TravellerReview[] = [
  {
    id: "rev-1",
    name: "Dr. Tariq & Family",
    city: "Lahore, Pakistan",
    trip: "7 Days Istanbul & Cappadocia Tour",
    date: "September 2025",
    rating: 5,
    avatar: "👨‍👩‍👧‍👦",
    comment: "Bilal Travels took care of everything for our family trip to Türkiye. The VIP Mercedes van in Istanbul was spotless, our guide Hamza spoke fluent Urdu, and the hot air balloon in Cappadocia was an unforgettable memory. Highly recommended!",
    verified: true,
  },
  {
    id: "rev-2",
    name: "Muhammad Usman & Wife",
    city: "Islamabad, Pakistan",
    trip: "Swiss Alpine Honeymoon Tour",
    date: "August 2025",
    rating: 5,
    avatar: "🏔️",
    comment: "Getting the Swiss Schengen visa was our biggest concern, but the Bilal Travels visa team prepared our file with 100% precision. We got our visas in 14 days and the Swiss Travel Pass itinerary was like a fairytale dream.",
    verified: true,
  },
  {
    id: "rev-3",
    name: "Haji Abdul Rasheed",
    city: "Karachi, Pakistan",
    trip: "VIP 5-Star Clock Tower Umrah",
    date: "December 2025",
    rating: 5,
    avatar: "🕌",
    comment: "Our elderly parents could easily walk to the Haram inside the Swissôtel elevator. The bullet train between Makkah and Madinah made the journey so peaceful and restful. May Allah bless the entire Bilal Travels team for their sincere service.",
    verified: true,
  },
  {
    id: "rev-4",
    name: "Engr. Farhan Qureshi",
    city: "Faisalabad, Pakistan",
    trip: "Dubai & Abu Dhabi Vacation",
    date: "January 2026",
    rating: 5,
    avatar: "✈️",
    comment: "Dubai visas were received within 36 hours on WhatsApp! The desert safari with private Land Cruiser and Burj Khalifa sunset slot were booked perfectly. No hidden costs whatsoever.",
    verified: true,
  },
];

// ==========================================
// OFFICIAL FLYER VISA DETAILS (14+ COUNTRIES & CATEGORIES)
// ==========================================
export interface FlyerVisaOption {
  timeRequired: string;
  duration: string;
  type: "E.Visa" | "Sticker Visa";
  category: "visit" | "work" | "freelance" | "business";
  note?: string;
}

export interface FlyerVisaCountry {
  serialNo: number;
  country: string;
  flag: string;
  code: string;
  slug: string;
  tagline: string;
  image: string;
  options: FlyerVisaOption[];
  categories: ("visit" | "work" | "freelance" | "business")[];
}

export const FLYER_VISA_COUNTRIES: FlyerVisaCountry[] = [
  {
    serialNo: 1,
    country: "Azerbaijan",
    flag: "🇦🇿",
    code: "AZ",
    slug: "azerbaijan",
    tagline: "Baku Flame Towers & Caspian Coast",
    image: "/images/hero-baku.jpg",
    categories: ["visit", "business"],
    options: [
      { timeRequired: "3-5 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "5-7 Work. Days", duration: "90 Days Multiple", type: "E.Visa", category: "business" },
    ],
  },
  {
    serialNo: 2,
    country: "Bahrain",
    flag: "🇧🇭",
    code: "BH",
    slug: "bahrain",
    tagline: "Manama Modern Skyline & World Trade Centre",
    image: "https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=800&auto=format&fit=crop",
    categories: ["visit", "business", "work"],
    options: [
      { timeRequired: "7-10 Work. Days", duration: "14 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "7-10 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "7-10 Work. Days", duration: "365 Days Multiple", type: "E.Visa", category: "business" },
      { timeRequired: "15-25 Work. Days", duration: "2 Years Work Visa Assistance", type: "Sticker Visa", category: "work" },
    ],
  },
  {
    serialNo: 3,
    country: "Cambodia",
    flag: "🇰🇭",
    code: "KH",
    slug: "cambodia",
    tagline: "Angkor Wat Temple & Ancient Heritage",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800&auto=format&fit=crop",
    categories: ["visit"],
    options: [
      { timeRequired: "7-10 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
    ],
  },
  {
    serialNo: 4,
    country: "Indonesia",
    flag: "🇮🇩",
    code: "ID",
    slug: "indonesia",
    tagline: "Bali Tropical Paradise & Jakarta Hub",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    categories: ["visit", "business", "freelance"],
    options: [
      { timeRequired: "7-15 Work. Days", duration: "60 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "7-15 Work. Days", duration: "60 Days with docs", type: "Sticker Visa", category: "visit" },
      { timeRequired: "7-15 Work. Days", duration: "1 Yr Multiple", type: "E.Visa", category: "business" },
      { timeRequired: "10-20 Work. Days", duration: "1-2 Years Remote / Digital Nomad", type: "E.Visa", category: "freelance" },
    ],
  },
  {
    serialNo: 5,
    country: "Jordan",
    flag: "🇯🇴",
    code: "JO",
    slug: "jordan",
    tagline: "Wonders of Petra & Dead Sea Oasis",
    image: "https://images.unsplash.com/photo-1544971587-b842c27f8e14?q=80&w=800&auto=format&fit=crop",
    categories: ["visit"],
    options: [
      { timeRequired: "3-5 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
    ],
  },
  {
    serialNo: 6,
    country: "Kenya",
    flag: "🇰🇪",
    code: "KE",
    slug: "kenya",
    tagline: "Maasai Mara Safari & African Wildlife",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    categories: ["visit"],
    options: [
      { timeRequired: "10-15 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
    ],
  },
  {
    serialNo: 7,
    country: "Malaysia",
    flag: "🇲🇾",
    code: "MY",
    slug: "malaysia",
    tagline: "Petronas Twin Towers & Langkawi Island",
    image: "/images/seeview_malysia.jpeg",
    categories: ["visit", "business", "work", "freelance"],
    options: [
      { timeRequired: "3 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "8-10 Work. Days", duration: "30 Days", type: "Sticker Visa", category: "visit" },
      { timeRequired: "8-10 Work. Days", duration: "180 Days Multiple", type: "E.Visa", category: "business" },
      { timeRequired: "15-25 Work. Days", duration: "Professional / Employment Pass", type: "Sticker Visa", category: "work" },
      { timeRequired: "14-21 Work. Days", duration: "DE Rantau Nomad Freelance", type: "E.Visa", category: "freelance" },
    ],
  },
  {
    serialNo: 8,
    country: "Oman",
    flag: "🇴🇲",
    code: "OM",
    slug: "oman",
    tagline: "Sultan Qaboos Mosque & Coastal Heritage",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    categories: ["visit", "work"],
    options: [
      { timeRequired: "8-10 Work. Days", duration: "90 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "15-25 Work. Days", duration: "2 Years Employment Visa", type: "Sticker Visa", category: "work" },
    ],
  },
  {
    serialNo: 9,
    country: "Saudi Arabia",
    flag: "🇸🇦",
    code: "SA",
    slug: "saudi-arabia",
    tagline: "Sacred Makkah, Holy Madinah & Riyadh Hub",
    image: "/images/Mecca.jpeg",
    categories: ["visit", "business", "work"],
    options: [
      { timeRequired: "5-10 Work. Days", duration: "365 Days Business, Mul", type: "E.Visa", category: "business" },
      { timeRequired: "24-48 Hours", duration: "1 Year Multiple Tourist & Umrah", type: "E.Visa", category: "visit" },
      { timeRequired: "10-20 Work. Days", duration: "Work Visa Stamping & Musaned", type: "Sticker Visa", category: "work" },
    ],
  },
  {
    serialNo: 10,
    country: "Singapore",
    flag: "🇸🇬",
    code: "SG",
    slug: "singapore",
    tagline: "Marina Bay Sands & Futuristic Gardens",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop",
    categories: ["visit", "business"],
    options: [
      { timeRequired: "4-5 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "7-10 Work. Days", duration: "Multiple Entry Business", type: "E.Visa", category: "business" },
    ],
  },
  {
    serialNo: 11,
    country: "Sri Lanka",
    flag: "🇱🇰",
    code: "LK",
    slug: "sri-lanka",
    tagline: "Sigiriya Lion Rock & Emerald Ceylon Hills",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
    categories: ["visit"],
    options: [
      { timeRequired: "5-15 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
    ],
  },
  {
    serialNo: 12,
    country: "Thailand",
    flag: "🇹🇭",
    code: "TH",
    slug: "thailand",
    tagline: "Bangkok Temples, Phuket & Tropical Isles",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    categories: ["visit", "freelance"],
    options: [
      { timeRequired: "7-10 Work. Days", duration: "30 Days with docs", type: "Sticker Visa", category: "visit" },
      { timeRequired: "7-10 Work. Days", duration: "without Documents", type: "Sticker Visa", category: "visit" },
      { timeRequired: "15-20 Work. Days", duration: "Destination Thailand Visa (DTV) Freelance", type: "E.Visa", category: "freelance" },
    ],
  },
  {
    serialNo: 13,
    country: "UAE",
    flag: "🇦🇪",
    code: "AE",
    slug: "uae",
    tagline: "Burj Khalifa, Desert Safari & Luxury Dubai",
    image: "/images/dest-dubai.jpg",
    categories: ["visit", "business", "freelance", "work"],
    options: [
      { timeRequired: "5-10 Work. Days", duration: "30 Days Normal", type: "E.Visa", category: "visit" },
      { timeRequired: "24-48 Hours", duration: "30 Days On Done Base", type: "E.Visa", category: "visit" },
      { timeRequired: "5-10 Work. Days", duration: "60 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "5-10 Work. Days", duration: "5 yr Multiple", type: "E.Visa", category: "business" },
      { timeRequired: "7-12 Work. Days", duration: "2 Years Freelancer Visa (Dubai)", type: "E.Visa", category: "freelance" },
      { timeRequired: "10-20 Work. Days", duration: "2 Years Work / Employment Visa", type: "E.Visa", category: "work" },
    ],
  },
  {
    serialNo: 14,
    country: "Vietnam",
    flag: "🇻🇳",
    code: "VN",
    slug: "vietnam",
    tagline: "Ha Long Bay Emerald Waters & Hanoi Old Quarter",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
    categories: ["visit", "business"],
    options: [
      { timeRequired: "7-10 Work. Days", duration: "30 Days", type: "E.Visa", category: "visit" },
      { timeRequired: "7-10 Work. Days", duration: "30 Days Business", type: "E.Visa", category: "business" },
    ],
  },
  {
    serialNo: 15,
    country: "Schengen (Europe)",
    flag: "🇪🇺",
    code: "EU",
    slug: "schengen",
    tagline: "29 European Nations, Paris, Swiss Alps & Rome",
    image: "/images/dest-switzerland.jpg",
    categories: ["visit", "work"],
    options: [
      { timeRequired: "15-21 Work. Days", duration: "90 Days Tourist / Visit", type: "Sticker Visa", category: "visit" },
      { timeRequired: "30-60 Work. Days", duration: "National Work Permit (Poland/Portugal/Germany)", type: "Sticker Visa", category: "work" },
    ],
  },
  {
    serialNo: 16,
    country: "United Kingdom",
    flag: "🇬🇧",
    code: "GB",
    slug: "uk",
    tagline: "London Big Ben, Edinburgh Castle & Manchester",
    image: "/images/hero-london.jpg",
    categories: ["visit", "work"],
    options: [
      { timeRequired: "15-20 Work. Days", duration: "6 Months Multiple Standard Visitor", type: "Sticker Visa", category: "visit" },
      { timeRequired: "20-30 Work. Days", duration: "Skilled Worker Visa Guidance", type: "Sticker Visa", category: "work" },
    ],
  },
];
