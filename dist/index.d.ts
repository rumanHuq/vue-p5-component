// @ts-ignore
import Vue from "vue";

declare module "vue-p5-component" {
  export interface Ip5 {
    setup: (sketch:Isetup)=>any;
    draw: (sketch:any)=>any;
  }
}

interface Isetup {
  createCanvas: (width: number, height: number)=>any;
  background: (color: number)=>any;
  createCapture: (captureDevice: "video")=>({
    size: (width: number, height: number)=>any;
  })
}
