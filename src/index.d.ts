import {p5InstanceExtensions, Element} from 'p5';

declare module "vue-p5-component" {
  export type Sketch = p5InstanceExtensions;
  export type P5Element = Element;
}