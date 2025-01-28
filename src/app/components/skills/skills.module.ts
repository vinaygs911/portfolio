import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: SkillsComponent },
];

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SkillsModule {}