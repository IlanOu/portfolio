<template>
    <div class="popup-overlay" @click="closePopup">
        <div class="popup-content" @click.stop>
            <div class="date-tag">{{ props.project.date }}</div>
            <h2>{{ props.project.projectName }}</h2>
    
            <div class="columns">
                <div class="galleries">
                    <!-- Ajout des boutons Images / Videos -->
                    <div class="buttons">
                        <button @click="showImages" :class="{ active: displayImages }" class="button">Images</button>
                        <button @click="showVideos" :class="{ active: displayVideos, disabled: videoListEmpty }" class="button">Vidéos</button>
                    </div>
    
                    <!-- Videos au-dessus des images -->
                    <div v-if="displayVideos" class="videos-gallery">
                        <div class="video-item" v-for="(videoEmbed, index) in props.project.videoUrls" :key="'video-' + index">
                            <iframe :src="videoEmbed" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>

                    <!-- Galerie d'images à droite des vidéos -->
                    <div v-if="displayImages" class="images-gallery">
                        <div class="gallery-item" v-for="(imageUrl, index) in props.project.imageUrls" :key="index">
                            <img :src="imageUrl" alt="Project Image">
                        </div>
                    </div>
                </div>
    
                <!-- Description à droite des images -->
                <div class="description angles-with-padding">
                    <p>{{ props.project.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps(['project']);
const emits = defineEmits(['closePopup']);

const closePopup = () => {
    emits('closePopup');
};

// Ajout de la logique pour afficher les images ou les vidéos
const displayImages = ref(true);
const displayVideos = ref(false);
const videoListEmpty = ref(props.project.videoUrls.length === 0);

const showImages = () => {
    displayImages.value = true;
    displayVideos.value = false;
};

const showVideos = () => {
    if (props.project.videoUrls && props.project.videoUrls.length > 0) {
        displayImages.value = false;
        displayVideos.value = true;
    }
};

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
    position: relative;
}

.columns {
    display: flex;
    justify-content: space-evenly;
}

.galleries {
    width: 65%;
}

.buttons{
    display: flex;
    justify-content: space-around;
}

.button{
    width: 40%;
    margin-bottom: 3rem;
    background-color: var(--color-accentuation-soft);
    padding: 0.75rem 0.5rem;
    border-radius: 0.5rem;
    border: solid 1px var(--color-border);
    color:  var(--color-text) ;
    font-size: 0.8rem;

    cursor: pointer;

    transition: background-color 0.25s ease-in;
}

.button:hover{
    background-color: var(--color-background-mute);
}

.button.active {
    background-color: var(--color-accentuation); /* Couleur active */
    color: var(--color-text); /* Couleur du texte active */
}

.button.disabled {
    background-color: var(--color-disabled); /* Couleur pour le bouton désactivé */
    cursor: not-allowed;
}

/* -------------------------------------------------------------------------- */
/*                                   Videos                                   */
/* -------------------------------------------------------------------------- */

.videos-gallery {
    column-count: 2;
}

.video-item iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    border-radius: 8px;
}

/* -------------------------------------------------------------------------- */
/*                                   Images                                   */
/* -------------------------------------------------------------------------- */

.images-gallery {
    column-count: 3;
    max-height: 100%;
   
    max-height: calc(100% - 2rem); /* Ajuste la hauteur maximale de la galerie d'images */
    overflow-y: auto;
}

.gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

/* -------------------------------------------------------------------------- */
/*                                 Description                                */
/* -------------------------------------------------------------------------- */

.description {
    position: sticky;
    top: 1rem;
    /* position: relative; */
    width: 30%;
    text-align: justify;
    height: fit-content;
}

/* -------------------------------------------------------------------------- */
/*                                    Date                                    */
/* -------------------------------------------------------------------------- */

.date-tag {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem;
    background-color: var(--color-accentuation-date);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    color: var(--color-text);
    /* Utilisez la couleur du texte définie dans votre thème */
    font-size: 0.8rem;
}

@media (max-width: 1024px) {
    .columns {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-evenly;
        align-items: center;
    }
    .images-gallery {
        column-count: 1;
    }

    .videos-gallery {
        column-count: 1;
    }

    .description {
        position: relative;
        width: 30%;
        text-align: justify;
        height: fit-content;
        width: 100%;
        margin: 1rem;
    }
}
</style>