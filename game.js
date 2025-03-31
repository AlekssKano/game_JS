import {GameStatuses} from "./Game_Statuses.js";

export class Game {
    #status=GameStatuses.PENDING

    get status(){
        return this.#status
    }
    start(){
        return this.#status=GameStatuses.IN_PROGRESS
    }
}

const game = new Game();
// console.log(game.hello());