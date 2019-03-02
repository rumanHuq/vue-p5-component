// @ts-ignore
import Vue from "vue";
declare module "vue-p5-component" {
  export interface createCaptureInstance {
    size: (width: number, height: number) => any;
    hide: () => void;
  }
  export interface Isetup {
    createCanvas: (width: number, height: number) => any;
    background: (color: number) => any;
    createCapture: (captureDevice: captureDevice) => createCaptureInstance;
  }

  export interface Idraw {
    tint: (RED: number, GREEN: number, BLUE: number) => any;
    image: (createCaptureInstance: createCaptureInstance, Xcord: number, Ycord: number, width: number, height: number) => any;
  }

  export type captureDevice = "video";

  export interface Ip5 {
    setup: (sketch: Isetup) => any;
    draw?: (sketch: any) => any;
  }
}