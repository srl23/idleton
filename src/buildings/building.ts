import {IdletonMap} from "../map/IdletonMap";

export interface Building {
    map: IdletonMap;
    canvas: CanvasRenderingContext2D;
    name(): string;
    update(time_diff: number): null;
    render(time: number, x,y, width, height): null;
}