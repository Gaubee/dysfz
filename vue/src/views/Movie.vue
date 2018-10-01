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
        <md-card class="search-result-item" v-for="item in search_list" :key="item.id">
          
          <md-card-header>
            <span class="md-title">{{item.title}}</span>
          </md-card-header>
          <md-card-media-actions>
            <md-card-media>
              <img src="https://i0.hippopx.com/photos/320/918/427/sky-clouds-sunlight-dark-thumb.jpg" alt="Cover">
            </md-card-media>

            <md-card-actions>
              
              <md-button class="md-icon-button">
                <md-icon>star</md-icon>
              </md-button>
              <div class="vote">3.3</div>
            </md-card-actions>
          </md-card-media-actions>

        </md-card>
        
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
      .vote{
        text-align: center;
      }
    }
  }
}
</style>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Movie extends Vue {
  search_text = "";
  searching = false;
  searched = "";
  search_list = [] as any[];
  get show_search_result() {
    return this.search_list.length > 0;
  }
  async doSearch() {
    const search_text = this.search_text.trim();
    if (!search_text) {
      return;
    }
    try {
      this.searching = true;
      await new Promise(cb => setTimeout(cb, 100 + 300 * Math.random()));
      this.search_list = [
        { id: "qaq", title: "QAQ" },
        { id: "xxas", title: "XXAS" },
        { id: "vdaopoasda", title: "VDAOPOASDA" }
      ];
    } catch (err) {
    } finally {
      this.searching = false;
      this.searched = this.search_text;
    }
  }
}
</script>
