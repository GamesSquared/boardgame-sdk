import { ActionConstructor } from "./Action";
import { AnyGame } from "./Game";

export class Core<Game extends AnyGame> {
    name: string;
    game: Game;

    onStateChange: () => void;

    constructor(name: string, game: Game) {
        this.name = name;
        this.game = game;

        this.game.initialize();
    }

    applyAction(actionType: ActionConstructor): void {
        const action = new actionType();
        this.game.state = action.applyAction(this.game.state);
    }
}