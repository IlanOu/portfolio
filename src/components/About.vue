<script setup>
import Contact from './Contact.vue';
</script>

<template>
    <div class="columns">
        <div class="about-me">

            <h1>
                Salut !
            </h1>

                <p>
                    Ravi de vous voir ici ! 
                </p>
                <p>
                    Je suis Ilan Outhier, un développeur Web basé à Annecy en France.
                </p>
                <br>
                <p>
                    En ce moment, je suis plongé dans ma deuxième année de Bachelor en Développement Web à l'école Gobelins. 
                </p>
                <p>
                    J'ai également la chance d'être en alternance chez <a href="https://www.hyperfiction.fr" target="_blank" rel="noopener noreferrer">Hyperfiction</a>, où je découvre le monde fascinant de la réalité virtuelle sur <a href="https://unity.com/fr" target="_blank" rel="noopener noreferrer">Unity</a>.
                </p>
                <br>
                <p>
                    Quand je ne suis pas en train de travailler, on peut me trouver en train d'écouter ma playlist préférée, ou en train de créer des projets d'intelligence artificielle. 
                </p>
                <p>
                    Je suis toujours curieux d'en savoir plus sur les nouvelles technologies.
                </p>
                <br>
                <p>
                    Bienvenue dans mon espace numérique, prenez votre temps pour explorer !
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

.columns>* {
    width: 50%;
}

h1 {
    margin: 2rem 0;
}

.about-me {
    padding-right: 0.5rem;
    
}
</style>