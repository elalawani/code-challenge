<template>
  <div>
    <div class="container mt-4 mb-4 d-flex justify-content-center">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else class="card p-4 shadow">
        <div class=" image d-flex flex-column justify-content-center align-items-center">
          <div class="btn btn-secondary">
            <avatar/>
          </div>
          <span class="name mt-3">{{ data.name }}</span>
          <span class="idd">{{ data.login }}</span>
          <div class="container mt-4 mb-4 p-3 d-flex justify-content-centerr">
            <div class="card p-2 shadow">{{ showBio() }}</div>
          </div>

          <div class="d-flex flex-row justify-content-center align-items-center mt-3">
            <div v-html="numberOfRepos()"/>
          </div>
          <div class=" d-flex mt-2">
            <router-link class="btn-dark p-3 rounded text-decoration-none" to="/repos">
              go to all repositories
            </router-link>
          </div>
          <br>
          <br>
          <div class=" px-2 rounded mt-4 date ">
            <span class="join"> joined: {{ format_date(data.createdAt) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {inject} from "vue";
import moment from 'moment'
import avatar from "./Avatar.vue";

export default {
  name: 'UserView',
  components: {
    avatar,
  },
  methods: {
    numberOfRepos() {
      let countRepos = 'there is no repositories'
      if (this.data.repositories.totalCount > 0) {
        countRepos = this.data.repositories.totalCount;
        return '<span style="font-size: 22px; font-weight: bold;">' + countRepos + '</span><span class="follow">  repos</span>';
      }
      return countRepos;
    },
    showBio() {
      if (this.data.bio === null) {
        return 'user have no Bio'
      }
      return this.data.bio;
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
      }
    }

  }
  ,
  setup() {
    const data = inject('repos');
    const error = inject('error');
    const loading = inject('loading');
    return {
      data,
      error,
      loading
    }
  }
  ,
}

</script>
<style scoped>

.card {
  width: 350px;
  background-color: #efefef;
  border: none;
}

.btn {
  height: 140px;
  width: 140px;
  border-radius: 50%
}

.name {
  font-size: 22px;
  font-weight: bold
}

.idd {
  font-size: 14px;
  font-weight: 600
}

.follow {
  font-size: 12px;
  font-weight: 500;
  color: #444444
}

.text span {
  font-size: 13px;
  color: #545454;
  font-weight: 500
}

.icons i {
  font-size: 19px
}

.join {
  font-size: 14px;
  color: #a0a0a0;
  font-weight: bold
}

.date {
  background-color: #ccc
}
</style>