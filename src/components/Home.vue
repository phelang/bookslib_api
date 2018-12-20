<template>
  <div class="Home">
    <!--Main Navigation-->
    <!--Main Navigation-->
    <header>

      <nav class="navbar navbar-expand-lg fixed-top navbar-dark yellow">
        <div class="container">
          <a class="navbar-brand" href="#"><strong>Navbar</strong></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center wow fadeInUp">
                <h2>This Navbar isn't fixed</h2>
                <h5>When you scroll down it will disappear</h5>
                <br>
                <p>Full page intro with background image will be always displayed in full screen mode, regardless
                  of device </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
    <!--Main Navigation-->

    <!--Main Layout-->
    <main class="text-center my-5">

      <div class="container">
        <div class="row">
          <div class="col-md-12">

            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>
        </div>
      </div>

    </main>
    <!--Main Layout-->



    <h1>{{ msg }}</h1>

    <!-- Footer -->
    <footer class="page-footer fixed-bottom font-small mdb-color lighten-3 pt-4">

      <!-- Footer Elements -->
      <div class="container">

        <!--Grid row-->
        <div class="row">

          <!--Grid column-->
          <div class="col-lg-2 col-md-12 mb-4">

            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" class="img-fluid" alt="">
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4">

            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" class="img-fluid" alt="">
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4">

            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" class="img-fluid" alt="">
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-12 mb-4">

            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg" class="img-fluid" alt="">
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4">

            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg" class="img-fluid" alt="">
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>

          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-2 col-md-6 mb-4">

            <!--Image-->
            <div class="view overlay z-depth-1-half">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg" class="img-fluid" alt="">
              <a href="">
                <div class="mask rgba-white-light"></div>
              </a>
            </div>

          </div>
          <!--Grid column-->

        </div>
        <!--Grid row-->

      </div>
      <!-- Footer Elements -->

      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
      </div>
      <!-- Copyright -->

    </footer>
    <!-- Footer -->

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
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
