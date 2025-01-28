import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: ExperienceComponent },
];

@NgModule({
  declarations: [ExperienceComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgChartsModule],
})
export class ExperienceModule {}
