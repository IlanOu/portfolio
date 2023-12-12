<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const chartData = {
    labels: ["Version 1", "Version 2"],
    datasets: [{
        label: "Versions",
        data: [0, 0],
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 5,
        pointRadius: 5,
        fill: false,
    }],
};

const chartContainer = ref(null);
let myChart; // Déclarer la variable myChart en dehors de la fonction pour y accéder lors du démontage

onMounted(() => {
    const ctx = chartContainer.value.getContext('2d');

    myChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            maintainAspectRatio: false, // Désactiver le maintien du ratio d'aspect
            aspectRatio: 0, // Forcer l'aspect ratio à 0 pour prendre la taille de la div
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display: false,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        title: function(context) {
                            return chartData.labels[context.dataIndex];
                        },
                        label: function() {
                            return '';
                        },
                    },
                },
            },
            elements: {
                point: {
                    hitRadius: 20,
                    hoverRadius: 10,
                },
            },
            onClick: (event, elements) => {
                if (elements.length > 0) {
                    const clickedVersion = chartData.labels[elements[0].index];
                    alert(`Version cliquée : ${clickedVersion}`);
                }
            },
        },
    });
});

onBeforeUnmount(() => {
    // Détruire le graphique lors du démontage du composant pour éviter les fuites de mémoire
    if (myChart) {
        myChart.destroy();
    }
});
</script>

<template>
    <div class="container">
        Versions
        <canvas ref="chartContainer" style="width: 100%; height: 100%;"></canvas>
    </div>
</template>

<style scoped>
.container {
    background-color: var(--color-background-soft);
    padding: .25rem;
    border-radius: 8px;
    border: solid 1px var(--color-border);
    color: var(--color-text);
    width: 100%;
    height: 100px;
    position: relative;
    /* Ajout de cette propriété pour permettre de positionner le canvas absolument à l'intérieur */
}

/* Ajoutez d'autres styles selon vos préférences */
</style>
