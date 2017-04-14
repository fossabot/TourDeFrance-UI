import { StageType } from './enums';

export class Stage {
    id: string;
    name: string;
    ownerId: string;
    duration: number;
}

export class StageDrink {
    id: string;
    drinkId: string;
    drinkName: string;
    alcoholByVolume: number;
    volume: number;
    isComposedDrink: boolean;
    stageId: string;
    overridedVolume: number;
    numberToDrink: number;
    order: number;
    type: StageType;
    gameVolume: number;
}
