<template>
    <div :class="{ 'container': true, 'show': showArrow }" @click="scrollToTop">
        <div class="icon-image">
            ↑
        </div>
    </div>
</template>




<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';


    const showArrow = ref(false);

    // Fonction pour mettre à jour l'état de la flèche en fonction du défilement
    const handleScroll = () => {
        showArrow.value = window.scrollY > 0;
    };

    // Écouter l'événement de défilement lors de la création du composant
    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    // Retirer l'écouteur d'événement lorsque le composant est détruit
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Pour une animation en douceur
        });
    };
</script>



<style scoped>

    .container{
        position: fixed;
        bottom: 1rem;
        right: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 3rem;
        height: 3rem;
        
        background-color: var(--vt-c-black-soft-transparent);
        border: solid 1px var(--color-border);
        border-radius: var(--border-radius-large);

        opacity: 0;
        transition: opacity 0.3s ease-in-out, background-color 0.25s ease-in;
        
        user-select: none;

        cursor: pointer;
    }

    .container.show {
        opacity: 1;
    }

    .container:hover {
        background-color: var(--color-background-mute);
    }

    .icon-image{
        font-size: 1rem;
        pointer-events: none;
    }

</style>