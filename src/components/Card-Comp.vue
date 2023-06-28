<template>
    <router-link :to="{name: 'product', params:{id: product.id}}" id="card" >
        <div class="row">
            <div class="col-6" id="card-product">
                <img :src="product.image" :alt="product.name">
                <h3>{{product.name}}</h3>
                <p>Price: R {{product.price}}</p>
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

}
</style>