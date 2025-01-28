import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name: string = '';
  headline: string = '';

  constructor(private dataService: DataService) {
    const data = this.dataService.resumeData;
    this.name = data.name;
    this.headline = data.headline;
  }
}
