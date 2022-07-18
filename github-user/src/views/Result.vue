<template>
  <div class="result">
    <div class="d-flex m-4 justify-content-center">
      <h1>About GitHub User</h1>
    </div>
    <UserView/>
  </div>
</template>
<script>
import UserView from "../components/UserView.vue";

export default {
  name: 'Result',
  components: {
    UserView
  }
}
</script>