import { Component } from '@angular/core';

import { User } from '../data-classes/user';
import { Task } from '../data-classes/task';

@Component({
    moduleId: module.id,
    templateUrl: 'project/project.component.html',
    styleUrls: [ 'project/project.component.css' ]
})
export class ProjectComponent {
    title: string;
    description: string;
    members: User[];
    tasks: Task[];
}