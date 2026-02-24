import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Navigation -->
    <nav class="nav">
      <div class="nav-content">
        <div class="logo">
          <div class="logo-icon">VG</div>
          <span>Vinay G S</span>
        </div>
        <ul class="nav-links">
          <li><a href="#home" (click)="scrollTo('home')">Home</a></li>
          <li><a href="#about" (click)="scrollTo('about')">About</a></li>
          <li><a href="#skills" (click)="scrollTo('skills')">Skills</a></li>
          <li><a href="#experience" (click)="scrollTo('experience')">Experience</a></li>
          <li><a href="#contact" (click)="scrollTo('contact')">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="container">
          <h1>{{ personalInfo.name }}</h1>
          <p class="mb-4">{{ personalInfo.title }}</p>
          <p class="mb-8">📍 {{ personalInfo.location }} • 📅 {{ yearsOfExperience }}+ Years Experience</p>
          
          <div class="grid grid-4 mb-12">
            <div class="card text-center">
              <div style="font-size: 2rem; color: #3b82f6; margin-bottom: 0.5rem;">{{ yearsOfExperience }}+</div>
              <div>Years Experience</div>
            </div>
            <div class="card text-center">
              <div style="font-size: 2rem; color: #3b82f6; margin-bottom: 0.5rem;">10+</div>
              <div>Projects</div>
            </div>
            <div class="card text-center">
              <div style="font-size: 2rem; color: #3b82f6; margin-bottom: 0.5rem;">60%</div>
              <div>Performance Gains</div>
            </div>
            <div class="card text-center">
              <div style="font-size: 2rem; color: #3b82f6; margin-bottom: 0.5rem;">15+</div>
              <div>Technologies</div>
            </div>
          </div>
          
          <p class="mb-8">
            Specializing in <strong style="color: #3b82f6;">Angular performance optimization</strong>, 
            <strong style="color: #8b5cf6;">reactive programming</strong>, and 
            <strong style="color: #10b981;">enterprise architecture</strong>.
          </p>
          
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button class="btn" (click)="scrollTo('experience')">
              🚀 View Experience
            </button>
            <button class="btn" style="background: transparent; border: 2px solid #3b82f6;" (click)="scrollTo('contact')">
              📧 Contact Me
            </button>
          </div>
          
          <div class="card" style="margin-top: 2rem; display: inline-block;">
            🇩🇪 <strong>Germany Work Authorized</strong> - Chancenkarte valid until June 2026
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="section" style="background: rgba(0, 0, 0, 0.2);">
        <div class="container">
          <h2 class="text-center mb-12" style="font-size: 3rem; color: #3b82f6;">About Me</h2>
          
          <div class="grid grid-2">
            <div>
              <div class="card" style="height: 300px; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: linear-gradient(45deg, #3b82f6, #8b5cf6); border-radius: 50%; width: 300px; height: 300px;">
                VG
              </div>
            </div>
            
            <div>
              <h3 class="mb-4" style="font-size: 2rem; color: #3b82f6;">Senior Frontend Engineer</h3>
              <p class="mb-4">
                I'm a passionate Senior Frontend Engineer with {{ yearsOfExperience }}+ years of experience 
                creating high-performance, scalable web applications using Angular and TypeScript.
              </p>
              <p class="mb-4">
                My expertise lies in performance optimization, where I've consistently delivered 
                applications that load faster, run smoother, and provide exceptional user experiences.
              </p>
              <p class="mb-8">
                Currently at BearingPoint, leading frontend architecture decisions and mentoring developers. 
                Ready to bring my expertise to German companies under the Chancenkarte program.
              </p>
              
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn">📄 Download Resume</button>
                <button class="btn" style="background: transparent; border: 2px solid #3b82f6;" (click)="scrollTo('contact')">
                  💬 Let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="section">
        <div class="container">
          <h2 class="text-center mb-12" style="font-size: 3rem; color: #3b82f6;">Technical Skills</h2>
          
          <div class="grid grid-3">
            @for (skill of skills; track skill.name) {
              <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <span style="font-size: 1.5rem;">{{ skill.icon }}</span>
                    <strong>{{ skill.name }}</strong>
                  </div>
                  <span style="color: #3b82f6; font-weight: bold;">{{ skill.level }}%</span>
                </div>
                
                <div class="skill-bar">
                  <div class="skill-progress" [style.width.%]="skill.level"></div>
                </div>
                
                <div style="margin-top: 0.5rem; display: flex; justify-content: space-between; font-size: 0.875rem;">
                  <span style="color: #94a3b8;">{{ skill.category }}</span>
                  <span style="color: #3b82f6;">{{ getSkillLevel(skill.level) }}</span>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="section" style="background: rgba(0, 0, 0, 0.2);">
        <div class="container">
          <h2 class="text-center mb-12" style="font-size: 3rem; color: #3b82f6;">Professional Experience</h2>
          
          <div style="max-width: 800px; margin: 0 auto;">
            @for (exp of experience; track exp.company) {
              <div class="card mb-8">
                <h3 style="font-size: 1.5rem; color: white; margin-bottom: 0.5rem;">{{ exp.position }}</h3>
                <h4 style="font-size: 1.25rem; color: #3b82f6; margin-bottom: 0.5rem;">{{ exp.company }}</h4>
                <p style="color: #94a3b8; margin-bottom: 1rem;">{{ exp.duration }} | {{ exp.location }}</p>
                
                <ul style="margin-bottom: 1rem;">
                  @for (achievement of exp.achievements; track achievement) {
                    <li style="margin-bottom: 0.5rem; padding-left: 1rem; position: relative;">
                      <span style="position: absolute; left: 0; color: #10b981;">✅</span>
                      {{ achievement }}
                    </li>
                  }
                </ul>
                
                <div style="display: flex; flex-wrap: gap: 0.5rem;">
                  @for (tech of exp.technologies; track tech) {
                    <span style="background: rgba(59, 130, 246, 0.2); color: #3b82f6; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem;">
                      {{ tech }}
                    </span>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section">
        <div class="container">
          <h2 class="text-center mb-12" style="font-size: 3rem; color: #3b82f6;">Let's Work Together</h2>
          
          <div class="grid grid-3 mb-8">
            <div class="card text-center">
              <div style="font-size: 3rem; margin-bottom: 1rem;">📧</div>
              <h3 class="mb-4">Email</h3>
              <a [href]="'mailto:' + personalInfo.email" style="color: #3b82f6; text-decoration: none;">
                {{ personalInfo.email }}
              </a>
            </div>
            
            <div class="card text-center">
              <div style="font-size: 3rem; margin-bottom: 1rem;">📞</div>
              <h3 class="mb-4">Phone</h3>
              <a [href]="'tel:' + personalInfo.phone" style="color: #3b82f6; text-decoration: none;">
                {{ personalInfo.phone }}
              </a>
            </div>
            
            <div class="card text-center">
              <div style="font-size: 3rem; margin-bottom: 1rem;">💼</div>
              <h3 class="mb-4">LinkedIn</h3>
              <a [href]="personalInfo.linkedin" target="_blank" style="color: #3b82f6; text-decoration: none;">
                Connect with me
              </a>
            </div>
          </div>
          
          <div class="card text-center">
            <h3 class="mb-4" style="color: #10b981;">🟢 Available for New Opportunities</h3>
            <p>Particularly interested in Full Time and remote positions</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="section" style="background: rgba(0, 0, 0, 0.5); border-top: 1px solid rgba(255, 255, 255, 0.1);">
      <div class="container text-center">
        <p>&copy; {{ currentYear }} Vinay G S. Built with Angular 21 & Modern CSS.</p>
      </div>
    </footer>
  `,
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  yearsOfExperience = new Date().getFullYear() - 2018;

  personalInfo = {
    name: 'Vinay G S',
    title: 'Senior Frontend Developer (Angular)',
    location: 'India',
    phone: '+91-8867506453',
    email: 'makamvinayjbs@gmail.com',
    linkedin: 'https://www.linkedin.com/in/gsvinaymakam/',
  };

  skills = [
    { name: 'Angular', level: 95, category: 'Frontend', icon: '🅰️' },
    { name: 'TypeScript', level: 90, category: 'Languages', icon: '🔷' },
    { name: 'JavaScript', level: 85, category: 'Languages', icon: '🟨' },
    { name: 'RxJS', level: 88, category: 'Libraries', icon: '🌊' },
    { name: 'HTML5', level: 92, category: 'Languages', icon: '🌐' },
    { name: 'CSS3', level: 88, category: 'Languages', icon: '🎭' },
    {
      name: 'Performance Optimization',
      level: 88,
      category: 'Performance',
      icon: '⚡',
    },
    { name: 'Cypress', level: 82, category: 'Testing', icon: '🌲' },
    { name: 'Git', level: 85, category: 'DevOps', icon: '📝' },
  ];

  experience = [
    {
      company: 'BearingPoint India Pvt Ltd',
      position: 'Senior Frontend Engineer (Angular)',
      duration: 'Nov 2025 – Present',
      location: 'Bangalore, India',
      achievements: [
        'Developing enterprise-grade order management applications using Angular 18',
        'Implemented high-performance components using OnPush strategy',
        'Conducted deep memory & CPU profiling to resolve rendering bottlenecks',
        'Led frontend code reviews and enforced scalable design patterns',
      ],
      technologies: [
        'Angular 18',
        'TypeScript',
        'RxJS',
        'D3.js',
        'Web Workers',
      ],
    },
    {
      company: 'Siemens Healthineers',
      position: 'Frontend Engineer (Angular)',
      duration: 'Mar 2021 – Sep 2025',
      location: 'Bangalore, India',
      achievements: [
        'Developed clinician dashboards and real-time monitoring views',
        'Optimized application startup performance through lazy loading',
        'Built reusable UI libraries and shared modules',
        'Improved accessibility compliance (WCAG) and responsive behavior',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'D3.js',
        'RxJS',
        'Angular Material',
      ],
    },
  ];

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getSkillLevel(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  }
}
