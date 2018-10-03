<template>
    <span class="iconfont" :class="name"></span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class AliIcon extends Vue {
  @Prop()
  name!: string;
}
</script>

