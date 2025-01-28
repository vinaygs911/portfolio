import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public resumeData = {
    name: 'Vinay G S',
    headline: 'Frontend Developer | Angular Expert',
    email: 'makamvinayjbs@gmail.com',
    phone: '+918867506453',
    location: 'Bengaluru, IN',
    linkedin: 'https://www.linkedin.com/in/gsvinaymakam/',
    github: 'https://github.com/vinaygs911',
    summary: `Frontend Developer with 8+ years of experience specializing in Angular, TypeScript, and modern web technologies.`,
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'RxJS', level: 80 },
      { name: 'HTML5 & CSS3', level: 90 },
      { name: 'Node.js', level: 75 },
    ],
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
        company: 'Nous Infosystems',
        role: 'Software Engineer',
        duration: '2020 - 2021',
        achievements: [
          'Improved application performance by 20%.',
          'Delivered client-side optimizations with TypeScript.',
        ],
      },
    ],
    certifications: [
      {
        name: 'Angular Advanced Development',
        issuer: 'Udemy',
        date: 'March 2023',
      },
      {
        name: 'Web Development Bootcamp',
        issuer: 'Coursera',
        date: 'December 2022',
      },
    ],
    awards: [
      {
        title: 'Employee of the Month',
        company: 'Siemens Healthcare',
        date: 'March 2023',
      },
    ],
  };
}
