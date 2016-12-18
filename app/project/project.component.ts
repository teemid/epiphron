import { Component } from '@angular/core';

import { User } from '../data-classes/user';

@Component({
    moduleId: module.id,
    templateUrl: 'project/project.component.html',
    styleUrls: [ 'project/project.component.css' ]
})
export class Project {
    title: string;
    description: string;
    members: User[];
    tasks: Task[];
}