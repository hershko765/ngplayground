import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input('sections') sections: String[];
  @Output() linkChanged = new EventEmitter<String>();

  constructor() {}

  ngOnInit() {}

  linkClicked(link) {
    this.linkChanged.emit(link);
  }
}
