import {Game} from './Game'
import {IdletonMap} from "./map/IdletonMap";

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('game');
let canvas_context: CanvasRenderingContext2D = canvas.getContext('2d');
let map = new IdletonMap(canvas_context);

const game = new Game(map);
game.run();
