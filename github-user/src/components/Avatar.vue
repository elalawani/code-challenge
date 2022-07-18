<template>
  <div class="avatar justify-content-center">
    <img :src="data.avatarUrl" height="100" width="100"/>
  </div>
</template>
<script>
import {inject} from "vue";

export default {
  name: 'Avatar',
  components: {
  },
  setup() {
    const data = inject('repos')
    return {
      data
    }
  }
}
</script>
<style>
img {
  border-radius: 50%;
}
img:hover {
  transform: scale(1.5);
  transition: all 0.5s;
}
.avatar {
  display: flex;
  margin-top: 10px;
}
</style>