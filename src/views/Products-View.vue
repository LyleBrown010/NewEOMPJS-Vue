<template>

    <div class="bar">
        <a id="btnFilter" href="">All</a>
        <a id="btnFilter" href="">Hats</a>
        <a id="btnFilter" href="">Pants</a>
        <a id="btnFilter" href="">Jumpers</a>
    </div><br>
    <div v-if="products" class="flex-container" id="products">
        <CardComp v-for="product of products" :key="product.id" :product="product"/>
    </div>
    <div v-else>Loading.. .. . . . . . ... . ... </div>
</template>
<script>
import CardComp from '@/components/Card-Comp.vue'
export default {
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    mounted(){
        this.$store.dispatch("getProducts")
    },

    components: {CardComp}
}
</script>
<style>
#products{
    display: grid;
    grid-template-columns: auto auto; 
}

.bar{
    background-color: #ffd230;
    border-radius: 12px;
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: auto;
    
}

#btnFilter{
    text-decoration: none;
    color: black;
    padding: 5px;

}



</style>