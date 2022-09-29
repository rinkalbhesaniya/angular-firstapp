import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  },
  {

    path:'home',
    component :HomeComponent
  },
  {

    path:'aboutme',
    component:AboutmeComponent
  },
  {

    path:'projects',
    component :ProjectsComponent
  },
  {

    path:'contact',
    component :ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
