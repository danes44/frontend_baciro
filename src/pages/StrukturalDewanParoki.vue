<script setup>
  import AccordionItem from '../components/AccordionItem.vue';
  import image from "/pgpm.png";
  import imgprofile_placeholder from "/imgprofile_placeholder.png";
</script>

<template>
  <div class="accordions">
    <AccordionItem class="accordion" title="Pengurus Gereja dan Papa Miskin" :is-open="current === 1">
      <div class="content">
        <img :src="image"/>
        <p>Pengurus PGPM terdiri dari Ketua, Sekretaris, dan Bendahara, serta dua anggota. Ketua dijabat Ex Oficio oleh Ketua Dewan Pastoral Paroki, Sekretaris adalah salah satu dari sekretaris DPPH, Bendahara adalah Bendahara Umum DPPH, dan anggota adalah Wakil Ketua II DPPH dan Ketua Bidang Sarpras DPPH.</p>
      </div>
    </AccordionItem>
    <AccordionItem class="accordion" title="Dewan Paroki Harian & Dewan Paroki Inti" :is-open="current === 2">
      <div class="content">
        <p>Dewan Paroki adalah badan pastoral-evangelisasi yang di dalamnya para pastor bersama-sama dengan wakil-wakil umat melaksanakan tugas dan panggilan untuk terlibat dalam tritugas Kristus, yakni menguduskan, mewartakan dan menggembalakan. Dewan Paroki terdiri dari Dewan Paroki Harian dan Dewan Paroki Inti.</p>
        <h2>PENGURUS DEWAN PAROKI HARIAN</h2>
        <h4><i>Tahun 2022 - 2025</i></h4>
        <div class="container-dph">
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Rm. FX. Alip Suwito, Pr.</h4>
            <p>Ketua</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Rm. A. Wahadi Martaatmaja, Pr.</h4>
            <p>Wakil Ketua I</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Rm. Yohanes Sigit Heriyanto Pr.</h4>
            <p>Wakil Ketua II</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Augustinus Windu Aji</h4>
            <p>Wakil Ketua III</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Maria Yosephine Dwianapritta</h4>
            <p>Sekretaris I</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Arnoldynna Dea S.R.T</h4>
            <p>Sekretaris II</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Bernadetha Jeny Tecearini</h4>
            <p>Bendahara Umum</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>L.N. Harnaningrum</h4>
            <p>Bendahara I</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Agnes Ambar Yuliani</h4>
            <p>Bendahara II</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Martha Pranani Reni Wijayanti</h4>
            <p>Bendahara III</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Claudia Agni Cahyanti (St. Benedictus Muja Muju Utara)</h4>
            <p>KaBid. 1 Liturgi dan Peribadatan</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Maria Dewi Sukmawati M. (St. Matheas Pengok Kidul)</h4>
            <p>KaBid 2 Pewartaan dan Evangelisasi</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Bernardinus Norowisnu (St. Yusup Baciro Lama)</h4>
            <p>KaBid 3 Bidang Pelayanan Kemasyarakatan</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Agustinus Ruruh Haryata (St. Vincentius Muja Muju)</h4>
            <p>KaBid 4 Bidang Pelayanan Paguyuban dan Persaudaraan</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Yohanes Riesa Agung P. (St. Johanes Bosco Miliran Selatan)</h4>
            <p>KaBid. 5 Bidang Pelayanan Rumah Tangga</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Lucia Dwi Rini Harjanti (St. Maria Assumpta Perumka Timur)</h4>
            <p>KaBid 6 Bidang Pelayanan Penelitian dan Pengembangan</p>
          </div>
          <div class="item-dph">
            <img :src="imgprofile_placeholder">
            <h4>Christoporus Girindradarsito (St. Maria Assumpta Perumka Timur)</h4>
            <p>Koordinator Ketua Wilayah</p>
          </div>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem class="accordion" title="Wilayah" :is-open="current === 3">
      <div class="container-wilayah">
        <div class="item-wilayah">
          <router-link to="/tentang/strukturaldewanparoki/wilayah1"><img src="/wil1.png"></router-link>
        </div>
        <div class="item-wilayah">
          <router-link to="/tentang/strukturaldewanparoki/wilayah2"><img src="/wil2.png"></router-link>
        </div>
        <div class="item-wilayah">
          <router-link to="/tentang/strukturaldewanparoki/wilayah3"><img src="/wil3.png"></router-link>
        </div>
        <div class="item-wilayah">
          <router-link to="/tentang/strukturaldewanparoki/wilayah4"><img src="/wil4.png"></router-link>
        </div>
        <div class="item-wilayah">
          <router-link to="/tentang/strukturaldewanparoki/wilayah5"><img src="/wil5.png"></router-link>
        </div>
        <div class="item-wilayah">
          <router-link to="/tentang/strukturaldewanparoki/wilayah6"><img src="/wil6.png"></router-link>
        </div>
      </div>

    </AccordionItem>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  components: {
    AccordionItem,
  },
  data() {
    return {
      current: null,
    };
  },
  methods: {
    setCurrent(index) {
      this.current = index;
    },
  },
};
</script>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.accordions {
  margin: 2px 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.content img {
  max-width: 100%;
  margin-bottom: 10px;
}

.container-dph {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
}

.item-dph {
  padding: 20px;
  text-align: center;
}

.container-wilayah {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
}

.item-wilayah {
  padding: 20px;
  text-align: center;
}


</style>
