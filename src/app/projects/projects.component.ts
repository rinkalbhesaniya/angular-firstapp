import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router : Router) { }
  ngOnInit(): void {
  }
  onHomeClick(){
    this.router.navigateByUrl('home')
  }
  onAboutMeClick(){
     this.router.navigateByUrl('aboutme')
  }
  onProjectsClick(){
    this.router.navigateByUrl('projects')
  }
  onContactClick(){
    this.router.navigateByUrl('contact')
  }


}
