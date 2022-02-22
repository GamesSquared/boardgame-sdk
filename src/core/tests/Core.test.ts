import Action from "../Action";
import { Core } from "../Core";
import { Game } from "../Game";

interface TestGameState {
    counter: number
}

export class IncreaseCounterAction extends Action<TestGameState> {
    applyAction(state: TestGameState): TestGameState {
        state.counter++;
        return { ...state, counter: state.counter++ };
    }
}

export default class TestGame extends Game<TestGameState> {
    initialize(): void {
        this.state = {
            counter: 0
        };
    }
}

describe("Core", () => {
    it("initializes the state correctly", () => {
        const testGameInstance = new TestGame();

        const core = new Core("name", testGameInstance);

        expect(core.game).toBe(testGameInstance);
        expect(core.name).toEqual("name");
        expect(core.game.state.counter).toEqual(0);
    });

    it("correctly processes an action", () => {
        const testGameInstance = new TestGame();

        const core = new Core("name", testGameInstance);

        core.applyAction(IncreaseCounterAction);

        expect(core.game.state.counter).toEqual(1);
    });

    it("correctly processes multiple actions", () => {
        const testGameInstance = new TestGame();

        const core = new Core("name", testGameInstance);

        core.applyAction(IncreaseCounterAction);
        core.applyAction(IncreaseCounterAction);

        expect(core.game.state.counter).toEqual(2);
    });
});