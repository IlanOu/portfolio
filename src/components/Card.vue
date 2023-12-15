<!-- Card.vue -->

<script setup>

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
        <div class="tags" @click.stop>
            <p v-if="props.date.length > 0" class="project-date" @click="searchByDate">{{ props.date }}</p>
            <p v-if="props.type.length > 0" class="project-type" @click="searchByTag">{{ props.type }}</p>
            <p v-if="props.workplace.length > 0" class="project-workplace" @click="searchByWorkplace">{{ props.workplace }}</p>
        </div>
        <h2 class="project-name">{{ props.projectName }}</h2>
        <img :src="props.imageUrls[0]" alt="Project Image">
        <p class="project-description">{{ truncateDescription(props.description) }}</p>
    </div>
</template>

<style scoped>
.card {
    background-color: var(--color-background-soft);
    border: solid 1px var(--color-border);
    border-radius: var(--border-radius-large);
    padding: 1rem;
    transition: background-color 0.25s ease-in;
    position: relative;
    cursor: pointer;
    height: 25rem;
    overflow: hidden;
}

.card:hover {
    background-color: var(--color-background-mute);
}

.project-name{
    margin: 1rem 0;
}

img {
    max-width: 100%;
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: var(--border-radius);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1024px) {
    img {
        width: 100%;
        height: 70%;
    }
    .card {
        height: 30rem;
    }

    .tags[data-v-c6c3362a] {
        position: initial;
        margin: 0;
        display: flex;
        justify-content: space-around;
    }
}

.tags {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem;
    display: flex;
    flex-direction: row-reverse;
    gap: 0.5rem;
    font-size: 75%;
}

.project-date {
    background-color: var(--color-accentuation-date);
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius);
    color: var(--vt-c-text-dark-2);
}

.project-type {
    background-color: var(--color-accentuation-type);
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius);
    color: var(--vt-c-text-dark-2);
}
.project-workplace {
    background-color: var(--color-accentuation-workplace);
    padding: 0.25rem 0.5rem;
    border-radius: var(--border-radius);
    color: var(--vt-c-text-dark-2);
}

.project-description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    /* Ajustez le nombre de lignes souhaité */
    white-space: normal;
    margin: 1rem 0;
}

body {
    margin: 0;
    padding: 0;
    background: black;
}
</style>
