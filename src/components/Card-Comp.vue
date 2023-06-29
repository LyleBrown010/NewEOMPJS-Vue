<template>
    <router-link :to="{name: 'product', params:{id: product.id}}" id="card" >
        <div class="row">
            <div class="" id="card-product">
                <img :src="product.image" :alt="product.name">
                <h3 class="text-black">{{product.name}}</h3>
                <p class="text-black">Price: R {{product.price}}</p>
                <button id="btnAddToCart">Add to Cart</button>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    props: ["product"]
}
</script>
<style scoped>
#card-product{
    border: 2px solid black;
    border-radius: 12px; 
    height: 350px; 
    margin: 5%;
}

#btnAddToCart{
    padding: 5px;
    border-radius: 12px;
    margin-bottom: 7px;
}


</style>