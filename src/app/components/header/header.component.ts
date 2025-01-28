import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen: boolean = false;

  // Toggle menu visibility
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Close menu when an item is clicked
  closeMenu() {
    this.menuOpen = false;
  }
}
