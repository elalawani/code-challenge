<template>
  <div class="home">
    <div class="d-flex m-4 p-4 justify-content-center">
      <h1 >GitHub User Search</h1>
    </div>
    <div>
      <div class="d-flex justify-content-center">
        <div class="col-md-6">
          <div class="search">
            <i class="fa fa-search"></i>
            <input type="text" class="form-control" placeholder="GitHub User ...">
            <router-link class="btn-dark p-3 rounded text-decoration-none btn-position git-btn" to="/result">Search
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>

body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}


.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, .1);

}

.search input {

  height: 60px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;


}


.search input:focus {

  box-shadow: none;
  border: 2px solid blue;


}

.search .fa-search {

  position: absolute;
  top: 20px;
  left: 16px;

}

.search router-link {

  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 110px;
  background: blue;

}

.btn-position {
  display: flex;
  width: 85px;
  position: absolute;
  left: 42%;
  top: 100px;
}

</style>