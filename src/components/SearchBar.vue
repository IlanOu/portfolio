<!-- SearchBar.vue -->
<!-- SearchBar.vue -->
<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps(['projects', 'isSearchEnabled']);
const emits = defineEmits();
const searchQuery = ref('');
const filteredProjects = ref([]);
const searchInputRef = ref(null);

const searchProjects = () => {
  const query = searchQuery.value.toLowerCase();

  if (props.projects) {
    const fieldsToSearch = ['projectName', 'description', 'date', 'type'];

    filteredProjects.value = props.projects.filter((project) => {
      const lowercaseQuery = query.toLowerCase();

      // Split la requête en mots individuels
      const searchWords = lowercaseQuery.split(/\s+/);

      // Vérifie que chaque mot de recherche est présent dans au moins l'un des champs
      return searchWords.every(word =>
        fieldsToSearch.some(field => {
          const value = project[field].toLowerCase();
          const regex = new RegExp(word, 'i');
          return regex.test(value);
        })
      );
    });

  } else {
    filteredProjects.value = [];
  }

  emits('searchProjects', filteredProjects.value);
};

const handleWindowKeyDown = (event) => {
  if (event.key !== 'Shift') {
    searchInputRef.value.focus();
  }
};

const handleFocus = () => {
  document.querySelector(".search-bar").classList.add("angles");
};

const handleBlur = () => {
  document.querySelector(".search-bar").classList.remove("angles");
};

onMounted(() => {
  window.addEventListener('keydown', handleWindowKeyDown);
});
</script>

<template>
  <div class="search-bar">
    <div class="angles-intermediaire">
      <input
        ref="searchInputRef"
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher par titre / description / date..."
        @input="searchProjects"
        @focus="handleFocus"
        @blur="handleBlur"
        :disabled="!props.isSearchEnabled"
      />
    </div>
  </div>
</template>


<style scoped>
    .search-bar input {
        background-color: var(--color-background-soft);
        border: solid 1px var(--color-border);
        border-radius: 1.5rem;
        padding: 1rem;
        width: calc(100% - 4rem);

        margin: 2rem;
        color: var(--color-text);
    }
    
    .search-bar input::placeholder {
        color: var(--color-text);
    }
    
    .search-bar input:focus {
        background-color: var(--color-background-mute);
    }
</style>
