import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
