<!-- App.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Card from './components/Card.vue';
import Popup from './components/Popup.vue';
import Light from './components/Light.vue';
import SearchBar from './components/SearchBar.vue';
import Main from './components/Main.vue';

const isPopupOpen = ref(false);
const selectedProject = ref(null);
const projects = ref([]);
const filteredProjects = ref([]);
const bodyOverflow = ref(false);

const openPopupHandler = (project) => {
  isPopupOpen.value = true;
  selectedProject.value = project;
  document.body.classList.add('no-scroll');
};

const closePopupHandler = () => {
  isPopupOpen.value = false;
  selectedProject.value = null;
  bodyOverflow.value = false;
  document.body.classList.remove('no-scroll');
};

// Fonction pour mettre à jour les projets filtrés
const updateFilteredProjects = (filtered) => {
  filteredProjects.value = filtered;
};

onMounted(async () => {
  const response = await fetch('/src/projects.json');
  projects.value = await response.json();

  filteredProjects.value = projects.value;
});
</script>

<template>
  <Main/>
  <!-- Assurez-vous de passer correctement la propriété projects à SearchBar -->
  <Navbar/>
  <SearchBar :isSearchEnabled="!isPopupOpen" :projects=projects @searchProjects="updateFilteredProjects" />

  <div class="galery">
    <Card v-for="project in filteredProjects" :key="project.projectNumber"
          :projectName="project.projectName" 
          :description="project.description" 
          :imageUrls="project.imageUrls"
          :date="project.date" 
          @openPopup="() => openPopupHandler(project)" 
    />
    <p v-if="filteredProjects.length==0">Aucun projet n'a été trouvé...</p>
    <Popup v-if="isPopupOpen" :project="selectedProject" @closePopup="closePopupHandler" />
  </div>

  <Light/>
</template>

<style scoped>
.galery {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  /* Ajout de l'espacement entre les éléments de la grille */
  padding: 0 2rem;
  position: relative;
}
</style>
