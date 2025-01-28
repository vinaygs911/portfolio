import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  stars: { x: string; y: string; size: string; delay: string }[] = [];
  shootingStars: { x: string; y: string; delay: string }[] = [];
  rockets: { x: string; color: string }[] = [];

  ngOnInit(): void {
    this.generateStars();
    this.generateShootingStars();

    // Automatically launch rockets every 4 seconds
    setInterval(() => this.launchRocket(), 4000);
  }

  // Generate twinkling stars
  generateStars(): void {
    this.stars = Array.from({ length: 100 }, () => ({
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`, // Size between 1px and 4px
      delay: `${Math.random() * 3}s`, // Random animation delay
    }));
  }

  // Generate occasional shooting stars
  generateShootingStars(): void {
    setInterval(() => {
      const randomX = `${Math.random() * 100}%`;
      const randomY = `${Math.random() * 50}%`;
      const randomDelay = `${Math.random() * 3}s`;

      this.shootingStars.push({ x: randomX, y: randomY, delay: randomDelay });

      // Remove shooting star after animation
      setTimeout(() => {
        this.shootingStars.shift();
      }, 2000);
    }, 5000); // Shooting star appears every 5 seconds
  }

  // Launch a rocket
  launchRocket(): void {
    const randomX = `${Math.random() * 100}%`;
    const randomColor = this.randomColor();

    this.rockets.push({ x: randomX, color: randomColor });

    // Remove rocket after animation
    setTimeout(() => {
      this.rockets.shift();
    }, 2000);
  }

  // Generate random colors
  randomColor(): string {
    const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
