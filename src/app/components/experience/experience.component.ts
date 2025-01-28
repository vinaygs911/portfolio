import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experience: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.experience = this.dataService.resumeData.experience;
  }
}
