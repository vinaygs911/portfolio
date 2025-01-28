import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NgChartsModule],
})
export class ProjectsModule {}
