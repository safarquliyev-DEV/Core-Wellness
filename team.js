function goTo(page) {
  window.location.href = page;
}
const teamData = [
  // FEMALE (8)
  {
    id: 1,
    gender: "female",
    name: "Princess",
    img: "./assets/team/Team/Princess.webp",
    nationality: "Filipino",
    role: "Senior therapist",
    specializations: "Advance Technology Machine, Advanced Massage Therapy, Specialized Facial Treatments, Body Scrubs and Wraps, Personalized Consultation",
    // [
    //     "Advance Technology Machine (e.g., Venus Legacy, Indiba, Mlx Idome, Cryo, Oxygen Chamber, Linfopress, Hydracool, Remodelling)",
    //     "Advanced Massage Therapy (e.g., swedish, deep tissue, hot stone, prenatal)",
    //     "Specialized Facial Treatments (e.g., Dr Burgener, Biologic Recherche, Elemis)1",
    //     "Body Scrubs and Wraps (e.g., hydrotherapy, signature rituals)",
    //     "Personalized Consultation",
    //   ],
    qualification: [
      "Bachelor’s degree in Hotel and Restaurant Management, Philippines",
      "Award as Best Face Remodeling for the Seminar of Biologic Recherche last 2023 located in Four Season and Champion of The Month of March 2025",
    ],
    summary: "I was born in Philippines. As a Senior Spa Therapist with over 9 years of experience in luxury spa environments, I provide a transformative and deeply restorative experience for every guest. My passion lies in creating bespoke treatment plans that address individual needs, promoting physical relaxation and mental clarity. I specialize in a wide range of advanced therapies, including advanced techniques, hot stone massage therapy, advanced facials, signature body rituals and stay at the forefront of industry innovations. I believe a truly exceptional spa experience is built on a foundation of presence, expertise, and personalized care. For me, this means taking the time to conduct a detailed pre-treatment consultation and integrating mindful techniques to ensure each session is intentional and deeply beneficial. I am committed to upholding the highest standards of safety, hygiene, and discretion to make your time with me a sanctuary of excellence."
  },
  {
    id: 2,
    gender: "female",
    name: "Alina",
    img: "./assets/team/Team/Alina.jpeg",
    nationality: "Russian",
    role: "Spa therapist",
    specializations: "Facial, Slimming treatments, Detox, Lymphatic Drainage, Anti- cellulite therapy, Operating various machines for Face and body treatment ",
    qualification: [
      "Bachelor's degree in Practical Psychology, Saint Petersburg State University",
      "Cosmetology Nursery Diploma, Saint Petersburg Medical College",
      "Spa and Beauty Qualification Program Certificate, Medical College, Russia",
      "Certified in Hospitality and Guest Loyalty"
    ],
    summary: "Highly skilled and experienced Skin Care Specialist with over 15 years of expertise in the wellness and beauty industry. Proficient in delivering exceptional aesthetic services, with a strong background in Practical Psychology and Cosmetology. I have gained valuable hands-on experience working in a reputable aesthetic clinic, wellness club, and 5 star hotels in Turkey, Jordan, UAE, Iraq, Qatar, Egypt and KSA."
  },

  {
    id: 3,
    gender: "female",
    name: "Racha",
    img: "./assets/team/Team/Racha.webp",
    nationality: "Tunisian",
    role: "Spa therapist",
    specializations: "Advanced Facial Treatments, Advanced Massage Therapy, Body Sculpting & Wellness Technologies, Hairdressing, Manicure & Pedicure",
    qualification: [
      "Physiotherapy Certification – Swiss Tunisian Center",
      "Higher National Diploma in Marketing"
    ],
    summary: "Born in Tunisia and raised between Tunisia and Algeria, Racha discovered her passion for beauty and wellness early on, fascinated by how human touch and technology can restore both body and mind. Certified in physiotherapy from the Swiss Tunisian Center and trained in advanced skincare and wellness technologies, she brings over a decade of experience in holistic care. Her career across CORE, Lamast, and Yamami Compound has shaped her mastery of massage techniques such as Deep Tissue, Madero Therapy, Lymphatic Drainage, and Hot Stone, alongside expertise in modern treatments including Cryotherapy, Indiba, Venus Legacy, and Hyperbaric Oxygen therapy. Driven by empathy and precision, Racha’s philosophy centers on harmony, confidence, and well-being, helping every client leave with renewed balance and inner calm."
  },
  // {
  //   id: 4,
  //   gender: "female",
  //   name: "Clara",
  //   img: "./assets/team/Team/Clara.webp",
  //   nationality: "Italian",
  //   role: "Spa therapist",
  //   specializations: "",
  //   qualification: "",
  //   summary: ""
  // },
  {
    id: 5,
    gender: "female",
    name: "Hana",
    img: "./assets/team/Team/Hana.jpeg",
    nationality: "Eritrean",
    role: "Hair Stylist",
    specializations: "Advanced Coloring Techniques, Precision Styling, Hair Diagnosis & Scalp Health, Intensive Treatment Solutions, Luxury Service Standards",
    qualification: [
      "Certified Training Course Attendance – Accredited by the Technical and Vocational Training Corporation",
      "Olaplex Certification",
      "Achievement Certificate – Kérastase Styling Collection",
      "Kérastase Expert Certification",
      "Kérastase Care Coach",
      "Keune Certification",
      "Coloration Certification Program",
      "Certified Brazilian Blowout Treatment Training",
      "Wedding & Evening Hairstyling Certification – Zukhra Sullieva",
      "Advanced Haircut Training Course – Michel Naufal",
      "Fashion Week Participation Certificate – Princess Nourah bint Abdulrahman University",
      "Certificate of Appreciation – Maison de Joelle",
      "Art of Hair Certification",
      "Competition Talent Certificate",
      "Salon Expert Certification",
      "Work Experience Certificate – Nail Salon"
    ],
    summary: "I am Hana, a Saudi-born Expert Hair Stylist with over 19 years of experience in the beauty industry. My journey in hair artistry began in 2007 at Dar Bash Salon, where I discovered my passion for transforming hair into confidence and elegance. My journey began in 2007 at Dar Bash Salon, where I discovered my true passion for hair artistry — transforming hair into a complete experience that reflects each woman’s personality and confidence. From 2008 to 2011, I worked at Arabella Salon, one of Riyadh’s most renowned salons, where I refined my technical expertise and elevated my professional standards within a high-level luxury environment. In November 2011, I joined Maison de Joelle, where I remained until 2018. This period marked a pivotal turning point in my career, as I specialized in advanced colouring techniques, precision styling, and intensive treatment solutions. During this time, I completed professional programs with L’Oréal Academy and participated in industry events that strengthened my expertise and kept me aligned with global beauty trends. From 2018 to 2019, I continued expanding my artistry at Maison de Belle, further developing my creative identity and loyal client base. Between 2020 and August 2023, I reached a new professional milestone with Kerastase, earning the Salon Expert Certification after successfully passing rigorous professional evaluations. I was honored to represent both L’Oréal and Kerastase as an official Ambassador and achieved the title of Kérastase Care Coach — a recognition of my advanced expertise in hair diagnosis and customized treatment pro"
  },
  {
    id: 6,
    gender: "female",
    name: "Asia",
    img: "./assets/team/Team/Asia.webp",
    nationality: "Russian",
    role: "Senior Hair Stylist",
    specializations: "Advanced Coloring Techniques, Hair Restoration & Structural Treatments, Bespoke Image Consulting",
    qualification: [
      "PAUL MITCHELL DIPLOM  Color Expression",
      "REDKEN Certificate Blonde Expert",
      "PAUL MITCHELL Certificate Blonding System",
      "PAUL MITCHELL Certificate Color System",
      "Make-Up Atelier Paris Diploma  Make-Up Artist ",
      "Honma TOKYO PROFESSIONAL Certificate  Hair restoration and reconstruction at the molecular level",
      "LOREAL PROFESSIONNEL Certificate Ombrés Nature",
      "L'ORÉAL PROFESSIONNEL Certificate Hairdresser - Fashion Designer",
      "Schwarzkopf PROFESSIONAL Certificate Geometry of short haircuts ",
      "Academy Barcelona Certificate: Complex Braiding Elements on Long Hair",
      "Tony & Guy Academy Diploma: Haircut Geometry using Pivot Point technology",
      "Tony & Guy Academy Diploma: Modern and classic men's haircuts and blow-drying",
      "Higher School of Hairdressing Czech Republic Diploma: Fashion Designer.",
    ],
    summary: "Asya is a Senior Colorist and Hair Restoration Specialist who blends high-level technical precision with an artistic, personalized approach. She focuses on delivering sophisticated color transformations while strictly maintaining the health and integrity of the hair. Beyond her technical mastery, Asya provides expert image consulting, meticulously matching hair color and style to a client’s skin tone and eye color to create a harmonious, confidence-boosting look. Her professional philosophy is rooted in precision, sustainability, and visual refinement."
  },
  {
    id: 7,
    gender: "female",
    name: "Jhoy",
    img: "./assets/team/Team/Jhoy.webp",
    nationality: "Filipino",
    role: "Assistant Hairstylist",
    specializations: "Kerastase Hair Treatment",
    qualification: [
      "Coloration Certification Program",
      "Cryotherapy",
      "Air pod Mild Hyperbaric Training Program",
    ],
    summary: "Born and raised in the Philippines, I have gained interest in hairstyling since I have joined Core Wellness Club. Trained under the guidance of veteran hairstylists my passion has grown a lot. I have been enriching my profession by participating in training, product launching and seminars."
  },
  {
    id: 8,
    gender: "female",
    name: "Anita",
    img: "./assets/team/Team/Anita.webp",
    nationality: "Argentinian",
    role: "Nail Technician",
    specializations: "Russian Manicure, Nail Art, Nail Shaping & Detailing",
    qualification: [
      "BIAB, Sculpted Nails, Gel Manicure, Pedicure",
      "Russian Manicure & Nail Art",
      "Skin Care",
    ],
    summary: "I’m Ana Guardia, a professional nail artist from San Juan, Argentina. My passion for beauty began at 16 when I started practicing makeup and discovered my true calling — nail art. I love mixing colors and creating unique designs to achieve each client’s dream look, always with care and professionalism. With a degree in Surgical Instrumentation, I ensure proper sterilization and a clean, safe workspace."
  },

  // istədiyin qədər əlavə edə bilərsən

  // MALE (6)
  {
    id: 9,
    gender: "male",
    name: "Jay",
    img: "./assets/team/Team/Jay.webp",
    nationality: "Filipino",
    role: "Senior Therapist",
    specializations: "Advanced Facial Treatments, Advanced Massage Therapy, Body Sculpting & Wellness Technologies,",
    qualification: [
      "Bachelor of Science in Physical Therapy",
      "Massage therapy NC 2"
    ],
    summary: "My journey into spa therapy began 2007, when a Wellness Company in Philippines was looking for a Physical Therapist to be trained as a spa therapist. With my background in Physical Therapy, I took the opportunity to expand my expertise and have since integrated both practices to provide personalized and effective care for my clients. For the past 15 years, I have worked in Saudi Arabia with the renowned 5-star luxury hotels (Four Seasons Hotel Kingdom Tower and Ritz Carlton Riyadh) and wellness club, which has significantly enhanced my skills and expertise in spa therapy and wellness treatment. I believe that blending physical therapy with spa treatments is delivering noticeable benefits for my clients."
  },
  {
    id: 10,
    gender: "male",
    name: "Adi",
    img: "./assets/team/Team/Adi.webp",
    nationality: "Indonesian",
    role: "Spa Therapist",
    specializations: "Advanced Facial Treatments, Advanced Massage Therapy, Thai Massage, Body Sculpting & Wellness Technologies,",
    qualification: [
      "Diploma of DHYANA PURA Hotel Tourism Training Centre Certificate of",
      "Training Customer Complaints Management by I.M.H.R Certificate of",
      "Training Interpersonal Communication by I.M.H.R Certificate of Special",
      "Achievement in recognition for outstanding service / performance by IHG",
      "Certificate of Seminar Participation Bali Wellness Spa Nurture",
      "Knowledge & Networking” by BSWA(Bali Wellness Spa Association)",
      "Certificate of Training Program for Acqua Perla Spa by The Private Spa",
      "Certificate of Spa Therapist Course by Jamu Spa School"
    ],
    summary: "Experienced and dedicated Spa and Wellness Therapist from Bali, Indonesia, with a demonstrated history of working in the spa and hospitality industry since 2008. Skilled in a wide range of massage techniques, including Balinese, Swedish, Thai, Hot Stone, and Deep Tissue massage, as well as various body and beauty treatments. Highly knowledgeable in advanced aesthetic and wellness technologies such as Indiba, Venus Legacy, Velashape, Trusculpt, Lymphopress, Air Pod, MLX Idom, and Cryotherapy. Known for delivering exceptional client care, promoting holistic well-being, and maintaining high professional standards in luxury spa environments.",
  },
  {
    id: 11,
    gender: "male",
    name: "Habib",
    img: "./assets/team/Team/Habib.webp",
    nationality: "Bangladeshi",
    role: "Spa Therapist",
    specializations: "Advanced Facial Treatments, Advanced Massage Therapy, Body Sculpting & Wellness Technologies,",
    qualification: [
      "Massage Therapy Certificate - Imperial Consultancy Management Doha, Qatar",
      "Professional Qualification in hairstylist, - The Union of Thai Traditional Society Thailand"
    ],
    summary: "I am from Bangladesh, I am a skilled spa therapist with over five years of experience in luxury spas and hotels across the Maldives, Qatar, and Saudi Arabia. My vision for the future is to grow as an internationally recognized spa professional, continuously developing my expertise in luxury wellness experiences and contributing to the highest standards of hospitality and guest satisfaction. I have had the opportunity to work with world-renowned skincare and spa brands such as Dr. Burgener, Dior, Biologique Recherché, Bullfrog, and Kérastase, gaining advanced knowledge of professional treatments and premium product applications."
  },
  {
    id: 12,
    gender: "male",
    name: "Ishwori",
    img: "./assets/team/Team/Ishwori.webp",
    nationality: "Nepalian",
    role: "Spa Therapist",
    specializations: "Advanced Facial Treatments, Advanced Massage Therapy, Thai Massage, Body Sculpting & Wellness Technologies,",
    qualification: [
      "Massage Therapy Training",
      "Thai Massage Training",
    ],
    summary: "I am a dedicated and professional Spa Therapist from Nepal with over 7 years of experience in luxury spa environments across the Middle East and Maldives. My passion lies in delivering holistic wellness experiences that promote relaxation, rejuvenation, and inner balance. I specialize in therapeutic body massages, facial care, Moroccan bath rituals, and advanced spa technologies, ensuring each client receives exceptional service tailored to their needs."
  },
  {
    id: 13,
    gender: "male",
    name: "Maher",
    img: "./assets/team/Maher.jpeg",
    nationality: "Syrian",
    role: "Barber",
    specializations: "Haircutting, Beard Triming, Styling, Men's grooming supplies",
    qualification: [
      " Certification - Al-Haitham Academy for International Sciences, Crafts, and Professions (Barbering)",
      "Certification - Jamjoom Academy (Salesmanship and customer reception)",
      "Certification - Gentleman's Tonk Academy, Mayfair, London (Barbering Training)",
    ],
    summary: "A professional men's barber from Syria, born in Saudi Arabia and raised in Syria. I began my professional journey at an early age after discovering my passion for the art of men's barbering and keeping up with the latest haircuts and hairstyles. I received professional training from the Al-Haitham Academy for International Sciences, Crafts, and Professions and the Al-Mamoun International Academy, with excellent grades. I have gained over 15 years of experience in men's barbering and hair and beard care. I worked as a self-employed men's barber in Syria. I worked with Radwa Company in marketing and management for five years. I also joined Harvey Nichols as a barber and trainer – Al Faisaliah Tower, working on Gentleman's Tonic Mayfair London products, where I received the Best Salesperson Award in recognition of my excellence in customer service and sales. I also obtained training certificates from Jamjoom Company in the art of selling and customer service. This diverse experience enables me to provide a high-quality and comprehensive service that ensures customer satisfaction and a distinguished appearance."
  }

];

const container = document.getElementById("teamContainer");

function renderTeam(filter) {
  container.innerHTML = "";

  let filtered = filter === "all"
    ? teamData
    : teamData.filter(member => member.gender === filter);

  filtered.forEach(member => {
    container.innerHTML += `
      <div class="col-md-${filter === "all" ? "6" : "12"}">
        <div class="team-card" onclick="openModal(${member.id})">
          <img src="${member.img}" class="team-img">
          <h5>${member.name}</h5>
        </div>
      </div>
    `;
  });
}
function renderField(elementId, value) {
  const el = document.getElementById(elementId);

  if (Array.isArray(value)) {
    el.innerHTML = "<ul>" +
      value.map(v => `<li>${v}</li>`).join("") +
      "</ul>";
  } else {
    el.innerText = value;
  }
}

function openModal(id) {
  const member = teamData.find(m => m.id === id);

  document.getElementById("modalImg").src = member.img;

  renderField("modalName", member.name);
  renderField("modalNationality", member.nationality);
  renderField("modalRole", member.role);
  renderField("modalSpec", member.specializations);
  renderField("modalQual", member.qualification);
  renderField("modalSummary", member.summary);

  const modal = new bootstrap.Modal(document.getElementById('teamModal'));
  modal.show();
}


document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");

    renderTeam(this.dataset.filter);
  });
});

// default
renderTeam("all");
