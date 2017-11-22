import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SomePageModule} from './some-page/some-page.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
    ],
    imports: [
        RouterModule,
        SomePageModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
