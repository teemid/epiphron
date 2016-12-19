import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'epiphron-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: [ 'navbar.component.css' ]
})
export class NavbarComponent {
    private title = 'Epiphron';

    private menu: MenuItem[] = [
        { title: 'Frontpage' },
        { title: 'My page' },
    ];
}

class MenuItem {
    title: string;
}
