
export const navLinks = [
  { label:"Results", href:"#results"},
  { label:"Courses", href:"#courses"},
  { label:"Schedule", href:"#schedule"},
  { label:"Batches", href:"#batches"},
  { label:"Contact", href:"#contact"},
];

export const instituteInfo = {
  name: "Scalence",
  nameFull: "Scalence Academy",
  totalStudents: "8,400+",
  yearsActive: "14+",
  maxBatchSize: 35,
  selectionRate: "94%",
};

export const toppers = [
  { 
    id: 1,
    name: "Aditya Phadke",
    result: "AIR 847",
    exam: "JEE Advanced 2024",
    college: "IIT Bombay - CSE",
    examTag: "JEE",
    initials: "AP",
    year: 2024
  },
  {
     id: 2,
     name: "Sneha Kulkarni",
     result: "712 / 720",
     exam: "NEET 2023",
     college: "AIIMS Delhi",
     examTag: "NEET",
     initials: "SK",
     year: 2023 
  },
  { 
    id: 3,
    name: "Rohan Desai",
    result: "AIR 234",
    exam: "JEE Advanced 2023",
    college: "IIT Delhi",
    examTag: "JEE",
    initials: "RD",
    year: 2023 
  },
  { 
    id: 4,
    name: "Priya Sharma",
    result: "99.8 Percentile",
    exam: "MHT-CET 2024",
    college: "COEP Pune",
    examTag: "MHT-CET",
    initials: "PS",
    year: 2024
  },
  { 
    id: 5,
    name: "Aryan Mehta",
    result: "AIR 1,203",
    exam: "JEE Advanced 2022",
    college: "IIT Madras",
    examTag: "JEE",
    initials: "AM",
    year: 2022
  },
];

export const examOptions = [
  { id: "JEE", label: "JEE Main / Advanced" },
  { id: "NEET", label: "NEET UG" },
  { id: "MHT-CET", label: "MHT-CET" },
  { id: "Foundation", label: "Foundation (8–10)" },
];


export const badges = ["Max 35 Per Batch", "IIT / AIIMS Faculty", "Daily Doubt Sessions", "Weekly Mock Tests"];

export const achievementCards = [
  { rank: "AIR 847", sub: "JEE Advanced 2024", initials: "AP", top: "8%", left: "0%"  },
  { rank: "712 / 720", sub: "NEET 2023", initials: "SK", top: "5%", right: "2%" },
  { rank: "99.8 Percentile", sub: "MHT-CET 2024", initials: "PS", bottom: "10%",left: "5%"  },
  { rank: "AIR 234", sub: "JEE Advanced 2023", initials: "RD", bottom: "12%",right: "0%" },
];

export const courses = [
  { 
    id: 1,
    name: "JEE Main + Advanced",
    duration: "2 Year",
    forClass: "Class 11",
    subjects: "Physics · Chemistry · Maths",
    fee: "₹1,20,000/yr",
    batchStart: "June 2026",
    totalSeats: 35,
    filledSeats: 23,
    examTags: ["JEE"]
  },
  { 
    id: 2,
    name: "NEET UG",
    duration: "2 Year",
    forClass: "Class 11",
    subjects: "Physics · Chemistry · Biology",
    fee: "₹1,10,000/yr",
    batchStart: "June 2026",
    totalSeats: 35,
    filledSeats: 27,
    examTags: ["NEET"]
  },
  { 
    id: 3,
    name: "MHT-CET Crash",
    duration: "3 Months",
    forClass: "Class 12 / Droppers",
    subjects: "PCM / PCB Intensive",
    fee: "₹35,000",
    batchStart: "Feb 2026",
    totalSeats: 35,
    filledSeats: 32,
    examTags: ["MHT-CET"]
  },
  { 
    id: 4,
    name: "Foundation",
    duration: "1 Year",
    forClass: "Class 8–10",
    subjects: "Maths + Science",
    fee: "₹45,000/yr",
    batchStart: "June 2026",
    totalSeats: 35,
    filledSeats: 18,
    examTags: ["Foundation"]
   },
  { 
    id: 5,
    name: "Dropper Batch",
    duration: "1 Year",
    forClass: "Repeat Aspirants",
    subjects: "Full Syllabus Revision",
    fee: "₹95,000",
    batchStart: "April 2026",
    totalSeats: 35,
    filledSeats: 30,
    examTags: ["JEE", "NEET"]
  },
];

export const faculty = [
  { id: 1, name: "Dr. Suresh Kulkarni",subject: "Physics",qual: "IIT Bombay Alumni",exp: "22 Yrs",examTags: ["JEE", "Foundation"],initials: "SK" },
  { id: 2, name: "Prof. Anita Joshi",subject: "Chemistry",qual: "Pune University Gold Medalist",exp: "18 Yrs",examTags: ["JEE", "NEET", "MHT-CET"],initials: "AJ" },
  { id: 3, name: "Mr. Rahul Pawar",subject: "Maths",qual: "IIT Delhi Alumni",exp: "15 Yrs", examTags: ["JEE", "MHT-CET", "Foundation"],initials: "RP" },
  { id: 4, name: "Dr. Meena Rao",subject: "Biology",qual: "AIIMS Graduate",exp: "12 Yrs", examTags: ["NEET"],initials: "MR" },
];


export const whyUs = [
  { id: 1, num: "01", title: "IIT / AIIMS Alumni Faculty", desc: "Taught by those who cracked it. Real strategies, real insight - not just theory." },
  { id: 2, num: "02", title: "Max 35 Students Per Batch", desc: "Every student gets direct attention. No one gets lost in the crowd." },
  { id: 3, num: "03", title: "Weekly Mock Tests", desc: "Every Saturday - harder than the real exam. Students are battle-ready." },
  { id: 4, num: "04", title: "Daily Doubt Sessions", desc: "One hour every evening. No question goes unanswered, ever." },
  { id: 5, num: "05", title: "Exclusive Study Material", desc: "Developed in-house, updated every year for exact exam relevance." },
  { id: 6, num: "06", title: "Monthly Parent Reports", desc: "Parents are partners. Progress shared monthly. No surprises." },
];
