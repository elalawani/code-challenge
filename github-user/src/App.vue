<template>
  <div class="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
  <footer>
    <foot-bar></foot-bar>
  </footer>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import FootBar from "./components/FootBar.vue";
import {GIT_HUB_USER} from "./graphql/query.js";
import {useQuery} from "@vue/apollo-composable";
import {computed, provide} from "vue";

export default {
  name: 'App',
  components: {
    NavBar,
    FootBar

  },
  setup() {
    const {result, loading, error} = useQuery(GIT_HUB_USER)
    const repos = computed(() => result.value?.user ?? [])
    provide('repos', repos);
    provide('error', error);
    provide('loading', loading);

    return {
      repos,
      loading,
      error
    }

  },

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
  background-color: #f1f1f1;
}

</style>
