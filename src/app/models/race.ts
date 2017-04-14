export class Race {
    id: string;
    name: string;
    ownerId: string;
}

export class RaceStage {
    id: string;
    stageId: string;
    raceId: string;
    order: number;
    raceName: string;
    duration: number;
}
