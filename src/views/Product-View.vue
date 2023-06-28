<template>
    <div v-if="product" class="product-details">
        <img :src="product.image" :alt="product.name">
        <div>
            <h2>{{product.name}}</h2>
            <p>Price: {{product.price}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:["id"],
    computed: {
        product(){
            return this.$store.state.product
        }
    },
    mounted(){
        this.$store.dispatch("getProduct", this.id)
    }
    
};
</script>
<style scoped>
.product-details{
    border: 2px solid black;
    border-radius: 12px;
}    
</style>