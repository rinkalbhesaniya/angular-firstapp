import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
})
export class YearsComponent implements OnInit {
  skillDetail = [
    { name: 'UI & UX DESIGNING', selected: true },
    { name: 'WEB DEVELOPMENT', selected: false },
    { name: 'MOBILE DEVELOPMENT', selected: false },
    { name: 'WEB SCRAPING WITH', selected: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
