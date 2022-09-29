import { Component, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

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
