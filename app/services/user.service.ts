import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { User } from '../data-classes/user';

@Injectable()
export class UserService {
    private firebaseUrl = 'https://';

    constructor(private firebase: AngularFire) { }

    getUser(user: User): FirebaseObjectObservable<User> {
        return this.firebase.database.object(`${this.firebaseUrl}/user/{user.id}`)
    }

    getUsers(): FirebaseListObservable<User[]> {
        return this.firebase.database.list(`${this.firebaseUrl}/users`);
    }
}