import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'te-st-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
title: string = 'Movie Finder'
  constructor() { }

  ngOnInit() {
  }

}
