<script setup>
import { ref } from 'vue'
import image from "/logo_paroki_putih.png"

const showDropdown = ref(false);
</script>

<template>
  <div class="bg-brown nav-position">
    <div class="container-nav">
      <div class="navbar ">
        <div id="logo">
          <img :src="image">
        </div>
        <div id="menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <!-- Tentang -->
            <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
              <a href="#">Tentang</a>
              <ul v-if="showDropdown">
                <li><router-link to="/tentang/sejarah">Sejarah</router-link></li>
                <li><router-link to="/tentang/strukturaldewanparoki">Struktural Dewan Paroki</router-link></li>
                <li><router-link to="/tentang/komunitasumat">Komunitas Umat</router-link></li>
              </ul>
            </li>
            <!-- Layanan -->
            <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
              <a href="#">Layanan</a>
              <ul v-if="showDropdown">
                <li><router-link to="/layanan/sakramen">Sakramen</router-link></li>
                <li><router-link to="/layanan/sekretariat">Sekretariat</router-link></li>
                <li><router-link to="/layanan/keuskupan">Keuskupan</router-link></li>
              </ul>
            </li>
            <!-- Kegiatan -->
            <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
              <a href="#">Kegiatan</a>
              <ul v-if="showDropdown">
                <li><router-link to="/kegiatan/#">#</router-link></li>
                <li><router-link to="/kegiatan/#">#</router-link></li>
                <li><router-link to="/kegiatan/#">#</router-link></li>
              </ul>
            </li>
            <!-- Media -->
            <li class="dropdown" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
              <a href="#">Media</a>
              <ul v-if="showDropdown">
                <li><router-link to="/media/#">#</router-link></li>
                <li><router-link to="/media/#">#</router-link></li>
                <li><router-link to="/media/#">#</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

}

.nav-position {
  z-index: 99;
  top: 0;
  position: sticky;
}

#menu {
  margin-left: auto;
}

#logo>img {
  height: 84px;
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

.navbar ul li.dropdown ul {
  position: absolute;
  top: 91px;
  display: none;
  background-color: #fff;
  padding: 10px;
  border-top: 8px solid #795000;
}

.navbar ul li.dropdown ul li {
  margin: 5px 0;
}

.navbar ul li.dropdown:hover ul {
  display: block;
}

.navbar ul li.dropdown ul li a {
  color: #9E2222;
}
</style>