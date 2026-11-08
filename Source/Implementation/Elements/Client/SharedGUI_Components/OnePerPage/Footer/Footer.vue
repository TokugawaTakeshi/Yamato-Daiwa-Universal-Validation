<template lang="pug">

  footer.Footer

    | © ACME, LTD.

</template>


<script lang="ts">

  import {
    Component as VueComponentConfiguration,
    Vue as VueComponent,
    toNative as transformToOptionAPI_VueComponent
  } from "vue-facing-decorator";


  @VueComponentConfiguration({ name: "Footer" })
  class Footer extends VueComponent {}


  export default transformToOptionAPI_VueComponent(Footer);

</script>
