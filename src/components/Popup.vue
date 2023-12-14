<template>
    <div class="popup-overlay" @click="closePopup">
        <div class="popup-content" @click.stop>

            <div class="tags">
                <p v-if="props.project.date.length > 0" class="project-date" @click="searchByDate">{{ props.project.date }}</p>
                <p v-if="props.project.type.length > 0" class="project-type" @click="searchByTag">{{ props.project.type }}</p>
                <p v-if="props.project.workplace.length > 0" class="project-workplace" @click="searchByWorkplace">{{ props.project.workplace }}</p>
            </div>
            <h2 class="projectName">{{ props.project.projectName }} - v{{  props.project.version  }}</h2>

            <div class="galleries">
                <!-- Ajout des boutons Images / Videos -->
                <div class="buttons">
                    <button @click="showImages" :class="{ active: displayImages }" class="button">Images</button>
                    <button @click="showVideos" :class="{ active: displayVideos, disabled: videoListEmpty }" class="button">Vidéos</button>
                </div>

                <div class="sliderContainer">
                    <input
                        type="range"
                        id="columnCount"
                        min="1"
                        max="4"
                        v-model="columnCount"
                        class="slider"
                    />
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

            <div class="versions">
                <Versions @change-interface="handleChangeInterface" :project="props.project"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted, watchEffect, onUpdated } from 'vue';
import Versions from './Versions.vue';

const props = defineProps(['project']);
const emits = defineEmits(['closePopup', 'searchByDate', 'searchByTag', 'searchByWorkplace', 'change-interface']);
const columnCount = ref(3);

const searchByDate = () => {
    emits('searchByDate', props.project.date);
};
const searchByTag = () => {
    emits('searchByTag', props.project.type);
};
const searchByWorkplace = () => {
    emits('searchByWorkplace', props.project.workplace);
};

const closePopup = () => {
    emits('closePopup');
};

const updateColumnCount = () => {
    document.documentElement.style.setProperty('--column-count', columnCount.value);
};


// Ajout de la logique pour afficher les images ou les vidéos
const displayImages = ref(true);
const displayVideos = ref(false);
let videoListEmpty = ref(props.project.videoUrls.length === 0);

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

const handleChangeInterface = (id) => {
    emits('change-interface', `${id}`);
}

// Appeler la méthode lorsque le composant est monté
onMounted(() => {
    updateColumnCount();
});

onUpdated(()=>{
    videoListEmpty.value = props.project.videoUrls.length === 0;
})

// Appeler la méthode à chaque fois que columnCount est modifié
watchEffect(() => {
    updateColumnCount();
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
    border-radius: var(--border-radius-large);
    border: solid 1px var(--color-border);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    max-width: 80%;
    text-align: center;
    width: 80%;
    height: 80%;
    overflow: hidden visible;
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
        "tags tags"
        "projectName projectName"
        "galleries description"
        "versions versions";
    gap: 1rem;
}

.tags {
    grid-area: tags;
}

.projectName {
    grid-area: projectName;
}

.galleries {
    grid-area: galleries;
    width: 100%;
}

.description {
    grid-area: description;
}

.versions {
    grid-area: versions;
    justify-self: end;
}

.buttons {
    display: flex;
    justify-content: space-around;
}

.button {
    width: 40%;
    margin-bottom: 1rem;
    background-color: var(--color-accentuation-soft);
    padding: 0.75rem 0.5rem;
    border-radius: var(--border-radius);
    border: solid 1px var(--color-border);
    color: var(--color-text);
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.25s ease-in;
}

.button:hover {
    background-color: var(--color-background-mute);
}

.button.active {
    background-color: var(--color-accentuation);
    color: var(--color-text);
}

.button.disabled {
    background-color: var(--color-disabled);
    cursor: not-allowed;
}

/* -------------------------------------------------------------------------- */

/*                                   Videos                                   */

/* -------------------------------------------------------------------------- */

.videos-gallery {
    column-count: var(--column-count);
}

.video-item iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    border-radius: var(--border-radius);
}

/* -------------------------------------------------------------------------- */

/*                                   Images                                   */

/* -------------------------------------------------------------------------- */

.images-gallery {
    column-count: var(--column-count);
    overflow-y: auto;
}

.gallery-item img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
}

/* -------------------------------------------------------------------------- */

/*                                 Description                                */

/* -------------------------------------------------------------------------- */

.description {
    position: sticky;
    top: 1rem;
    /* width: 30%; */
    text-align: justify;
    height: fit-content;
    
}

.versions{
    position: sticky;
    bottom: 0rem;
    right: 0rem;
    width: calc(30% + 2rem);
}

/* -------------------------------------------------------------------------- */

/*                                    Date                                    */

/* -------------------------------------------------------------------------- */

.tags {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem;
    display: flex;
    flex-direction: row-reverse;
    gap: 0.25rem;
    font-size: 75%;
}

.project-date {
    background-color: var(--color-accentuation-date);
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    color: var(--vt-c-text-dark-2);
}

.project-type {
    background-color: var(--color-accentuation-type);
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    color: var(--vt-c-text-dark-2);
}

.project-workplace {
    background-color: var(--color-accentuation-workplace);
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    color: var(--vt-c-text-dark-2);
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

    .projectName{
        margin: 0;
    }

    .description {
        position: initial;
        text-align: justify;
        height: fit-content;
        width: calc(100% - 2rem);
        margin: 0;
    }

    .tags {
        position: initial;
        margin: 0;
        display: flex;
        justify-content: space-around;
    }

    .versions{
        position: initial;
        width: 100%;
    }

    .sliderContainer {
        display: none !important;
    }


    .popup-content[data-v-ac836eac] {
        max-width: 90%;
        width: 90%;
        height: 80%;
        gap: 2rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr auto;
        grid-template-areas:
            "tags"
            "projectName"
            "description"
            "galleries"
            "versions";
    }


    .images-gallery{
        display: grid;
        gap: 1rem;
    }
}



/* -------------------------------------------------------------------------- */
/*                            Input range : slider                            */
/* -------------------------------------------------------------------------- */
.sliderContainer{
    display: flex;
    flex-direction: row-reverse;
    height: 2rem;
    margin-bottom: 1rem;
}



/*********** Baseline, reset styles ***********/
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 7rem;
}

/* Removes default focus */
input[type="range"]:focus {
  outline: none;
}

/******** Chrome, Safari, Opera and Edge Chromium styles ********/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
  background-color: var(--color-background);
  border-radius: var(--border-radius-large);
  height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  margin-top: -4px; /* Centers thumb on the track */
  background-color: var(--color-accentuation);
  border-radius: var(--border-radius-large);
  height: 1rem;
  width: 1rem;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: none;
}

/*********** Firefox styles ***********/
/* slider track */
input[type="range"]::-moz-range-track {
  background-color: var(--color-background);
  border-radius: var(--border-radius-large);
  height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
  background-color: var(--color-accentuation);
  border: none; /*Removes extra border that FF applies*/
  border-radius: var(--border-radius-large);
  height: 1rem;
  width: 1rem;
}

input[type="range"]:focus::-moz-range-thumb{
  outline: none;
}




</style>