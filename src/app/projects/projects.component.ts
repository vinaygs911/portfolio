import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Project 1',
      description: 'Description of project 1...',
      technologies: ['Angular', 'TypeScript', 'Node.js'],
      link: 'https://github.com/your-repo'
    },
    {
      name: 'Project 2',
      description: 'Description of project 2...',
      technologies: ['ASP.NET', 'C#', 'SQL'],
      link: 'https://github.com/your-repo'
    },
    // More projects can go here
  ];
}
