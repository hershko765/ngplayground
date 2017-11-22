import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent  {
    sections: String[] = [ 'Home', 'About', 'FAQ' ];
    link: String;

    changeLink($event) {
        this.link = $event;
    }
}
