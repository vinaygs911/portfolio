import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public resumeData = {
    name: 'Vinay G S',
    profilePicture: 'https://storage.rxresu.me/cm67v5vt80gpy7bnnv35pcz2d/pictures/yc377zkbp2bjid3nlzunssgu.jpg',
    headline: 'Frontend Developer | Angular Expert',
    email: 'makamvinayjbs@gmail.com',
    phone: '+918867506453',
    location: 'Bengaluru, IN',
    linkedin: 'https://www.linkedin.com/in/gsvinaymakam/',
    github: 'https://github.com/vinaygs911',
    summary: `Frontend Developer with 8+ years of experience specializing in Angular, TypeScript, and modern web technologies. Passionate about creating seamless user experiences and building scalable applications.`,

    // Skills
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'RxJS', level: 80 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Node.js', level: 75 },
    ],

    // Projects
    projects: [
      {
        name: 'Healthcare Dashboard',
        description: 'Built a real-time healthcare dashboard using Angular, RxJS, and NgRx.',
        techStack: ['Angular', 'RxJS', 'NgRx', 'TypeScript'],
        link: '#',
      },
      {
        name: 'E-Commerce App',
        description: 'Developed an e-commerce platform with Angular and Firebase.',
        techStack: ['Angular', 'Firebase', 'TypeScript'],
        link: '#',
      },
    ],

    // Experience
    experience: [
      {
        company: 'Siemens Healthcare',
        role: 'Senior Software Engineer',
        duration: '2021 - Present',
        achievements: [
          'Optimized clinical workflows by 30% using Angular and RxJS.',
          'Led a team of 5 to build scalable healthcare apps.',
        ],
      },
      {
        company: 'Nous Infosystem',
        role: 'Software Engineer',
        duration: '2019 - 2021',
        achievements: [
          'Developed dynamic dashboards for enterprise-level applications.',
          'Worked on cross-team collaboration to integrate new features.',
        ],
      },
    ],

    // Certifications
    certifications: [
      {
        name: 'Angular Advanced Development',
        issuer: 'Udemy',
        date: 'March 2023',
        summary: 'Mastered advanced Angular concepts, including state management and RxJS.',
      },
      {
        name: 'Full Stack Web Development',
        issuer: 'Coursera',
        date: 'October 2021',
        summary: 'Gained expertise in frontend and backend technologies including Angular and Node.js.',
      },
    ],

    // Awards
    awards: [
      {
        title: 'Employee of the Month',
        awarder: 'Siemens Healthcare',
        date: 'March 2023',
        summary: 'Recognized for exceptional contribution to the Healthcare Dashboard project.',
      },
      {
        title: 'Best Innovator Award',
        awarder: 'Infosys',
        date: 'July 2020',
        summary: 'Awarded for implementing a workflow automation solution, reducing manual efforts by 25%.',
      },
    ],

    // Languages
    languages: [
      { name: 'English', level: 5 }, // Proficient
      { name: 'Hindi', level: 4 }, // Advanced
      { name: 'Kannada', level: 5 }, // Native/Bilingual
    ],
  };
}
