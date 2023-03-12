<script setup>
  import { ref } from 'vue'
  import image from "/logo_paroki_putih.png" 
</script>

<script>
  export default {
    data() {
      return {
        showDropdown: false
      }
    }
  }
</script>

<template>
  <div class="navbar bg-red">
    <div id="logo">
      <img :src="image">
    </div>
    <div id="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <!-- Tentang -->
        <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <a href="#">Tentang</a>
          <ul v-if="showDropdown">
            <li><a href="Sejarah.vue">Sejarah</a></li>
            <li><a href="StrukturalDewanParoki.vue">Struktural Dewan Paroki</a></li>
            <li><a href="KomunitasUmat.vue">Komunitas Umat</a></li>
          </ul>
        </li>
        <!-- Layanan -->
        <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <a href="#">Layanan</a>
          <ul v-if="showDropdown">
            <li><a href="Sakramen.vue">Sakramen</a></li>
            <li><a href="Sekretariat.vue">Sekretariat</a></li>
            <li><a href="Keuskupan.vue">Keuskupan</a></li>
          </ul>
        </li>
        <!-- Kegiatan -->
        <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <a href="#">Kegiatan</a>
          <ul v-if="showDropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
        <!-- Media -->
        <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
          <a href="#">Media</a>
          <ul v-if="showDropdown">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .navbar {
    display: flex;
    align-items: center;
  }
  #menu{
    margin-left: auto;
  }

  #logo>img{
    width: 178px;
    margin-left: 1.5rem;
  }
  .navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .navbar ul li {
    margin-right: 20px;
  }

  .navbar ul li a {
    text-decoration: none;
    color: #fff;
    padding: 0px 20px 0px 20px;
    font-size: 18px;
  }

  .choice {
    color: #ff0000;
  }

  .navbar ul li.dropdown ul {
    position: absolute;
    display: none;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ff0000;
    border-radius: 20px;
    color: #ff0000;
  }

  .navbar ul li.dropdown ul li {
    margin: 5px 0;
  }

  .navbar ul li.dropdown:hover ul {
    display: block;
  }

  .navbar ul li.dropdown ul li a {
  color: #ff0000;
}


</style>
