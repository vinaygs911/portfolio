import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  public barChartLabels: string[] = ['Dashboard', 'E-Commerce', 'Inventory'];

  public barChartData = {
    labels: this.barChartLabels,
    datasets: [
      {
        label: 'Project Complexity',
        data: [80, 70, 65], // Complexity values for each project
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  public barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
}
