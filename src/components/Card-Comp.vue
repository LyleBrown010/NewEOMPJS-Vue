<template>
    <router-link :to="{name: 'product', params:{id: product.id}}" id="card" >
        <div class="row">
            <div class="col-6" id="card-product">
                <img :src="product.image" :alt="product.name">
                <h3>{{product.name}}</h3>
                <p>Price: R {{product.price}}</p>
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
}

#btnAddToCart{
    padding: 5px;
    border-radius: 12px;
    margin-bottom: 7px;
}
</style>