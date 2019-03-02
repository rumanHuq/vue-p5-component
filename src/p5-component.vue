<template>
  <div />
</template>

<script lang="ts">
import P5 from "p5";
import "p5/lib/addons/p5.dom";
import "p5/lib/addons/p5.sound";
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { VueConstructor } from "vue";

export default Vue.extend({
  mounted() {
    const eventNames = {
      preload: "preload",
      setup: "setup",
      draw: "draw",

      keyPressed: "keypressed",
      keyReleased: "keyreleased",
      keyTyped: "keytyped",

      mouseMoved: "mousemoved",
      mouseDragged: "mousedragged",
      mousePressed: "mousepressed",
      mouseReleased: "mousereleased",
      mouseClicked: "mouseclicked",
      doubleClicked: "doubleclicked",
      mouseWheel: "mousewheel",

      touchStarted: "touchstarted",
      touchMoved: "touchmoved",
      touchEnded: "touchended",

      deviceMoved: "devicemoved",
      deviceTurned: "deviceturned",
      deviceShaken: "deviceshaken",
    };

    const P5Instance = new P5(sketch => {
      this.$emit("sketch", sketch);

      Object.keys(eventNames).forEach(p5EventName=>{
        const vueEventName = (eventNames as any)[p5EventName];
        const savedCallback = sketch[p5EventName];

        sketch[p5EventName] = (...args: any[]) => {
          if (savedCallback) {
            savedCallback(sketch, ...args);
          }
          this.$emit(vueEventName, sketch, ...args);
        };
      });
    }, this.$el);

    return P5Instance;
  },
});
</script>