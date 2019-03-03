// @ts-ignore
import Vue from "vue";
import { VIDEO, AUDIO } from "p5";
declare module "vue-p5-component" {
  export type Isketch = P5 & P5DOM & P5SOUND & P5GLOBAL;
}

interface P5GLOBAL {
  VIDEO: "video";
  AUDIO: "audio";
  mouseX: number;
  height: number;
}

export interface createCaptureInstance {
  size: (width: number, height: number) => any;
  hide: () => void;
}
export type captureDevice = VIDEO | AUDIO;

type P5 = RENDERING & IMAGE & COLOR;

interface P5DOM {
  createCapture: (captureDevice: captureDevice) => createCaptureInstance;
}

interface P5SOUND {
  
}

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
