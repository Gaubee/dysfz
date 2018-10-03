<template>
  <div class="search-box">
    <div class="search-text">
      <md-field>
        <label>输入要搜索的电影名字</label>
        <md-input v-model="search_text" @keyup.enter="doSearch()"></md-input>
        <md-button class="md-icon-button md-primary" @click="doSearch()">
          <md-icon>search</md-icon>
        </md-button>
      </md-field>
    </div>
    <div class="search-content">
      <div class="searching-box" v-if="searching">
        <md-progress-spinner class="spinner" md-mode="indeterminate"></md-progress-spinner>
        <div class="md-helper-text">搜索的资源来自第三方，耐心等待搜索结果</div>
      </div>
      <div class="search-result-list" v-if="show_search_result">
        <movie-item class="search-result-item" v-for="item in search_list" :key="item.id" :movie="item"></movie-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  width: 100%;
}
.search-text,
.search-result-list {
  width: 600px;
  max-width: 86vw;
  margin: 0 auto;
}
.search-content {
  position: relative;
  width: 100%;
  min-height: 80vh;
  .searching-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba($color: #fff, $alpha: 0.3);

    .spinner {
      margin: 2rem;
    }
  }
  .search-result-list {
    .search-result-item {
      margin-bottom: 1.6rem;
    }
  }
}
</style>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MovieItem from "../components/MovieItem.vue";
import { MovieSearcher, MovieListItemData } from "../service/MovieSearcher";

@Component({
  components: { MovieItem }
})
export default class Movie extends Vue {
  search_text = "";
  searching = false;
  searched = "";
  search_list = [] as any[];
  movieSearcherProvider = MovieSearcher.instance;
  created() {
    window["zz"] = this;
    this.fetchSearchResult();
  }
  get show_search_result() {
    return this.search_list.length > 0;
  }

  doSearch() {
    const search_text = this.search_text.trim();
    if (!search_text) {
      return;
    }
    this.$router.push({
      name: "searchmovie",
      query: {
        q: search_text
      }
    });
  }
  @Watch("$route.query.q")
  async fetchSearchResult(query_text = this.$route.query.q) {
    if (!query_text) {
      return;
    }
    console.log("search:", query_text);
    this.search_text = query_text.trim();
    if (!this.search_text) {
      return;
    }
    try {
      this.searching = true;
      await new Promise(cb => setTimeout(cb, 100 + 300 * Math.random()));
      this.search_list = await this.movieSearcherProvider.search(
        this.search_text
      );
    } catch (err) {
    } finally {
      this.searching = false;
      this.searched = this.search_text;
    }
  }
}
</script>
