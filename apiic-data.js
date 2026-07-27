/* ==========================================================================
   apiic-data.js — Canonical APIIC reference data
   Sourced from the live corporate site apiic.in (harvested 26 Jul 2026).
   Consumed by apiic-platform.js (search / assistant / help desk) and by the
   Leadership, Link Directory and Help Desk pages.
   ========================================================================== */
(function (root) {
  'use strict';

  /* ---------------------------------------------------------------- ORG ---- */
  var ORG = {
    name: 'Andhra Pradesh Industrial Infrastructure Corporation Limited',
    short: 'APIIC',
    tagline: 'The Future is Here',
    undertaking: 'A Government of Andhra Pradesh Undertaking',
    logo: 'assets/APIIC-logo.png',
    incorporated: '26 September 1973',
    authorisedCapital: '₹20.00 crore',
    paidUpCapital: '₹16.33 crore',
    cin: 'U45209AP1973SGC001671',
    gstin: '37AABCA9029K1ZG',
    pan: 'AABCA9029K',
    website: 'https://apiic.in',
    headOffice: {
      lines: [
        'APIIC Towers, Plot No. 1 (9th, 10th & 11th Floors)',
        'IT Park, Mangalagiri',
        'Guntur District, Andhra Pradesh — 522503'
      ],
      phone: '+91-863-2381850',
      email: 'invest@apiic.in',
      hours: 'Monday to Friday · 10:30 to 17:00 IST · closed on second Saturdays and public holidays'
    },
    social: [
      { label: 'Facebook', icon: 'ph-facebook-logo', url: 'https://www.facebook.com/apiicofficial', colour: '#1877F2' },
      { label: 'X (Twitter)', icon: 'ph-twitter-logo', url: 'https://twitter.com/apiicofficial', colour: '#1D9BF0' },
      { label: 'YouTube', icon: 'ph-youtube-logo', url: 'https://apiic.in', colour: '#E02F2F' },
      { label: 'LinkedIn', icon: 'ph-linkedin-logo', url: 'https://apiic.in', colour: '#0A66C2' }
    ]
  };

  /* -------------------------------------------------------- KEY FIGURES ---- */
  var STATS = [
    { key: 'landbank', label: 'Total land bank', value: '1,42,600', unit: 'acres', note: 'More than 1.4 lakh acres held statewide', icon: 'ph-stack', verified: '21 JUL 2026', owner: 'LAND BANK CELL' },
    { key: 'available', label: 'Available land bank', value: '44,000+', unit: 'acres', note: 'Vacant and allotable across parks and land banks', icon: 'ph-squares-four', verified: '24 JUL 2026', owner: 'ASSET MGMT' },
    { key: 'parks', label: 'Industrial parks', value: '550+', unit: 'parks & estates', note: 'Developed and under development across 26 districts', icon: 'ph-buildings', verified: '21 JUL 2026', owner: 'ESTATE MGMT' },
    { key: 'districts', label: 'Districts covered', value: '26', unit: 'districts', note: 'Every district of Andhra Pradesh has APIIC presence', icon: 'ph-map-trifold', verified: '21 JUL 2026', owner: 'PLANNING' },
    { key: 'coast', label: 'Coastline', value: '974', unit: 'km', note: 'Longest coastline on India’s east coast · 4 operational ports', icon: 'ph-anchor', verified: '18 JUL 2026', owner: 'INFRA PLANNING' },
    { key: 'incorporated', label: 'Incorporated', value: '1973', unit: '26 September', note: 'Authorised capital ₹20.00 cr · paid-up ₹16.33 cr', icon: 'ph-seal-check', verified: 'STATUTORY', owner: 'COMPANY SECRETARY' }
  ];

  /* ---------------------------------------------------------- LEADERSHIP -- */
  /* Political leadership and the Board of Directors, APIIC Ltd., Mangalagiri */
  var POLITICAL = [
    {
      name: 'Sri Nara Chandrababu Naidu',
      role: 'Hon’ble Chief Minister',
      org: 'Government of Andhra Pradesh',
      kind: 'political',
      note: 'Sets the state’s industrial growth agenda and chairs the State Investment Promotion Board.'
    },
    {
      name: 'Sri T. G. Bharath',
      role: 'Hon’ble Minister for Industries & Commerce, Food Processing',
      org: 'Government of Andhra Pradesh',
      kind: 'political',
      note: 'Administrative minister for the Industries & Commerce Department, APIIC’s parent department.'
    }
  ];

  var BOARD = [
    { name: 'Sri M. Rama Raju', role: 'Chairman', kind: 'exec', note: 'Ex-MLA · Chairman, APIIC Limited', icon: 'ph-medal' },
    { name: 'Sri Dinesh Kumar A. S., IAS', role: 'Vice-Chairman & Managing Director', kind: 'exec', note: 'Chief executive of the Corporation; accountable for land, parks and project delivery', icon: 'ph-user-focus' },
    { name: 'Dr. N. Yuvaraj, IAS', role: 'Secretary to Government', kind: 'govt', note: 'Industries & Commerce and Food Processing Department', icon: 'ph-bank' },
    { name: 'Sri Bhaskar Katamneni, IAS', role: 'Secretary to Government', kind: 'govt', note: 'Information Technology, Electronics & Communications Department', icon: 'ph-bank' },
    { name: 'Sri D. Ronald Rose, IAS', role: 'Secretary to Government', kind: 'govt', note: 'Backward Classes & Infrastructure (B&IF)', icon: 'ph-bank' },
    { name: 'Sri Shubham Bansal, IAS', role: 'Director of Industries', kind: 'govt', note: 'Commissionerate of Industries, Government of Andhra Pradesh', icon: 'ph-bank' },
    { name: 'Sri CH. Chandra Sekhar', role: 'Director', kind: 'nominee' },
    { name: 'Sri C. Rama Krishna', role: 'Director', kind: 'nominee' },
    { name: 'Sri Doma Jagadeesh Gupta', role: 'Director', kind: 'nominee' },
    { name: 'Sri G. Prema Kumar', role: 'Director', kind: 'nominee' },
    { name: 'Sri Gollapudi Peddi Raju', role: 'Director', kind: 'nominee' },
    { name: 'Sri Konda Bhaskar Reddy', role: 'Director', kind: 'nominee' },
    { name: 'Sri Kanikalla Chiranjeevi', role: 'Director', kind: 'nominee' },
    { name: 'Sri Lakshmi Prasad Challa', role: 'Director', kind: 'nominee' },
    { name: 'Sri Mandali Rajesh', role: 'Director', kind: 'nominee' },
    { name: 'Sri Margani Satyanarayana', role: 'Director', kind: 'nominee' },
    { name: 'Sri P. N. Mahesh', role: 'Director', kind: 'nominee' },
    { name: 'Sri V. B. Prasada Reddy', role: 'Director', kind: 'nominee' },
    { name: 'Sri Vangur Santosh Kumar', role: 'Director', kind: 'nominee' },
    { name: 'Smt. Kancherla Madhavi', role: 'Director', kind: 'nominee' }
  ];

  /* Functional wings under the VC & MD — organisation structure */
  var ORG_STRUCTURE = [
    { wing: 'Technical & Engineering', scope: 'Park development, infrastructure works, layouts, quality control', desks: ['Chief Engineer', 'Superintending Engineers', 'Executive Engineers (zonal)'] },
    { wing: 'Estate Management & Allotment', scope: 'Plot allotment, transfers, sub-division, sale deeds, regularisation', desks: ['GM (Estates)', 'Zonal Managers', 'Allotment Cell'] },
    { wing: 'Land Acquisition & Land Bank', scope: 'Acquisition, land bank records, mutation, encumbrance', desks: ['GM (Land)', 'Land Bank Cell', 'District Land Units'] },
    { wing: 'Finance & Accounts', scope: 'Receipts, dues, refunds, audit, annual accounts', desks: ['CFO', 'FA&CAO', 'Zonal Accounts'] },
    { wing: 'Legal & Litigation', scope: 'Contracts, arbitration, court matters, title opinions', desks: ['Legal Adviser', 'Standing Counsel'] },
    { wing: 'IALA (Industrial Area Local Authority)', scope: 'Building permissions, occupancy certificates, property tax, civic services', desks: ['Commissioners / EOs', 'Town Planning'] },
    { wing: 'Investment Promotion & Single Desk', scope: 'Investor facilitation, MoUs, incentives, single-desk coordination', desks: ['GM (Promotion)', 'Investor Relations'] },
    { wing: 'IT, GIS & e-Governance', scope: 'AGILE GIS, OBPMS, ERP, online applications, data publication', desks: ['GM (IT)', 'GIS Cell', 'ERP Team'] }
  ];

  /* ------------------------------------------------------- ZONAL OFFICES -- */
  var ZONES = [
    { zone: 'Anakapalli (VSP Special)', officer: 'Sri A. Simhachalam', title: 'Zonal Manager', address: 'One Stop Service Center, APSEZ, Atchutapuram, Visakhapatnam – 531001', phone: '08924-206019, 98489 33875', email: 'zm_vizs@apiic.in', region: 'North Coastal' },
    { zone: 'Visakhapatnam', officer: 'Sri A. Simhachalam', title: 'Zonal Manager', address: 'Industrial Estate, Visakhapatnam – 530007', phone: '0891-2558036, +91 98489 33874', email: 'zm.viz.apiic@nic.in', region: 'North Coastal' },
    { zone: 'Srikakulam', officer: 'Sri V. Krishna Prasad', title: 'Zonal Manager', address: 'Industrial Estate, Kushalpuram, Srikakulam District – 532410', phone: '08942-270588, 97056 88880', email: 'zmsklm.apiic@ap.gov.in', region: 'North Coastal' },
    { zone: 'Kakinada', officer: 'Sri A. Ramana Reddy', title: 'Zonal Manager', address: 'Industrial Estate, Kakinada – 533005', phone: '0884-2950041, 98489 33876', email: 'zm.kak.apiic@nic.in', region: 'Godavari' },
    { zone: 'Eluru', officer: 'Sri Kunche Babji', title: 'Zonal Manager (FAC)', address: 'Industrial Park, Eluru', phone: '95536 94445', email: 'zm-eluru@apiic.in', region: 'Godavari' },
    { zone: 'Vijayawada', officer: 'Sri Kunche Babji', title: 'Zonal Manager', address: 'Industrial Park, M.G. Road, Vijayawada – 520007', phone: '0866-2555647, 98489 33877', email: 'zm_vij@apiic.in', region: 'Central' },
    { zone: 'Guntur', officer: 'Dr. M. L. Narasimha Rao', title: 'Zonal Manager', address: 'Auto Nagar, Guntur – 522001', phone: '97050 55015', email: 'zm-guntur@apiic.in', region: 'Central' },
    { zone: 'Prakasam', officer: 'Sri P. Madan Mohan', title: 'Zonal Manager', address: 'D.No. 58-10-3/2, Ongole – 523001', phone: '0861-2327404, 91333 99851', email: 'zm_pkm@apiic.in', region: 'Central' },
    { zone: 'Nellore', officer: 'Sri L. Siva Kumar', title: 'Zonal Manager (FAC)', address: 'Tirupati Special Projects Zone, Nellore, AP – 524004', phone: '98489 33878', email: 'zm-tptspl@apiic.in', region: 'South Coastal' },
    { zone: 'Tirupati', officer: 'Sri V. Vijaya Bharath Reddy', title: 'Zonal Manager', address: 'A-Block, 7th Floor, Room No. 701-710, Tirupati – 517503', phone: '98489 33879', email: 'zm.tir.apiic@nic.in', region: 'South Coastal' },
    { zone: 'Chittoor', officer: 'Sri S. Naga Suresh', title: 'Zonal Manager', address: '#22-1124 SBI Colony, 2nd Main, Kongareddypalli, Chittoor – 517001', phone: '78427 56007', email: 'zm-chittoor@apiic.in', region: 'Rayalaseema' },
    { zone: 'Kadapa', officer: 'Sri K. Sreenivasa Murthy', title: 'Zonal Manager (FAC)', address: 'Industrial Estate, Kadapa – 516004', phone: '08562-244520, 99480 98209', email: 'zm.kad.apiic@nic.in', region: 'Rayalaseema' },
    { zone: 'Kurnool', officer: 'Sri Y. Madhusudhan Reddy', title: 'Zonal Manager (FAC)', address: 'Industrial Estate, Kalluru, Kurnool – 518003', phone: '99480 92246', email: 'zm.kur.apiic@nic.in', region: 'Rayalaseema' },
    { zone: 'Puttaparthy', officer: 'Sri S. V. S. S. Naga Kumar', title: 'Zonal Manager', address: 'Near KIA Training Centre, Sri Sathya Sai District – 515164', phone: '91542 19850', email: 'zm-hindupur@apiic.in', region: 'Rayalaseema' }
  ];

  /* ------------------------------------------------------- LAND BANK ------ */
  /* Live figures read from the APIIC LandBank portal (digital.apiic.in/landbank)
     on 26 Jul 2026. The portal is the system of record; these are a snapshot. */
  var LANDBANK = {
    portal: 'https://digital.apiic.in/landbank/',
    search: 'https://digital.apiic.in/landbank/search',
    availability: 'https://digital.apiic.in/landbank/availability',
    properties: 'https://digital.apiic.in/landbank/property-summary',
    map: 'https://digital.apiic.in/landbank/map',
    asOf: '26 JUL 2026',
    caveat: 'Data on the portal is indicative. Confirm with the zonal office before any commitment.',
    statewide: [
      { key: 'plots', label: 'Total plots', value: '39,171', icon: 'ph-squares-four', note: 'Across every APIIC park and estate' },
      { key: 'vacant', label: 'Vacant now', value: '10,590', icon: 'ph-check-circle', note: 'Plots available for allotment today' },
      { key: 'area', label: 'Vacant area', value: '46,964', unit: 'acres', icon: 'ph-ruler', note: 'Allotable extent across all zones' },
      { key: 'sheds', label: 'Vacant sheds', value: '21', icon: 'ph-warehouse', note: 'Built-up ready-to-occupy units' },
      { key: 'apps', label: 'Applications received', value: '336', icon: 'ph-note-pencil', note: 'Live applications in the pipeline' }
    ],
    /* Zone rows mirror the 14 zonal offices, so a plot count maps to a person. */
    zones: [
      { zone: 'Anakapalli', parks: 31, plots: 1450, available: 401, acres: 3554.82, applications: 4 },
      { zone: 'Chittoor', parks: 61, plots: 3383, available: 953, acres: 3298.60, applications: 55 },
      { zone: 'Eluru', parks: 12, plots: 825, available: 375, acres: 445.42, applications: 0 },
      { zone: 'Guntur', parks: 34, plots: 6225, available: 902, acres: 975.15, applications: 48 },
      { zone: 'Kadapa', parks: 44, plots: 1946, available: 821, acres: 5162.28, applications: 43 },
      { zone: 'Kakinada', parks: 30, plots: 2538, available: 466, acres: 481.58, applications: 6 },
      { zone: 'Kurnool', parks: 40, plots: 1728, available: 1127, acres: 8193.08, applications: 10 },
      { zone: 'Prakasam', parks: 21, plots: 2685, available: 1055, acres: 3807.01, applications: 7 },
      { zone: 'Puttaparthy', parks: 58, plots: 3549, available: 1480, acres: 2048.47, applications: 44 },
      { zone: 'Srikakulam', parks: 30, plots: 1822, available: 813, acres: 2814.52, applications: 16 },
      { zone: 'Tirupati', parks: 59, plots: 2223, available: 597, acres: 3465.97, applications: 16 },
      { zone: 'Tirupati Spl Projects', parks: 44, plots: 2439, available: 596, acres: 9835.36, applications: 37 },
      { zone: 'Vijayawada', parks: 31, plots: 6056, available: 732, acres: 1232.17, applications: 38 },
      { zone: 'Visakhapatnam', parks: 31, plots: 2302, available: 272, acres: 1649.95, applications: 12 }
    ],
    /* District plot counts, as the portal lists them for direct drill-down. */
    districts: [
      { district: 'Sri Sathya Sai', available: 1239 }, { district: 'Prakasam', available: 1055 },
      { district: 'YSR', available: 786 }, { district: 'Nandyal', available: 784 },
      { district: 'Tirupati', available: 754 }, { district: 'Palnadu', available: 657 },
      { district: 'Chittoor', available: 652 }, { district: 'Vizianagaram', available: 504 },
      { district: 'Sri Potti Sriramulu Nellore', available: 423 }, { district: 'Anakapalli', available: 401 },
      { district: 'Krishna', available: 369 }, { district: 'Eluru', available: 369 },
      { district: 'NTR', available: 363 }, { district: 'Annamayya', available: 352 },
      { district: 'Kurnool', available: 343 }, { district: 'East Godavari', available: 257 },
      { district: 'Anantapur', available: 241 }, { district: 'Kakinada', available: 209 },
      { district: 'Alluri Sitharama Raju', available: 186 }, { district: 'Bapatla', available: 180 },
      { district: 'Parvathipuram Manyam', available: 178 }, { district: 'Srikakulam', available: 131 },
      { district: 'Visakhapatnam', available: 86 }, { district: 'Guntur', available: 65 },
      { district: 'West Godavari', available: 6 }
    ]
  };

  /* ------------------------------------------------------------ IMAGERY --- */
  /* Photographs held locally in assets/img. All are from Wikimedia Commons and
     originate with the Government of India (PIB) or public contributors under
     CC-BY-SA / GODL-India. Each carries the credit its licence requires — the
     `credit` string is rendered wherever the image is used. */
  var IMAGES = {
    people: {
      'Sri Nara Chandrababu Naidu': {
        src: 'assets/img/cm-chandrababu-naidu.jpg',
        credit: 'Official portrait · Wikimedia Commons (CC BY-SA)',
        focus: '50% 22%'
      },
      'Sri T. G. Bharath': {
        src: 'assets/img/minister-tg-bharath.jpg',
        credit: 'Wikimedia Commons (CC BY-SA)',
        focus: '50% 25%'
      }
    },
    /* Real APIIC estates and state infrastructure — used as proof, not decoration. */
    proof: [
      { src: 'assets/img/apiic-dixon-tirupati.jpg', title: 'Dixon Technologies',
        caption: 'Electronics Manufacturing Cluster, Tirupati — an APIIC estate in production',
        credit: 'Wikimedia Commons (CC BY-SA)', tag: 'Electronics' },
      { src: 'assets/img/apiic-foxlink-tirupati.jpg', title: 'Foxlink',
        caption: 'Electronics Manufacturing Cluster, Tirupati — plug-and-play built to tenant spec',
        credit: 'Wikimedia Commons (CC BY-SA)', tag: 'Electronics' },
      { src: 'assets/img/apiic-building-emc-tirupati.jpg', title: 'APIIC EMC, Tirupati',
        caption: 'The APIIC administrative building inside the Tirupati cluster',
        credit: 'Wikimedia Commons (CC BY-SA)', tag: 'Estate services' },
      { src: 'assets/img/apiic-park-tenali.jpg', title: 'APIIC Industrial Park, Tenali',
        caption: 'Serviced plots with internal roads and utilities in place',
        credit: 'Wikimedia Commons (CC BY-SA)', tag: 'Industrial park' },
      { src: 'assets/img/visakhapatnam-port.jpg', title: 'Visakhapatnam Port',
        caption: 'One of six operational ports on the state’s 1,054 km coastline',
        credit: 'Wikimedia Commons (CC BY-SA)', tag: 'Connectivity' },
      { src: 'assets/img/krishnapatnam-port-cranes.jpg', title: 'Krishnapatnam Port',
        caption: 'Deep-water berths handling bulk and container traffic',
        credit: 'Wikimedia Commons (CC BY-SA)', tag: 'Connectivity' },
      { src: 'assets/img/sri-city-infrastructure.jpg', title: 'Sri City',
        caption: 'Integrated business city near the Chennai corridor',
        credit: 'Wikimedia Commons (CC BY-SA)', tag: 'Corridor' }
    ],
    hero: {
      src: 'assets/img/apiic-dixon-tirupati.jpg',
      credit: 'APIIC Electronics Manufacturing Cluster, Tirupati · Wikimedia Commons (CC BY-SA)'
    }
  };

  /* ------------------------------------------------ STATE / APEDB DATA ---- */
  /* Andhra Pradesh Economic Development Board (apedb.ap.gov.in), read
     26 Jul 2026. APEDB is the state's investment-promotion agency and the
     single-window interface; APIIC supplies the land those investments sit on. */
  var APEDB = {
    url: 'https://www.apedb.ap.gov.in/',
    name: 'Andhra Pradesh Economic Development Board',
    role: 'The state’s investment-promotion agency and single-window interface between investors and Government.',
    address: 'Mayuri Tech Park (5th floor), Mangalagiri, Guntur District, AP 522503',
    email: 'ceo@apedb.co.in',
    asOf: '26 JUL 2026',
    functions: [
      { label: 'Single window clearance', icon: 'ph-door-open' },
      { label: 'Land & proposal assessment', icon: 'ph-clipboard-text' },
      { label: 'Investment facilitation', icon: 'ph-handshake' },
      { label: 'Policy formulation', icon: 'ph-scroll' },
      { label: 'Industrial incentives assistance', icon: 'ph-gift' }
    ],
    investment: [
      { value: '1,300+', label: 'Major investment proposals', note: 'Attracted since 2015 (as on 25 Apr 2025)' },
      { value: '₹19.89', unit: 'lakh crore', label: 'Aggregate proposed investment', note: 'Cumulative pipeline (as on 25 Apr 2025)' }
    ],
    /* "Salient features of Andhra Pradesh" — the investment case in figures. */
    salient: [
      { value: '8th', label: 'Largest state in India', note: 'Spread across 162,968 sq km', icon: 'ph-map-trifold', group: 'Geography' },
      { value: '1,054', unit: 'km', label: 'Third longest coastline in India', note: '4 large ports for Indo-Pacific trade', icon: 'ph-waves', group: 'Geography' },
      { value: '6', label: 'Operational ports', note: 'Plus 7 airports serving the state', icon: 'ph-anchor', group: 'Infrastructure' },
      { value: '7', label: 'Airports', note: 'Including international gateways', icon: 'ph-airplane-tilt', group: 'Infrastructure' },
      { value: '3', label: 'Industrial corridors', note: 'Including the Visakhapatnam–Chennai corridor', icon: 'ph-path', group: 'Infrastructure' },
      { value: '47', label: 'Special Economic Zones', note: 'Operational and notified', icon: 'ph-squares-four', group: 'Infrastructure' },
      { value: '5,000+', unit: 'km', label: 'Rail network', note: 'Freight and passenger', icon: 'ph-train', group: 'Infrastructure' },
      { value: '1.2', unit: 'lakh+ km', label: 'Road network', note: 'National, state and district roads', icon: 'ph-road-horizon', group: 'Infrastructure' },
      { value: '$180', unit: 'billion', label: 'GSDP in 2023–24', note: 'At constant prices', icon: 'ph-chart-line-up', group: 'Economy' },
      { value: '$20.7', unit: 'billion', label: 'Total exports 2023–24', note: 'Merchandise exports from the state', icon: 'ph-shipping-container', group: 'Economy' },
      { value: '71%', label: 'Of population is working age', note: 'A young, deep labour pool', icon: 'ph-users-three', group: 'Talent' },
      { value: '1.3', unit: 'million', label: 'Telugu diaspora abroad', note: 'Second largest Indian linguistic diaspora', icon: 'ph-globe-hemisphere-east', group: 'Talent' },
      { value: '25%', label: 'Of Indians in the US IT workforce', note: 'Are from the Telugu community', icon: 'ph-graduation-cap', group: 'Talent' }
    ],
    /* The 13 sectors APEDB actively promotes, mapped to the APIIC park types
       that serve them and to the named APEDB point of contact. */
    sectors: [
      { name: 'Electronics and Semiconductors', icon: 'ph-cpu', poc: 'Aju Antony', pocEmail: 'aju.antony@apedb.co.in', parks: 'Electronics manufacturing clusters · Sri City · Kopparthy' },
      { name: 'Pharmaceuticals and Medical Devices', icon: 'ph-flask', poc: 'Harsha Chilla', pocEmail: 'harsha.chilla@apedb.co.in', parks: 'Pharma City · MedTech Zone, Visakhapatnam' },
      { name: 'Food Processing', icon: 'ph-grains', poc: 'Sailaja M', pocEmail: 'sailaja.m@apedb.co.in', parks: 'Mega food parks · cold-chain clusters' },
      { name: 'Automobile & Auto Components and EVs', icon: 'ph-car-profile', poc: 'Harsha Chilla', pocEmail: 'harsha.chilla@apedb.co.in', parks: 'Auto clusters at Anantapur and Chittoor' },
      { name: 'Textiles, Apparel and Non-leather Footwear', icon: 'ph-scissors', poc: 'Harsha Chilla', pocEmail: 'harsha.chilla@apedb.co.in', parks: 'Textile parks · footwear clusters' },
      { name: 'Aerospace & Defence', icon: 'ph-airplane-tilt', poc: 'Archana Ishwarya', pocEmail: 'ishwarya.k@apedb.co.in', parks: 'Aerospace SEZ, Anantapur' },
      { name: 'Renewable Energy', icon: 'ph-sun-horizon', poc: 'Ajay Vejendla', pocEmail: 'a.vejendla@apedb.co.in', parks: 'Solar and wind parks · green hydrogen sites' },
      { name: 'Chemicals and Petrochemicals', icon: 'ph-test-tube', poc: 'Harsha Chilla', pocEmail: 'harsha.chilla@apedb.co.in', parks: 'Petrochemical complex, Kakinada' },
      { name: 'IT and ITeS', icon: 'ph-code', poc: 'Praween Singh', pocEmail: 'praween.singh@apedb.co.in', parks: 'IT parks at Visakhapatnam, Tirupati, Mangalagiri' },
      { name: 'Industrial & Logistics Infrastructure', icon: 'ph-shipping-container', poc: 'Praween Singh', pocEmail: 'praween.singh@apedb.co.in', parks: 'Multi-modal logistics parks · port-led zones' },
      { name: 'Industrial Parks and Data Parks', icon: 'ph-buildings', poc: 'Subhrajit Ghadei', pocEmail: 'subhrajit@apedb.co.in', parks: 'Plug-and-play parks · data centre zones' },
      { name: 'Buildings, Construction Material & Mineral-Based Industries', icon: 'ph-bricks', poc: 'Ajay Vejendla', pocEmail: 'a.vejendla@apedb.co.in', parks: 'Cement and mineral clusters, Rayalaseema' },
      { name: 'Tourism', icon: 'ph-mountains', poc: 'Ajay Vejendla', pocEmail: 'a.vejendla@apedb.co.in', parks: 'Coastal and heritage tourism circuits' }
    ]
  };

  /* ---------------------------------------------------------------- GIS --- */
  /* AGILE 2.0 — gisviewer.apiic.in. The layer tree is reframed here around the
     question an investor is actually asking, not the layer's internal name. */
  var GIS = {
    url: 'https://gisviewer.apiic.in/',
    title: 'AGILE 2.0 — APIIC GIS for Industrial Land Enquiry',
    owner: 'Government of Andhra Pradesh · APIIC GIS Cell',
    asOf: '26 JUL 2026',
    searchTools: [
      { label: 'Search for a land parcel', detail: 'Find a parcel by identifier and see its geometry and status.', icon: 'ph-magnifying-glass' },
      { label: 'Select industrial plots', detail: 'Draw or pick plots on the map and read their attributes.', icon: 'ph-selection' },
      { label: 'Search lands nearby', detail: 'Anchor on an airport, seaport, road number or railway station and find land within reach.', icon: 'ph-crosshair' },
      { label: 'Filter by park, status and area', detail: 'Narrow by IP name, plot status and an area range in square metres.', icon: 'ph-funnel' }
    ],
    groups: [
      {
        group: 'Where the land is', icon: 'ph-map-trifold',
        question: 'Which parcel, in which park, in which district — and what is its status?',
        layers: ['State', 'District', 'Park Centroid', 'IP Boundaries', 'Plots']
      },
      {
        group: 'How goods will move', icon: 'ph-truck',
        question: 'How far is the port, the airport, the railhead and the highway?',
        layers: ['Airports', 'Ports', 'Railway Stations', 'Bus Station', 'Road Network', 'District HQ', 'External Connectivity']
      },
      {
        group: 'Whether power reaches it', icon: 'ph-lightning',
        question: 'Is there a substation and a transmission line close enough for my connected load?',
        layers: ['Power Grid — 765KV / 400KV substations and lines', 'AP TRANSCO — 400 / 220 / 132KV substations and lines',
                 'AP DISCOMS — APEPDCL, APCPDCL, APSPDCL (33KV, 11KV, LT)', 'AP GENCO power plants — solar, hydro, thermal, wind, gas']
      },
      {
        group: 'Water and gas', icon: 'ph-drop',
        question: 'Where does process water come from, and is a gas pipeline within reach?',
        layers: ['Industrial Water Supply', 'Canal', 'River', 'Tank', 'Reservoir',
                 'Gas Pipeline — AGP, BGL, GGPL, IOCL, Megha networks']
      },
      {
        group: 'What surrounds the site', icon: 'ph-buildings',
        question: 'What civic and social infrastructure exists, and what constrains the site?',
        layers: ['CETP (common effluent treatment)', 'Hospital Locations', 'Police Stations',
                 'Eco Sensitive Zones', 'Landuse Landcover', 'Additional Infrastructure']
      }
    ]
  };

  /* -------------------------------------------------- COMPLETE LINK IA ---- */
  /* Every section and link published on apiic.in, grouped as the site groups
     them. `ext: true` = leaves the prototype for the live portal.            */
  var LINKS = [
    {
      group: 'About Us', icon: 'ph-buildings',
      blurb: 'Who APIIC is, how it is governed and the policies it holds itself to.',
      items: [
        { label: 'AP at a Glance', url: 'https://apiic.in/ap-at-glance/', live: 'https://apiic.in/ap-at-glance/', ext: true },
        { label: 'Objectives', url: 'https://apiic.in/objectives/', live: 'https://apiic.in/objectives/', ext: true },
        { label: 'Board of Directors', url: 'APIIC-Leadership.dc.html', live: 'https://apiic.in/board-of-directors/', local: true, star: true },
        { label: 'Organization Structure', url: 'APIIC-Leadership.dc.html#structure', live: 'https://apiic.in/organizational-structure/', local: true },
        { label: 'About us', url: 'APIIC-About.dc.html', live: 'https://apiic.in/about-us/', local: true },
        { label: 'Sexual Harrasment Policy', url: 'https://apiic.in/wp-content/uploads/2026/02/Sexual-Harrasment-Policy_APIIC.pdf', live: 'https://apiic.in/wp-content/uploads/2026/02/Sexual-Harrasment-Policy_APIIC.pdf', ext: true, doc: true },
        { label: 'CSR Policy', url: 'https://apiic.in/wp-content/uploads/2026/02/CSR_Policy.pdf', live: 'https://apiic.in/wp-content/uploads/2026/02/CSR_Policy.pdf', ext: true, doc: true }
      ]
    },
    {
      group: 'Policies & Procedures', icon: 'ph-scroll',
      blurb: 'The statutory instruments that govern allotment, sale and transfer.',
      items: [
        { label: 'State Policies', url: 'APIIC-Policies.dc.html', live: 'https://apiic.in/policies/', local: true },
        { label: 'New Allotment Regulations 2023', url: 'https://apiic.in/wp-content/uploads/2023/08/APIIC-allotment-regulations-2023-Go-Ms-No-67.pdf', live: 'https://apiic.in/wp-content/uploads/2023/08/APIIC-allotment-regulations-2023-Go-Ms-No-67.pdf', ext: true, doc: true, star: true },
        { label: 'Allotment Regulations', url: 'https://apiic.in/allotment-regulations-2012/', live: 'https://apiic.in/allotment-regulations-2012/', ext: true },
        { label: 'MOA & AOA', url: 'https://apiic.in/wp-content/uploads/2025/07/MOA-AOA_APIIC.pdf', live: 'https://apiic.in/wp-content/uploads/2025/07/MOA-AOA_APIIC.pdf', ext: true, doc: true },
        { label: 'Format for Provisional Allotment Letter', url: 'https://apiic.in/wp-content/uploads/2025/07/Approval-format-of-Provisional-allotment-letter-1-1.pdf', live: 'https://apiic.in/wp-content/uploads/2025/07/Approval-format-of-Provisional-allotment-letter-1-1.pdf', ext: true, doc: true },
        { label: 'Format for Sale Agreement', url: 'https://apiic.in/wp-content/uploads/2025/07/Approved-format-of-Agreement-for-Sale-of-Land-1.pdf', live: 'https://apiic.in/wp-content/uploads/2025/07/Approved-format-of-Agreement-for-Sale-of-Land-1.pdf', ext: true, doc: true },
        { label: 'Format for Sale Deed', url: 'https://apiic.in/wp-content/uploads/2025/07/Approved-format-of-Deed-of-Sale-1.pdf', live: 'https://apiic.in/wp-content/uploads/2025/07/Approved-format-of-Deed-of-Sale-1.pdf', ext: true, doc: true },
        { label: 'Format for NoC', url: 'https://apiic.in/wp-content/uploads/2025/07/Approved-format-of-NoC-1.pdf', live: 'https://apiic.in/wp-content/uploads/2025/07/Approved-format-of-NoC-1.pdf', ext: true, doc: true },
        { label: 'Draft Lease Format', url: 'https://apiic.in/wp-content/uploads/2022/07/Final-Lease-Deed.pdf', live: 'https://apiic.in/wp-content/uploads/2022/07/Final-Lease-Deed.pdf', ext: true, doc: true },
        { label: 'SC/ST Land Rebate Circular', url: 'https://apiic.in/wp-content/uploads/2022/07/Approved-Circular.pdf', live: 'https://apiic.in/wp-content/uploads/2022/07/Approved-Circular.pdf', ext: true, doc: true },
        { label: 'Circular – Online Application', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Cir-No-446.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Cir-No-446.pdf', ext: true, doc: true }
      ]
    },
    {
      group: 'Land Availability Info', icon: 'ph-map-pin-area',
      blurb: 'What land is actually available, where, and on what criteria it is allotted.',
      items: [
        { label: 'APIIC GIS for Industrial Land Enquiry (Agile 2.0)', url: 'https://gisviewer.apiic.in/', live: 'https://gisviewer.apiic.in/', ext: true, star: true },
        { label: 'Land Banks for Industrial use(Vacant Lands)', url: 'https://digital.apiic.in/landbank/', live: 'https://digital.apiic.in/landbank/', ext: true, star: true },
        { label: 'Land Vacancy Information', url: 'https://kpi.apiic.in:8443/KPI/apiicfi/VacantPlots.jsp', live: 'https://kpi.apiic.in:8443/KPI/apiicfi/VacantPlots.jsp', ext: true },
        { label: 'Available Land Bank More than 44 Thousand Acres', url: 'https://kpi.apiic.in:8443/KPI/apiicfi/VacantPlots.jsp?param=vacz', live: 'https://kpi.apiic.in:8443/KPI/apiicfi/VacantPlots.jsp?param=vacz', ext: true },
        { label: 'Total Industrial Parks More than 550', url: 'https://kpi.apiic.in:8443/KPI/apiicfi/VacantPlots.jsp?param=vacip&usrzn=ALL', live: 'https://kpi.apiic.in:8443/KPI/apiicfi/VacantPlots.jsp?param=vacip&usrzn=ALL', ext: true },
        { label: 'MSME Parks (Vacant Lands)', url: 'https://kpi.apiic.in:8443/MSME_Parks/#/Allotment-available', live: 'https://kpi.apiic.in:8443/MSME_Parks/#/Allotment-available', ext: true },
        { label: 'Lands reserved in APIIC for Circular Economy', url: 'https://apiic.in/wp-content/uploads/2026/02/Plots-in-APIIC-reserved-for-circular-economy.pdf', live: 'https://apiic.in/wp-content/uploads/2026/02/Plots-in-APIIC-reserved-for-circular-economy.pdf', ext: true, doc: true },
        { label: 'Rent Properties Information', url: 'https://kpi.apiic.in:8443/KPI/apiicfi/buildingPropertyInfo.jsp', live: 'https://kpi.apiic.in:8443/KPI/apiicfi/buildingPropertyInfo.jsp', ext: true },
        { label: 'Land Parcels by Industry Category', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Framework-for-earmarking-land-parcels-for-industries.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Framework-for-earmarking-land-parcels-for-industries.pdf', ext: true, doc: true },
        { label: 'Components of Detailed Project Report', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Key-considerations-for-Appraisal-of-DPR-and-Checklist-of-DPR-Components.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Key-considerations-for-Appraisal-of-DPR-and-Checklist-of-DPR-Components.pdf', ext: true, doc: true }
      ]
    },
    {
      group: 'Apply', icon: 'ph-note-pencil',
      blurb: 'Every transactional entry point — MSME, building permission and payments.',
      items: [
        { label: 'Online land/Rental Application', url: 'https://kpi.apiic.in:8443/apiic-orca-ui/login-screen', live: 'https://kpi.apiic.in:8443/apiic-orca-ui/login-screen', ext: true, star: true },
        { label: 'OBPMS Application', url: 'https://obpmsapiic.in/Bpamsclient/', live: 'https://obpmsapiic.in/Bpamsclient/', ext: true, star: true },
        { label: 'Apply for Land', url: 'https://www.apindustries.gov.in/apindus/userinterface/singlewindowservicesapplication/Public/EntrepreneurLogin.aspx', live: 'https://www.apindustries.gov.in/apindus/userinterface/singlewindowservicesapplication/Public/EntrepreneurLogin.aspx', ext: true },
        { label: 'Online Enquiry', url: 'https://kpi.apiic.in:8443/OnlineEnquiry', live: 'https://kpi.apiic.in:8443/OnlineEnquiry', ext: true },
        { label: 'Online Enquiry Login', url: 'https://kpi.apiic.in:8443/OnlineEnquiry/loginPage.jsp', live: 'https://kpi.apiic.in:8443/OnlineEnquiry/loginPage.jsp', ext: true },
        { label: 'MSME Portal', url: 'https://kpi.apiic.in:8443/MSME', live: 'https://kpi.apiic.in:8443/MSME', ext: true },
        { label: 'DPR Component for MSME', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/MSME-Componenet-for-Detailed-Project-Report.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/MSME-Componenet-for-Detailed-Project-Report.pdf', ext: true, doc: true },
        { label: 'MSME Parks Development Progress', url: 'https://kpi.apiic.in:8443/MSME_Parks_Development_Progress_V3/', live: 'https://kpi.apiic.in:8443/MSME_Parks_Development_Progress_V3/', ext: true },
        { label: 'Online Payment(OBPMS)', url: 'https://obpmsapiic.in/AutoDCR.Payments/pay2.aspx?ULB=214&sName=214', live: 'https://obpmsapiic.in/AutoDCR.Payments/pay2.aspx?ULB=214&sName=214', ext: true },
        { label: 'Update Project Implementation Status', url: 'https://kpi.apiic.in:8443/UpdateProjectImplementationStatus/', live: 'https://kpi.apiic.in:8443/UpdateProjectImplementationStatus/', ext: true },
        { label: 'Upload Documents', url: 'https://kpi.apiic.in:8443/UploadDocuments/', live: 'https://kpi.apiic.in:8443/UploadDocuments/', ext: true },
        { label: 'Employee ERP Login', url: 'https://apprd.apiic.in:4470/', live: 'https://apprd.apiic.in:4470/', ext: true },
        { label: 'Pay Balance (Land Allotment)', url: 'https://kpi.apiic.in:8443/PartPayment/', live: 'https://kpi.apiic.in:8443/PartPayment/', ext: true },
        { label: 'Other Payments', url: 'https://kpi.apiic.in:8443/PartPayment/getOtherPayments.action', live: 'https://kpi.apiic.in:8443/PartPayment/getOtherPayments.action', ext: true },
        { label: 'Rental Application Process fee (Green Channel)', url: 'https://kpi.apiic.in:8443/PartPayment/greenChannelRentPayments', live: 'https://kpi.apiic.in:8443/PartPayment/greenChannelRentPayments', ext: true },
        { label: 'IALA to APIIC (For IALA purpose only)', url: 'https://kpi.apiic.in/SBI/getIalaPayments.action', live: 'https://kpi.apiic.in/SBI/getIalaPayments.action', ext: true }
      ]
    },
    {
      group: 'Service Requests', icon: 'ph-clipboard-text',
      blurb: 'The entrepreneur services delivered under the APIIC Charter.',
      items: [
        { label: 'Entrepreneur Login', url: 'https://www.apindustries.gov.in/APIndus/UserInterface/SingleWindowServicesApplication/Public/EntrepreneurLogin.aspx', live: 'https://www.apindustries.gov.in/APIndus/UserInterface/SingleWindowServicesApplication/Public/EntrepreneurLogin.aspx', ext: true, star: true },
        { label: 'Service Request', url: 'https://kpi.apiic.in:8443/service/', live: 'https://kpi.apiic.in:8443/service/', ext: true },
        { label: 'Department Login', url: 'https://www.apindustries.gov.in/APIndus/UserInterface/SingleWindowServicesApplication/Public/DepartmentLogin.aspx', live: 'https://www.apindustries.gov.in/APIndus/UserInterface/SingleWindowServicesApplication/Public/DepartmentLogin.aspx', ext: true },
        { label: 'User Manual - APIIC Charter Services', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/Pdfs/User%20Manual%20-%20APIIC%20Charter%20Services-06062022.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/Pdfs/User%20Manual%20-%20APIIC%20Charter%20Services-06062022.pdf', ext: true, doc: true }
      ]
    },
    {
      group: 'Information & Downloads', icon: 'ph-folders',
      blurb: 'Disclosures, clearances, reports and everything downloadable.',
      items: [
        { label: 'Plug & Play Infrastructure Facilities', url: 'https://apiic.in/wp-content/uploads/2022/10/BRAP-2022-Reform-54.pdf', live: 'https://apiic.in/wp-content/uploads/2022/10/BRAP-2022-Reform-54.pdf', ext: true, doc: true },
        { label: 'E- Auction', url: 'https://apiic.in/auctions', live: 'https://apiic.in/auctions', ext: true },
        { label: 'Allotment Letters', url: 'https://kpi.apiic.in:8443/DownloadAllotmentLetter', live: 'https://kpi.apiic.in:8443/DownloadAllotmentLetter', ext: true },
        { label: 'Memorandum of Understanding', url: 'https://apiic.in/download-mou/', live: 'https://apiic.in/download-mou/', ext: true },
        { label: 'Minutes of the Plot Allotment Meetings', url: 'https://apiic.in/plot-of-meetings/', live: 'https://apiic.in/plot-of-meetings/', ext: true },
        { label: 'Ratification GO', url: 'https://apiic.in/ratification-go/', live: 'https://apiic.in/ratification-go/', ext: true },
        { label: 'Right to Information (RTI)', url: 'https://apiic.in/right-to-information-rti/', live: 'https://apiic.in/right-to-information-rti/', ext: true },
        { label: 'Environmental Clearances (ECs) Obtained', url: 'https://apiic.in/environmental-clearances-ecs-obtained/', live: 'https://apiic.in/environmental-clearances-ecs-obtained/', ext: true },
        { label: 'Post EC Monitoring Reports of IP’s', url: 'https://apiic.in/post-ec-monitoring-reports-of-ips/', live: 'https://apiic.in/post-ec-monitoring-reports-of-ips/', ext: true },
        { label: 'Annual Reports', url: 'https://apiic.in/annual-reports/', live: 'https://apiic.in/annual-reports/', ext: true },
        { label: 'Tree Survey Details', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Tree_Survey-1.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Tree_Survey-1.pdf', ext: true, doc: true },
        { label: 'Citizen Charter', url: 'https://apiic.in/citizen-charter/', live: 'https://apiic.in/citizen-charter/', ext: true },
        { label: 'Careers', url: 'https://apiic.in/careers', live: 'https://apiic.in/careers', ext: true }
      ]
    },
    {
      group: 'Opportunities', icon: 'ph-trend-up',
      blurb: 'Where APIIC is inviting private capital.',
      items: [
        { label: 'Industrial Parks', url: 'https://apiic.in/industrial-parks/', live: 'https://apiic.in/industrial-parks/', ext: true },
        { label: 'Special Economic Zones', url: 'https://apiic.in/special-economic-zones/', live: 'https://apiic.in/special-economic-zones/', ext: true },
        { label: 'Public Private Partnership Projects', url: 'https://apiic.in/partnership-project/', live: 'https://apiic.in/partnership-project/', ext: true },
        { label: 'Industrial Clusters', url: 'https://apiic.in/industrial-clusters/', live: 'https://apiic.in/industrial-clusters/', ext: true },
        { label: 'Explore AP New Plug and Play Infrastructure Policy', url: 'https://apiic.in/plug-and-play-infrastructure-policy', live: 'https://apiic.in/plug-and-play-infrastructure-policy', ext: true },
        { label: 'APIIC - Industrial Partnership Drive', url: 'https://kpi.apiic.in:8443/privateIndustrial/#/PrivateIndustrialParks', live: 'https://kpi.apiic.in:8443/privateIndustrial/#/PrivateIndustrialParks', ext: true },
        { label: 'APIIC - Industrial Housing Survey', url: 'https://kpi.apiic.in:8443/housing-survey', live: 'https://kpi.apiic.in:8443/housing-survey', ext: true }
      ]
    },
    {
      group: 'IALA', icon: 'ph-buildings',
      blurb: 'Industrial Area Local Authority — the civic body inside APIIC estates.',
      items: [
        { label: 'IALA Functions', url: 'https://apiic.in/iala-functions/', live: 'https://apiic.in/iala-functions/', ext: true },
        { label: 'IALA Guidelines', url: 'https://apiic.in/Iala/', live: 'https://apiic.in/Iala/', ext: true },
        { label: 'IALA Guidelines- Amendments', url: 'https://apiic.in/wp-content/uploads/2022/04/New-IALA-Guidelines-Amendments-.pdf', live: 'https://apiic.in/wp-content/uploads/2022/04/New-IALA-Guidelines-Amendments-.pdf', ext: true, doc: true },
        { label: 'Building Permission', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Memo-of-Site-Inspection-procedure-and-report.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Memo-of-Site-Inspection-procedure-and-report.pdf', ext: true, doc: true },
        { label: 'Procedure of Occupancy Certificate', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/OCCUPANCY-CERTIFICATE-And-Check-List-Modified.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/OCCUPANCY-CERTIFICATE-And-Check-List-Modified.pdf', ext: true, doc: true },
        { label: 'Time Fixed for Inspection', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/APIIC-IALA-Timelines.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/APIIC-IALA-Timelines.pdf', ext: true, doc: true },
        { label: 'EODB Reforms', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/EODB-Officers-list.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/EODB-Officers-list.pdf', ext: true, doc: true },
        { label: 'Check List for BPA', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Inspection-Checklist-1.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Inspection-Checklist-1.pdf', ext: true, doc: true },
        { label: 'IALA Orientation Training program', url: 'https://apiic.in/wp-content/uploads/2022/08/Orientation-Training-programme_IALA.pdf', live: 'https://apiic.in/wp-content/uploads/2022/08/Orientation-Training-programme_IALA.pdf', ext: true, doc: true },
        { label: 'Iala Login', url: 'https://apialas.cgg.gov.in/apiic/Login.do', live: 'https://apialas.cgg.gov.in/apiic/Login.do', ext: true },
        { label: 'Online Property TAX Payment(in IALA\'S)', url: 'https://apialas.cgg.gov.in/aprevenue/onlineBillpayment.do', live: 'https://apialas.cgg.gov.in/aprevenue/onlineBillpayment.do', ext: true },
        { label: 'Online Property TAX Payment', url: 'https://apialas.apiic.in/', live: 'https://apialas.apiic.in/', ext: true }
      ]
    },
    {
      group: 'Tenders', icon: 'ph-gavel',
      blurb: 'Live and archived procurement.',
      items: [
        { label: 'New Tenders', url: 'https://apiic.in/downloads-tenders/', live: 'https://apiic.in/downloads-tenders/', ext: true, star: true },
        { label: 'Old Tenders', url: 'https://apiic.in/old-tenders/', live: 'https://apiic.in/old-tenders/', ext: true }
      ]
    },
    {
      group: 'Reports & Empanelment', icon: 'ph-chart-bar',
      blurb: 'Performance reporting and the empanelled-consultant registers.',
      items: [
        { label: 'Category A(Upto 50 Acs)', url: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-A.pdf%C2%A0', live: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-A.pdf%C2%A0', ext: true, doc: true },
        { label: 'Category B(50 Acs too 100Acs)', url: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-B.pdf', live: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-B.pdf', ext: true, doc: true },
        { label: 'Category C(101Acs to 500Acs)', url: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-C.pdf', live: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-C.pdf', ext: true, doc: true },
        { label: 'Category D(501Acs to 1000Acs)', url: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-D.pdf', live: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-D.pdf', ext: true, doc: true },
        { label: 'Category E(Above 1000Acs)', url: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-E.pdf', live: 'https://apiic.in/wp-content/uploads/2022/11/CATEGORY-E.pdf', ext: true, doc: true },
        { label: 'EC Clearance', url: 'https://apiic.in/wp-content/uploads/2025/12/List-of-Empanelment-of-Consultant-for-EC-Post-ECfor-IPs.-SEZs-of-APIIC-APICDC-in-AP.pdf', live: 'https://apiic.in/wp-content/uploads/2025/12/List-of-Empanelment-of-Consultant-for-EC-Post-ECfor-IPs.-SEZs-of-APIIC-APICDC-in-AP.pdf', ext: true, doc: true },
        { label: 'Third Party Quality Control', url: 'https://apiic.in/wp-content/uploads/2022/04/third-party.pdf', live: 'https://apiic.in/wp-content/uploads/2022/04/third-party.pdf', ext: true, doc: true },
        { label: 'Empanelment list of Market Survey and Business plan', url: 'https://apiic.in/wp-content/uploads/2022/07/Empanel-list-MS-and-BS-1.pdf', live: 'https://apiic.in/wp-content/uploads/2022/07/Empanel-list-MS-and-BS-1.pdf', ext: true, doc: true },
        { label: 'CAT-A-  Above 2000 acres', url: 'https://apiic.in/wp-content/uploads/2025/12/Under-Category-A-above-2000-Acs.pdf', live: 'https://apiic.in/wp-content/uploads/2025/12/Under-Category-A-above-2000-Acs.pdf', ext: true, doc: true },
        { label: 'CAT-B-500 acres to 2000acres', url: 'https://apiic.in/wp-content/uploads/2025/12/Under-Category-B-500-2000-Acs.pdf', live: 'https://apiic.in/wp-content/uploads/2025/12/Under-Category-B-500-2000-Acs.pdf', ext: true, doc: true },
        { label: 'CAT-C - 0 TO 500 acres', url: 'https://apiic.in/wp-content/uploads/2025/12/Under-Category-C-0-500-Acs.pdf', live: 'https://apiic.in/wp-content/uploads/2025/12/Under-Category-C-0-500-Acs.pdf', ext: true, doc: true },
        { label: 'CAT-A- Above 20 Crores', url: 'https://apiic.in/wp-content/uploads/2022/07/CAT-A-above-20-crores.pdf', live: 'https://apiic.in/wp-content/uploads/2022/07/CAT-A-above-20-crores.pdf', ext: true, doc: true },
        { label: 'CAT-B- Above 5 Crores', url: 'https://apiic.in/wp-content/uploads/2022/07/CAT-B-above-5-crores-and-upto-20-crores.pdf', live: 'https://apiic.in/wp-content/uploads/2022/07/CAT-B-above-5-crores-and-upto-20-crores.pdf', ext: true, doc: true },
        { label: 'CAT-C - Upto 5 Crores', url: 'https://apiic.in/wp-content/uploads/2022/07/CAT-C-upto-5-crores.pdf', live: 'https://apiic.in/wp-content/uploads/2022/07/CAT-C-upto-5-crores.pdf', ext: true, doc: true },
        { label: 'APTS-Rate Contract (RC) 2022-Specifications and details', url: 'https://apiic.in/wp-content/uploads/2023/05/APTS-Rate-Contract.pdf', live: 'https://apiic.in/wp-content/uploads/2023/05/APTS-Rate-Contract.pdf', ext: true, doc: true },
        { label: 'Raw Water Quality Report', url: 'https://kpi.apiic.in:8443/Raw-Water/waterDasboard', live: 'https://kpi.apiic.in:8443/Raw-Water/waterDasboard', ext: true },
        { label: 'Planned Outages Report', url: 'https://kpi.apiic.in:8443/waterOutage/WaterOutageDashboard', live: 'https://kpi.apiic.in:8443/waterOutage/WaterOutageDashboard', ext: true },
        { label: 'MSE CDP Projects-Status', url: 'https://apiic.in/wp-content/uploads/2025/03/MSE-CDP-Projects-Status-1.pdf', live: 'https://apiic.in/wp-content/uploads/2025/03/MSE-CDP-Projects-Status-1.pdf', ext: true, doc: true },
        { label: 'Project Implementation Status', url: 'https://kpi.apiic.in:8443/ProjectImplementationStatus_V2', live: 'https://kpi.apiic.in:8443/ProjectImplementationStatus_V2', ext: true },
        { label: 'Major Works Progress', url: 'https://apiic.in/major-works-progress/', live: 'https://apiic.in/major-works-progress/', ext: true },
        { label: 'IP Layouts', url: 'https://kpi.apiic.in:8443/IPLayout/', live: 'https://kpi.apiic.in:8443/IPLayout/', ext: true },
        { label: 'Engineering Infra work status', url: 'https://kpi.apiic.in:8443/Engineering_Progress/', live: 'https://kpi.apiic.in:8443/Engineering_Progress/', ext: true },
        { label: 'MSME CDP Works', url: 'https://kpi.apiic.in:8443/MSME_CDP/', live: 'https://kpi.apiic.in:8443/MSME_CDP/', ext: true },
        { label: 'EC Status', url: 'https://kpi.apiic.in:8443/EC_Status/', live: 'https://kpi.apiic.in:8443/EC_Status/', ext: true },
        { label: 'Applications status', url: 'https://kpi.apiic.in:8443/ApiicWeb/login_consultant_member.jsp', live: 'https://kpi.apiic.in:8443/ApiicWeb/login_consultant_member.jsp', ext: true },
        { label: 'G.O Ms NO.7', url: 'https://kpi.apiic.in:8443/KPI/apiicfi/reallotmentsAbstract.jsp', live: 'https://kpi.apiic.in:8443/KPI/apiicfi/reallotmentsAbstract.jsp', ext: true },
        { label: 'Status of Allotments', url: 'https://kpi.apiic.in:8443/ApiicWeb/bmm/meetingReport.action', live: 'https://kpi.apiic.in:8443/ApiicWeb/bmm/meetingReport.action', ext: true },
        { label: 'LAC', url: 'https://view.officeapps.live.com/op/view.aspx?src=https://apiic.in/wp-content/uploads/2025/08/Work-Details-Report.xlsx', live: 'https://view.officeapps.live.com/op/view.aspx?src=https://apiic.in/wp-content/uploads/2025/08/Work-Details-Report.xlsx', ext: true, doc: true },
        { label: 'Legal', url: 'https://kpi.apiic.in:8443/Legal_Info/', live: 'https://kpi.apiic.in:8443/Legal_Info/', ext: true },
        { label: 'HRMS', url: 'https://kpi.apiic.in:8443/KPI/apiicfi/DisplayPage', live: 'https://kpi.apiic.in:8443/KPI/apiicfi/DisplayPage', ext: true },
        { label: 'Key Performance Indicators', url: 'https://kpi.apiic.in:8443/KPI/apiicfi/employeeloginforKPI.jsp', live: 'https://kpi.apiic.in:8443/KPI/apiicfi/employeeloginforKPI.jsp', ext: true }
      ]
    },
    {
      group: 'VCIC — Visakhapatnam Chennai Industrial Corridor', icon: 'ph-path',
      blurb: 'ADB-supported corridor clusters and the APIIC tranches within them.',
      items: [
        { label: 'Atchutapuram & Rambili Cluster', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/01-Cadastral-Map-Rambilli.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/01-Cadastral-Map-Rambilli.pdf', ext: true, doc: true },
        { label: 'Nakkapalli Cluster', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Nakkapalli.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Nakkapalli.pdf', ext: true, doc: true },
        { label: 'Yerepude – Srikalahasti Cluster', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Srikalahasti-Yerpedu-combined-plan.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/Srikalahasti-Yerpedu-combined-plan.pdf', ext: true, doc: true },
        { label: 'South Block – Yerepude', url: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/VCIV-final-South1-Model.pdf', live: 'https://apiic.in/wp-content/themes/custom-theme/assets/uploads/VCIV-final-South1-Model.pdf', ext: true, doc: true },
        { label: 'Tranche 1', url: 'https://apiic.in/vcic/', live: 'https://apiic.in/vcic/', ext: true },
        { label: 'Tranche 2', url: 'https://apiic.in/tranche-2/', live: 'https://apiic.in/tranche-2/', ext: true }
      ]
    },
    {
      group: 'Contact Us', icon: 'ph-headset',
      blurb: 'Every desk that owns an answer.',
      items: [
        { label: 'Head Office', url: 'APIIC-Help-Desk.dc.html#head-office', live: 'https://apiic.in/contact-us?param=headoffice', local: true },
        { label: 'Zonal Office', url: 'APIIC-Help-Desk.dc.html#zones', live: 'https://apiic.in/contact-us/?param=zonaloffice', local: true, star: true },
        { label: 'APIIC Evaluation Committee', url: 'https://apiic.in/contact-us/?param=apiicevaluation', live: 'https://apiic.in/contact-us/?param=apiicevaluation', ext: true },
        { label: 'RTI Act - PIOs of Andhra Division , APIIC', url: 'https://apiic.in/contact-us/?param=rti', live: 'https://apiic.in/contact-us/?param=rti', ext: true },
        { label: 'IALA Commissioners/EOs', url: 'https://apiic.in/wp-content/uploads/2022/06/All-ZMs-IALA-Commissioners-Contact-details.pdf', live: 'https://apiic.in/wp-content/uploads/2022/06/All-ZMs-IALA-Commissioners-Contact-details.pdf', ext: true, doc: true },
        { label: 'Complaints Committee for Women', url: 'https://apiic.in/wp-content/uploads/2021/08/Complaints-Committee-for-Women.pdf', live: 'https://apiic.in/wp-content/uploads/2021/08/Complaints-Committee-for-Women.pdf', ext: true, doc: true },
        { label: 'Enquiry', url: 'https://apindustries.gov.in/IndustriesGrievance/Public/UserRequest.aspx?type=Enquiry', live: 'https://apindustries.gov.in/IndustriesGrievance/Public/UserRequest.aspx?type=Enquiry', ext: true },
        { label: 'Grievance', url: 'https://apindustries.gov.in/IndustriesGrievance/Public/UserRequest.aspx?type=Grievance', live: 'https://apindustries.gov.in/IndustriesGrievance/Public/UserRequest.aspx?type=Grievance', ext: true, star: true },
        { label: 'Register your Grievance', url: 'https://kpi.apiic.in:8443/grievances', live: 'https://kpi.apiic.in:8443/grievances', ext: true },
        { label: 'Department Login', url: 'https://kpi.apiic.in:8443/grievances/#/login/department', live: 'https://kpi.apiic.in:8443/grievances/#/login/department', ext: true },
        { label: 'HOD/ZM Login', url: 'https://kpi.apiic.in:8443/grievances/#/zonal/login', live: 'https://kpi.apiic.in:8443/grievances/#/zonal/login', ext: true },
        { label: 'APIIC Towers, Plot No-1 (9th , 10th & 11th floors), IT Park, Mangalagiri, Guntur(Dist), AP', url: 'https://goo.gl/maps/KYFmRJfR49NUCWv37', live: 'https://goo.gl/maps/KYFmRJfR49NUCWv37', ext: true },
        { label: 'Contact Us', url: 'https://apiic.in/contact-us/', live: 'https://apiic.in/contact-us/', ext: true }
      ]
    },
    {
      group: 'Related Government Links', icon: 'ph-arrow-square-out',
      blurb: 'The wider ecosystem an investor will touch.',
      items: [
        { label: 'Department of Industries', url: 'http://www.apindustries.gov.in/APIndus/', live: 'http://www.apindustries.gov.in/APIndus/', ext: true },
        { label: 'A.P. State Financial Corporation', url: 'https://esfc.ap.gov.in/', live: 'https://esfc.ap.gov.in/', ext: true },
        { label: 'DTCP', url: 'http://dtcp.ap.gov.in/', live: 'http://dtcp.ap.gov.in/', ext: true },
        { label: 'NSWS', url: 'https://www.nsws.gov.in/', live: 'https://www.nsws.gov.in/', ext: true, star: true },
        { label: 'India Industrial Land Bank', url: 'https://indiaindustriallandbank.gov.in/exploreParks', live: 'https://indiaindustriallandbank.gov.in/exploreParks', ext: true },
        { label: 'PM Gatishakti', url: 'https://nmp.pmgatishakti.gov.in/stategatishakti/login', live: 'https://nmp.pmgatishakti.gov.in/stategatishakti/login', ext: true },
        { label: 'DGCIS', url: 'https://www.dgciskol.gov.in/', live: 'https://www.dgciskol.gov.in/', ext: true },
        { label: 'Careers', url: 'https://apiic.in/careers/', live: 'https://apiic.in/careers/', ext: true }
      ]
    },
    {
      group: 'Site & Legal', icon: 'ph-shield-check',
      blurb: 'Statutory site pages.',
      items: [
        { label: 'Term of use', url: 'https://apiic.in/terms-and-conditions/', live: 'https://apiic.in/terms-and-conditions/', ext: true },
        { label: 'Privacy Policy', url: 'https://apiic.in/privacy-policy/', live: 'https://apiic.in/privacy-policy/', ext: true },
        { label: 'Sitemap', url: 'https://apiic.in/sitemap.xml', live: 'https://apiic.in/sitemap.xml', ext: true },
        { label: 'Feedback', url: 'https://apiic.in/feedback/', live: 'https://apiic.in/feedback/', ext: true }
      ]
    }
  ];

  /* ------------------------------------------------------- SEARCH INDEX --- */
  /* Every page in the prototype, plus the high-value live-portal targets.    */
  var PAGES = [
    { title: 'Home', url: 'APIIC-Home.dc.html', cat: 'Page', icon: 'ph-house', desc: 'Build in Andhra Pradesh — land, parks and the plan, with every figure dated.', kw: 'home landing overview start invest andhra pradesh' },
    { title: 'Why Andhra Pradesh', url: 'APIIC-Why-Invest.dc.html', cat: 'Invest', icon: 'ph-trend-up', desc: 'The investment case: ports, corridors, power, talent and cost of doing business.', kw: 'why invest advantage ports power talent logistics cost comparison' },
    { title: 'Priority Sectors', url: 'APIIC-Sectors.dc.html', cat: 'Invest', icon: 'ph-factory', desc: 'Food processing, electronics, pharma, textiles, aerospace, green energy and EV.', kw: 'sectors food processing electronics semiconductor pharma textiles aerospace defence green energy ev' },
    { title: 'Locations & Corridors', url: 'APIIC-Locations.dc.html', cat: 'Invest', icon: 'ph-map-trifold', desc: 'Districts, growth corridors, SEZs and industrial clusters across the state.', kw: 'locations districts corridor sez cluster vcic chennai bengaluru hyderabad node' },
    { title: 'Incentive Screener', url: 'APIIC-Incentive-Screener.dc.html', cat: 'Tool', icon: 'ph-gift', desc: 'Check indicative incentives for your project size, sector and location.', kw: 'incentive subsidy screener eligibility capital investment sgst power tariff reimbursement' },
    { title: 'Land & Parks hub', url: 'APIIC-Land-Parks-Hub.dc.html', cat: 'Land', icon: 'ph-squares-four', desc: 'The single starting point for finding industrial land in Andhra Pradesh.', kw: 'land parks hub find plot acre availability' },
    { title: 'Guided Park Finder', url: 'APIIC-Park-Finder.dc.html', cat: 'Tool', icon: 'ph-compass', desc: 'Five questions, then a ranked shortlist of parks that fit your project.', kw: 'park finder guided wizard recommend match shortlist questionnaire' },
    { title: 'Parks Directory', url: 'APIIC-Parks-Directory.dc.html', cat: 'Land', icon: 'ph-list-magnifying-glass', desc: 'All 550+ parks and estates, filterable by district, sector and availability.', kw: 'parks directory list all estates filter district available acres rate' },
    { title: 'Park Profile', url: 'APIIC-Park-Profile.dc.html', cat: 'Land', icon: 'ph-building-office', desc: 'A single park in full: plots, utilities, connectivity, rates and verification dates.', kw: 'park profile detail plot utilities water power road rail port rate' },
    { title: 'Compare Parks', url: 'APIIC-Compare-Parks.dc.html', cat: 'Tool', icon: 'ph-columns', desc: 'Put up to four parks side by side on the fields that decide a location.', kw: 'compare parks side by side versus difference table' },
    { title: 'My Shortlist', url: 'APIIC-Shortlist.dc.html', cat: 'Tool', icon: 'ph-list-checks', desc: 'Parks you have saved, held in your browser, ready to turn into a brief.', kw: 'shortlist saved favourites bookmark brief' },
    { title: 'Interactive Map', url: 'APIIC-Map.html', cat: 'Tool', icon: 'ph-map-pin', desc: 'Every park, port and corridor on one map at published coordinates.', kw: 'map gis agile interactive leaflet marker coordinates spatial' },
    { title: 'Investor Guide', url: 'APIIC-Investor-Guide.dc.html', cat: 'Services', icon: 'ph-book-open', desc: 'The journey from enquiry to production, with who does what at each step.', kw: 'investor guide journey process steps approvals timeline handbook' },
    { title: 'Investor Services', url: 'APIIC-Services.dc.html', cat: 'Services', icon: 'ph-handshake', desc: 'The services catalogue — what APIIC will do for you and in what time.', kw: 'services catalogue sla charter what we do glossary' },
    { title: 'Policies Library', url: 'APIIC-Policies.dc.html', cat: 'Policy', icon: 'ph-scroll', desc: 'State industrial policy, allotment regulations 2023 and the citizen charter.', kw: 'policy policies regulations allotment 2023 citizen charter state industrial policy 4.0 objective criteria' },
    { title: 'Documents & Forms', url: 'APIIC-Documents.dc.html', cat: 'Policy', icon: 'ph-file-text', desc: 'Every downloadable form, format, annual report, RTI disclosure and tender.', kw: 'documents forms download format annual report rti tender dpr checklist fees charges' },
    { title: 'Official Portals', url: 'APIIC-Official-Portals.dc.html', cat: 'Services', icon: 'ph-arrow-square-out', desc: 'Live status of AGILE GIS, OBPMS, single desk, payments and ERP logins.', kw: 'portals external agile obpms single desk payment erp login status uptime' },
    { title: 'Complete Link Directory', url: 'APIIC-Link-Directory.dc.html', cat: 'Page', icon: 'ph-list-dashes', desc: 'Every link published on apiic.in, grouped and searchable — the full sitemap.', kw: 'links directory sitemap all links index everything apiic.in navigation' },
    { title: 'Leadership & Board of Directors', url: 'APIIC-Leadership.dc.html', cat: 'About', icon: 'ph-users-three', desc: 'Chairman, VC & MD, government directors, the full board and the organisation structure.', kw: 'leadership board directors chairman managing director vcmd ias governance organisation structure rama raju dinesh kumar minister chief minister' },
    { title: 'Help Desk', url: 'APIIC-Help-Desk.dc.html', cat: 'Support', icon: 'ph-lifebuoy', desc: 'Raise a ticket, track it, find your zonal desk, or escalate a grievance.', kw: 'help desk support ticket grievance complaint escalation contact zonal office phone email sla raise track' },
    { title: 'Talk to an Expert', url: 'APIIC-Talk-To-Expert.dc.html', cat: 'Support', icon: 'ph-user-circle', desc: 'Book a call with the desk that owns your question.', kw: 'talk expert contact call appointment enquiry advisor' },
    { title: 'Help & Contact', url: 'APIIC-Help-Contact.dc.html', cat: 'Support', icon: 'ph-question', desc: 'Frequently asked questions and the fastest route to a human.', kw: 'help contact faq question answer support' },
    { title: 'Knowledge Centre', url: 'APIIC-Knowledge.dc.html', cat: 'Knowledge', icon: 'ph-lightbulb', desc: 'News, insights, reports, events and investor success stories.', kw: 'knowledge news insight report event media success story press release blog' },
    { title: 'Data & Freshness', url: 'APIIC-Data-Freshness.dc.html', cat: 'Knowledge', icon: 'ph-pulse', desc: 'Where every published number comes from, who owns it and when it was verified.', kw: 'data freshness provenance verified source owner kpi statistics methodology' },
    { title: 'About APIIC', url: 'APIIC-About.dc.html', cat: 'About', icon: 'ph-info', desc: 'Mandate, history since 1973, objectives and how the Corporation is funded.', kw: 'about mandate history 1973 objectives capital undertaking corporation' },
    { title: 'Site Search', url: 'APIIC-Search.dc.html', cat: 'Page', icon: 'ph-magnifying-glass', desc: 'Full-page search across parks, policies, documents and services.', kw: 'search find query results' },
    { title: 'Design System', url: 'APIIC-Design-System.dc.html', cat: 'System', icon: 'ph-palette', desc: 'Colour, type, spacing, components and the four themes.', kw: 'design system tokens colour typography component theme dark light contrast' },
    { title: 'Mobile Views', url: 'APIIC-Mobile-Views.dc.html', cat: 'System', icon: 'ph-device-mobile', desc: 'How the site behaves on a handset at every key breakpoint.', kw: 'mobile responsive handset breakpoint device' },
    { title: 'System Pages', url: 'APIIC-System-Pages.dc.html', cat: 'System', icon: 'ph-gear', desc: 'Accessibility statement, privacy, terms, 404 and error states.', kw: 'system accessibility privacy terms 404 error legal cookie' },
    { title: 'Prototype Scope', url: 'APIIC-Prototype-Scope.dc.html', cat: 'System', icon: 'ph-ruler', desc: 'What this prototype covers, what it stubs, and what is out of scope.', kw: 'scope prototype coverage assumption stub limitation' }
  ];

  /* People and offices are searchable as first-class results. */
  function peopleResults() {
    var out = [];
    POLITICAL.concat(BOARD).forEach(function (p) {
      out.push({
        title: p.name, url: 'APIIC-Leadership.dc.html', cat: 'People', icon: 'ph-user',
        desc: p.role + (p.org ? ' · ' + p.org : '') + (p.note ? ' — ' + p.note : ''),
        kw: (p.name + ' ' + p.role + ' ' + (p.note || '') + ' board director leadership').toLowerCase()
      });
    });
    return out;
  }
  function officeResults() {
    return ZONES.map(function (z) {
      return {
        title: z.zone + ' Zonal Office', url: 'APIIC-Help-Desk.dc.html#zones', cat: 'Offices', icon: 'ph-map-pin',
        desc: z.officer + ', ' + z.title + ' · ' + z.phone + ' · ' + z.email,
        kw: (z.zone + ' ' + z.officer + ' ' + z.address + ' ' + z.email + ' ' + z.phone + ' zonal office contact').toLowerCase()
      };
    });
  }
  function linkResults() {
    var out = [];
    LINKS.forEach(function (g) {
      g.items.forEach(function (i) {
        out.push({
          title: i.label, url: i.url, cat: g.group, icon: i.ext ? 'ph-arrow-square-out' : 'ph-link',
          desc: (i.ext ? 'Live portal · apiic.in — ' : 'In this prototype — ') + g.blurb,
          ext: !!i.ext,
          kw: (i.label + ' ' + g.group + ' ' + g.blurb).toLowerCase()
        });
      });
    });
    return out;
  }

  /* -------------------------------------------------- ASSISTANT KNOWLEDGE - */
  /* Intent-matched answers. Every answer names its source page and a date,
     matching the prototype's provenance rule: never assert without a source. */
  var KB = [
    {
      id: 'land-available',
      match: ['available land', 'vacant land', 'how much land', 'acres available', 'land bank', 'free land', 'allotable'],
      title: 'Land available right now',
      answer: 'APIIC holds a land bank of about **1,42,600 acres**, of which **more than 44,000 acres** are vacant and allotable across **550+ parks and estates** in all 26 districts. The Parks Directory lists availability park by park, and each figure carries the date it was last verified.',
      source: { label: 'Parks Directory', url: 'APIIC-Parks-Directory.dc.html' },
      verified: '24 JUL 2026', owner: 'Asset Management',
      chips: ['Open the Parks Directory', 'Find land for my project', 'What are the rates?']
    },
    {
      id: 'find-land',
      match: ['find land', 'need land', 'looking for land', 'plot for', 'want to set up', 'suitable park', 'recommend a park', 'where should i'],
      title: 'Finding the right park',
      answer: 'The **Guided Park Finder** asks five questions — sector, land size, connectivity needs, power load and timeline — then ranks parks that fit. It does not reserve or allot land; allotment is governed by the APIIC Industrial Parks Allotment Regulations 2023. You can shortlist up to four parks and compare them side by side.',
      source: { label: 'Guided Park Finder', url: 'APIIC-Park-Finder.dc.html' },
      verified: '24 JUL 2026', owner: 'Investor Services',
      chips: ['Start the Park Finder', 'Compare parks', 'Talk to an expert']
    },
    {
      id: 'incentives',
      match: ['incentive', 'subsidy', 'subsidies', 'benefit', 'sgst', 'reimbursement', 'support for my project', 'tax break', 'capital subsidy'],
      title: 'Incentives and support',
      answer: 'Incentives depend on your **sector, investment size, location and employment**. The Incentive Screener gives an indicative view against the current state industrial policy — capital subsidy, SGST reimbursement, power-tariff support, stamp-duty reimbursement and sector-specific add-ons. Sanction is always subject to the policy text and the sanctioning committee.',
      source: { label: 'Incentive Screener', url: 'APIIC-Incentive-Screener.dc.html' },
      verified: '22 JUL 2026', owner: 'Investment Promotion',
      chips: ['Open the Incentive Screener', 'Read the policy', 'What support for ₹200 Cr?']
    },
    {
      id: 'allotment-process',
      match: ['how to apply', 'allotment process', 'apply for land', 'application', 'procedure', 'steps to get land', 'how do i get'],
      title: 'How land allotment works',
      answer: 'The route is: **online land application → DPR scrutiny → objective-criteria evaluation → allotment committee (SLAC/LAC) → provisional allotment letter → payment → sale agreement → possession → sale deed on implementation.** Applications are filed on the APIIC online application portal; the DPR checklist tells you exactly what to attach.',
      source: { label: 'Investor Guide', url: 'APIIC-Investor-Guide.dc.html' },
      verified: '21 JUL 2026', owner: 'Estate Management',
      chips: ['Open the Investor Guide', 'DPR checklist', 'Allotment Regulations 2023']
    },
    {
      id: 'leadership',
      match: ['chairman', 'managing director', 'vcmd', 'vc & md', 'who is the head', 'board of directors', 'leadership', 'who runs', 'ceo', 'directors'],
      title: 'Leadership of APIIC',
      answer: '**Sri M. Rama Raju** is Chairman and **Sri Dinesh Kumar A. S., IAS** is Vice-Chairman & Managing Director. The Board also carries four government directors — the Secretaries for Industries & Commerce, IT & Communications and B&IF, and the Director of Industries — plus fourteen nominee directors. The Leadership page lists all twenty members with designations.',
      source: { label: 'Leadership & Board', url: 'APIIC-Leadership.dc.html' },
      verified: '26 JUL 2026', owner: 'Company Secretary',
      chips: ['See the full board', 'Organisation structure', 'Contact the head office']
    },
    {
      id: 'contact',
      match: ['contact', 'phone', 'email', 'address', 'call', 'reach you', 'head office', 'where are you'],
      title: 'How to reach APIIC',
      answer: 'Head office: **APIIC Towers, Plot No. 1 (9th–11th floors), IT Park, Mangalagiri, Guntur District, AP 522503**, phone **+91-863-2381850**, email **invest@apiic.in**. Land questions are usually fastest at the **zonal office** for your district — there are fourteen, each with a named Zonal Manager, direct number and email.',
      source: { label: 'Help Desk — contacts', url: 'APIIC-Help-Desk.dc.html#zones' },
      verified: '26 JUL 2026', owner: 'Investor Services',
      chips: ['Find my zonal office', 'Raise a ticket', 'Talk to an expert']
    },
    {
      id: 'zonal',
      match: ['zonal office', 'zonal manager', 'my district', 'local office', 'nearest office', 'district office'],
      title: 'Zonal offices',
      answer: 'APIIC runs **fourteen zonal offices** — Anakapalli (VSP Special), Visakhapatnam, Srikakulam, Kakinada, Eluru, Vijayawada, Guntur, Prakasam, Nellore, Tirupati, Chittoor, Kadapa, Kurnool and Puttaparthy. Each has a named Zonal Manager who owns allotment, possession and estate issues for that region. Tell me your district and I will point you at the right desk.',
      source: { label: 'Help Desk — zonal directory', url: 'APIIC-Help-Desk.dc.html#zones' },
      verified: '26 JUL 2026', owner: 'Estate Management',
      chips: ['Open the zonal directory', 'Visakhapatnam desk', 'Guntur desk']
    },
    {
      id: 'building-permission',
      match: ['building permission', 'obpms', 'construction approval', 'occupancy certificate', 'bpa', 'plan approval', 'iala'],
      title: 'Building permission and IALA',
      answer: 'Inside APIIC estates the **Industrial Area Local Authority (IALA)** is the civic authority. Building permissions and occupancy certificates are processed through **OBPMS**, the online building-permission system, against the IALA guidelines and the BPA checklist. IALA also collects property tax and maintains estate civic services.',
      source: { label: 'Link Directory — IALA', url: 'APIIC-Link-Directory.dc.html' },
      verified: '20 JUL 2026', owner: 'IALA / Town Planning',
      chips: ['IALA links', 'Official portals status', 'Raise a ticket']
    },
    {
      id: 'service-request',
      match: ['transfer of allotment', 'sub-division', 'sub letting', 'change of name', 'change of constitution', 'noc for mortgage', 'extension of time', 'eot', 'sale deed', 'restoration', 'withdrawal'],
      title: 'Post-allotment service requests',
      answer: 'Fourteen post-allotment services are delivered under the **APIIC Charter** through the entrepreneur login — additional line of activity, change of constitution, change of line of activity, change of firm name, transfer of allotment, restoration, withdrawal, sub-letting, sub-division, sale-deed execution (above and below 5 acres), NOC for mortgage, and extension of time for implementation or advance payment. Each has a defined checklist and service time.',
      source: { label: 'Help Desk — charter services', url: 'APIIC-Help-Desk.dc.html#services' },
      verified: '21 JUL 2026', owner: 'Estate Management',
      chips: ['See all charter services', 'Raise a ticket', 'User manual']
    },
    {
      id: 'grievance',
      match: ['grievance', 'complaint', 'escalate', 'not resolved', 'delay', 'nobody responded', 'unhappy'],
      title: 'Grievances and escalation',
      answer: 'Raise it first with the **zonal office** that owns the file. If it is not resolved inside the published service time, escalate to the **General Manager of the concerned wing**, then to the **Vice-Chairman & Managing Director**. Grievances can be lodged online, and the Help Desk shows the escalation matrix with the time allowed at each tier.',
      source: { label: 'Help Desk — grievance', url: 'APIIC-Help-Desk.dc.html#grievance' },
      verified: '26 JUL 2026', owner: 'Investor Services',
      chips: ['Open the escalation matrix', 'Lodge a grievance', 'Track my ticket']
    },
    {
      id: 'tenders',
      match: ['tender', 'procurement', 'bid', 'e-auction', 'empanelment', 'consultant'],
      title: 'Tenders and empanelment',
      answer: 'Live and archived tenders are published under **Tenders**, and e-auction notices under Information & Downloads. APIIC also maintains empanelment registers — DGPS surveying agencies, EC-clearance consultants, master-plan consultants, architects and interior designers, market-survey consultants, and third-party quality control.',
      source: { label: 'Link Directory — Tenders', url: 'APIIC-Link-Directory.dc.html' },
      verified: '25 JUL 2026', owner: 'Procurement',
      chips: ['Tenders and reports', 'Empanelment lists', 'Documents & forms']
    },
    {
      id: 'policy',
      match: ['policy', 'regulation', 'rules', 'allotment regulations', 'citizen charter', 'legal'],
      title: 'Policy and regulations',
      answer: 'The governing instruments are the **State Industrial Policy**, the **APIIC Industrial Parks Allotment Regulations 2023**, the **objective criteria for land allotment**, the **MOA & AOA**, and the **Citizen Charter**. Standard formats for the provisional allotment letter, sale agreement, sale deed, lease and NOC are published alongside them.',
      source: { label: 'Policies Library', url: 'APIIC-Policies.dc.html' },
      verified: '21 JUL 2026', owner: 'Legal',
      chips: ['Open the Policies Library', 'Allotment Regulations 2023', 'Documents & forms']
    },
    {
      id: 'about',
      match: ['about apiic', 'what is apiic', 'who are you', 'history', 'when was apiic', 'mandate', 'objectives'],
      title: 'About APIIC',
      answer: 'APIIC was incorporated on **26 September 1973** as a wholly state-owned company to develop industrial infrastructure in Andhra Pradesh. Authorised capital is **₹20.00 crore** and paid-up capital **₹16.33 crore**. It acquires and holds land, develops parks and estates, allots plots, and — through IALA — provides civic services inside those estates.',
      source: { label: 'About APIIC', url: 'APIIC-About.dc.html' },
      verified: '21 JUL 2026', owner: 'Corporate Communications',
      chips: ['Read About APIIC', 'Leadership & board', 'Key figures']
    },
    {
      id: 'sectors',
      match: ['sector', 'food processing', 'electronics', 'semiconductor', 'pharma', 'textile', 'aerospace', 'defence', 'green energy', 'ev', 'industry'],
      title: 'Priority sectors',
      answer: 'The state prioritises **food processing, electronics & semiconductors, pharmaceuticals & life sciences, textiles & apparel, aerospace & defence, and green energy & EV**. Several parks are theme parks dedicated to one of these, with utilities sized for that sector — a food park with cold-chain power, for instance, or a pharma park with effluent treatment.',
      source: { label: 'Priority Sectors', url: 'APIIC-Sectors.dc.html' },
      verified: '22 JUL 2026', owner: 'Investment Promotion',
      chips: ['Explore sectors', 'Parks by sector', 'Incentives by sector']
    },
    {
      id: 'landbank-portal',
      match: ['land bank portal', 'landbank', 'how many plots', 'vacant plots', 'plot count', 'availability by zone', 'which zone has', 'most land'],
      title: 'The live land bank',
      answer: 'The APIIC LandBank portal is the system of record. It currently shows **39,171 plots** in total, **10,590 vacant now**, **46,964 acres** of vacant area, 21 vacant sheds and 336 live applications. **Kurnool, Puttaparthy and Prakasam** hold the most available plots; **Tirupati Special Projects** and **Kurnool** the largest vacant area. The Land & Parks page reproduces the zone table and links each district straight into the portal.',
      source: { label: 'Land & Parks — live land bank', url: 'APIIC-Land-Parks-Hub.dc.html#landbank' },
      verified: '26 JUL 2026', owner: 'Asset Management',
      chips: ['Open the land bank table', 'Find land for my project', 'Find my zonal office']
    },
    {
      id: 'sectors-apedb',
      match: ['thriving sectors', 'which sectors', 'sector lead', 'who handles', 'apedb', 'investment promotion', 'sector contact'],
      title: 'Priority sectors and who to talk to',
      answer: 'The state actively promotes **thirteen sectors** through the AP Economic Development Board — electronics and semiconductors, pharma and medical devices, food processing, automobiles and EVs, textiles and footwear, aerospace and defence, renewable energy, chemicals and petrochemicals, IT and ITeS, industrial and logistics infrastructure, industrial and data parks, construction materials, and tourism. **Each has a named APEDB officer**, listed with their email on the Sectors page. APEDB has attracted 1,300+ proposals worth ₹19.89 lakh crore since 2015.',
      source: { label: 'Priority Sectors — thriving sectors', url: 'APIIC-Sectors.dc.html#thriving' },
      verified: '26 JUL 2026', owner: 'Investment Promotion',
      chips: ['See all 13 sectors', 'Parks by sector', 'Incentives by sector']
    },
    {
      id: 'gis',
      match: ['gis', 'agile', 'map', 'coordinates', 'spatial', 'satellite', 'layers', 'power line', 'substation'],
      title: 'GIS and the interactive map',
      answer: '**AGILE 2.0** (gisviewer.apiic.in) is APIIC’s GIS for industrial land enquiry. It carries parcel geometry and park boundaries, plus the layers that decide a site: **connectivity** (airports, ports, railway stations, road network), **power** (765/400/220/132 KV substations and lines, GENCO plants), **water and gas** (canals, rivers, reservoirs, industrial supply, pipeline networks) and **constraints** (eco-sensitive zones, land use, CETP). You can search a parcel, select plots on the map, or anchor on a port or highway and find land within reach.',
      source: { label: 'Land & Parks — the GIS for investors', url: 'APIIC-Land-Parks-Hub.dc.html#gis' },
      verified: '26 JUL 2026', owner: 'GIS Cell',
      chips: ['Open AGILE 2.0', 'Open the map', 'Parks Directory']
    },
    {
      id: 'theme',
      match: ['dark mode', 'theme', 'light mode', 'contrast', 'font size', 'text size', 'accessibility', 'colour'],
      title: 'Themes and accessibility',
      answer: 'This site ships **four themes** — Daylight, Midnight, Coastal and High Contrast — plus three text sizes. Use the palette button in the header, or press **T** to cycle themes. Your choice is remembered in this browser. Everything meets WCAG 2.2 AA contrast, works from the keyboard, and respects reduced-motion preferences.',
      source: { label: 'Accessibility statement', url: 'APIIC-System-Pages.dc.html' },
      verified: '26 JUL 2026', owner: 'Digital Team',
      chips: ['Switch theme', 'Accessibility statement', 'Design system']
    }
  ];

  var FALLBACK = {
    title: 'I could not match that to published content',
    answer: 'I only answer from content APIIC has actually published, so I would rather hand you to a human than guess. Two good options: search the site for the exact term, or raise a ticket and it goes to the desk that owns the answer — with a reference number you can track.',
    chips: ['Search the site', 'Raise a ticket', 'Find my zonal office']
  };

  var GREETING = {
    title: 'APIIC Assistant',
    answer: 'Hello — I am the APIIC assistant. Ask me about **land availability, parks, incentives, the allotment process, policies, building permission, leadership or contacts**. Every answer I give names the page it came from and the date that page was last verified.',
    chips: ['How much land is available?', 'Find land for a food unit', 'What incentives apply?', 'Who is the Chairman?']
  };

  /* --------------------------------------------------- HELP DESK CONFIG --- */
  var TICKET_CATEGORIES = [
    { id: 'land', label: 'Land enquiry or allotment', desk: 'Estate Management / Zonal Office', sla: '3 working days', icon: 'ph-map-pin-area' },
    { id: 'service', label: 'Post-allotment service request', desk: 'Estate Management', sla: '15 working days', icon: 'ph-clipboard-text' },
    { id: 'permission', label: 'Building permission / IALA', desk: 'IALA — Town Planning', sla: '21 working days', icon: 'ph-buildings' },
    { id: 'payment', label: 'Payment, dues or refund', desk: 'Finance & Accounts', sla: '7 working days', icon: 'ph-currency-inr' },
    { id: 'infra', label: 'Estate infrastructure or utilities', desk: 'Technical & Engineering', sla: '5 working days', icon: 'ph-wrench' },
    { id: 'incentive', label: 'Incentives and policy', desk: 'Investment Promotion', sla: '7 working days', icon: 'ph-gift' },
    { id: 'document', label: 'Document, RTI or disclosure', desk: 'Public Information Officer', sla: '30 days (RTI Act)', icon: 'ph-file-text' },
    { id: 'other', label: 'Something else', desk: 'Investor Services', sla: '5 working days', icon: 'ph-dots-three-circle' }
  ];

  var ESCALATION = [
    { tier: 'Tier 1', who: 'Zonal Manager', scope: 'First point of contact for anything about a specific park, plot or file', within: 'Published service time for the request' },
    { tier: 'Tier 2', who: 'General Manager (concerned wing)', scope: 'If Tier 1 has not resolved it within the service time', within: '7 working days of escalation' },
    { tier: 'Tier 3', who: 'Executive Director', scope: 'Cross-wing matters and repeated delay', within: '7 working days of escalation' },
    { tier: 'Tier 4', who: 'Vice-Chairman & Managing Director', scope: 'Final internal authority on grievances', within: '15 working days of escalation' },
    { tier: 'External', who: 'AP Single Desk / Department of Industries', scope: 'Matters outside APIIC’s remit, or if internal escalation is exhausted', within: 'As per the relevant portal' }
  ];

  var FAQ = [
    { q: 'Does APIIC reserve land when I use the Park Finder?', a: 'No. The finder is a guide only. Allotment is governed by the APIIC Industrial Parks Allotment Regulations 2023 and decided by the allotment committee.', cat: 'Land' },
    { q: 'How long does allotment take?', a: 'From a complete online application, evaluation and committee approval typically run to a few weeks; the provisional allotment letter follows committee approval. Incomplete DPRs are the single largest cause of delay.', cat: 'Land' },
    { q: 'Can I get land on lease instead of sale?', a: 'Yes — a draft lease format is published. Lease and sale terms differ on tenure, transfer rights and payment schedule.', cat: 'Land' },
    { q: 'What does the DPR need to contain?', a: 'Promoter and constitution details, product and capacity, process, land and built-up requirement, power and water load, employment, project cost with means of finance, and the implementation schedule. The DPR checklist is published.', cat: 'Apply' },
    { q: 'Who issues building permission inside an APIIC park?', a: 'The Industrial Area Local Authority (IALA), through OBPMS. The occupancy certificate follows the same route.', cat: 'IALA' },
    { q: 'Is there a rebate for SC/ST entrepreneurs?', a: 'Yes — a land rebate circular for SC/ST entrepreneurs is published under Policies & Procedures.', cat: 'Policy' },
    { q: 'How do I transfer my allotment?', a: 'Stake sale above 49% is treated as transfer of allotment; up to 49% is a change of constitution. Both are charter services with defined checklists filed through the entrepreneur login.', cat: 'Services' },
    { q: 'Where do I pay APIIC dues?', a: 'Through Online Payment (APIIC) for allotment dues, and Online Payment (OBPMS) for building-permission fees. Property tax inside estates is paid to IALA.', cat: 'Payment' },
    { q: 'How do I file an RTI request?', a: 'Address it to the Public Information Officer listed under Contact Us → RTI Act – PIOs. Statutory reply time is 30 days.', cat: 'Policy' },
    { q: 'Are these figures current?', a: 'Every published figure carries the date it was last verified and the desk that owns it. Anything past its review date is flagged on the Data & Freshness page.', cat: 'Data' }
  ];

  /* ------------------------------------------------------------- EXPORT --- */
  root.APIIC_DATA = {
    org: ORG, stats: STATS, political: POLITICAL, board: BOARD, structure: ORG_STRUCTURE,
    zones: ZONES, links: LINKS, pages: PAGES, kb: KB, fallback: FALLBACK, greeting: GREETING,
    landbank: LANDBANK, gis: GIS, apedb: APEDB, images: IMAGES,
    ticketCategories: TICKET_CATEGORIES, escalation: ESCALATION, faq: FAQ,
    searchCorpus: function () {
      return PAGES.concat(peopleResults()).concat(officeResults()).concat(linkResults());
    }
  };
})(typeof window !== 'undefined' ? window : this);
