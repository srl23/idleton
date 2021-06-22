import {IdletonMap} from "./map/IdletonMap";
import {sleep} from './util/sleep'

export class Game {
    map: IdletonMap;
    gameStartTime: number
    last_frame: number
    pause: false;

    constructor(map: IdletonMap) {
        this.map = map
        this.pause = false;
        this.gameStartTime = performance.now();
    }

    run() {
        this.last_frame = performance.now();
        this.request_frame();
    }

    private frame(frame_start: number) {
        if (this.pause) {
            return;
        }
        this.request_frame();
        this.map.update(frame_start - this.last_frame);
        this.map.render(frame_start - this.gameStartTime);
        this.last_frame = performance.now();
    }

    private request_frame = () => {
        requestAnimationFrame(this.frame.bind(this))
    }
}