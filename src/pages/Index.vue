<script setup>
import { reactive } from 'vue';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};

const images = {
  galeri1: '/hadroh.png',
  galeri2: '/Paroki-Kristus-Raja 1.png',
  galeri3: '/pingkel-800x445.png',
}

const text = "asdkjalskjd";
// define your modules list here
const modules = [Navigation, Pagination, Scrollbar, A11y];

const myObject = reactive(
  [{
    artikel: {
      title: 'SARASEHAN LITURGI “Ekaristi Misteri Untuk Dihayati”',
      desc: 'Kurban Ekaristi menghadirkan bukan saja misteri sengsara dan wafat Juru-selamat, tetapi juga misteri kebangkitan-Nya, yang memahkotai pengurbanan-Nya. Adalah sebagai Seorang yang hidup dan bangkit, Kristus dapat menjadi Ekaristi, “roti kehidupan” (Yoh 6:35, 48), “roti yang hidup” (Yoh 6:51). (EE 14). Ekaristi menjadi daya menyelamatkan dari kurban ini baru terwujud secara penuh tatkala kita menyambut tubuh dan darah Tuhan dalam komuni.',
      publishedAt: 'Kamis, 4 Agustus 2022',
      image: '/berita1.png',
    }
  },
  {
    artikel: {
      title: 'Menuju DOENIA OMK #7',
      desc: 'Doenia OMK (DO) adalah kegiatan tahunan OMK Paroki Baciro yang sudah dilaksanakan sejak tahun 2015. Kegiatan ini awalnya bertujuan untuk sarana bertemunya semua OMK yang tinggal di wilayah Paroki Baciro, baik pribumi maupun pendatang. Selain itu, DO juga diadakan untuk melakukan regenerasi yang diseleksi melalui dinamika selama persiapan DO yang rata-rata dinamika persiapannya berjalan selama 3 bulan.',
      publishedAt: 'Kamis, 4 Agustus 2022',
      image: '/berita2.png',
    }
  }])
</script>

<template>
  <!-- <input type="text" name="search" id="search"> -->
  <section class="gallery">
    <swiper :modules="modules" :centeredSlides="true" :space-between="50" :pagination="{
      dynamicBullets: true,
    }" :loop="true" :slidesPerView="1" navigation>
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="" height="590">
      </swiper-slide>
    </swiper>
  </section>
  <div class="container">
    <section class="berita">
      <h2 class="text-xl"><span class="text-red">BERITA</span> TERKINI</h2>
      <div class="artikel-wrapper">
        <div class="artikel" v-for="(value, index) in myObject" :key="index">
          <div class="image-wrapper">
            <img :src="value.artikel.image" loading="lazy" alt="Galeri" height="440" class="foto rounded-xl">
          </div>
          <div class="content-wrapper">
            <p class="date">{{ value.artikel.publishedAt }}</p>
            <h3>{{ value.artikel.title }}</h3>
            <p>{{ value.artikel.desc }} </p>
            <a href="#" class="button-artikel">
              <span>Baca Selengkapnya</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M12.0418 9.01204L4.9585 9.01204M12.0418 9.01204L9.2085 11.8454M12.0418 9.01204L9.2085 6.17871"
                  stroke="currentColor" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg></a>
          </div>
        </div>
      </div>
    </section>
    <section class="jadwal-misa">
      <h2 class="text-xl"><span class="text-red">JADWAL</span> MISA</h2>
      <div class="jadwal-wrapper">
        <div class="harian">
          <h3 class="text-red text-xl">Misa Harian</h3>
          <p class="text-xl gray">Hari Senin - Kamis, Sabtu</p>
          <p>Pukul 05.30 (Offline)</p>
          <p>Pukul 18.30 (Online & Offline)</p>
          <p>diawali dengan Doa Rosario pukul 18.00</p>
          <p class="text-xl gray">Hari Jumat</p>
          <p>Pukul 05.30 (Offline)</p>
          <p>Misa & Adorasi pukul 18.30 (Online & Offline)</p>
          <p>diawali dengan Doa Rosario pukul 18.00</p>
        </div>
        <div class="mingguan">
          <h3 class="text-red text-xl">Misa Mingguan</h3>
          <p class="text-xl gray">Hari Sabtu</p>
          <p>Pukul 18.30 (Online & Offline)</p>
          <p>diawali dengan Doa Rosario pukul 18.00</p>
          <p class="text-xl gray">Hari Minggu Pagi</p>
          <p>Pukul 08.00 (Online & Offline)</p>
          <p>Pukul 10.00 (Offline)</p>
          <p class="text-xl gray">Hari Minggu Sore</p>
          <p>Pukul 17.00 (Offline)</p>
          <p>Pukul 18.30 (Online & Offline)</p>
          <p>diawali dengan Doa Rosario pukul 18.00</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  /* width: 100vw; */
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  max-width: 1440px;
}

section {
  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 60px;

    span {
      font-weight: 700;
    }
  }
}

.text-xl {
  font-size: 28px;
}



section.jadwal-misa {
  margin-bottom: 200px;

  .jadwal-wrapper {
    display: flex;
    justify-content: center;
    gap: 24px;

    .harian {
      text-align: right;
    }

    .harian,
    .mingguan {

      h3,
      .text-xl {
        font-weight: 700;
        margin-top: 24px;
      }

      p {
        margin: 0;
        color: #767676;
      }
    }

  }

}

section.gallery {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  div.swiper-slide {
    // padding-inline: 20px;

    img {
      width: 100%;
      object-fit: cover;
    }

  }

  /* div.swiper.swiper-button-next, div.swiper.swiper-button-prev {
    &::after{
      font-size: 20px !important;
    }
    background-color: #678A83 !important;
    border-radius: 50px !important;
  } */
}

section.berita {

  .artikel {
    margin-bottom: 70px;
    display: flex;
    align-items: center;
    gap: 32px;

    h3 {
      margin-block: 10px;
      font-size: 32px;
      color: #9E2222;
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 10px;
    }

    .image-wrapper,
    .content-wrapper {
      width: 50%;

      @media (max-width: 768px) {
        width: 100%;
        padding-inline: 20px;
      }

      .button-artikel {
        color: #0075FF;
        font-style: italic;
        display: flex;
        align-items: center;
        text-decoration: none;

        &:hover {
          color: #035ec5;
          font-weight: 400;
        }
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    .date {
      color: #827C7C;
      font-size: 16px;
      margin: 0;
    }

    img.foto {
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
}

.text-red {
  color: #9E2222;
}
</style>
