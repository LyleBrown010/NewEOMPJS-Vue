<template>

    <div class="bar">
        <button @click="sortPrice">Sort by Price</button>
        <select v-model="category">
            <option value="all">ALL</option>
            <option value="hats">HATS</option>
            <option value="pants">PANTS</option>
            <option value="jumpers">JUMPERS</option>
        </select>
        <!-- <a id="btnFilter" href="">All</a>
        <a id="btnFilter" href="">Hats</a>
        <a id="btnFilter" href="">Pants</a>
        <a id="btnFilter" href="">Jumpers</a> -->
    </div><br>
    <div v-if="products" class="flex-container" id="products">
        <CardComp v-for="product of products" :key="product.id" :product="product"/>
    </div>
    <div v-else>Loading.. .. . . . . . ... . ... </div>
</template>
<script>
import CardComp from '@/components/Card-Comp.vue'
export default {
    methods: {
        sortPrice(){
            this.$store.commit("sortPropertiesByPrice")
        },
    },
    computed:{
        products(){
            return this.$store.state.products?.filter((product) => {
                let isMatch = true; 
                if(this.category !== "all" && this.category !== product.category){
                    isMatch = false
                }
                return isMatch
            })
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