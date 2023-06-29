<template>
    <div class="">
      <img src="https://i.postimg.cc/XNFfRqVJ/charlesdeluvio-4-K7-Bwa-HUGc-unsplash.jpg" class="d-block w-100 h-50"
        alt="...">
    </div>
    <div class="row">
      <div id="cat-hats" class="col-4 card">
        <div class="card-body">
          <strong>HATS</strong>
          <img id="img-front"
            src="https://i.postimg.cc/sX1Gypvk/Burton-Cordova-5-Panel-Camp-Hat-Burton-com-Fall-2019.jpg" alt=""><br><br>
          <a href="/html/products.html"><button>SHOP MORE</button></a>

        </div>
      </div>
      <div id="cat-pants" class="col-4 card">
        <div class="card-body">
          <strong>PANTS</strong>
          <img id="img-front"
            src="https://i.postimg.cc/pXvz7cD7/Mens-Multi-Color-Patchwork-Corduroy-Zipper-Fly-Casual-Straight-Pants.png"
            alt=""><br><br>
          <a href="/html/products.html"><button>SHOP MORE</button></a>

        </div>
      </div>
      <div id="cat-jumpers" class="col-4 card">
        <div class="card-body">
          <strong>JUMPERS</strong>
          <img id="img-front" src="https://i.postimg.cc/3wzDZt8t/Womens-City-Scape-Jacquard-Knit-Jumper-blue.jpg"
            alt=""><br><br>
          <a href="/html/products.html"><button>SHOP MORE</button></a>

        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
#img-front{
  width: 100%;
  height: 70%;

}
  
</style>
