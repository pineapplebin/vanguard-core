import Base from "../Base";
import Core from "../Core";
import State from "./State";

export default class StateMechine extends Base {
  readonly core: Core;
  current_state: State;
  waiting_states: Array<State>;

  constructor(core: Core) {
    super();
    this.core = core;
    this.waiting_states = [];
  }

  active(): State {
    const is_change = this.current_state.active()
    if (!is_change)
      return;

    let state;
    if (this.waiting_states.length)
      state = this.waiting_states.shift();
    else
      state = this.current_state.getNextState()

    this.current_state.exitAction();
    this.current_state = state;
    if (this.current_state)
      this.current_state.enterAction();

    return this.current_state;
  }

  addNewState(state: State): void {
    if (!this.current_state) {
      this.current_state = state;
      this.current_state.enterAction();
    } else {
      this.waiting_states.push(state);
    }
  }
}
