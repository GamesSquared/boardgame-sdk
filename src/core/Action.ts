export interface ActionConstructor<State = any> {
    new(): IAction<State>;
}
export interface IAction<State = any> {
    applyAction(state: State): State;
}

export default abstract class Action<State = any> implements IAction<State> {
    applyAction(state: State): State {
        return { ...state };
    }

}