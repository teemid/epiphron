import { Component } from '@angular/core';

import { Project } from '../data-classes/project';

@Component({
    moduleId: module.id,

})
export class ProjectsComponent {
    projects: Project[];

    gotoProject(project: Project): void {
        
    }
}