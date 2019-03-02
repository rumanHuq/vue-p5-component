// @ts-ignore
import Vue from 'vue'

declare module "vue-p5-component" {
  export interface P5{
    setup(sketch:any):any;
    draw(sketch:any):any;
  }
}