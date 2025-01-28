import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  public horizontalBarLabels: string[] = ['Siemens Healthcare', 'Nous Infosystems', 'Anthology'];

  public horizontalBarData = {
    labels: this.horizontalBarLabels,
    datasets: [
      {
        label: 'Years of Experience',
        data: [2.5, 1, 1.3], // Number of years worked at each company
        backgroundColor: ['rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(54, 162, 235, 0.5)'],
        borderColor: ['rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  public horizontalBarOptions = {
    indexAxis: 'y', // Horizontal bar chart
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
}
