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
            <p>
                Jl. Melati Wetan No.47,
                Baciro, Kec. Gondokusuman, Kota Yogyakarta,
                Daerah Istimewa Yogyakarta 55225, Indonesia
            </p> 
        </div>
        <div>
            <h2>Contact Us</h2>
            <a class="" role="button">
                <i class="bi bi-instagram"></i>
                gkr.baciro
            </a>
        </div>
    </div>
</template>

<style scoped>
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
        fill: 1 1 auto;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 8rem !important;
    }
    .flex{
        display: flex;
        fill: 1 1 auto;
        align-items: center;
    }
</style>
