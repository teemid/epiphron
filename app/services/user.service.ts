import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { User } from '../data-classes/user';

import { firebaseConfig } from '../firebase-config';

@Injectable()
export class UserService {
    private firebaseUrl = firebaseConfig.databaseURL;

    constructor(private firebase: AngularFire) { }

    getUser(user: User): FirebaseObjectObservable<User> {
        return this.firebase.database.object(`${this.firebaseUrl}/user/{user.id}`)
    }

    getUsers(): FirebaseListObservable<User[]> {
        return this.firebase.database.list(`${this.firebaseUrl}/users`);
    }

    create(email: string, password: string): Promise<void> {
        let promise = new Promise<void>();
        
        this.firebase.auth.createUser({
            email: email,
            password: password
        })
        .then(authState => promise.resolve())
        .catch(this.handleError);

        return promise;
    }

    private handleError(error: any): Promise<void> {
        console.error('An error occured', error);

        return Promise.reject(error.message || error);
    }
}
