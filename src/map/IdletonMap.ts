import {Building} from '../buildings/building'

export class IdletonMap {
    canvas: CanvasRenderingContext2D;
    map: Building[][];
    x_size: number;
    y_size: number;

    constructor(canvas: CanvasRenderingContext2D, x_size: number = 20, y_size: number = 20) {
        this.canvas = canvas;
        this.x_size = x_size
        this.y_size = y_size
        this.map = new Array(this.x_size)
        for (let x = 0; x < x_size; x++) {
            this.map[x] = new Array(this.y_size)
        }
    }

    update(time_diff: number) {
        for (let row of this.map) {
            for (let building of row) {
                building?.update(time_diff)
            }
        }
    }

    render(time: number) {
        this.canvas.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
        for (let row of this.map) {
            for (let building of row) {
                building?.render(time)
            }
        }
    }
}