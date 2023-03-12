<script setup>
    import { ref } from 'vue'
    import image from "/logo_paroki_gambar.png" 

    defineProps({
    msg: String,
    })

    const count = ref(0)
</script>

<template>
    <div id="container-footer" class="bg-red">
        <div>
            <div id="logo-gereja" class="flex">
                <img :src="image" alt="">
                <div id="logo-text">
                    <h2 class="bold">Gereja Kristus Raja</h2>
                    <h2 class="bold">Paroki Baciro</h2>
                </div>
            </div>
            <p class="alamat">
                Jl. Melati Wetan No.47, Baciro, Kec. Gondokusuman
            </p> 
            <p class="alamat">
                Kota Yogyakarta, Daerah Istimewa Yogyakarta 55225, Indonesia
            </p>
        </div>
        <div class="vh100">
            <h2 class="no-mt">Contact Us</h2>
            <div class="flex-row">
                <a class="" >
                    <i class="bi bi-instagram"></i>
                    gkr.baciro
                </a>
                <a class="" >
                    <i class="bi bi-youtube"></i>
                    Crembo Media
                </a>
                <a class="" >
                    <i class="bi bi-envelope"></i>
                    webparokibaciro@gmail.com
                </a>
                <a class="" >
                    <i class="bi bi-telephone"></i>
                    (0274) 564414
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .vh100{
        height: 100%;
    }
    .no-mt{
        margin-top: 0;
    }
    a:hover{
        cursor: pointer;

    }
    .alamat{
        margin-top: 0;
        margin-bottom: 0;
    }
    #container-footer>div>p:nth-child(2){
        margin-top: 1.5rem !important;
    }
    .bold{
        font-weight: bold;
    }
    #logo-text>h2{
        margin-bottom: 0;
        margin-top: 0;
        margin-left: 1.5rem;
    }
    #logo-gereja>img{
        width: 68px;
    }
    #container-footer{
        display: flex;
        /* fill: 1 1 auto; */
        align-items: center;
        justify-content: space-between;
        padding: 2rem 8rem !important;
    }
    .flex{
        display: flex;
        fill: 1 1 auto;
        align-items: center;
    }
    .flex-row{
        display: flex;
        flex-direction: column;
        align-items: stretch
    }
</style>
