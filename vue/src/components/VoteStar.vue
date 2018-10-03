<template>
    <div class="vote-star">
        <md-icon class="star-icon" :style="{'--star-level-color':voteToColor()}">star</md-icon>
        <div class="vote">{{fixedVote}}</div>
    </div>
</template>
<style scoped>
.vote-star {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vote-star .star-icon {
  color: var(--star-level-color) !important;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

type TypeOfColor = ReturnType<typeof numberToColor>;

export function numberToColor(color_number: number): [number, number, number] {
  const v0 = color_number >> 16;
  const v1 = (color_number - (v0 << 16)) >> 8;
  const v2 = color_number - (v0 << 16) - (v1 << 8);
  return [v0, v1, v2];
}
export function colorToRGB(color: TypeOfColor) {
  return "#" + color.map(c => ("0" + c.toString(16)).substr(-2)).join("");
}

const DEFAULT_LEVEL_COLOR_MAP = [
  numberToColor(0x3c2322),
  numberToColor(0x8b0000),
  numberToColor(0xffc107),
  numberToColor(0xffeb3b),
  numberToColor(0x8bc34a),
  numberToColor(0x4caf50)
];

@Component
export default class VoteStar extends Vue {
  static numberToColor = numberToColor;
  static colorToRGB = colorToRGB;
  /**分数，任意数值 */
  @Prop()
  vote!: number;
  /** 默认评分范围0~10 */
  @Prop({ default: () => [0, 10] })
  range!: [number, number];
  /**默认只显示一位小数 */
  @Prop({ default: () => 1 })
  fixed!: number;

  /**色卡版 */
  @Prop({ default: () => DEFAULT_LEVEL_COLOR_MAP })
  private levelColorMap!: TypeOfColor[];

  voteToColor(vote_num = this.vote) {
    const { range, levelColorMap } = this;
    const vote =
      ((vote_num - range[0]) / (range[1] - range[0])) *
      (levelColorMap.length - 1);
    const from_vote = Math.floor(vote);
    const to_vote = Math.ceil(vote);
    const from_color = levelColorMap[from_vote];
    const to_color = levelColorMap[to_vote];
    const p = vote - from_vote;
    const res_color = from_color.map(
      (from_v, i) => (from_v + (to_color[i] - from_v) * p) | 0
    ) as TypeOfColor;

    return colorToRGB(res_color);
  }

  get fixedVote() {
    return this.vote.toFixed(this.fixed);
  }
}
</script>
