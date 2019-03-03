// @ts-ignore
import Vue from "vue";
import { VIDEO, AUDIO } from "p5";
import { P5 } from "./P5"
declare module "vue-p5-component" {
  export type Isketch = P5 & P5DOM & P5SOUND & P5GLOBAL;
}

interface P5Setup {
  methods?: {
    draw?: any;
    setup?: any;
  }
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


interface P5DOM {
  createCapture: (captureDevice: captureDevice) => createCaptureInstance;
}

interface P5SOUND {
  
}

