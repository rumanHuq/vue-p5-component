// @ts-ignore
import Vue from "vue";

declare module "vue-p5-component" {

  export interface Isetup {
    createCanvas: (width: number, height: number) => any;
    background: (color: number) => any;
    createCapture: (captureDevice: captureDevice) => {
      size: (width: number, height: number) => any;
      hide: () => void;
    }
  }

  export interface Idraw {
    tint: (RED: number, GREEN: number, BLUE: number) => any;
    image: (captureDevice: captureDevice) => any;
  }

  export type captureDevice = "video";

  export interface Ip5 {
    setup: (sketch: Isetup) => any;
    draw?: (sketch: any) => any;
  }
}