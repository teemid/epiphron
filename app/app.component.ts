import { Component } from '@angular/core';

@Component({
    selector: 'epiphron-app',
    template: `
        <epiphron-navbar></epiphron-navbar>

        <h1>{{title}}</h1>
    `
})
export class AppComponent {
    title = 'Epiphron';
}
