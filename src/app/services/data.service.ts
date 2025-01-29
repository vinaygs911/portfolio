import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public resumeData = {
    name: 'Vinay G S',
    profilePicture: 'https://storage.rxresu.me/cm67v5vt80gpy7bnnv35pcz2d/pictures/yc377zkbp2bjid3nlzunssgu.jpg',
    headline: 'Angular Developer | Delivering Dynamic and High-Performance Web Experiences',
    email: 'makamvinayjbs@gmail.com',
    phone: '+918867506453',
    location: 'Bengaluru, IN',
    linkedin: 'https://www.linkedin.com/in/gsvinaymakam/',
    github: 'https://github.com/vinaygs911',
    portfolio: 'https://vinaygs911.github.io/portfolio/',
    summary: `Frontend Developer with 8+ years of experience specializing in Angular, TypeScript, and modern web technologies. Skilled in RxJS for reactive programming, NgRx Store for state management, and Angular Material for intuitive UI design. Proficient in building scalable SPAs with reusable components, lazy loading, and modular architecture. Experienced in integrating RESTful APIs, optimizing performance, and delivering seamless user experiences. Adept at Agile development and staying updated with the latest Angular trends.`,

    // Skills
    skills: [
      { name: 'Angular & TypeScript', level: 90 },
      { name: 'RxJS & NgRx', level: 85 },
      { name: 'HTML5, CSS3, JavaScript', level: 90 },
      { name: 'Node.js & RESTful APIs', level: 80 },
      { name: 'Git, GitHub & Database Management', level: 75 },
    ],

    // Projects
    projects: [
      {
        name: 'Real-Time Dashboard for Healthcare Analytics',
        description: 'Developed a real-time healthcare analytics dashboard to monitor patient metrics, using Angular, RxJS, and NgRx for state management.',
        techStack: ['Angular', 'RxJS', 'NgRx', 'Node.js', 'MongoDB'],
        link: '#',
      },
      {
        name: 'E-Commerce Web Application',
        description: 'Built a scalable e-commerce platform with Angular, integrating payment gateways and real-time inventory management using Firebase.',
        techStack: ['Angular', 'TypeScript', 'Firebase', 'RESTful APIs'],
        link: '#',
      },
      {
        name: 'Inventory Management System',
        description: 'Designed a fully functional inventory management system that tracks stock, orders, and sales using Angular and Node.js.',
        techStack: ['Angular', 'Node.js', 'MySQL'],
        link: '#',
      },
    ],

    // Experience
    experience: [
      {
        company: 'Siemens Healthcare (P) Ltd',
        role: 'Senior Software Engineer',
        duration: 'March 2021 - Present',
        achievements: [
          'Developed healthcare applications using Angular, RxJS, and NgRx, enhancing real-time data processing.',
          'Led performance optimizations, improving user experience and application efficiency in a clinical environment.',
        ],
        link: 'https://www.siemens-healthineers.com/',
      },
      {
        company: 'Nous Infosystems',
        role: 'Software Engineer',
        duration: 'March 2020 - February 2021',
        achievements: [
          'Built enterprise applications with Angular and TypeScript, improving client-side performance and scalability.',
          'Integrated RESTful APIs and optimized front-end components for seamless user interactions.',
        ],
        link: 'https://www.nousinfosystems.com/',
      },
      {
        company: 'Anthology (formerly Campus Management International (P) Ltd)',
        role: 'Senior Associate Software Engineer',
        duration: 'December 2018 - March 2020',
        achievements: [
          'Developed web applications using Angular, TypeScript, and RxJS for the education sector.',
          'Optimized UI performance, reducing load times and enhancing user experience.',
        ],
        link: 'https://www.anthology.com/en-in',
      },
    ],

    // Certifications
    certifications: [
      {
        name: 'Certificate in Angular Development',
        issuer: 'Udemy',
        date: 'March 2023',
        summary: 'Mastered Angular fundamentals and advanced concepts including state management with NgRx and RxJS.',
      },
    ],

    // Education
    education: [
      {
        institution: 'Channabasaveshwara Institute of Technology, Gubbi',
        degree: "Bachelor's Degree (BE) in Computer Science",
        date: 'September 2012 – June 2016',
        summary: 'Graduated with a strong foundation in computer science, web technologies, and programming languages.',
        link: 'https://www.cittumkur.org/',
      },
    ],

    // Awards
    awards: [
      {
        title: 'Employee of the Month',
        awarder: 'Siemens Healthcare',
        date: 'March 2023',
        summary: 'Recognized for delivering key projects on time, driving innovation, and fostering effective team collaboration.',
      },
      {
        title: 'Best Innovator of the Year',
        awarder: 'Nous Infosystems',
        date: 'February 2021',
        summary: 'Awarded for demonstrating creative problem-solving and delivering innovative software solutions that improved operational efficiency.',
      },
    ],

    // Languages
    languages: [
      { name: 'English', level: 4 }, // Advanced
    ],
  };
}
