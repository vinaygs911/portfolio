import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactInfo = {
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  };

  constructor(private dataService: DataService) {
    const data = this.dataService.resumeData;
    this.contactInfo = {
      email: data.email,
      phone: data.phone,
      linkedin: data.linkedin,
      github: data.github,
    };
  }
}
