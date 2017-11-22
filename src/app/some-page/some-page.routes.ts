import {Routes} from '@angular/router';
import {SomePageComponent} from './some-page.component';
import {SomePageChildComponent} from './some-page-child/some-page-child.component';

export const appRoutes: Routes = [
    {
        path: 'test',
        component: SomePageComponent,
        children: [
            { path: 'child', component: SomePageChildComponent }
        ]
    },
];
