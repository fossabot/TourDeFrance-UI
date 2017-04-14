import { Gender } from './enums';

export class Player {
    id: string;
    ownerId: string;
    nickname: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    birthDate: Date;
    height: number;
    weight: number;
}
