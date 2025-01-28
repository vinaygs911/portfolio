import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.skills = this.dataService.resumeData.skills.map(skill => ({
      ...skill,
      icon: this.getSkillIcon(skill.name), // Add icons dynamically
    }));
  }

  // Method to get icons dynamically based on skill name
  getSkillIcon(skillName: string): string {
    const skillIcons: any = {
      HTML: 'fab fa-html5',
      CSS: 'fab fa-css3-alt',
      JavaScript: 'fab fa-js-square',
      Angular: 'fab fa-angular',
      React: 'fab fa-react',
      NodeJS: 'fab fa-node-js',
      Python: 'fab fa-python',
      Git: 'fab fa-git-alt',
      // Add more skills as needed
    };

    return skillIcons[skillName] || 'fas fa-code'; // Default icon
  }

  // Method to get skill level label
  getSkillLevel(level: number): string {
    if (level >= 80) return 'Expert';
    if (level >= 60) return 'Advanced';
    if (level >= 40) return 'Intermediate';
    return 'Beginner';
  }
}
