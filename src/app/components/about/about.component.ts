import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  summary: string = '';

  constructor(private dataService: DataService) {
    this.summary = this.dataService.resumeData.summary;
  }
}
