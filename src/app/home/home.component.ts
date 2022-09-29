import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
