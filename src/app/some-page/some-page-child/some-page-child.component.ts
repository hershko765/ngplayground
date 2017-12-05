import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-page-child',
  templateUrl: './some-page-child.component.html'
})
export class SomePageChildComponent {

  public showLink;

  constructor() { }

  toggleLinkClicked() {
    this.showLink = ! this.showLink;
  }
}
