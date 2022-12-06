<template>
    <div class="makanan">
      <div class="item" @click="opsi()">
        <img src="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Double-Big-Mac.jpg?$Product_Desktop$" alt="">
        <h2>GigaMac</h2>
      </div>

      <div class="item" @click="opsi()">
        <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/uku5BjLSPYQswEWsXVFV.png" alt="">
        <h2>ChisBurger</h2>
      </div>

      <div class="item" @click="opsi()">
        <img src="https://www.pngarea.com/pngs/115/7481019_chicken-nuggets-png-chicken-nuggets-6-piece-transparent.png" alt="">
        <h2>MacNaget</h2>
      </div>

    </div>
  </template>
  
  <script>
  
  export default {
    name: 'MakananView',
    methods: {
        opsi(){
            this.$router.push('/opsiGiga')
        }
    },
    components: {
    }
  }
  </script>
  <style>
  .makanan{
    color: black;
    display: flex;
  }
  .item{
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
    padding: 20px;
  }
  .item img{
    height: 200px;
  }
</style>
  