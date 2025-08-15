// geography
export const initialAreas = {
    "Market Zones": [
      "Global",
      "APAC",
      "EMEA",
      "LATAM",
      "MENA",
      "Asia",
      "Africa",
      "Europe",
      "Americas",
      "Antarctic",
      "G7",
      "G20",
      "OECD Members",
      "Emerging Markets",
      "Developed Economies",
      "Developing Economies",
      "European Union (EU)",
      "African Union (AU)",
      "ASEAN",
      "Nordic Countries",
      "Visegrád Group",
      "Mercosur",
      "CARICOM",
      "BRICS",
      "Next Eleven (N-11)",
      "Commonwealth of Nations",
      "Least Developed Countries",
      "Small Island Developing States",
      "Landlocked Developing Countries",
      "NATO Countries",
      "Indo-Pacific Region",
      "Arctic Region",
    ],
  "North America": [
    "United States",
    "Canada",
    "Mexico",
    "Guatemala",
    "Belize",
    "El Salvador",
    "Honduras",
    "Nicaragua",
    "Costa Rica",
    "Panama",
    "Cuba",
    "Haiti",
    "Dominican Republic",
    "Jamaica",
    "Bahamas",
    "Trinidad and Tobago",
    "Barbados",
    "Saint Kitts and Nevis",
    "Antigua and Barbuda",
    "Dominica",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Grenada",
  ],
  "Western Europe": [
    "United Kingdom",
    "France",
    "Germany",
    "Netherlands",
    "Belgium",
    "Luxembourg",
    "Switzerland",
    "Ireland",
    "Monaco",
    "Liechtenstein",
    "Andorra",
  ],
  "Northern Europe": [
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Iceland",
    "Estonia",
    "Latvia",
    "Lithuania",
  ],
  "Southern Europe": [
    "Italy",
    "Greece",
    "Malta",
    "Cyprus",
    "San Marino",
    "Croatia",
    "Slovenia",
    "Albania",
    "North Macedonia",
    "Bosnia and Herzegovina",
    "Montenegro",
    "Serbia",
    "Portugal",
    "Spain",
  ],
  "Eastern Europe": [
    "Poland",
    "Ukraine",
    "Romania",
    "Czech Republic",
    "Hungary",
    "Bulgaria",
    "Slovakia",
    "Moldova",
    "Belarus",
    "Russia",
  ],
  "Middle East": [
    "Turkey",
    "Iran",
    "Iraq",
    "Syria",
    "Lebanon",
    "Israel",
    "Jordan",
    "Saudi Arabia",
    "United Arab Emirates",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Oman",
    "Yemen",
    "Armenia",
    "Azerbaijan",
  ],
  "South Asia": [
    "India",
    "Pakistan",
    "Bangladesh",
    "Sri Lanka",
    "Nepal",
    "Bhutan",
    "Maldives",
    "Afghanistan",
  ],
  "Southeast Asia": [
    "Indonesia",
    "Thailand",
    "Vietnam",
    "Philippines",
    "Malaysia",
    "Singapore",
    "Myanmar",
    "Cambodia",
    "Laos",
    "Brunei",
    "Timor-Leste",
  ],
  "East Asia": [
    "China",
    "Japan",
    "South Korea",
    "North Korea",
    "Mongolia",
    "Taiwan",
  ],
  "Central Asia": [
    "Kazakhstan",
    "Uzbekistan",
    "Kyrgyzstan",
    "Tajikistan",
    "Turkmenistan",
  ],
  "South America": [
    "Brazil",
    "Argentina",
    "Colombia",
    "Peru",
    "Venezuela",
    "Chile",
    "Ecuador",
    "Bolivia",
    "Paraguay",
    "Uruguay",
    "Suriname",
    "Guyana",
  ],
  "North Africa": [
    "Egypt",
    "Libya",
    "Tunisia",
    "Algeria",
    "Morocco",
    "Sudan",
    "South Sudan",
    "Mauritania",
  ],
  "Sub-Saharan Africa": [
    "Nigeria",
    "Ethiopia",
    "Kenya",
    "Tanzania",
    "South Africa",
    "Uganda",
    "Ghana",
    "Angola",
    "Mozambique",
    "Madagascar",
    "Cameroon",
    "Côte d'Ivoire",
    "Niger",
    "Burkina Faso",
    "Mali",
    "Malawi",
    "Zambia",
    "Senegal",
    "Chad",
    "Somalia",
    "Zimbabwe",
    "Rwanda",
    "Burundi",
    "Benin",
    "Togo",
    "Sierra Leone",
    "Liberia",
    "Guinea",
    "Guinea-Bissau",
    "Equatorial Guinea",
    "Gabon",
    "Congo",
    "Democratic Republic of the Congo",
    "Central African Republic",
    "Eritrea",
    "Djibouti",
    "Comoros",
    "Mauritius",
    "Seychelles",
  ],
  Oceania: [
    "Australia",
    "New Zealand",
    "Papua New Guinea",
    "Fiji",
    "Solomon Islands",
    "Vanuatu",
    "Samoa",
    "Tonga",
    "Micronesia",
    "Marshall Islands",
    "Palau",
    "Nauru",
    "Tuvalu",
    "Kiribati",
  ],
};

// This file contains dummy data for industry verticals.
export const initialIvData = [
  {
    name: "Aerospace, Defence and Aviation",
    slug: "aerospace-defence-and-aviation",
    code: "AD",
    ulData: [
      { name: "Aviation", slug: "aviation" },
      {
        name: "Aerospace & Defence Systems & Technologies",
        slug: "aerospace-and-defence-systems-and-technologies",
      },
      { name: "Airports", slug: "airports" },
      { name: "Space", slug: "space" },
      {
        name: "Aerospace & Defence Services",
        slug: "aerospace-and-defence-services",
      },
    ],
  },
  {
    name: "Agriculture",
    slug: "agriculture",
    code: "AG",
    ulData: [
      { name: "Agrochemicals", slug: "agrochemicals" },
      { name: "Seeds", slug: "seeds" },
      { name: "Technology", slug: "technology" },
      { name: "Machinery & Equipment", slug: "machinery-and-equipment" },
      { name: "Animal Nutrition", slug: "animal-nutrition" },
      { name: "Commodities", slug: "commodities" },
    ],
  },
  {
    name: "Automotive and Transportation",
    slug: "automotive-and-transportation",
    code: "AUTR",
    ulData: [
      { name: "Automotive", slug: "automotive" },
      { name: "Transportation", slug: "transportation" },
      { name: "Telematics", slug: "telematics" },
      { name: "Systems and Modules", slug: "systems-and-modules" },
      { name: "Automotive Components", slug: "automotive-components" },
    ],
  },
  {
    slug: "biotechnology",
    name: "Biotechnology",
    code: "BT",
    ulData: [{ slug: "others", name: "Others" }],
  },
  {
    name: "Chemicals",
    slug: "chemicals",
    code: "CH",
    ulData: [
      {
        name: "Coatings, Adhesives, Sealants and Elastomers",
        slug: "coatings-adhesives-sealants-and-elastomers",
      },
      { name: "Commodity Chemicals", slug: "commodity-chemicals" },
      { name: "Specialty Chemicals", slug: "specialty-chemicals" },
      {
        name: "Bulk Chemicals and Inorganics",
        slug: "bulk-chemicals-and-inorganics",
      },
      {
        name: "Equipment, Machines and Tooling",
        slug: "equipment-machines-and-tooling",
      },
      { name: "Green Bio Chemicals", slug: "green-bio-chemicals" },
      { name: "Lubricants", slug: "lubricants" },
      { name: "Petrochemicals", slug: "petrochemicals" },
    ],
  },
  {
    slug: "clinical-diagnostics",
    name: "Clinical Diagnostics",
    code: "CD",
    ulData: [{ slug: "others", name: "Others" }],
  },
  {
    name: "Consumer Packaged Goods",
    slug: "consumer-packaged-goods",
    code: "CPG",
    ulData: [
      { name: "Cosmetics", slug: "cosmetics" },
      { name: "Personal Care", slug: "personal-care" },
      { name: "Household Care", slug: "household-care" },
      { name: "Pet Care", slug: "pet-care" },
      { name: "Packaging and Logistics", slug: "packaging-and-logistics" },
    ],
  },
  {
    name: "Energy and Power",
    slug: "energy-and-power",
    code: "EP",
    ulData: [
      { name: "Renewable Energy", slug: "renewable-energy" },
      { name: "Oil & Gas", slug: "oil-and-gas" },
      {
        name: "Power Generation and Equipments",
        slug: "power-generation-and-equipments",
      },
      { name: "Engines and Gensets", slug: "engines-and-gensets" },
      { name: "Energy Storage", slug: "energy-storage" },
      {
        name: "Transmission and Distribution",
        slug: "transmission-and-distribution",
      },
    ],
  },
  {
    name: "Food and Beverages",
    slug: "food-and-beverages",
    code: "FB",
    ulData: [
      { name: "Food", slug: "food" },
      { name: "Beverages", slug: "beverages" },
      { name: "Ingredients", slug: "ingredients" },
      { name: "Additives", slug: "additives" },
      { name: "Supplement", slug: "supplement" },
      {
        name: "Functional Foods & Beverages",
        slug: "functional-foods-and-beverages",
      },
      { slug: "testing-and-certification", name: "Testing & Certification" },
      { name: "Packaging", slug: "packaging" },
      { name: "Others", slug: "others" },
    ],
  },
  {
    name: "FMCG",
    slug: "fmcg",
    code: "FMCG",
    ulData: [
      { name: "Personal Care", slug: "personal-care" },
      { name: "Home Care", slug: "home-care" },
      { name: "Fashion and Apparel", slug: "fashion-and-apparel" },
      { name: "Kitchen and Utensils", slug: "kitchen-and-utensils" },
      { name: "Trade and Retail", slug: "trade-and-retail" },
      { name: "Electronics", slug: "electronics" },
      { name: "Utilities", slug: "utilities" },
    ],
  },
  {
    slug: "healthcare-it",
    name: "Healthcare IT",
    code: "HCIT",
    ulData: [{ name: "Others", slug: "others" }],
  },
  {
    slug: "information-communication-and-technology",
    name: "Information, Communication and Technology",
    code: "ICT",
    ulData: [
      { slug: "analytics-it-and-cloud", name: "Analytics, IT and Cloud" },
      { slug: "mobility-and-telecom", name: "Mobility & Telecom" },
      { slug: "public-safety", name: "Public Safety" },
      { slug: "software-and-services", name: "Software & Services" },
      {
        slug: "equipments-machines-and-devices",
        name: "Equipments, Machines and Devices",
      },
      {
        slug: "semiconductor-and-electronics",
        name: "Semiconductor and Electronics",
      },
      { slug: "advanced-technologies", name: "Advanced Technologies" },
    ],
  },
  {
    slug: "laboratory-equipment",
    name: "Laboratory Equipment",
    code: "LE",
    ulData: [{ name: "Others", slug: "others" }],
  },
  {
    slug: "medical-devices",
    name: "Medical Devices",
    code: "MD",
    ulData: [
      {
        slug: "anesthesia-and-respiratory-devices",
        name: "Anesthesia and Respiratory Devices",
      },
      { slug: "cardiovascular-devices", name: "Cardiovascular Devices" },
      { slug: "vascular-access-devices", name: "Vascular Access Devices" },
      { slug: "gastrointestinal", name: "Gastrointestinal" },
      { slug: "hematology", name: "Hematology" },
      { slug: "dental-devices", name: "Dental Devices" },
      { slug: "diabetes-care", name: "Diabetes Care" },
      { slug: "diagnostic-imaging", name: "Diagnostic Imaging" },
      { slug: "drug-delivery-devices", name: "Drug Delivery Devices" },
      { slug: "ent-devices", name: "ENT Devices" },
      { slug: "general-surgery", name: "General Surgery" },
      { slug: "in-vitro-diagnostics", name: "In Vitro Diagnostics" },
      {
        slug: "nephrology-and-urology-devices",
        name: "Nephrology and Urology Devices",
      },
      { slug: "neurology-devices", name: "Neurology Devices" },
      { slug: "ophthalmic-devices", name: "Ophthalmic Devices" },
      { slug: "orthopedic-devices", name: "Orthopedic Devices" },
      { slug: "wound-care-management", name: "Wound Care Management" },
      { slug: "paediatric-care", name: "Paediatric Care" },
      { slug: "monitoring-devices", name: "Monitoring Devices" },
      { slug: "others", name: "Others" },
    ],
  },
  {
    slug: "medical-imaging",
    name: "Medical Imaging",
    code: "MI",
    ulData: [
      { slug: "x-ray-radiography", name: "X-ray Radiography" },
      { slug: "fluoroscopy", name: "Fluoroscopy" },
      {
        slug: "magnetic-resonance-imaging-mri",
        name: "Magnetic Resonance Imaging (MRI)",
      },
      {
        slug: "medical-ultrasonography-or-ultrasound",
        name: "Medical Ultrasonography or Ultrasound",
      },
      { slug: "endoscopy", name: "Endoscopy" },
      { slug: "elastography", name: "Elastography" },
      { slug: "tactile-imaging", name: "Tactile Imaging" },
      { slug: "thermography", name: "Thermography" },
      {
        slug: "positron-emission-tomography-pet",
        name: "Positron Emission Tomography (PET)",
      },
      { slug: "others", name: "Others" },
    ],
  },
  {
    name: "Hospital Supplies",
    slug: "hospital-supplies",
    code: "HOS",
    ulData: [
      { slug: "hospital-beds", name: "Hospital Beds" },
      { slug: "medical-carts", name: "Medical Carts" },
      { slug: "medical-apparels", name: "Medical Apparels" },
      {
        slug: "surgical-tables-and-accessories",
        name: "Surgical Tables and Accessories",
      },
      {
        slug: "operating-room-and-accessories",
        name: "Operating Room and Accessories",
      },
      {
        slug: "surgical-instruments-and-accessories",
        name: "Surgical Instruments and Accessories",
      },
      { slug: "others", name: "Others" },
    ],
  },
  {
    slug: "medical-disposables",
    name: "Medical Disposables",
    code: "MDP",
    ulData: [
      { slug: "cardiology-products", name: "Cardiology Products" },
      {
        slug: "infusion-disposable-products",
        name: "Infusion Disposable Products",
      },
      {
        slug: "surgical-disposables-products-market",
        name: "Surgical Disposables Products Market",
      },
      { slug: "endoscopy-products", name: "Endoscopy Products" },
      {
        slug: "anesthesia-and-respiratory-products",
        name: "Anesthesia and Respiratory Products",
      },
      { slug: "general-surgery", name: "General Surgery" },
      {
        slug: "gynaecology-and-paediatric-disposable-products",
        name: "Gynaecology and Paediatric Disposable Products",
      },
      {
        slug: "non-woven-disposable-products",
        name: "Non Woven Disposable Products",
      },
      {
        slug: "blood-collection-and-associated-products",
        name: "Blood Collection and Associated Products",
      },
      {
        slug: "gastroenterology-disposables",
        name: "Gastroenterology Disposables",
      },
      {
        slug: "disposable-urology-products",
        name: "Disposable Urology Products",
      },
      {
        slug: "ophthalmic-disposable-products",
        name: "Ophthalmic Disposable Products",
      },
      { slug: "ent-disposable-products", name: "ENT Disposable Products" },
      {
        slug: "disposable-colostomy-bags-and-products",
        name: "Disposable Colostomy Bags & Products",
      },
      {
        slug: "disposable-dental-products",
        name: "Disposable Dental Products",
      },
      { slug: "others", name: "Others" },
    ],
  },
  {
    slug: "metals-mining",
    name: "Metals & Mining",
    code: "MM",
    ulData: [
      {
        name: "Rare Earth Metals and Minerals",
        slug: "rare-earth-metals-and-minerals",
      },
      {
        name: "Commodity Metals and Minerals",
        slug: "commodity-metals-and-minerals",
      },
      {
        name: "Specialty Metals and Minerals",
        slug: "specialty-metals-and-minerals",
      },
      { name: "Alloys", slug: "alloys" },
      {
        name: "Mining, Equipment and Services",
        slug: "mining-equipment-and-services",
      },
    ],
  },
  {
    slug: "materials",
    name: "Materials",
    code: "MA",
    ulData: [
      { name: "Ceramics and Glass", slug: "ceramics-and-glass" },
      { name: "Fibers and Composites", slug: "fibers-and-composites" },
      { name: "Foam and Insulation", slug: "foam-and-insulation" },
      {
        name: "Infrastructure and Material",
        slug: "infrastructure-and-material",
      },
      { name: "Yarns, Fabric and Textile", slug: "yarns-fabric-and-textile" },
      { name: "Specialty Materials", slug: "specialty-materials" },
      { name: "Commodity Materials", slug: "commodity-materials" },
    ],
  },
  {
    slug: "packaging",
    name: "Packaging",
    code: "PAC",
    ulData: [
      { name: "Packaging and Allied", slug: "packaging-and-allied" },
      { name: "Packaging Equipment", slug: "packaging-equipment" },
      { name: "Packaging Materials", slug: "packaging-materials" },
      {
        name: "Packaging Technology and Processes",
        slug: "packaging-technology-and-processes",
      },
    ],
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    code: "PH",
    ulData: [
      { slug: "cardiovascular", name: "Cardiovascul" },
      { slug: "central-nervous-system", name: "Central Nervous System" },
      { slug: "dermatology", name: "Dermatology" },
      { slug: "ear-nose-throat-disorders", name: "Ear Nose Throat Disorders" },
      { slug: "gastrointestinal", name: "Gastrointestinal" },
      { slug: "genitourinary-disorders", name: "Genitourinary Disorders" },
      { slug: "hematology", name: "Hematology" },
      { slug: "hormonal-disorders", name: "Hormonal Disorders" },
      { slug: "immunology", name: "Immunology" },
      { slug: "infectious-disease", name: "Infectious Disease" },
      { slug: "metabolic-disorder", name: "Metabolic Disorder" },
      { slug: "diabetes-care", name: "Diabetes Care" },
      {
        slug: "mouth-and-dental-disorders",
        name: "Mouth And Dental Disorders",
      },
      { slug: "pain-management", name: "Pain Management" },
      { slug: "musculoskeletal", name: "Musculoskeletal" },
      { slug: "neurology", name: "Neurology" },
      { slug: "non-malignant-disorders", name: "Non-Malignant Disorders" },
      { slug: "nutritional-disorders", name: "Nutritional Disorders" },
      { slug: "oncology", name: "Oncology" },
      { slug: "ophthalmology", name: "Ophthalmology" },
      { slug: "other-diseases", name: "Other Diseases" },
      { slug: "allergy-diagnostics", name: "Allergy Diagnostics" },
      { slug: "respiratory", name: "Respiratory" },
      { slug: "womens-and-male-health", name: "Women's and Male Health" },
      { slug: "wound-care-treatment", name: "Wound Care Treatment" },
      { slug: "Syndrome", name: "Syndrome" },
      { slug: "others", name: "Others" },
    ],
  },
  {
    slug: "veterinary-health",
    name: "Veterinary Health",
    code: "VH",
    ulData: [
      {
        slug: "veterinary-drugs-and-vaccines",
        name: "Veterinary Drugs and Vaccines",
      },
      {
        slug: "veterinary-medical-devices",
        name: "Veterinary Medical Devices",
      },
      {
        slug: "veterinary-medical-imaging",
        name: "Veterinary Medical Imaging",
      },
      {
        slug: "veterinary-medical-supplements",
        name: "Veterinary Medical Supplements",
      },
      {
        slug: "veterinary-surgical-equipment",
        name: "Veterinary Surgical Equipment",
      },
      { slug: "others", name: "Others" },
    ],
  },
  {
    slug: "others",
    name: "Others",
    code: "OT",
    ulData: [{ slug: "others", name: "Others" }],
  },
];

export const dummyContent = ` <h1> US Cleaning Robots Market 2025 - 2032 </h1> <blockquote> <p> The US Cleaning Robots market was US$ 2,661.68 million in 2024 and is expected to reach US$ 14,889.06 million in 2032 growing at a CAGR of 24.2%<br> during the forecast period (2025-2032). </p> </blockquote> <div class="raw-html-embed"> <div class="flourish-embed" data-src="story/3225628"> <noscript><img src="https://public.flourish.studio/story/3225628/thumbnail" width="100%" alt="visualization"></noscript> </div> </div> <ul> <li> The US cleaning robots market is experiencing robust growth, driven by technological advancements, increasing focus on hygiene and rising demand for<br> automation across industries. The growth of smart home technology and the integration of AI and IoT are significantly boosting the US cleaning robots<br> market. </li> <li> For instance, according to SwiftBeacon (2025), around 69.91 million US households used smart home devices in 2024, with that number expected to<br> reach 103 million by 2028. The average American spent an average of $1,200 on smart home devices in the year 2022. By 2025, 57% of US consumers<br> are projected to adopt smart home tech. In terms of adoption, Connecticut leads with 28.2% of homes using smart tech, followed by Utah (27.8%) and<br> Maryland (27.6%). The growing penetration of AI, IoT and smart infrastructure is making robotic cleaning solutions more efficient, accessible and<br> aligned with modern consumer and commercial demands. </li> <li> Additionally, product innovation is a key driver in the US cleaning robots market, helping vendors stay competitive through advanced features and specialized applications. In 2024, Tennant partnered with Brain Corp, investing $32 million to co-develop AI-powered autonomous floor-cleaning robots.<br> The collaboration combines Tennant’s equipment expertise with Brain Corp’s next-gen navigation technology. Similarly, in 2023, Avidbots launched Neo 2W, the first cleaning robot designed specifically for warehouses and manufacturing settings, enhancing efficiency and cleaning quality. Such innovations are expanding the scope and appeal of robotic cleaning solutions across industrial and commercial sectors. </li> <li> Therefore, the US cleaning robots market is witnessing strong momentum due to evolving hygiene standards, smart building integration, aging demographics, warehouse automation needs and AI advancements. </li> </ul> <figure class="image"> <img style="aspect-ratio:1605/692;" src="https://msbs-dmi-img.s3.eu-west-2.amazonaws.com/bucketFolder/1752479681296-lg.png" width="1605" height="692"> </figure> <p>   </p> <h2> US Cleaning Robots Market - <strong>By Robot Type</strong> </h2> <div class="raw-html-embed"> <div class="flourish-embed flourish-chart" data-src="visualisation/24222650"> <noscript><img src="https://public.flourish.studio/visualisation/24222650/thumbnail" width="100%" alt="chart visualization"></noscript> </div> </div> <h2> US Cleaning Robots Market - <strong>By Operation Mode</strong> </h2> <div class="raw-html-embed"> <div class="flourish-embed flourish-chart" data-src="visualisation/24223439"> <noscript><img src="https://public.flourish.studio/visualisation/24223439/thumbnail" width="100%" alt="chart visualization"></noscript> </div> </div> <h2> US Cleaning Robots Market - <strong>By Deployment Model</strong> </h2> <div class="raw-html-embed"> <div class="flourish-embed flourish-chart" data-src="visualisation/24223738"> <noscript><img src="https://public.flourish.studio/visualisation/24223738/thumbnail" width="100%" alt="chart visualization"></noscript> </div> </div> <h2> US Cleaning Robots Market - <strong>By End-User</strong> </h2> <div class="raw-html-embed"> <div class="flourish-embed flourish-chart" data-src="visualisation/24223762"> <noscript><img src="https://public.flourish.studio/visualisation/24223762/thumbnail" width="100%" alt="chart visualization"></noscript> </div> </div>`;
export const dummyGlobal = `<h1> Global Cleaning Robots Market 2025 - 2032 </h1> <blockquote> <p> The Global Cleaning Robots market was US$ 2,661.68 million in 2024 and is expected to reach US$ 14,889.06 million in 2032 growing at a CAGR of 24.2%<br> during the forecast period (2025-2032). </p> </blockquote> <div class="raw-html-embed"> <div class="flourish-embed" data-src="story/3225628"> <noscript><img src="https://public.flourish.studio/story/3225628/thumbnail" width="100%" alt="visualization"></noscript> </div> </div> <ul> <li> The Global cleaning robots market is experiencing robust growth, driven by technological advancements, increasing focus on hygiene and rising demand for<br> automation across industries. The growth of smart home technology and the integration of AI and IoT are significantly boosting the Global cleaning robots<br> market. </li> <li> For instance, according to SwiftBeacon (2025), around 69.91 million Global households used smart home devices in 2024, with that number expected to<br> reach 103 million by 2028. The average American spent an average of $1,200 on smart home devices in the year 2022. By 2025, 57% of Global consumers<br> are projected to adopt smart home tech. In terms of adoption, Connecticut leads with 28.2% of homes using smart tech, followed by Utah (27.8%) and<br> Maryland (27.6%). The growing penetration of AI, IoT and smart infrastructure is making robotic cleaning solutions more efficient, accessible and<br> aligned with modern consumer and commercial demands. </li> <li> Additionally, product innovation is a key driver in the Global cleaning robots market, helping vendors stay competitive through advanced features and specialized applications. In 2024, Tennant partnered with Brain Corp, investing $32 million to co-develop AI-powered autonomous floor-cleaning robots.<br> The collaboration combines Tennant’s equipment expertise with Brain Corp’s next-gen navigation technology. Similarly, in 2023, Avidbots launched Neo 2W, the first cleaning robot designed specifically for warehouses and manufacturing settings, enhancing efficiency and cleaning quality. Such innovations are expanding the scope and appeal of robotic cleaning solutions across industrial and commercial sectors. </li> <li> Therefore, the Global cleaning robots market is witnessing strong momentum due to evolving hygiene standards, smart building integration, aging demographics, warehouse automation needs and AI advancements. </li> </ul> <figure class="image"> <img style="aspect-ratio:1605/692;" src="https://msbs-dmi-img.s3.eu-west-2.amazonaws.com/bucketFolder/1752479681296-lg.png" width="1605" height="692"> </figure> <p>   </p> <h2> Global Cleaning Robots Market - <strong>By Robot Type</strong> </h2> <div class="raw-html-embed"> <div class="flourish-embed flourish-chart" data-src="visualisation/24222650"> <noscript><img src="https://public.flourish.studio/visualisation/24222650/thumbnail" width="100%" alt="chart visualization"></noscript> </div> </div> <figure class="table"> <table> <tbody> <tr> <td> <strong>By Robot Type</strong> </td> <td> CAGR % (2025-2032) </td> </tr> <tr> <td> <strong>Floor Cleaning Robots</strong> </td> <td> 26.8% </td> </tr> <tr> <td> <strong>Window Cleaning Robots</strong> </td> <td> 23.3% </td> </tr> <tr> <td> <strong>Lawn Cleaning Robots</strong> </td> <td> 17.6% </td> </tr> <tr> <td> <strong>Pool Cleaning Robots</strong> </td> <td> 20.5% </td> </tr> </tbody> </table> </figure> <h2> Global Cleaning Robots Market - <strong>By Operation Mode</strong> </h2> <div class="raw-html-embed"> <div class="flourish-embed flourish-chart" data-src="visualisation/24223439"> <noscript><img src="https://public.flourish.studio/visualisation/24223439/thumbnail" width="100%" alt="chart visualization"></noscript> </div> </div> <figure class="table"> <table> <tbody> <tr> <td> <strong>By Operation Mode</strong> </td> <td> CAGR % (2025-2032) </td> </tr> <tr> <td> <strong>Semi-Autonomous Robots</strong> </td> <td> 21.3% </td> </tr> <tr> <td> <strong>Fully Autonomous Robots</strong> </td> <td> 25.5% </td> </tr> </tbody> </table> </figure> <h2> Global Cleaning Robots Market - <strong>By Deployment Model</strong> </h2> <div class="raw-html-embed"> <div class="flourish-embed flourish-chart" data-src="visualisation/24223738"> <noscript><img src="https://public.flourish.studio/visualisation/24223738/thumbnail" width="100%" alt="chart visualization"></noscript> </div> </div> <figure class="table"> <table> <tbody> <tr> <td> <strong>By Deployment Model</strong> </td> <td> CAGR % (2025-2032) </td> </tr> <tr> <td> <strong>Ownership Model</strong> </td> <td> 23.4% </td> </tr> <tr> <td> <strong>Robotics-as-a-Service</strong> </td> <td> 26.8% </td> </tr> </tbody> </table> </figure> <h2> Global Cleaning Robots Market - <strong>By End-User</strong> </h2> <div class="raw-html-embed"> <div class="flourish-embed flourish-chart" data-src="visualisation/24223762"> <noscript><img src="https://public.flourish.studio/visualisation/24223762/thumbnail" width="100%" alt="chart visualization"></noscript> </div> </div> <figure class="table"> <table> <tbody> <tr> <td> <strong>By End-User</strong> </td> <td> CAGR % (2025-2032) </td> </tr> <tr> <td> <strong>Residential</strong> </td> <td> 25.2% </td> </tr> <tr> <td> <strong>Commercial</strong> </td> <td> 22.7% </td> </tr> <tr> <td> <strong>Healthcare</strong> </td> <td> 28.1% </td> </tr> <tr> <td> <strong>Industrial</strong> </td> <td> 19.3% </td> </tr> <tr> <td> <strong>Others</strong> </td> <td> 16.4% </td> </tr> </tbody> </table> </figure>`
export const commonStyles = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  body {
    font-family: 'Inter', sans-serif;
  }
  select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* blue-500 with opacity */
    border-color: #4299e1; /* blue-500 */
  }
  .custom-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1.5em 1.5em;
  }
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 1.25rem; /* h-5 */
    width: 1.25rem; /* w-5 */
    min-width: 1.25rem; /* fixed width to prevent shrinking */
    border: 2px solid #D1D5DB; /* border-gray-300 */
    border-radius: 0.25rem; /* rounded */
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5rem; /* mr-2 */
    position: relative;
  }
  input[type="checkbox"]:checked {
    background-color: #3B82F6; /* blue-600 */
    border-color: #3B82F6; /* blue-600 */
  }
  input[type="checkbox"]:checked::after {
    content: '';
    display: block;
    width: 0.5rem; /* half of h-5, w-5 minus padding/border */
    height: 0.8rem; /* slighly more than half to make a good checkmark */
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: absolute;
    left: 5px;
    top: 2px;
  }
  input[type="checkbox"]:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* blue-500 with opacity */
  }
  /* Custom Scrollbar for filter sections */
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  /* Tree View Specific Styles - Used for subcategories and sub-regions */
  .tree-item-container {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem; /* For spacing between items */
    cursor: pointer; /* Indicate clickable row */
  }

  .tree-item-label {
    flex-grow: 1; /* Allow label to take available space */
    user-select: none; /* Prevent text selection on double click */
  }

  .toggle-icon {
    font-size: 0.75rem; /* Smaller icon */
    width: 1rem; /* Fixed width for icon */
    text-align: center;
    cursor: pointer;
    margin-right: 0.25rem;
    color: #6B7280; /* gray-500 */
    line-height: 1; /* Align vertically */
  }
  .toggle-icon.invisible {
    visibility: hidden; /* Hide icon if no children */
  }
  .tree-children {
    margin-left: 1.5rem; /* Indentation for children */
    border-left: 1px solid #E5E7EB; /* Light gray border for hierarchy */
    padding-left: 0.5rem; /* Padding for border */
  }`;

export const allDummyReports = [
  {
    _id: "666abc123def456789012345",
    reportId: "665f9123f00bcde098765432",
    title: "US Cleaning Robots Market 2025 - 2032",
    description:
      "An in-depth analysis of the US cleaning robots market, covering trends, growth drivers, and future outlook.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/digital-health-cover.jpg",
    thumbnail: "https://placehold.co/120x80/aabbcc/ffffff?text=Digital", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/digital-health-report.pdf",
    ppt: "https://msbs-dmi-img.s3.eu-west-2.amazonaws.com/bucketFolder/1752574214034-lg.pptx",
    excel:
      "https://msbs-dmi-img.s3.eu-west-2.amazonaws.com/bucketFolder/1752574217243-lg.xlsx",
    views: 112,
    dashboard: [
      { heading: "Global", content: dummyGlobal },
      { heading: "United States", content: dummyContent },
      { heading: "Europe", content: `Content available on request <br/> <button class='mb-6 px-4 py-2 bg-[#083E5E] text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center shadow-md'>Request Content</button>` },
      { heading: "Asia-Pacific", content: `Content available on request <br/> <button class='mb-6 px-4 py-2 bg-[#083E5E] text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center shadow-md'>Request Content</button>` },
      { heading: " America", content: `Content available on request <br/> <button class='mb-6 px-4 py-2 bg-[#083E5E] text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center shadow-md'>Request Content</button>` },
      { heading: "Middle East & Africa", content: `Content available on request <br/> <button class='mb-6 px-4 py-2 bg-[#083E5E] text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center shadow-md'>Request Content</button>`},
    ],
    tabs: [
      {
        heading: "Summary",
        content:
          "The US cleaning robots market is projected to grow from $2.7B in 2024 to $14.9B by 2032, driven by technological advancements and increasing demand for automation.",
      },
      {
        heading: "Investments",
        content:
          "Key investments include Tennant's $32M partnership with Brain Corp to develop AI-powered cleaning robots, and Avidbots' launch of Neo 2W for warehouses.",
      },
    ],
    faqs: [
      {
        question: "Is this report based on real-time data?",
        answer:
          "Yes, we compile data from multiple live APIs and investor feeds.",
      },
      {
        question: "Can I export the underlying data?",
        answer: "Yes, the Excel file contains full raw data from the charts.",
      },
    ],
    info: [
      {
        title: "Top Region",
        content: "North America leads in cleaning robot adoption with 45% market share.",
        icon: "globe",
      },
      {
        title: "Technology Leader",
        content: " AI-powered cleaning robots are transforming the industry with advanced navigation and efficiency.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Cleaning Robots Market Share by Region",
        type: "bar",
        options: {
          tooltip: {
            // ECharts tooltip configuration
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: "{b}: {c} $M", // Formatter for tooltip
          },
          xAxis: {
            type: "category",
            data: ["North America", "Europe", "Asia", "LATAM", "Africa"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Investment ($M)",
              type: "bar",
              data: [950, 540, 480, 110, 60],
              itemStyle: { color: "#5470C6" },
            },
          ],
        },
      },
      {
        title: "Global Cleaning Robots Market Share by Type",
        type: "pie",
        options: {
          tooltip: {
            // ECharts tooltip configuration
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            // ECharts legend configuration
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Technology",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 40, name: "Telemedicine" },
                { value: 25, name: "AI Diagnostics" },
                { value: 15, name: "Wearables" },
                { value: 10, name: "Remote Monitoring" },
                { value: 10, name: "Others" },
              ],
              label: {
                // ECharts label configuration
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                // ECharts label line configuration
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-20T12:00:00Z",
    updatedAt: "2025-06-20T12:00:00Z",
  },
  {
    _id: "666abc123def456789012346",
    reportId: "665f9123f00bcde098765433",
    title: "On-Demand Cleaning Services Platform Market 2025 - 2032",
    description:
      " A comprehensive analysis of the on-demand cleaning services platform market, focusing on trends, growth drivers, and future outlook.",
    breadcrumb: "Technology > Services",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/fintech-ai-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ccbbdd/ffffff?text=Fintech+AI", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/fintech-ai-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/fintech-ai-presentation.pptx",
    excel: "https://your-s3-bucket.s3.amazonaws.com/files/fintech-ai-data.xlsx",
    views: 85,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],
    tabs: [
      {
        heading: "Overview",
        content:
          "AI is rapidly transforming fintech, enabling advanced fraud detection, personalized banking, and automated trading.",
      },
      {
        heading: "Challenges",
        content:
          "Regulatory hurdles and data privacy concerns remain key challenges for widespread AI adoption in finance.",
      },
    ],
    faqs: [
      {
        question: "Who is the target audience for this report?",
        answer:
          "Financial institutions, tech investors, and AI solution providers.",
      },
    ],
    info: [
      {
        title: "Top Application",
        content: "Fraud detection systems leveraging AI.",
        icon: "bot",
      },
      {
        title: "Market Growth",
        content: "Projected 25% CAGR for AI in fintech over next 5 years.",
        icon: "globe",
      },
    ],
    charts: [
      {
        title: "Global AI in Fintech Market Share by Segment",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Market Share",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 30, name: "Fraud Detection" },
                { value: 25, name: "Personalized Banking" },
                { value: 20, name: "Automated Trading" },
                { value: 15, name: "Credit Scoring" },
                { value: 10, name: "Others" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2025-06-19T14:30:00Z",
  },

   {
    _id: "666abc123def456789012347",
    reportId: "665f9123f00bcde098765434",
    title: "Global Robotic Pool Cleaner Market 2025 - 2032",
    description:
      "In-depth analysis of the rising demand for automated pool maintenance solutions, focusing on smart navigation systems, energy efficiency, and key manufacturers shaping the market.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/renewables-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ddeeff/ffffff?text=Renewables", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-presentation.pptx",
    excel: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-data.xlsx",
    views: 150,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],
    tabs: [
      {
        heading: "Highlights",
        content:
          "Solar and wind energy continue to dominate new capacity additions globally, driven by decreasing costs and supportive policies.",
      },
      {
        heading: "Policy Impact",
        content:
          "Government incentives and carbon pricing mechanisms are crucial for accelerating renewable energy adoption.",
      },
    ],
    faqs: [
      {
        question: "What regions are covered in this report?",
        answer:
          "Global coverage with detailed analyses of North America, Europe, and Asia-Pacific.",
      },
    ],
    info: [
      {
        title: "Leading Source",
        content:
          "Solar PV accounts for the largest share of new renewable installations.",
        icon: "globe",
      },
      {
        title: "Investment Surge",
        content: "Record-breaking investments in offshore wind projects.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Renewable Energy Investment by Source",
        type: "bar",
        options: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: "{b}: {c} $B",
          },
          xAxis: {
            type: "category",
            data: ["Solar", "Wind", "Hydro", "Bioenergy", "Geothermal"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Investment ($B)",
              type: "bar",
              data: [350, 280, 70, 40, 20],
              itemStyle: { color: "#32CD32" },
            },
          ],
        },
      },
      {
        title: "Renewable Capacity Additions by Technology",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Capacity",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 55, name: "Solar PV" },
                { value: 30, name: "Wind Onshore" },
                { value: 10, name: "Wind Offshore" },
                { value: 5, name: "Others" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-06-18T16:00:00Z",
  },
   {
    _id: "666abc123def456789012348",
    reportId: "665f9123f00bcde098765434",
    title: "Global Robotic Floor Scrubber Market 2025 - 2032",
    description:
      "Explores technological advancements, commercial adoption, and cost-saving benefits driving the global robotic floor scrubber industry across industrial and retail sectors.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/renewables-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ddeeff/ffffff?text=Renewables", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-presentation.pptx",
    excel: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-data.xlsx",
    views: 150,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],
    tabs: [
      {
        heading: "Highlights",
        content:
          "Solar and wind energy continue to dominate new capacity additions globally, driven by decreasing costs and supportive policies.",
      },
      {
        heading: "Policy Impact",
        content:
          "Government incentives and carbon pricing mechanisms are crucial for accelerating renewable energy adoption.",
      },
    ],
    faqs: [
      {
        question: "What regions are covered in this report?",
        answer:
          "Global coverage with detailed analyses of North America, Europe, and Asia-Pacific.",
      },
    ],
    info: [
      {
        title: "Leading Source",
        content:
          "Solar PV accounts for the largest share of new renewable installations.",
        icon: "globe",
      },
      {
        title: "Investment Surge",
        content: "Record-breaking investments in offshore wind projects.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Renewable Energy Investment by Source",
        type: "bar",
        options: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: "{b}: {c} $B",
          },
          xAxis: {
            type: "category",
            data: ["Solar", "Wind", "Hydro", "Bioenergy", "Geothermal"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Investment ($B)",
              type: "bar",
              data: [350, 280, 70, 40, 20],
              itemStyle: { color: "#32CD32" },
            },
          ],
        },
      },
      {
        title: "Renewable Capacity Additions by Technology",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Capacity",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 55, name: "Solar PV" },
                { value: 30, name: "Wind Onshore" },
                { value: 10, name: "Wind Offshore" },
                { value: 5, name: "Others" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-06-18T16:00:00Z",
  },
   {
    _id: "666abc123def456789012352",
    reportId: "665f9123f00bcde098765434",
    title: "Global Residential Robotic Vacuum Cleaner Market 2025 - 2032",
    description:
      "Comprehensive insights into consumer trends, AI-driven automation, and product innovations transforming household cleaning through robotic vacuum solutions.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/renewables-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ddeeff/ffffff?text=Renewables", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-presentation.pptx",
    excel: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-data.xlsx",
    views: 133,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],
    tabs: [
      {
        heading: "Highlights",
        content:
          "Solar and wind energy continue to dominate new capacity additions globally, driven by decreasing costs and supportive policies.",
      },
      {
        heading: "Policy Impact",
        content:
          "Government incentives and carbon pricing mechanisms are crucial for accelerating renewable energy adoption.",
      },
    ],
    faqs: [
      {
        question: "What regions are covered in this report?",
        answer:
          "Global coverage with detailed analyses of North America, Europe, and Asia-Pacific.",
      },
    ],
    info: [
      {
        title: "Leading Source",
        content:
          "Solar PV accounts for the largest share of new renewable installations.",
        icon: "globe",
      },
      {
        title: "Investment Surge",
        content: "Record-breaking investments in offshore wind projects.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Renewable Energy Investment by Source",
        type: "bar",
        options: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: "{b}: {c} $B",
          },
          xAxis: {
            type: "category",
            data: ["Solar", "Wind", "Hydro", "Bioenergy", "Geothermal"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Investment ($B)",
              type: "bar",
              data: [350, 280, 70, 40, 20],
              itemStyle: { color: "#32CD32" },
            },
          ],
        },
      },
      {
        title: "Renewable Capacity Additions by Technology",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Capacity",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 55, name: "Solar PV" },
                { value: 30, name: "Wind Onshore" },
                { value: 10, name: "Wind Offshore" },
                { value: 5, name: "Others" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-06-18T16:00:00Z",
  },
   {
    _id: "666abc123def456789012349",
    reportId: "665f9123f00bcde098765434",
    title: "Global Robotic Window Cleaners Market 2025 - 2032",
    description:
      "Evaluates the growing use of robotic window cleaning technologies in both residential and commercial buildings, emphasizing safety, efficiency, and smart home integration.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/renewables-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ddeeff/ffffff?text=Renewables", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-presentation.pptx",
    excel: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-data.xlsx",
    views: 150,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],
    tabs: [
      {
        heading: "Highlights",
        content:
          "Solar and wind energy continue to dominate new capacity additions globally, driven by decreasing costs and supportive policies.",
      },
      {
        heading: "Policy Impact",
        content:
          "Government incentives and carbon pricing mechanisms are crucial for accelerating renewable energy adoption.",
      },
    ],
    faqs: [
      {
        question: "What regions are covered in this report?",
        answer:
          "Global coverage with detailed analyses of North America, Europe, and Asia-Pacific.",
      },
    ],
    info: [
      {
        title: "Leading Source",
        content:
          "Solar PV accounts for the largest share of new renewable installations.",
        icon: "globe",
      },
      {
        title: "Investment Surge",
        content: "Record-breaking investments in offshore wind projects.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Renewable Energy Investment by Source",
        type: "bar",
        options: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: "{b}: {c} $B",
          },
          xAxis: {
            type: "category",
            data: ["Solar", "Wind", "Hydro", "Bioenergy", "Geothermal"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Investment ($B)",
              type: "bar",
              data: [350, 280, 70, 40, 20],
              itemStyle: { color: "#32CD32" },
            },
          ],
        },
      },
      {
        title: "Renewable Capacity Additions by Technology",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Capacity",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 55, name: "Solar PV" },
                { value: 30, name: "Wind Onshore" },
                { value: 10, name: "Wind Offshore" },
                { value: 5, name: "Others" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-06-18T16:00:00Z",
  },
   {
    _id: "666abc123def456789012353",
    reportId: "665f9123f00bcde098765434",
    title: "Global Robotic Lawn Mower Market",
    description:
      "Examines the surge in demand for autonomous lawn care, with a focus on battery technology, regional landscaping trends, and integration with IoT ecosystems.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/renewables-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ddeeff/ffffff?text=Renewables", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-presentation.pptx",
    excel: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-data.xlsx",
    views: 150,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],
    tabs: [
      {
        heading: "Highlights",
        content:
          "Solar and wind energy continue to dominate new capacity additions globally, driven by decreasing costs and supportive policies.",
      },
      {
        heading: "Policy Impact",
        content:
          "Government incentives and carbon pricing mechanisms are crucial for accelerating renewable energy adoption.",
      },
    ],
    faqs: [
      {
        question: "What regions are covered in this report?",
        answer:
          "Global coverage with detailed analyses of North America, Europe, and Asia-Pacific.",
      },
    ],
    info: [
      {
        title: "Leading Source",
        content:
          "Solar PV accounts for the largest share of new renewable installations.",
        icon: "globe",
      },
      {
        title: "Investment Surge",
        content: "Record-breaking investments in offshore wind projects.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Renewable Energy Investment by Source",
        type: "bar",
        options: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: "{b}: {c} $B",
          },
          xAxis: {
            type: "category",
            data: ["Solar", "Wind", "Hydro", "Bioenergy", "Geothermal"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Investment ($B)",
              type: "bar",
              data: [350, 280, 70, 40, 20],
              itemStyle: { color: "#32CD32" },
            },
          ],
        },
      },
      {
        title: "Renewable Capacity Additions by Technology",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Capacity",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 55, name: "Solar PV" },
                { value: 30, name: "Wind Onshore" },
                { value: 10, name: "Wind Offshore" },
                { value: 5, name: "Others" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-06-18T16:00:00Z",
  },
   {
    _id: "666abc123def456789012350",
    reportId: "665f9123f00bcde098765434",
    title: "Global Smart Dishwasher Market 2025 - 2032",
    description:
      "Analyzes the evolution of dishwashing appliances through robotics and connectivity, highlighting consumer preferences, eco-friendly designs, and leading brands.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/renewables-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ddeeff/ffffff?text=Renewables", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-presentation.pptx",
    excel: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-data.xlsx",
    views: 150,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],
    tabs: [
      {
        heading: "Highlights",
        content:
          "Solar and wind energy continue to dominate new capacity additions globally, driven by decreasing costs and supportive policies.",
      },
      {
        heading: "Policy Impact",
        content:
          "Government incentives and carbon pricing mechanisms are crucial for accelerating renewable energy adoption.",
      },
    ],
    faqs: [
      {
        question: "What regions are covered in this report?",
        answer:
          "Global coverage with detailed analyses of North America, Europe, and Asia-Pacific.",
      },
    ],
    info: [
      {
        title: "Leading Source",
        content:
          "Solar PV accounts for the largest share of new renewable installations.",
        icon: "globe",
      },
      {
        title: "Investment Surge",
        content: "Record-breaking investments in offshore wind projects.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Renewable Energy Investment by Source",
        type: "bar",
        options: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: "{b}: {c} $B",
          },
          xAxis: {
            type: "category",
            data: ["Solar", "Wind", "Hydro", "Bioenergy", "Geothermal"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Investment ($B)",
              type: "bar",
              data: [350, 280, 70, 40, 20],
              itemStyle: { color: "#32CD32" },
            },
          ],
        },
      },
      {
        title: "Renewable Capacity Additions by Technology",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Capacity",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 55, name: "Solar PV" },
                { value: 30, name: "Wind Onshore" },
                { value: 10, name: "Wind Offshore" },
                { value: 5, name: "Others" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-06-18T16:00:00Z",
  },
   {
    _id: "666abc123def456789012351",
    reportId: "665f9123f00bcde098765434",
    title: "Global Beach Cleaning Robot Market",
    description:
      "Focuses on the emerging role of robots in environmental sustainability, detailing autonomous beach cleaning solutions for marine debris removal and eco-restoration.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/renewables-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ddeeff/ffffff?text=Renewables", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-presentation.pptx",
    excel: "https://your-s3-bucket.s3.amazonaws.com/files/renewables-data.xlsx",
    views: 115,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],
    tabs: [
      {
        heading: "Highlights",
        content:
          "Solar and wind energy continue to dominate new capacity additions globally, driven by decreasing costs and supportive policies.",
      },
      {
        heading: "Policy Impact",
        content:
          "Government incentives and carbon pricing mechanisms are crucial for accelerating renewable energy adoption.",
      },
    ],
    faqs: [
      {
        question: "What regions are covered in this report?",
        answer:
          "Global coverage with detailed analyses of North America, Europe, and Asia-Pacific.",
      },
    ],
    info: [
      {
        title: "Leading Source",
        content:
          "Solar PV accounts for the largest share of new renewable installations.",
        icon: "globe",
      },
      {
        title: "Investment Surge",
        content: "Record-breaking investments in offshore wind projects.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Renewable Energy Investment by Source",
        type: "bar",
        options: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: "{b}: {c} $B",
          },
          xAxis: {
            type: "category",
            data: ["Solar", "Wind", "Hydro", "Bioenergy", "Geothermal"],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Investment ($B)",
              type: "bar",
              data: [350, 280, 70, 40, 20],
              itemStyle: { color: "#32CD32" },
            },
          ],
        },
      },
      {
        title: "Renewable Capacity Additions by Technology",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Capacity",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 55, name: "Solar PV" },
                { value: 30, name: "Wind Onshore" },
                { value: 10, name: "Wind Offshore" },
                { value: 5, name: "Others" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 16,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-06-18T16:00:00Z",
  },
  
  // Global Robotic Pool Cleaner Market



  // Global Medical Device Packaging Market 2022 - 2033
  {
    _id: "666abc123def456789012348",
    reportId: "665f9123f00bcde098765435",
    title: "Robotic Elevator and Escalator Cleaning Market 2025 - 2032",
    description:
      "Covers the specialized niche of robotic systems designed for cleaning vertical mobility infrastructure, emphasizing hygiene automation in commercial high-traffic environments.",
    breadcrumb: "Technology > Robotics",
    cover:
      "https://your-s3-bucket.s3.amazonaws.com/insights/medical-device-packaging-cover.jpg",
    thumbnail: "https://placehold.co/120x80/ffccbb/ffffff?text=Medical+Devices", // Placeholder thumbnail
    pdf: "https://your-s3-bucket.s3.amazonaws.com/files/medical-device-packaging-report.pdf",
    ppt: "https://your-s3-bucket.s3.amazonaws.com/files/medical-device-packaging-presentation.pptx",
    excel:
      "https://your-s3-bucket.s3.amazonaws.com/files/medical-device-packaging-data.xlsx",
    views: 90,
    dashboard: [
      { heading: "Global", content: dummyContent },
      { heading: "North America", content: dummyContent },
      { heading: "Europe", content: dummyContent },
      { heading: "Asia-Pacific", content: dummyContent },
      { heading: " America", content: dummyContent },
      { heading: "Middle East & Africa", content: dummyContent },
    ],

    tabs: [
      {
        heading: "Market Overview",
        content:
          "The global medical device packaging market is projected to grow significantly, driven by increasing demand for advanced healthcare solutions.",
      },
      {
        heading: "Regulatory Landscape",
        content:
          "Stringent regulations and standards are shaping the packaging requirements for medical devices globally.",
      },
    ],
    faqs: [
      {
        question: "What are the key drivers of market growth?",
        answer:
          "Technological advancements, increasing healthcare expenditure, and rising demand for sterile packaging solutions.",
      },
      {
        question: "How does this report address sustainability?",
        answer:
          "The report highlights trends towards eco-friendly materials and sustainable packaging practices in the medical device sector.",
      },
    ],
    info: [
      {
        title: "Market Size",
        content:
          "The market was valued at $XX billion in 2022 and is expected to reach $XX billion by 2033.",
        icon: "globe",
      },
      {
        title: "Key Players",
        content:
          "Major players include Company A, Company B, and Company C, leading in innovation and market share.",
        icon: "bot",
      },
    ],
    charts: [
      {
        title: "Global Medical Device Packaging Market Growth",
        type: "line",
        options: {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "cross" },
            formatter: "{b}: {c} $B",
          },
          xAxis: {
            type: "category",
            data: [
              "2022",
              "2023",
              "2024",
              "2025",
              "2026",
              "2027",
              "2028",
              "2029",
              "2030",
              "2031",
              "2032",
              "2033",
            ],
          },
          yAxis: { type: "value" },
          series: [
            {
              name: "Market Size ($B)",
              type: "line",
              data: [
                "100",
                "120",
                "150",
                "170",
                "190",
                "210",
                "240",
                "270",
                "285",
                "300",
                "330",
              ],
              itemStyle: { color: "#FF5733" },
            },
          ],
        },
      },
      {
        title: "Market Share by Material Type",
        type: "pie",
        options: {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: "left",
            top: "center",
          },
          series: [
            {
              name: "Material Type",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              data: [
                { value: 40, name: "Plastic" },
                { value: 30, name: "Paper & Paperboard" },
                { value: 20, name: "Metal" },
                { value: 10, name: "Glass" },
              ],
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "16",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    ],
    createdAt: "2025-06-01T09:00:00Z",
    updatedAt: "2025-06-18T16:00:00Z",
  },
];  


export const generateDummyReports = (count) => {
  const reports = [];
  const reportTypes = [
    "Published Reports",
    "Upcoming Reports",
    "On Demand Reports",
    "Snapshot Reports",
  ];

  for (let i = 0; i < count; i++) {
    const industry =
      initialIvData[Math.floor(Math.random() * initialIvData.length)];
    const subIndustry =
      industry.ulData[Math.floor(Math.random() * industry.ulData.length)];
    const regionName =
      Object.keys(initialAreas)[
        Math.floor(Math.random() * Object.keys(initialAreas).length)
      ];
    const country =
      initialAreas[regionName][
        Math.floor(Math.random() * initialAreas[regionName].length)
      ];
    const type = reportTypes[Math.floor(Math.random() * reportTypes.length)];
    const year = 2020 + Math.floor(Math.random() * 6);
    const title = `${industry.name} - ${
      subIndustry.name
    } Market Size, Share, Industry, Forecast and Outlook (${year}-${year + 5})`;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    reports.push({
      id: `report-${i + 1}`,
      title,
      slug,
      industry: industry.name,
      subIndustry: subIndustry.name,
      geography: country,
      reportType: type,
      date: new Date(year, 0, 1).toISOString().split("T")[0],
      description: `This comprehensive report provides an in-depth analysis of the ${industry.name} - ${subIndustry.name} market in ${country}.`,
      tableOfContents: [
        "Executive Summary",
        "Market Overview",
        "Market Dynamics (Drivers, Restraints, Opportunities)",
        `Market Segmentation by Industry (${industry.name})`,
        `Market Segmentation by Sub-Industry (${subIndustry.name})`,
        `Market Segmentation by Geography (${country})`,
        "Competitive Landscape",
        "Company Profiles",
        "Appendix (Methodology, Data Sources, Disclaimer)",
      ],
      keyFindings: [
        `The ${subIndustry.name} segment within ${industry.name} is projected for significant growth.`,
        `Emerging economies like ${country} are showing rapid expansion.`,
        "Technological advancements are driving innovation and new product development.",
      ],
      reportCode: `${industry.code}-${subIndustry.slug
        .toUpperCase()
        .substring(0, 3)}-${year}`,
    });
  }

  return reports;
};

export const dummyReports = generateDummyReports(50);

export const company_profiles = [
  {
    "name": "Sun Pharmaceutical Industries Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Generic medicines",
      "Active Pharmaceutical Ingredients (APIs)",
      "Formulations for various therapies (dermatology, neurology, cardiology, etc.)"
    ],
    "market_cap_Cr": 402200.52
  },
  {
    "name": "Divi's Laboratories Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Active Pharmaceutical Ingredients (APIs)",
      "Intermediates",
      "Nutraceuticals"
    ],
    "market_cap_Cr": 183345.87
  },
  {
    "name": "Max Healthcare Institute Ltd.",
    "industry": "Hospitals & Diagnostic Centres",
    "location": "India",
    "services": [
      "Tertiary and quaternary care",
      "Specialized medical services (oncology, cardiology, orthopedics, etc.)"
    ],
    "market_cap_Cr": 126204.10
  },
  {
    "name": "Cipla Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Medicines for respiratory, anti-retroviral, and oncology therapies",
      "Consumer healthcare products",
      "Biosimilars"
    ],
    "market_cap_Cr": 122236.99
  },
  {
    "name": "Torrent Pharmaceuticals Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Branded and generic pharmaceuticals",
      "Cardiovascular, central nervous system (CNS), gastrointestinal, and women's healthcare therapies"
    ],
    "market_cap_Cr": 113988.42
  },
  {
    "name": "Dr Reddy's Laboratories Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Generic medicines",
      "Active Pharmaceutical Ingredients (APIs)",
      "Formulations for various therapies"
    ],
    "market_cap_Cr": 108792.61
  },
  {
    "name": "Apollo Hospitals Enterprise Ltd.",
    "industry": "Hospitals & Diagnostic Centres",
    "location": "India",
    "services": [
      "Comprehensive medical services",
      "Specialties like cardiology, oncology, and organ transplants"
    ],
    "market_cap_Cr": 108607.74
  },
  {
    "name": "Zydus Lifesciences Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Generic medicines",
      "Active Pharmaceutical Ingredients (APIs)",
      "Formulations for various therapies"
    ],
    "market_cap_Cr": 100724.02
  },
  {
    "name": "Mankind Pharma Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Antibiotics",
      "Gastrointestinal medicines",
      "Cardiovascular medicines",
      "Dermatology medicines"
    ],
    "market_cap_Cr": 100671.10
  },
  {
    "name": "LUPIN",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Generic medicines",
      "Branded formulations",
      "Biosimilars"
    ],
    "market_cap_Cr": 90470.90
  },
  {
    "name": "Abbott India Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Pharmaceuticals",
      "Nutritional products",
      "Diagnostics",
      "Devices"
    ],
    "market_cap_Cr": 73809.45
  },
  {
    "name": "Aurobindo Pharma Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Active Pharmaceutical Ingredients (APIs)",
      "Generic formulations",
      "Biosimilars"
    ],
    "market_cap_Cr": 69190.90
  },
  {
    "name": "Fortis Healthcare Ltd.",
    "industry": "Hospitals & Diagnostic Centres",
    "location": "India",
    "services": [
      "Advanced diagnostics",
      "Tertiary care",
      "Cutting-edge treatments"
    ],
    "market_cap_Cr": 60928.90
  },
  {
    "name": "Alkem Laboratories Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Branded generics",
      "Generic drugs",
      "Active Pharmaceutical Ingredients (APIs)",
      "Nutraceuticals"
    ],
    "market_cap_Cr": 58423.05
  },
  {
    "name": "GlaxoSmithKline Pharmaceuticals Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Pharmaceuticals",
      "Vaccines",
      "Consumer healthcare products"
    ],
    "market_cap_Cr": 55627.86
  },
  {
    "name": "Glenmark Pharmaceuticals Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Generic medicines",
      "Branded formulations",
      "Active Pharmaceutical Ingredients (APIs)"
    ],
    "market_cap_Cr": 51654.04
  },
  {
    "name": "BIOCON",
    "industry": "Biotechnology",
    "location": "India",
    "products": [
      "Biopharmaceuticals",
      "Generics",
      "Biosimilars",
      "Research services"
    ],
    "market_cap_Cr": 50719.74
  },
  {
    "name": "Laurus Labs Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Active Pharmaceutical Ingredients (APIs)",
      "Formulations",
      "Biotechnology products"
    ],
    "market_cap_Cr": 41876.49
  },
  {
    "name": "Narayana Hrudayalaya Ltd.",
    "industry": "Hospitals & Diagnostic Centres",
    "location": "India",
    "services": [
      "Affordable and high-quality medical services",
      "Specializing in cardiology and cardiac surgery"
    ],
    "market_cap_Cr": 40851.50
  },
  {
    "name": "Cohance Lifesciences Ltd.",
    "industry": "Pharmaceuticals",
    "location": "India",
    "products": [
      "Active Pharmaceutical Ingredients (APIs)",
      "Intermediates",
      "Specialty chemicals"
    ],
    "market_cap_Cr": 39653.08
  }
]

export const initialIvData1 = [
    {
        "id": "uuid-ad-01",
        "name": "Aerospace, Defence and Aviation",
        "slug": "aerospace-defence-and-aviation",
        "code": "AD",
        "children": [
            {
                "id": "uuid-ad-02",
                "name": "Aviation",
                "slug": "aviation",
                "children": [
                    {
                        "id": "uuid-ad-03",
                        "name": "Commercial Aviation",
                        "children": [
                            {
                                "id": "uuid-ad-04",
                                "name": "Narrow-Body Aircraft",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-05",
                                "name": "Wide-Body Aircraft",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-06",
                                "name": "Regional Jets",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ad-07",
                        "name": "General Aviation",
                        "children": [
                            {
                                "id": "uuid-ad-08",
                                "name": "Private Jets",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-09",
                                "name": "Light Aircraft",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-10",
                                "name": "Helicopters",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ad-11",
                        "name": "MRO Services",
                        "children": [
                            {
                                "id": "uuid-ad-12",
                                "name": "Airframe MRO",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-13",
                                "name": "Engine MRO",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-14",
                                "name": "Line Maintenance",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ad-15",
                        "name": "Airline Fleet Management",
                        "children": [
                            {
                                "id": "uuid-ad-16",
                                "name": "Leasing",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-17",
                                "name": "Financing",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ad-18",
                        "name": "Aircraft Leasing",
                        "children": [
                            {
                                "id": "uuid-ad-19",
                                "name": "Operating Lease",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-20",
                                "name": "Finance Lease",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-ad-21",
                "name": "Aerospace & Defence Systems & Technologies",
                "slug": "aerospace-and-defence-systems-and-technologies",
                "children": [
                    {
                        "id": "uuid-ad-22",
                        "name": "Military Aircraft",
                        "children": [
                            {
                                "id": "uuid-ad-23",
                                "name": "Fighters",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-24",
                                "name": "Transport Aircraft",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-25",
                                "name": "Reconnaissance Aircraft",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ad-26",
                        "name": "Missiles & Defence",
                        "children": [
                            {
                                "id": "uuid-ad-27",
                                "name": "Air Defence Missiles",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-28",
                                "name": "Anti-Tank Missiles",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Ballistic Missiles",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ad-30",
                        "name": "Radar & Surveillance",
                        "children": [
                            {
                                "id": "uuid-ad-29",
                                "name": "Ground Radar",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Airborne Radar",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Maritime Radar",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ad-31",
                        "name": "UAV",
                        "children": [
                            {
                                "id": "uuid-ad-29",
                                "name": "Fixed-Wing UAV",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Rotary-Wing UAV",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Hybrid UAV",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ad-32",
                        "name": "Cyber Defence",
                        "children": [
                            {
                                "id": "uuid-ad-29",
                                "name": "Network Security",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Encryption Solutions",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Countermeasure Systems",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-ad-33",
                "name": "Airports",
                "slug": "airports",
                "children": []
            },
            {
                "id": "uuid-ad-34",
                "name": "Space",
                "slug": "space",
                "children": []
            },
            {
                "id": "uuid-ad-35",
                "name": "Aerospace & Defence Services",
                "slug": "aerospace-and-defence-services",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-ag-01",
        "name": "Agriculture",
        "slug": "agriculture",
        "code": "AG",
        "children": [
            {
                "id": "uuid-ag-02",
                "name": "Agrochemicals",
                "slug": "agrochemicals",
                "children": [
                    {
                        "id": "uuid-ag-03",
                        "name": "Pesticides",
                        "children": [
                            {
                                "id": "uuid-ag-29",
                                "name": "Insecticides",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Fungicides",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Rodenticides",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ag-04",
                        "name": "Herbicides",
                        "children": [
                            {
                                "id": "uuid-ad-29",
                                "name": "Selective Herbicides",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Non-Selective Herbicides",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ag-05",
                        "name": "Fertilizers",
                        "children": [
                            {
                                "id": "uuid-ad-29",
                                "name": "Nitrogen Fertilizers",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Phosphate Fertilizers",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Potash Fertilizers",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ag-06",
                        "name": "Herbicides",
                        "children": [
                            {
                                "id": "uuid-ad-29",
                                "name": "Bio-Pesticides",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Synthetic Chemicals",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-ag-06",
                "name": "Seeds",
                "slug": "seeds",
                "children": [
                    {
                        "id": "uuid-ag-07",
                        "name": "Genetically Modified",
                        "children": []
                    },
                    {
                        "id": "uuid-ag-08",
                        "name": "Conventional",
                        "children": []
                    },
                    {
                        "id": "uuid-ag-09",
                        "name": "Hybrid",
                        "children": []
                    },
                    {
                        "id": "uuid-ag-10",
                        "name": "Seed Treatments",
                        "children": [
                            {
                                "id": "uuid-ad-29",
                                "name": "Chemical Treatments",
                                "children": []
                            },
                            {
                                "id": "uuid-ad-29",
                                "name": "Biological Treatments",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-ag-10",
                "name": "Technology",
                "slug": "technology",
                "children": [
                    {
                        "id": "uuid-ag-11",
                        "name": "Precision Farming",
                        "children": [
                            {
                                "id": "uuid-ag-11",
                                "name": "Sensors & IoT",
                                "children": []
                            },
                            {
                                "id": "uuid-ag-11",
                                "name": "Drones",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ag-12",
                        "name": "Smart Irrigation",
                        "children": [
                            {
                                "id": "uuid-ag-11",
                                "name": "Drip Systems",
                                "children": []
                            },
                            {
                                "id": "uuid-ag-11",
                                "name": "Sprinklers",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ag-11",
                        "name": "Farm Management Software",
                        "children": [
                            {
                                "id": "uuid-ag-11",
                                "name": "Crop Monitoring",
                                "children": []
                            },
                            {
                                "id": "uuid-ag-11",
                                "name": "Yield Mapping",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-ag-13",
                "name": "Machinery & Equipment",
                "slug": "machinery-and-equipment",
                "children": [
                    {
                        "id": "uuid-ag-11",
                        "name": "Tractors",
                        "children": []
                    },
                    {
                        "id": "uuid-ag-11",
                        "name": "Harvesters",
                        "children": []
                    },
                    {
                        "id": "uuid-ag-11",
                        "name": "Seeding Equipment",
                        "children": []
                    },
                    {
                        "id": "uuid-ag-11",
                        "name": "Irrigation Equipment",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-ag-14",
                "name": "Animal Nutrition",
                "slug": "animal-nutrition",
                "children": [
                    {
                        "id": "uuid-ag-11",
                        "name": "Feed Additives",
                        "children": [
                            {
                                "id": "uuid-ag-11",
                                "name": "Amino Acids",
                                "children": []
                            },
                            {
                                "id": "uuid-ag-11",
                                "name": "Vitamins & Minerals",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-ag-11",
                        "name": "Compound Feed",
                        "children": [
                            {
                                "id": "uuid-ag-11",
                                "name": "Poultry Feed",
                                "children": []
                            },
                            {
                                "id": "uuid-ag-11",
                                "name": "Swine Feed",
                                "children": []
                            },
                            {
                                "id": "uuid-ag-11",
                                "name": "Aquafeed",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-ag-15",
                "name": "Commodities",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-autr-01",
        "name": "Automotive and Transportation",
        "slug": "automotive-and-transportation",
        "code": "AUTR",
        "children": [
            {
                "id": "uuid-autr-02",
                "name": "Automotive",
                "slug": "automotive",
                "children": [
                    {
                        "id": "uuid-autr-03",
                        "name": "Passenger Vehicles",
                        "children": [
                            {
                                "id": "uuid-autr-03",
                                "name": "Hatchbacks",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-03",
                                "name": "Sedans",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-03",
                                "name": "SUVs",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-autr-04",
                        "name": "Commercial Vehicles",
                        "children": [
                            {
                                "id": "uuid-autr-03",
                                "name": "Light Commercial Vehicles (LCV)",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-03",
                                "name": "Heavy Commercial Vehicles (HCV)",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-03",
                                "name": "Buses & Coaches",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-autr-05",
                        "name": "Electric Vehicles",
                        "children": [
                            {
                                "id": "uuid-autr-03",
                                "name": "Battery Electric Vehicles (BEV)",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-03",
                                "name": "Plug-In Hybrid Electric Vehicles (PHEV)",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-03",
                                "name": "Fuel Cell Electric Vehicles (FCEV)",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-autr-05",
                        "name": "Autonomous Vehicles",
                        "children": [
                            {
                                "id": "uuid-autr-03",
                                "name": "Level 1–2 ADAS",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-03",
                                "name": "Level 3+ Autonomous",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-autr-06",
                "name": "Transportation",
                "slug": "transportation",
                "children": [
                    {
                        "id": "uuid-autr-07",
                        "name": "Railways",
                        "children": [
                            {
                                "id": "uuid-autr-07",
                                "name": "Rolling Stock",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-08",
                                "name": "Signaling Systems",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-autr-08",
                        "name": "Marine",
                        "children": [
                            {
                                "id": "uuid-autr-07",
                                "name": "Cargo Ship",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-08",
                                "name": "Passenger Ferries",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-autr-07",
                        "name": "Public Transport",
                        "children": [
                            {
                                "id": "uuid-autr-07",
                                "name": "BRT Systems",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-08",
                                "name": "Metro Systems",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-autr-08",
                        "name": "Freight & Logistics",
                        "children": [
                            {
                                "id": "uuid-autr-07",
                                "name": "3PL Services",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-08",
                                "name": "Last Mile Delivery",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-autr-09",
                "name": "Telematics",
                "slug": "telematics",
                "children": [
                    {
                        "id": "uuid-autr-07",
                        "name": "Fleet Management",
                        "children": [
                            {
                                "id": "uuid-autr-07",
                                "name": "Tracking & Monitoring",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-07",
                                "name": "Driver Behavior Analysis",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-autr-08",
                        "name": "Connected Car Services",
                        "children": [
                            {
                                "id": "uuid-autr-07",
                                "name": "In-Vehicle Connectivity",
                                "children": []
                            },
                            {
                                "id": "uuid-autr-07",
                                "name": "Emergency Calling",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-autr-07",
                        "name": "Usage-Based Insurance",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-autr-10",
                "name": "systems-and-modules",
                "slug": "Systems and Modules",
                "children": []
            },
            {
                "id": "uuid-autr-11",
                "name": "Automotive Components",
                "slug": "automotive-components",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-bt-01",
        "name": "Biotechnology",
        "slug": "biotechnology",
        "code": "BT",
        "children": [
            {
                "id": "uuid-bt-02",
                "name": "Genomics",
                "children": [
                    {
                        "id": "uuid-bt-02",
                        "name": "DNA Sequencing",
                        "children": []
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "Genotyping",
                        "children": []
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "CRISPR Gene Editing",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-bt-03",
                "name": "Cell & Gene Therapy",
                "children": [
                    {
                        "id": "uuid-bt-02",
                        "name": "Cell-Based Therapy",
                        "children": []
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "Gene Therapy Vectors",
                        "children": []
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "CAR-T Therapy",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-bt-03",
                "name": "Bioprocessing & Biomanufacturing",
                "children": [
                    {
                        "id": "uuid-bt-02",
                        "name": "Upstream Processing",
                        "children": []
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "Downstream Processing",
                        "children": []
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "Single-Use Technologies",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "uuid-ch-01",
        "name": "Chemicals",
        "slug": "chemicals",
        "code": "CH",
        "children": [
            {
                "id": "uuid-ch-02",
                "name": "Coatings, Adhesives, Sealants & Elastomers",
                "children": [
                    {
                        "id": "uuid-bt-02",
                        "name": "Coatings",
                        "children": [
                            {
                                "id": "uuid-bt-02",
                                "name": "Powder Coatings",
                                "children": []
                            },
                            {
                                "id": "uuid-bt-02",
                                "name": "Waterborne Coatings",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "Adhesives",
                        "children": [
                            {
                                "id": "uuid-bt-02",
                                "name": "Pressure Sensitive Adhesives",
                                "children": []
                            },
                            {
                                "id": "uuid-bt-02",
                                "name": "Reactive Adhesives",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "Sealants",
                        "children": [
                            {
                                "id": "uuid-bt-02",
                                "name": "Silicone Sealants",
                                "children": []
                            },
                            {
                                "id": "uuid-bt-02",
                                "name": "Polyurethane Sealants",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-ch-03",
                "name": "Commodity Chemicals",
                "children": [
                    {
                        "id": "uuid-bt-02",
                        "name": "Petrochemicals",
                        "children": [
                            {
                                "id": "uuid-petrochem-basic",
                                "name": "Basic Petrochemicals",
                                "children": [
                                    {
                                        "id": "uuid-petrochem-basic-03",
                                        "name": "Butadiene",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-basic-01",
                                        "name": "Ethylene",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-basic-03",
                                        "name": "Olefins",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-basic-02",
                                        "name": "Propylene",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "uuid-petrochem-intermediates",
                                "name": "Intermediates & Derivatives",
                                "children": [
                                    {
                                        "id": "uuid-petrochem-int-01",
                                        "name": "Aromatics",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-int-01",
                                        "name": "Benzene & Toluene",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-int-02",
                                        "name": "Styrene",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-int-03",
                                        "name": "Xylenes",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "uuid-petrochem-polymers",
                                "name": "Polymers",
                                "children": [
                                    {
                                        "id": "uuid-petrochem-poly-01",
                                        "name": "Polyethylene (PE)",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-poly-02",
                                        "name": "Polypropylene (PP)",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-poly-03",
                                        "name": "Polyvinyl Chloride (PVC)",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "uuid-petrochem-specialty",
                                "name": "Specialty Petrochemicals",
                                "children": [
                                    {
                                        "id": "uuid-petrochem-spec-01",
                                        "name": "Performance Plastics",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-spec-02",
                                        "name": "Engineering Thermoplastics",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-spec-03",
                                        "name": "Synthetic Rubbers",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "uuid-petrochem-downstream",
                                "name": "Downstream Applications",
                                "children": [
                                    {
                                        "id": "uuid-petrochem-down-01",
                                        "name": "Packaging Materials",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-down-02",
                                        "name": "Automotive Plastics",
                                        "children": []
                                    },
                                    {
                                        "id": "uuid-petrochem-down-03",
                                        "name": "Building & Construction Plastics",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-ch-04",
                "name": "Specialty Chemicals",
                "children": [
                    {
                        "id": "uuid-bt-02",
                        "name": "Performance Additives",
                        "children": []
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "Construction Chemicals",
                        "children": []
                    },
                    {
                        "id": "uuid-bt-02",
                        "name": "Water Treatment",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-ch-04",
                "name": "Bulk Chemicals and Inorganics",
                "children": []
            },
            {
                "id": "uuid-ch-04",
                "name": "Equipment, Machines and Tooling",
                "children": []
            },
            {
                "id": "uuid-ch-04",
                "name": "Green Bio Chemicals",
                "children": []
            },
            {
                "id": "uuid-ch-04",
                "name": "Lubricants",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-cd-01",
        "name": "Clinical Diagnostics",
        "slug": "clinical-diagnostics",
        "code": "CD",
        "children": [
        ]
    },
    {
        "id": "uuid-ci-01",
        "name": "Construction Industry",
        "slug": "construction-industry",
        "code": "CI",
        "children": [
            {
                "id": "uuid-ci-02",
                "name": "Residential Construction",
                "children": [
                    {
                        "id": "uuid-custom-01",
                        "name": "Single-Family Housing",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-02",
                        "name": "Multi-Family Housing",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-03",
                        "name": "Luxury Apartments",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-ci-03",
                "name": "Commercial Construction",
                "children": [
                    {
                        "id": "uuid-custom-04",
                        "name": "Office Buildings",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-05",
                        "name": "Retail & Shopping Centers",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-06",
                        "name": "Warehouses & Distribution",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-ci-04",
                "name": "Industrial Construction",
                "children": [
                    {
                        "id": "uuid-custom-07",
                        "name": "Factories & Manufacturing Plants",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-08",
                        "name": "Data Centers",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-09",
                        "name": "Power & Utility Infrastructure",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-ci-05",
                "name": "Infrastructure & Heavy Civil",
                "children": [
                    {
                        "id": "uuid-custom-10",
                        "name": "Roads & Highways",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-11",
                        "name": "Bridges & Tunnels",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-12",
                        "name": "Railways & Metros",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-ci-06",
                "name": "Green & Sustainable Construction",
                "children": [
                    {
                        "id": "uuid-custom-13",
                        "name": "Green Building Materials",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-14",
                        "name": "Smart Building Systems",
                        "children": []
                    },
                    {
                        "id": "uuid-custom-15",
                        "name": "Modular & Prefabricated Construction",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "uuid-cpg-01",
        "name": "Consumer Packaged Goods and FMCG",
        "slug": "consumer-packaged-goods-and-fmcg",
        "code": "CPG",
        "children": [
            {
                "id": "uuid-cpg-02",
                "name": "Consumer Goods",
                "children": [
                    {
                        "id": "uuid-hc-01",
                        "name": "Personal Care Products",
                        "children": [
                            {
                                "id": "uuid-hc-01-01",
                                "name": "Skin Care",
                                "children": []
                            },
                            {
                                "id": "uuid-hc-01-02",
                                "name": "Hair Care",
                                "children": []
                            },
                            {
                                "id": "uuid-hc-01-03",
                                "name": "Oral Care",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-hc-02",
                        "name": "Household Care Products",
                        "children": [
                            {
                                "id": "uuid-hc-02-01",
                                "name": "Detergents",
                                "children": []
                            },
                            {
                                "id": "uuid-hc-02-02",
                                "name": "Cleaners",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-hc-03",
                        "name": "Pet Care Products",
                        "children": []
                    },
                    {
                        "id": "uuid-hc-03",
                        "name": "Fashion & Apparel",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-cpg-03",
                "name": "Durables & Appliances",
                "children": [
                    {
                        "id": "uuid-appl-01",
                        "name": "Kitchen Utensils & Appliances",
                        "children": []
                    },
                    {
                        "id": "uuid-appl-02",
                        "name": "Small Household Appliances",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-cpg-05",
                "name": "FMCG Retail",
                "children": [
                    {
                        "id": "uuid-appl-02",
                        "name": "Trade & Retail",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "uuid-eap-01",
        "name": "Energy and Power",
        "code": "EAP",
        "children": [
            {
                "id": "uuid-eap-02",
                "name": "Renewable Energy",
                "children": []
            },
            {
                "id": "uuid-eap-02",
                "name": "Oil & Gas",
                "children": []
            },
            {
                "id": "uuid-eap-02",
                "name": "Power Generation and Equipments",
                "children": []
            },
            {
                "id": "uuid-eap-02",
                "name": "Engines and Gensets",
                "children": []
            },
            {
                "id": "uuid-eap-02",
                "name": "Energy Storage",
                "children": []
            },
            {
                "id": "uuid-eap-02",
                "name": "Transmission and Distribution",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-fb-01",
        "name": "Food and Beverages",
        "slug": "food-and-beverages",
        "code": "FB",
        "children": [
            {
                "id": "uuid-fb-02",
                "name": "Food",
                "children": [
                    {
                        "id": "uuid-cat-01",
                        "name": "Processed Foods",
                        "children": [
                            {
                                "id": "uuid-cat-01-01",
                                "name": "Ready Meals",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-01-02",
                                "name": "Frozen Foods",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-cat-02",
                        "name": "Bakery & Confectionery",
                        "children": [
                            {
                                "id": "uuid-cat-02-01",
                                "name": "Bread & Baked Goods",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-02-02",
                                "name": "Chocolate & Candy",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-cat-03",
                        "name": "Meat & Poultry",
                        "children": [
                            {
                                "id": "uuid-cat-03-01",
                                "name": "Fresh Meat",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-03-02",
                                "name": "Processed Meat",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-cat-04",
                        "name": "Dairy",
                        "children": [
                            {
                                "id": "uuid-cat-04-01",
                                "name": "Milk",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-04-02",
                                "name": "Yogurt",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-04-03",
                                "name": "Cheese",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-fb-03",
                "name": "Beverages",
                "children": [
                    {
                        "id": "uuid-cat-05",
                        "name": "Alcoholic",
                        "children": [
                            {
                                "id": "uuid-cat-05-01",
                                "name": "Beer",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-05-02",
                                "name": "Wine",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-05-03",
                                "name": "Spirits",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-cat-06",
                        "name": "Non-Alcoholic",
                        "children": [
                            {
                                "id": "uuid-cat-06-01",
                                "name": "Juices",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-06-02",
                                "name": "Soft Drinks",
                                "children": []
                            },
                            {
                                "id": "uuid-cat-06-03",
                                "name": "Bottled Water",
                                "children": []
                            }
                        ]
                    }
                ]
            },
            {
                "id": "uuid-fb-04",
                "name": "Ingredients & Additives",
                "children": [
                    {
                        "id": "uuid-cat-07",
                        "name": "Flavors & Fragrances",
                        "children": []
                    },
                    {
                        "id": "uuid-cat-08",
                        "name": "Enzymes",
                        "children": []
                    },
                    {
                        "id": "uuid-cat-09",
                        "name": "Preservatives",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "uuid-ict",
        "name": "Information, Communication and Technology",
        "children": [
            {
                "id": "uuid-ict-analytics",
                "name": "Analytics, IT and Cloud",
                "children": []
            },
            {
                "id": "uuid-ict-telecom",
                "name": "Mobility & Telecom",
                "children": []
            },
            {
                "id": "uuid-ict-safety",
                "name": "Public Safety",
                "children": []
            },
            {
                "id": "uuid-ict-software",
                "name": "Software & Services",
                "children": []
            },
            {
                "id": "uuid-ict-equipments",
                "name": "Equipments, Machines and Devices",
                "children": []
            },
            {
                "id": "uuid-ict-semicon",
                "name": "Semiconductor and Electronics",
                "children": []
            },
            {
                "id": "uuid-ict-advancedtech",
                "name": "Advanced Technologies",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-mat-01",
        "name": "Materials",
        "slug": "materials",
        "code": "MAT",
        "children": [
            {
                "id": "uuid-mat-07",
                "name": "Ceramics and Glass",
                "children": []
            },
            {
                "id": "uuid-mat-08",
                "name": "Commodity Materials",
                "children": []
            },
            {
                "id": "uuid-mat-02",
                "name": "Fibers and Composites",
                "children": []
            },
            {
                "id": "uuid-mat-03",
                "name": "Foam and Insulation",
                "children": []
            },
            {
                "id": "uuid-mat-04",
                "name": "Infrastructure and Material",
                "children": []
            },
            {
                "id": "uuid-mat-06",
                "name": "Specialty Materials",
                "children": []
            },
            {
                "id": "uuid-mat-05",
                "name": "Yarns, Fabric and Textile",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-md-01",
        "name": "Medical Devices",
        "slug": "medical-devices",
        "code": "MD",
        "children": [
            {
                "id": "uuid-meddev-diagnostic",
                "name": "Diagnostic Devices",
                "children": [
                    {
                        "id": "uuid-meddev-diag-01",
                        "name": "In Vitro Diagnostics",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-diag-02",
                        "name": "Diagnostic Imaging",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-diag-03",
                        "name": "Imaging Systems (MRI, CT, Ultrasound)",
                        "children": [
                            {
                                "id": "uuid-medimg-01",
                                "name": "X-ray Radiography",
                                "children": []
                            },
                            {
                                "id": "uuid-medimg-02",
                                "name": "Fluoroscopy",
                                "children": []
                            },
                            {
                                "id": "uuid-medimg-03",
                                "name": "Magnetic Resonance Imaging (MRI)",
                                "children": []
                            },
                            {
                                "id": "uuid-medimg-04",
                                "name": "Medical Ultrasonography or Ultrasound",
                                "children": []
                            },
                            {
                                "id": "uuid-medimg-05",
                                "name": "Endoscopy",
                                "children": []
                            },
                            {
                                "id": "uuid-medimg-06",
                                "name": "Elastography",
                                "children": []
                            },
                            {
                                "id": "uuid-medimg-07",
                                "name": "Tactile Imaging",
                                "children": []
                            },
                            {
                                "id": "uuid-medimg-08",
                                "name": "Thermography",
                                "children": []
                            },
                            {
                                "id": "uuid-medimg-09",
                                "name": "Positron Emission Tomography (PET)",
                                "children": []
                            }
                        ]
                    },
                    {
                        "id": "uuid-meddev-diag-04",
                        "name": "Point-of-Care Testing",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-meddev-diagnostic",
                "name": "Healthcare IT Devices",
                "children": []
            },
            {
                "id": "uuid-meddev-diagnostic",
                "name": "Hospital Supplies",
                "children": [
                    {
                        "id": "uuid-ad-011",
                        "name": "Hospital Beds",
                        "children": []
                    },
                    {
                        "id": "uuid-ad-011",
                        "name": "Medical Carts",
                        "children": []
                    },
                    {
                        "id": "uuid-ad-011",
                        "name": "Medical Apparels",
                        "children": []
                    },
                    {
                        "id": "uuid-ad-011",
                        "name": "Surgical Tables and Accessories",
                        "children": []
                    },
                    {
                        "id": "uuid-ad-011",
                        "name": "Operating Room and Accessories",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-meddev-diagnostic",
                "name": "Laboratory Equipment",
                "children": []
            },
            {
                "id": "uuid-meddev-diagnostic",
                "name": "Medical Devices",
                "children": [
                    {
                        "id": "uuid-disposable-01",
                        "name": "Cardiology Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-02",
                        "name": "Infusion Disposable Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-03",
                        "name": "Surgical Disposables Products Market",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-04",
                        "name": "Endoscopy Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-05",
                        "name": "Anesthesia and Respiratory Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-06",
                        "name": "General Surgery",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-07",
                        "name": "Gynaecology and Paediatric Disposable Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-08",
                        "name": "Non Woven Disposable Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-09",
                        "name": "Blood Collection and Associated Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-10",
                        "name": "Gastroenterology Disposables",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-11",
                        "name": "Disposable Urology Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-12",
                        "name": "Ophthalmic Disposable Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-13",
                        "name": "ENT Disposable Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-14",
                        "name": "Disposable Colostomy Bags & Products",
                        "children": []
                    },
                    {
                        "id": "uuid-disposable-15",
                        "name": "Disposable Dental Products",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-meddev-monitoring",
                "name": "Monitoring Devices",
                "children": [
                    {
                        "id": "uuid-meddev-mon-01",
                        "name": "Patient Monitoring",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-mon-02",
                        "name": "Monitoring Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-mon-03",
                        "name": "Wearables & Remote Monitoring",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-mon-04",
                        "name": "Homecare Monitoring",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-meddev-support",
                "name": "Supportive Devices & Other Areas",
                "children": [
                    {
                        "id": "uuid-meddev-supp-01",
                        "name": "Ophthalmic Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-supp-02",
                        "name": "Anesthesia and Respiratory Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-supp-03",
                        "name": "Wound Care Management",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-meddev-surgical",
                "name": "Surgical Instruments & Consumables",
                "children": [
                    {
                        "id": "uuid-meddev-surg-02",
                        "name": "General Surgery Instruments",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-surg-03",
                        "name": "Endoscopy Instruments",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-surg-04",
                        "name": "Disposable Surgical Supplies",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-meddev-therapeutic",
                "name": "Therapeutic Devices",
                "children": [
                    {
                        "id": "uuid-meddev-thera-01",
                        "name": "Cardiovascular Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-02",
                        "name": "Orthopedic Devices & Implants",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-03",
                        "name": "Neurology Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-04",
                        "name": "ENT Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-05",
                        "name": "Drug Delivery Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-06",
                        "name": "Dental Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-07",
                        "name": "Diabetes Care",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-08",
                        "name": "Hematology",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-09",
                        "name": "Gastrointestinal",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-10",
                        "name": "Vascular Access Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-11",
                        "name": "Nephrology and Urology Devices",
                        "children": []
                    },
                    {
                        "id": "uuid-meddev-thera-12",
                        "name": "Pediatric Care",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "uuid-metals-01",
        "name": "Metals & Mining",
        "slug": "metals-mining",
        "code": "MET",
        "children": [
            {
                "id": "uuid-metals-04",
                "name": "Alloys",
                "children": []
            },
            {
                "id": "uuid-metals-02",
                "name": "Commodity Metals and Minerals",
                "children": []
            },
            {
                "id": "uuid-metals-05",
                "name": "Mining, Equipment and Services",
                "children": []
            },
            {
                "id": "uuid-metals-01",
                "name": "Rare Earth Metals and Minerals",
                "children": []
            },
            {
                "id": "uuid-metals-03",
                "name": "Specialty Metals and Minerals",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-pack-01",
        "name": "Packaging",
        "slug": "packaging",
        "code": "PACK",
        "children": [
            {
                "id": "uuid-pack-04",
                "name": "Packaging and Allied",
                "children": []
            },
            {
                "id": "uuid-pack-05",
                "name": "Packaging Equipment",
                "children": []
            },
            {
                "id": "uuid-pack-06",
                "name": "Packaging Materials",
                "children": []
            },
            {
                "id": "uuid-pack-07",
                "name": "Packaging Technology and Processes",
                "children": []
            },
            {
                "id": "uuid-pack-01",
                "name": "Flexible Packaging",
                "children": [
                    {
                        "id": "uuid-pack-01-02",
                        "name": "Films",
                        "children": []
                    },
                    {
                        "id": "uuid-pack-01-01",
                        "name": "Pouches",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-pack-02",
                "name": "Rigid Packaging",
                "children": [
                    {
                        "id": "uuid-pack-02-01",
                        "name": "Bottles",
                        "children": []
                    },
                    {
                        "id": "uuid-pack-02-02",
                        "name": "Jars",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-pack-03",
                "name": "Sustainable Packaging",
                "children": [
                    {
                        "id": "uuid-pack-03-02",
                        "name": "Compostable",
                        "children": []
                    },
                    {
                        "id": "uuid-pack-03-01",
                        "name": "Recyclable",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "uuid-ph-01",
        "name": "Pharmaceuticals",
        "slug": "pharmaceuticals",
        "code": "PH",
        "children": [
            {
                "id": "uuid-pharma-therapeutic",
                "name": "Therapeutic Segments",
                "children": [
                    {
                        "id": "uuid-pharma-thera-01",
                        "name": "Cardiovascular",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-thera-02",
                        "name": "Oncology",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-thera-03",
                        "name": "Infectious Diseases",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-thera-04",
                        "name": "Central Nervous System (CNS)",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-thera-05",
                        "name": "Respiratory Disorders",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-thera-06",
                        "name": "Gastrointestinal Disorders",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-pharma-drugtypes",
                "name": "Drug Types",
                "children": [
                    {
                        "id": "uuid-pharma-drug-01",
                        "name": "Branded Drugs",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-drug-02",
                        "name": "Generic Drugs",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-drug-03",
                        "name": "OTC Drugs",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-pharma-dosageforms",
                "name": "Dosage Forms",
                "children": [
                    {
                        "id": "uuid-pharma-dose-01",
                        "name": "Tablets & Capsules",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-dose-02",
                        "name": "Injectables & Infusions",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-dose-03",
                        "name": "Topical & Transdermal",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-pharma-biologics",
                "name": "Biologics & Biosimilars",
                "children": [
                    {
                        "id": "uuid-pharma-bio-01",
                        "name": "Monoclonal Antibodies",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-bio-02",
                        "name": "Vaccines",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-bio-03",
                        "name": "Recombinant Proteins",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-pharma-conditions",
                "name": "Disease Areas & Disorders",
                "children": [
                    {
                        "id": "uuid-pharma-cond-01",
                        "name": "Dermatology",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-02",
                        "name": "Ear Nose Throat Disorders",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-03",
                        "name": "Genitourinary Disorders",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-04",
                        "name": "Hematology",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-05",
                        "name": "Hormonal Disorders",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-06",
                        "name": "Immunology",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-07",
                        "name": "Metabolic Disorder",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-08",
                        "name": "Diabetes Care",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-09",
                        "name": "Mouth And Dental Disorders",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-10",
                        "name": "Pain Management",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-11",
                        "name": "Musculoskeletal",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-12",
                        "name": "Neurology",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-13",
                        "name": "Non-Malignant Disorders",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-14",
                        "name": "Nutritional Disorders",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-15",
                        "name": "Ophthalmology",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-16",
                        "name": "Other Diseases",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-17",
                        "name": "Allergy Diagnostics",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-18",
                        "name": "Women's and Male Health",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-19",
                        "name": "Wound Care Treatment",
                        "children": []
                    },
                    {
                        "id": "uuid-pharma-cond-20",
                        "name": "Syndrome",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "uuid-vh-01",
        "name": "Veterinary Health",
        "slug": "veterinary-health",
        "code": "vh",
        "children": [
            {
                "id": "uuid-vh-02",
                "name": "Veterinary Drugs and Vaccines",
                "children": []
            },
            {
                "id": "uuid-vh-02",
                "name": "Veterinary Medical Devices",
                "children": []
            },
            {
                "id": "uuid-vh-02",
                "name": "Veterinary Medical Imaging",
                "children": []
            },
            {
                "id": "uuid-vh-02",
                "name": "Veterinary Medical Supplements",
                "children": []
            },
            {
                "id": "uuid-vh-02",
                "name": "Veterinary Surgical Equipment",
                "children": []
            }
        ]
    },
    {
        "id": "uuid-w-01",
        "name": "Water",
        "slug": "water",
        "code": "W",
        "children": [
            {
                "id": "uuid-w-02",
                "name": "Water Treatment",
                "children": [
                    {
                        "id": "uuid-water-01",
                        "name": "Industrial Water Treatment",
                        "children": []
                    },
                    {
                        "id": "uuid-water-02",
                        "name": "Municipal Water Treatment",
                        "children": []
                    },
                    {
                        "id": "uuid-water-03",
                        "name": "Desalination Systems",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-w-03",
                "name": "Water Filtration & Purification",
                "children": [
                    {
                        "id": "uuid-watertech-01",
                        "name": "Reverse Osmosis Systems",
                        "children": []
                    },
                    {
                        "id": "uuid-watertech-02",
                        "name": "UV Filtration Systems",
                        "children": []
                    },
                    {
                        "id": "uuid-watertech-03",
                        "name": "Activated Carbon Filtration",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-w-04",
                "name": "Water Supply & Distribution",
                "children": [
                    {
                        "id": "uuid-waterinfra-01",
                        "name": "Pipe Networks",
                        "children": []
                    },
                    {
                        "id": "uuid-waterinfra-02",
                        "name": "Pumps & Valves",
                        "children": []
                    },
                    {
                        "id": "uuid-waterinfra-03",
                        "name": "Smart Water Management",
                        "children": []
                    }
                ]
            },
            {
                "id": "uuid-w-05",
                "name": "Wastewater Treatment",
                "children": [
                    {
                        "id": "uuid-wastewater-01-01",
                        "name": "Sewage Treatment Plants (STPs)",
                        "children": []
                    },
                    {
                        "id": "uuid-wastewater-01-02",
                        "name": "Effluent Treatment Plants (ETPs)",
                        "children": []
                    },
                    {
                        "id": "uuid-wastewater-01-03",
                        "name": "Sludge Management Solutions",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "uuid-ot-01",
        "name": "Others",
        "slug": "others",
        "code": "OT",
        "children": [
            {
                "id": "uuid-ot-02",
                "name": "Others",
                "slug": "others",
                "children": []
            }
        ]
    }
]