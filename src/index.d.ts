// @ts-ignore
import Vue from "vue";

declare module "vue-p5-component" {
  export interface Ip5 {
    setup: (sketch:Isetup)=>any;
    draw?: (sketch:any)=>any;
  }
}

interface Isetup {
  createCanvas: (width: number, height: number)=>any;
  background: (color: number)=>any;
  createCapture: (captureDevice: captureDevice)=>{
    size: (width: number, height: number)=>any;
    hide: ()=>void;
  }
}

interface Idraw {
  tint:(RED: number, GREEN: number, BLUE: number)=>any;
  image:(captureDevice: captureDevice)=>any;
}

type captureDevice= "video";