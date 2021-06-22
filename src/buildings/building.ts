import {IdletonMap} from "../map/IdletonMap";

export interface Building {
    map: IdletonMap;
    canvas: CanvasRenderingContext2D;
    name(): string;
    update(time_diff: number,x: number,y: number ): null;
    render(time: number, x: number,y: number, width: number, height: number): null;
}