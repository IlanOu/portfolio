<!-- SearchBar.vue -->

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps(['projects', 'isSearchEnabled']);
const emits = defineEmits();
const searchQuery = ref('');
const filteredProjects = ref([]);
const searchInputRef = ref(null);


const searchProjects = () => {
    const query = searchQuery.value.toLowerCase();

    if (props.projects) {
        const fieldsToSearch = ['projectName', 'description', 'date', 'type', 'workplace'];

        resetTagColors(fieldsToSearch)

        filteredProjects.value = props.projects.filter((project) => {
            const lowercaseQuery = query.toLowerCase();

            // Split la requête en mots individuels
            const searchWords = lowercaseQuery.split(/\s+/);

            // Vérifie que chaque mot de recherche est présent dans au moins l'un des champs
            return searchWords.every(word =>
                fieldsToSearch.some(field => {
                    
                    if (word.includes(':')) {
                        const [fieldKey, fieldValue] = word.split(':');
                        
                        if (field == fieldKey){
                            document.querySelector(":root").style.setProperty(
                                "--color-accentuation-" + field, 
                                getComputedStyle(document.documentElement).getPropertyValue("--color-tag-accentuation")
                            );
                        }
                        return field === fieldKey && project[field].toLowerCase().includes(fieldValue);
                    } else {
                        
                        const fieldSearch = ['projectName', 'description'];
                        if (fieldSearch.includes(field)){
                          const value = project[field].toLowerCase();
                          const regex = new RegExp(word, 'i');
                          return regex.test(value);
                        }
                    }
                })
            );
        });

    } else {
        filteredProjects.value = [];
    }

    emits('searchProjects', filteredProjects.value);
};

const resetTagColors = (fieldsToSearch) => {
    fieldsToSearch.forEach(field => {
        try{
            document.querySelector(":root").style.setProperty(
                "--color-accentuation-" + field, 
                document.querySelector(":root").style.getPropertyValue("--color-accentuation")
            );
        }catch{
            
        }

        
    });
}

const search = (text) => {
    searchQuery.value = text
    searchInputRef.value.focus();
    searchProjects()
};

defineExpose({
    search
})

const handleWindowKeyDown = (event) => {
    if (event.key !== 'Shift' && 
        event.key !== 'Escape' && 
        event.key !== 'Control' &&
        !(event.key === 'c' && event.ctrlKey)) {
            searchInputRef.value.focus();
    }else if (event.key === 'Escape'){
        searchInputRef.value.blur();
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
            <input ref="searchInputRef" v-model="searchQuery" type="text" placeholder="Rechercher par titre / description / date..." @input="searchProjects" @focus="handleFocus" @blur="handleBlur" :disabled="!props.isSearchEnabled" />
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

@media (max-width: 680px) {
    .search-bar input {
        width: calc(100% - 0rem);
        margin: 2rem 0;
    }
}
</style>
