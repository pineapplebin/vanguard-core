import Core from "../Core";
import State from "./state";

type InitStateConfigType = {

}

export default class InitState extends State {
  readonly name = 'init state';

  constructor(core: Core, conf: InitStateConfigType = {}) {
    super(core, conf);
  }

  active(): boolean {
    return false;
  }

  getNextState(): State {
    return null;
  }

  enterAction() {
  }

  exitAction() {

  }
}
