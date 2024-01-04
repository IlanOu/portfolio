<script setup>
import Contact from './Contact.vue';

</script>

<template>

    <div class="columns">
        <div>
            <p>
                Bonjour !
            </p>
            <p>
            Je suis Ilan Outhier
            </p>
        </div>
        <Contact/>
    </div>

</template>

<style scoped>

    .columns {
        padding: 0 2rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .columns > * {
        width: 50%;
    }

</style>