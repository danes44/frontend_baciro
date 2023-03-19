
<script setup>
    import { ref } from 'vue'
    import image from "/PengurusGerejadanPapaMiskin.png" 

    defineProps({
    msg: String,
    })

    const count = ref(0)
</script>

<template>
  <div class="accordion">
    <AccordionItem title="Pengurus Gereja dan Papa Miskin" :is-open="current === 1">
      <div class="content">
        <img :src="image"/>
        <p>Pengurus PGPM terdiri dari Ketua, Sekretaris, dan Bendahara, serta dua anggota. Ketua dijabat Ex Oficio oleh Ketua Dewan Pastoral Paroki, Sekretaris adalah salah satu dari sekretaris DPPH, Bendahara adalah Bendahara Umum DPPH, dan anggota adalah Wakil Ketua II DPPH dan Ketua Bidang Sarpras DPPH.</p>
      </div>
    </AccordionItem>
    <AccordionItem title="Dewan Paroki Harian & Dewan Paroki Inti" :is-open="current === 2">
      <div class="content">
        <p>Dewan Paroki adalah badan pastoral-evangelisasi yang di dalamnya para pastor bersama-sama dengan wakil-wakil umat melaksanakan tugas dan panggilan untuk terlibat dalam tritugas Kristus, yakni menguduskan, mewartakan dan menggembalakan. Dewan Paroki terdiri dari Dewan Paroki Harian dan Dewan Paroki Inti.</p>
        <h2>PENGURUS DEWAN PAROKI HARIAN</h2>
        <h4><i>Tahun 2022 - 2025</i></h4>
        <div class="ImageDewan">

        </div>
      </div>
    </AccordionItem>
    <AccordionItem title="Wilayah" :is-open="current === 3">
      <div class="content">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </AccordionItem>
  </div>
</template>

<script>
import AccordionItem from './AccordionItem.vue';

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
</style>
