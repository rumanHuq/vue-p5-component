// @ts-ignore
import Vue from 'vue'

declare module "vue-p5-component"

declare module "*.vue" {
  // @ts-ignore
  import Vue from "vue";

  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $myProperty: string
  }
}