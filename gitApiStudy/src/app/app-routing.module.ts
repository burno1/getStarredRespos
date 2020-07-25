import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepoComponent } from './repo/repo.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
  {
  path: "",
  component: LandingPageComponent
  },
  {
    path: ":linguagem/:user/:repo",
    component: RepoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
