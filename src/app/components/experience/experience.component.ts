import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface Experience {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.experience = this.dataService.resumeData.experience;
  }
}
