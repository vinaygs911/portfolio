import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./components/skills/skills.module').then((m) => m.SkillsModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./components/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./components/experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./components/contact/contact.module').then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
