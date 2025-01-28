import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  name = '';
  profilePicture = '';
  headline = '';
  summary = '';
  certifications: any[] = [];
  awards: any[] = [];
  languages: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const data = this.dataService.resumeData;
    this.name = data.name;
    this.profilePicture = data.profilePicture;
    this.headline = data.headline;
    this.summary = data.summary;
    this.certifications = data.certifications || [];
    this.awards = data.awards || [];
    this.languages = data.languages || [];
  }
}
