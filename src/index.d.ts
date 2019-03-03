import {
  p5InstanceExtensions,
  Element,
  MediaElement,
  Camera,
  Color,
  File,
  Font,
  Geometry,
  Graphics,
  Image,
  NumberDict,
  PrintWriter, Renderer,
  Shader,
  StringDict,
  Table,
  TableRow,
  TypedDict,
  Vector,
  XML
} from 'p5';

declare module "vue-p5-component" {
  export type P5Sketch = p5InstanceExtensions;
  export type P5Element = Element;
  export type P5MediaElement = MediaElement;
  export type P5Camera = Camera;
  export type P5Color = Color;
  export type P5File = File;
  export type P5Font = Font;
  export type P5Geometry = Geometry;
  export type P5Graphics = Graphics;
  export type P5Image = Image;
  export type P5NumberDict = NumberDict;
  export type P5PrintWriter = PrintWriter;
  export type P5Renderer = Renderer;
  export type P5Shader = Shader;
  export type P5StringDict = StringDict;
  export type P5Table = Table;
  export type P5TableRow = TableRow;
  export type P5TypedDict = TypedDict;
  export type P5Vector = Vector;
  export type P5XML = XML;
}