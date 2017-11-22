import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {SomePageComponent} from './some-page.component';
import {SomePageChildComponent} from './some-page-child/some-page-child.component';
import {appRoutes} from './some-page.routes';

@NgModule({
  declarations: [
    SomePageComponent,
    SomePageChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: []
})
export class SomePageModule {
}
