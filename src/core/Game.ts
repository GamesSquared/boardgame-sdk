import { ActionConstructor } from "./Action";

export type AnyGame = Game<any>;

export class Game<State = any> {
    state: State;

    constructor() {
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    initialize(): void { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    applyAction(actionType: ActionConstructor): void { }
}