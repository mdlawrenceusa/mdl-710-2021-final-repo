import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtComponent } from './art/art.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  
  { path: '', component: WelcomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'art', component: ArtComponent },

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
