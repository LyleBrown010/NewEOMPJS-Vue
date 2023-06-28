<template>
    <nav class="topnav">
        <router-link to="/" id="nav-item">Home</router-link>
        <router-link to="/about" id="nav-item">About</router-link>
        <router-link to="/contact" id="nav-item">Contact</router-link>
        <router-link to="/products" id="nav-item">Products</router-link>
        <router-link to="/admin" id="nav-item">Admin</router-link>
        <router-link to="/cart" id="nav-item">Cart</router-link>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.topnav{
    background-color: #ffd230;
    overflow: hidden;
    
}

.topnav{
    padding: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
}

#nav-item {
    text-align: center;
    padding: 10px;
    text-decoration: none;
    font-size: 17px;
    text-decoration: none;
    color: black;
}

</style>