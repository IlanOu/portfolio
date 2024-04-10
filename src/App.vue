<script setup>
import { ref, onMounted } from 'vue';
import Card from './components/Card.vue';
import Popup from './components/Popup.vue';
import Light from './components/Light.vue';
import SearchBar from './components/SearchBar.vue';
import Main from './components/Main.vue';
import ArrowUp from './components/ArrowUp.vue';
import About from './components/About.vue';

// État réactif
const isPopupOpen = ref(false);
const selectedProject = ref(null);
const projects = ref([]);
const filteredProjects = ref([]);
const searchBarRef = ref(null);
let randomIndex = ref(0);

// Hook onMounted pour charger les données initiales
onMounted(async () => {
    // Chargement des données des projets depuis un fichier JSON
    const response = await fetch('./src/projects.json');
    projects.value = await response.json();

    // Filtrer et trier pour obtenir une liste unique par projectNumber
    const uniqueProjects = getUniqueProjects(projects.value);
    filteredProjects.value = uniqueProjects;
});

// Handlers et fonctions utilitaires
const openPopupHandler = (project) => {
    isPopupOpen.value = true;
    selectedProject.value = project;
    document.body.classList.add('no-scroll');
};

const closePopupHandler = () => {
    isPopupOpen.value = false;
    selectedProject.value = null;
    document.body.classList.remove('no-scroll');
};

const handleSearch = (text, project) => {
    if (getUniqueProjects(filteredProjects.value).includes(project)) {
        const latestProjects = getLatestProjects(projects.value);
        searchBarRef.value.search(text, latestProjects);
    }
};

const getLatestProjects = (allProjects) => {
    const uniqueProjects = getUniqueProjects(allProjects);
    return uniqueProjects;
};

const updateFilteredProjects = (filtered) => {
    filteredProjects.value = getUniqueProjects(filtered);

    if (filteredProjects.value.length > 0){
        randomIndex = Math.floor(Math.random() * messages.length);
    }
};

const handleChangeInterface = (id) => {
    const project = findProjectById(id);
    closePopupHandler();
    openPopupHandler(project);
};

const findProjectById = (id) => {
    for (const project of projects.value) {
        if (project.projectId == id) {
            return project;
        }
    }
    return null;
};

const getUniqueProjects = (allProjects) => {
    const sortedProjects = allProjects.slice().sort((a, b) => {
        if (a.projectNumber === b.projectNumber) {
            return b.version - a.version;
        }
        return a.projectNumber - b.projectNumber;
    });

    const uniqueProjects = [];
    for (const project of sortedProjects) {
        const existingProject = uniqueProjects.find(p => p.projectNumber === project.projectNumber);
        if (!existingProject) {
            uniqueProjects.push(project);
        }
    }

    return uniqueProjects;
};

const messages = [
  "Aucun projet n'a été trouvé... 😕",
  "Apparement je n'ai pas encore fais ce projet... ",
  "Hmm, pas de chance, pas de projets à voir...",
  "Je ne vois pas de quoi tu parles... 🤔",
  "Ce n'est pas moi qui est fait ce projet... 😶",
  "Ce projet est peut-être en train d'être développé, qui sait ? 🙃",
  "C'est pas très clair... 🤔",
  "Je crois que tu as mal écrit...",
  "Il semblerait que ce projet n'existe pas...",
  "Veuillez réessayer...",
  "Erreur 404 : projet non existant"
];

const getRandomMessage = () => {
    return messages[randomIndex];
};
</script>

<template>
    <!-- Composant Page principal -->
    <Main/>
    <ArrowUp/>

    <!-- Barre de recherche -->
    <SearchBar :isSearchEnabled="!isPopupOpen" :projects="getUniqueProjects(projects)" @searchProjects="updateFilteredProjects" ref="searchBarRef"/>


    <!-- Galerie de projets -->
    <div class="gallery">

        <!-- Cartes de projets -->
        <Card v-for="project in filteredProjects" 
        :key="project.projectNumber" 
        :projectName="project.projectName" 
        :description="project.description" 
        :imageUrls="project.imageUrls" 
        :date="project.date" 
        :type="project.type"
        :workplace="project.workplace"
        @openPopup="() => openPopupHandler(project)"
        @searchByTag="() => handleSearch(`type:${project.type}`, project)" 
        @searchByDate="() => handleSearch(`date:${project.date}`, project)"
        @searchByWorkplace="() => handleSearch(`workplace:${project.workplace}`, project)"/>

        <!-- Message si aucun projet n'est trouvé -->
        <Transition>
            <p v-if="filteredProjects.length === 0">{{ getRandomMessage() }}</p>
        </Transition>
        
        <!-- Popup conditionnel -->
        <Transition>
            <Popup v-if="isPopupOpen" 
                   :project="selectedProject" 
                   @closePopup="closePopupHandler"
                   @searchByTag="() => handleSearch(`type:${selectedProject.type}`, selectedProject)" 
                   @searchByDate="() => handleSearch(`date:${selectedProject.date}`, selectedProject)"
                   @searchByWorkplace="() => handleSearch(`workplace:${selectedProject.workplace}`, selectedProject)"
                   @change-interface="handleChangeInterface"/>

        </Transition>
    </div>
    
    
    <hr>
    <About/>
    
    
    
    <!-- Composant Light -->
    <Light/>
</template>

<style scoped>


.v-enter-active, .v-leave-active {
  transition: all 0.25s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.gallery {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
    padding: 0 2rem;
    position: relative;
}

@media (max-width: 1024px) {
    .gallery {
        padding: 0;
        grid-gap: 3em;
    }
}

hr {
    margin: 4rem 2rem;
    border: none;
    border-top: 1px solid var(--color-border);
}
</style>
