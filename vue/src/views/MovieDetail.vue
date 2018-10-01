<template>
    <md-content>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">TITLE</div>
        </md-card-header-text>

        <md-card-media>
          <img src="https://vuematerial.io/assets/examples/avatar-2.jpg" alt="People">
        </md-card-media>
      </md-card-header>
        <md-card-media-actions>
            <md-card-media>
                <img src="https://vuematerial.io/assets/examples/villains.png" alt="Cover">
            </md-card-media>

            <md-card-actions>
                <md-button class="md-icon-button">
                    <md-icon>favorite</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>bookmark</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>share</md-icon>
                </md-button>
            </md-card-actions>
        </md-card-media-actions>
    </md-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class MovieDetail extends Vue {}
</script>