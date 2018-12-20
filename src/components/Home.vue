<template>
  <div class="Home">
    <!--Main Navigation-->
    <header>
      <nav class="navbar fixed-top navbar-expand-md navbar-dark scrolling-navbar">
        <div class="container-fluid">
          <div class="col col-md-1">
            <a class="navbar-brand" href="#">
              <img src="../assets/logo_nkoe_lib.png" class="img-fluid" >
            </a>
          </div>
          <div class="col justify-content-between col-md-2">
            <strong><h1>nKoe Lib</h1></strong>
          </div>

          <div class="col-md-6">
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Text input with dropdown button">
              <div class="input-group-append">
                <button class="btn btn-outline-brown btn-md m-0 px-3 py-2 z-depth-0" type="button"><i
                  class="fa fa-search"></i></button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-outline-light waves-effect"><h6><strong>Log In</strong></h6></button>
            <button type="button" class="btn btn-danger btn-rounded"><h6><strong>Sign Up</strong></h6></button>
          </div>
        </div>
      </nav>
    </header>
    <!--Main Navigation-->
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to Books library'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
