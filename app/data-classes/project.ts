import { User } from './user';


export class Project {
    id: number;
    title: string;
    description: string;
    owner: User;
    members: User[];
}
