<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="repos">
    <div class="d-flex m-4 justify-content-center">
      <h1>All Repos</h1>
    </div>
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>

      <ul v-else>
        <li
            class="card shadow p-3 m-4"
            v-for="(repo, index) in data.repositories.nodes"
            :key="data.repositories.nodes.id"
        >
          <div class="repo-name-position">
            {{ index + 1 }}: {{ repo.name }}
          </div>
          <div class="position-absolute top-0 end-0 p-3">
            <span class="p-3">{{ repo.forkCount }} <span class="fa fa-code-fork "></span></span>
            <span>{{ repo.stargazerCount }} <span class="fa fa-star checked"></span></span>
          </div>
          <div class="position-absolute bottom-0 end-0 p-1 text-secondary">
            created at: {{ format_date(repo.createdAt) }}
          </div>
          <div class="forks-d-stars">number of forks per stars:
            <span class="cal-num">
              {{ round(repo.stargazerCount / repo.forkCount) }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <router-link to="/result"> &lt Back to result</router-link>
</template>
<script>
import {inject} from "vue";
import moment from "moment";

export default {
  components: {},
  setup() {
    const data = inject('repos')
    const error = inject('error')
    const loading = inject('loading')
    return {
      data,
      error,
      loading
    }
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
      }
    },
    round(num) {
      return +(Math.round(num + "e+2") + "e-2");

    }
  }
}
</script>
<style scoped>
.card {
  width: 700px;
  height: 100px;
  cursor: default;
  background-color: #efefef;
  border: none;
}

.checked {
  color: gold;
}

.repo-name-position {
  position: absolute;
  top: 40px;
  left: 5px;
}

.forks-d-stars {
  position: absolute;
  top: 40px;
  right: 40px;
  color: #213547;
  font-size: 10px;
}

.cal-num {
  font-size: 20px;
}
</style>