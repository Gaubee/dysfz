<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="toggleMenu()">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">My Title</span>
        </div>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item @click="routeTo('movie')">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item @click="routeTo('about')">
            <md-icon>info</md-icon>
            <span class="md-list-item-text">About</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
<!-- <div id="nav">
          <router-link to="/">Movie</router-link> |
          <router-link to="/about">About</router-link>
        </div> -->
        <!-- <md-tabs class="md-primary" md-alignment="centered">
          <md-tab id="tab-home" md-icon="home"></md-tab>
          <md-tab id="tab-pages" md-icon="pages"></md-tab>
          <md-tab id="tab-favorites" md-icon="favorite"></md-tab>
        </md-tabs> -->
      <md-app-content class="my-content">
        <router-view/>
      </md-app-content>
       <!-- <md-app-content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
      </md-app-content> -->
    </md-app>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.md-app {
  border: 1px solid rgba(#000, .12);
  height: 100vh;
}

 // Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.my-content {
  /*overflow: auto;*/
}
</style>
<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component()
export default class MyApp extends Vue {
  name = 'Overlap'
  menuVisible = false
  toggleMenu(visiable = !this.menuVisible){
    this.menuVisible = visiable;
  }
  routeTo(link){
    this.$router.push({name:link});
    this.toggleMenu(false);
  }
}

</script>
