import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { firebaseConfig } from './firebase-config';

@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
