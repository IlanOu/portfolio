<!-- Card.vue -->

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['projectName', 'description', 'imageUrls', 'date', 'type', 'workplace']);
const emits = defineEmits(['openPopup', 'searchByTag', 'searchByDate', 'searchByWorkplace']);

const openPopup = () => {
    emits('openPopup', props); // Émet l'événement avec les données du projet
};

const searchByDate = () => {
    emits('searchByDate', props.date);
};
const searchByTag = () => {
    emits('searchByTag', props.type);
};
const searchByWorkplace = () => {
    emits('searchByWorkplace', props.workplace);
};


const truncateDescription = (description) => {
    const maxLength = 90; // ajustez la longueur maximale selon vos besoins
    return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
};
</script>

<template>
    <div class="card" @click="openPopup">
        <h2>{{ props.projectName }}</h2>
        <img :src="props.imageUrls[0]" alt="Project Image">
        <p class="project-description">{{ truncateDescription(props.description) }}</p>
        <div class="tags" @click.stop>
            <p v-if="props.date.length > 0" class="project-date" @click="searchByDate">{{ props.date }}</p>
            <p v-if="props.type.length > 0" class="project-type" @click="searchByTag">{{ props.type }}</p>
            <p v-if="props.workplace.length > 0" class="project-workplace" @click="searchByWorkplace">{{ props.workplace }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: var(--color-background-soft);
    border: solid 1px var(--color-border);
    border-radius: 1.5rem;
    padding: 1rem;
    transition: background-color 0.25s ease-in;
    position: relative;
    cursor: pointer;
    height: 20rem;
    overflow: hidden;
}

.card:hover {
    background-color: var(--color-background-mute);
}

img {
    max-width: 100%;
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
    img {
        width: 100%
    }
}

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
    border-radius: 0.5rem;
}

.project-type {
    background-color: var(--color-accentuation-type);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}
.project-workplace {
    background-color: var(--color-accentuation-workplace);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
}

.project-description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* Ajustez le nombre de lignes souhaité */
    white-space: normal;
}

body {
    margin: 0;
    padding: 0;
    background: black;
}
</style>
