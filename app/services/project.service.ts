import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { Project } from '../data-classes/project';

@Injectable()
export class ProjectService {
    private firebaseUrl = 'https://firebaseurl.com';

    constructor(private firebase: AngularFire) { }

    getProject(projectId: number): FirebaseObjectObservable<Project> {
        return this.firebase.database.object(`${this.firebaseUrl}/projects/${projectId}`);
    }

    getProjects(): FirebaseListObservable<Project[]> {
        return this.firebase.database.list(`${this.firebaseUrl}/projects`);
    }
}
