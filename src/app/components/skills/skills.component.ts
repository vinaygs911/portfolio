import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  // Data for the chart
  public radarChartLabels: string[] = ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'Node.js'];

  public radarChartData = {
    datasets: [
      {
        label: 'Skill Proficiency (%)',
        data: [90, 85, 80, 95, 90, 75], // Skill values
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  public radarChartOptions = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };
}
