import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

import { firebaseConfig } from './firebase-config';

@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig),
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
