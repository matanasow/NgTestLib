import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'te-st-NgTestLib',
  template: `
    <p>
      ng-test-lib works!
    </p>
    <p>
    {{text}}
    </p>
    <input type="text"/>
  `,
  styles: []
})
export class NgTestLibComponent implements OnInit {

  constructor() { }

  @Input() text: string

  ngOnInit() {
  }

}
