<template>
    <md-card class="movie-item" >
        <md-card-header @click="goToMovieDetail(movie.id)">
            <router-link :to="{ name: 'moviedetail', params: { id: movie.id }}">
                <span class="md-title">{{movie.title}}</span>
            </router-link>
        </md-card-header>
        <md-card-media-actions>
        <md-card-media>
            <img src="https://i0.hippopx.com/photos/320/918/427/sky-clouds-sunlight-dark-thumb.jpg" alt="Cover">
        </md-card-media>

        <md-card-actions>
            <md-button class="md-icon-button" @click="openDoubanLink()">
                <ali-icon class="douban-link" name="icon-douban"></ali-icon>
            </md-button>
            <vote-star :vote="movie.star"></vote-star>
        </md-card-actions>
        </md-card-media-actions>
    </md-card>
</template>
<style lang="scss" scoped>
.movie-item {
  .media-img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
  }
  .media-img-blur-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    filter: blur(0.5rem);
    top: 50%;
    left: 0;
    opacity: 0.8;
  }
  .douban-link {
    color: green;
    font-size: 1.4rem;
    // text-shadow: 0 0 0.5rem rgba($color: #000, $alpha: 0.3)
  }
  .vote {
    text-align: center;
  }
}
</style>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AliIcon from "../components/AliIcon.vue";
import VoteStar from "../components/VoteStar.vue";
import { MovieListItemData } from "../service/Movie.type";
export { MovieListItemData };

@Component({
  components: { AliIcon, VoteStar }
})
export default class MoviteItem extends Vue {
  @Prop()
  movie!: MovieListItemData;
  goToMovieDetail(movie_id: string) {
    console.log(movie_id);
    this.$router.push({
      name: "moviedetail",
      params: {
        id: movie_id
      }
    });
  }
  openDoubanLink() {
    console.log("ggggg");
  }
}
</script>
