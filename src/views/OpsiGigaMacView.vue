<template>
 <div class="container">
    <div class="opsiGigaMac">
        <h2>Pedas/Tidak</h2>
    </div>

    <div class="pictGigaMac">
      <img src="https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Double-Big-Mac.jpg?$Product_Desktop$" alt="">
      <h2>GigaMac</h2>
      <h3>Rp 70.000</h3>
    </div>
</div>
  </template>
  
  <script>
  
  export default {
    name: 'HomeView',
    components: {
      
    }
  }
  </script>
  <style>
  .container{
    display: flex;
    color: black;
  }
  img{
    height: 300px;
  }
  .pictGigaMac{
    text-align: center;
    
  }
  .opsiGigaMac{
    margin-left: 30pxx;
    margin-right: 300px;

  }
</style>