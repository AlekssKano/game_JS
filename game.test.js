import {Game} from "./game.js";
import {GameStatuses} from "./Game_Statuses.js";

describe('game',()=>{
    it('shpuld have pending status after creating',()=>{
        const game=new Game()
        expect (game.status).toBe('pending')
    })
    it('shpuld have Inprogress status after starting',()=>{
        const game=new Game()
        game.start()
        expect (game.status).toBe(GameStatuses.IN_PROGRESS)
    })
    it('shpuld have Win status after win',()=>{
        const game=new Game()
        game.start()
        expect (game.status).toBe(GameStatuses.IN_PROGRESS)
    })
})