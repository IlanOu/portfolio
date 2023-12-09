<template>
    <div class="popup-overlay" @click="closePopup">
        <div class="popup-content" @click.stop>
            <h2>{{ props.project.projectName }}</h2>
            <div class="columns">
                <div class="images-gallery">
                    <div class="gallery-item" v-for="(imageUrl, index) in props.project.imageUrls" :key="index">
                        <img :src="imageUrl" alt="Project Image">
                    </div>
                </div>
                <div class="description angles-with-padding">
                    <p>{{ props.project.description }}</p>
                    <p>Date: {{ props.project.date }}</p>
                </div>
            </div>
            <!-- Ajoutez d'autres détails si nécessaire -->
        </div>
    </div>
</template>
  
<script setup>
    import {
        defineProps,
        defineEmits,
        onMounted
    } from 'vue';
    const props = defineProps(['project']);
    const emits = defineEmits(['closePopup']);
    const closePopup = () => {
        emits('closePopup');
    };
    onMounted(() => {
        const imagesGallery = document.querySelector(".images-gallery");
        if (imagesGallery) {
            if (props.project.imageUrls.length < 3) {
                imagesGallery.style.columnCount = props.project.imageUrls.length;
            }
        }
    });
</script>
  
<style scoped>
    h2 {
        margin-bottom: 1rem;
        text-decoration: underline;
    }
    .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popup-content {
        background-color: var(--color-background-soft);
        color: var(--color-text);
        padding: 1rem;
        border-radius: 1.5rem;
        border: solid 1px var(--color-border);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        max-width: 80%;
        text-align: center;
        width: 80%;
        height: 80%;
        overflow: hidden visible;
    }
    .gallery-item img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .description {
        position: relative;
        width: 30%;
        text-align: justify;
    }
    .columns {
        display: flex;
        justify-content: space-evenly;
    }
    .images-gallery {
        width: 65%;
        column-count: 3;
    }
    @media (max-width: 1024px) {
        .columns {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-evenly;
            align-items: center;
        }
        .images-gallery {
            width: 65%;
            column-count: 1;
        }
    }
</style>