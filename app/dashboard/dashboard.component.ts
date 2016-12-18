import { Component } from '@angular/core';


class Project {
    title: string;
    description: string;
}

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard/dashboard.component.html',
    styleUrls: [ 'dashboard/dashboard.component.css' ]
})
export class DashboardComponent {
    projects: Project[];
}
