import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-page-child',
  templateUrl: './some-page-child.component.html',
  styleUrls: ['./some-page-child.component.css']
})
export class SomePageChildComponent {

  private showLink;

  constructor() { }

  toggleLinkClicked() {
    this.showLink = ! this.showLink;
  }
}
