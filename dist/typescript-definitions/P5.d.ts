import { createCaptureInstance } from "./index";

interface RENDERING {
  createCanvas: (width: number, height: number) => any;  
}

interface IMAGE {
  tint: (RED: number, GREEN: number, BLUE: number) => any;
}
interface COLOR {
  background: (color: number) => any;
  image: (createCaptureInstance: createCaptureInstance, Xcord: number, Ycord: number, width: number, height: number) => any;  
}

export type P5 = RENDERING & IMAGE & COLOR;
