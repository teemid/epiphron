import { User } from './user';

export class Task {
    title: string;
    description: string;
    assignedTo: User;
    difficulty: number;
}
