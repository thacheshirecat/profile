import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
title = 'Alex Bunnell\'s Profile';

  resumeIsShown = false;

  constructor() { }

  showResume()
  {
    this.resumeIsShown = true;
  }

}
