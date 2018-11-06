import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'te-st-NgTestLib',
  template: `
    <p>
      ng-test-lib works!
    </p>
    <input type="text"/>
  `,
  styles: []
})
export class NgTestLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
