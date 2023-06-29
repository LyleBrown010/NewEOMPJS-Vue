<template>

    <div class="bar">
        <button id="btnSort" @click="sortPrice">Sort by Price</button>
        <select v-model="category">
            <option value="All">All</option>
            <option value="Hats">Hats</option>
            <option value="Pants">Pants</option>
            <option value="Jumpers">Jumpers</option>
        </select>
    </div><br>
    <div v-if="products" class="flex-container" id="products">
        <CardComp v-for="product of products" :key="product.id" :product="product"/>
    </div>
    <div v-else>Loading.. .. . . . . . ... . ... </div>
</template>
<script>
import CardComp from '@/components/Card-Comp.vue'
export default {
    data() {
        return {
            category: "All"
            
        }
    },
    methods: {
        sortPrice(){
            this.$store.commit("sortPropertiesByPrice")
        },
    },
    computed:{
        products(){
            return this.$store.state.products?.filter((product) => {
                let isMatch = true; 
                if (this.category !== "All" && this.category !== product.category){
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
    grid-template-columns: auto auto auto; 
    justify-content: space-evenly;
    
}

.bar{
    background-color: #ffd230;
    border-radius: 12px;
    width: 50%;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    
    
}


img{
    border-radius: 12px;
    margin: 5px;
}

#btnSort{
    background-color: #ffd230;
    border: none;
    margin: 5px;
}

select{
    background-color: #ffd230;
    border: none;
}


</style>