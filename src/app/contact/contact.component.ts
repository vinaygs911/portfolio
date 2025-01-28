import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  onSubmit(form: { valid: any; value: any; }) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
}
