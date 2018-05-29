import Base from "../Base";
import Core from "../Core";

export default abstract class State extends Base {
  readonly name: string;
  readonly core: Core;

  constructor(core: Core, conf: object = {}) {
    super()
    this.core = core;
  }

  abstract active(): boolean;
  abstract getNextState(): State;

  abstract enterAction(): void;
  abstract exitAction(): void;
}
