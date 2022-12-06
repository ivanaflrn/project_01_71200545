<template>
  <div class="sidebar">
    <h1>Daftar Menu</h1>
    <ul>
      <li><router-link to="/makanan">Makanan</router-link></li>
      <li><router-link to="/minuman">Minuman</router-link></li>
      <li><router-link to="/snack">Snack</router-link></li>
    </ul>
  </div>

  <router-view/>
</template>

<style>
.sidebar{
  background-color: firebrick;
  padding: 30px;
  margin-right: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
}

ul {
  padding: 30px;
}
ul {
  list-style: none;
}
ul li {
  margin-bottom: 15px;
}

ul li a {
  color: #ffffff;
  text-decoration: none;
}

ul li a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}
</style>
