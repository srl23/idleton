import {Building} from '../buildings/building'

export class IdletonMap {
    canvas: CanvasRenderingContext2D;
    map: Building[][];
    x_size: number;
    y_size: number;
    offset_y_top: number = 0;
    offset_y_bottom: number = 0;
    offset_x_left: number = 0;
    offset_x_right: number = 0;

    constructor(canvas: CanvasRenderingContext2D,
                offset_y_top: number = 0,
                offset_y_bottom: number = 0,
                offset_x_left: number = 0,
                offset_x_right: number = 0,
                x_size: number = 20,
                y_size: number = 20) {
        this.canvas = canvas;
        this.x_size = x_size
        this.y_size = y_size
        this.offset_y_top = offset_y_top
        this.offset_y_bottom = offset_y_bottom
        this.offset_x_left = offset_x_left
        this.offset_x_right = offset_x_right
        this.map = new Array(this.x_size)
        for (let x = 0; x < x_size; x++) {
            this.map[x] = new Array(this.y_size)
        }
    }

    update(time_diff: number) {
        this.map.forEach((row, x) => {
            row.forEach((building, y) => {
                building?.update(time_diff, x, y);
            });
        });
    }

    render(time: number) {
        this.canvas.clearRect(
            this.offset_x_left,
            this.offset_y_top,
            this.canvas.canvas.width - this.offset_x_right,
            this.canvas.canvas.height - this.offset_y_bottom
        );
        let cell_width = this.cell_width()
        let cell_height = this.cell_height()
        this.map.forEach((row, x) => {
            row.forEach((building, y) => {
                building?.render(time, this.get_x(x), this.get_y(y), cell_width, cell_height)
            });
        });
    }

    private draw_height = () => this.canvas.canvas.height - this.offset_y_top - this.offset_y_bottom;
    private draw_width = () => this.canvas.canvas.width - this.offset_x_left - this.offset_x_right;

    private cell_width = () => this.draw_width() / this.x_size;
    private cell_height = () => this.draw_height() / this.y_size;

    private get_x = (x: number) => x * this.cell_width() + this.offset_x_left;
    private get_y = (y: number) => y * this.cell_height() + this.offset_y_top;

}