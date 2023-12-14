<script setup>
import { ref, onMounted, defineEmits, onBeforeUnmount, defineProps } from 'vue';

// Déclaration des variables globales
let myChart;
let data;

// Définition des émissions et propriétés
const emits = defineEmits(['change-interface']);
const props = defineProps(['project']);

// Références réactives pour les données du graphique
const chartData = ref({
    labels: [],
    datasets: [{
        label: "Versions",
        data: [],
        pointBackgroundColor: 'rgba(84, 39, 102, 1)',
        borderColor: 'rgba(148, 69, 179, 1)',
        borderWidth: 5,
        pointRadius: 5,
        fill: false,
    }],
});

// Référence pour le conteneur du graphique
const chartContainer = ref(null);



// Hook onMounted pour initialiser le graphique après le montage du composant
onMounted(async () => {
    try {
        // Chargement des données depuis un fichier JSON
        await loadData();

        // Initialisation des données du graphique
        initializeChartData();

        // Initialisation du graphique
        initializeChart();
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
});

// Fonction pour charger les données depuis un fichier JSON
const loadData = async () => {
    const response = await fetch('./src/projects.json');
    data = await response.json();
};

// Fonction pour initialiser les données spécifiques du projet pour le graphique
const initializeChartData = () => {
    const currentProjectData = props.project;

    data.forEach(project => {
        if (project.projectNumber === currentProjectData.projectNumber) {
            const versionLabel = `${project.projectName} - Version ${project.version}`;
            chartData.value.labels.push(versionLabel);
            chartData.value.datasets[0].data.push(0);
        }
    });
};



// Fonction pour initialiser le graphique
const initializeChart = () => {
    const ctx = chartContainer.value.getContext('2d');
    myChart = new Chart(ctx, getChartConfig());

    // Réinitialisation des styles des points
    resetPointStyles();

    const currentProjectData = props.project;

    // Filtrer les versions du projet actuel
    const versions = data.filter(project => project.projectNumber === currentProjectData.projectNumber);

    // Mettre à jour le style du dernier point
    if (versions.length > 0) {
        const lastIndex = chartData.value.labels.lastIndexOf(`${versions[versions.length - 1].projectName} - Version ${versions[versions.length - 1].version}`);
        if (lastIndex !== -1) {
            updateSelectedPointStyle(lastIndex);
        }
    }
    myChart.update();
};



// Fonction pour obtenir la configuration du graphique
const getChartConfig = () => {
    return {
        type: 'line',
        data: chartData.value,
        options: {
            maintainAspectRatio: false,
            scales: { x: { display: false }, y: { display: false } },
            plugins: {
                legend: { display: false },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        title: context => chartData.value.labels[context.dataIndex],
                        label: () => '',
                    },
                },
            },
            elements: { point: { hitRadius: 7, hoverRadius: 10} },
            onClick: handleChartClick,
        },
    };
};

// Gestionnaire de clic sur le graphique
const handleChartClick = (event, elements) => {
    if (elements.length > 0) {
        const selectedIndex = elements[0].index;
        const clickedVersion = chartData.value.labels[selectedIndex];
        const projectId = findProjectIdByVersion(clickedVersion);

        if (projectId !== null) {
            // Émission de l'ID du projet
            emitProjectId(projectId);
        }

        // Réinitialisation des styles des points
        resetPointStyles();
        // Mise à jour du style du point sélectionné
        updateSelectedPointStyle(selectedIndex);
        myChart.update();
    }
};

// Fonction pour réinitialiser les styles des points
const resetPointStyles = () => {
    myChart.data.datasets[0].pointBackgroundColor = Array(myChart.data.labels.length).fill('rgba(84, 39, 102, 1)');
    myChart.data.datasets[0].pointRadius = Array(myChart.data.labels.length).fill(5);
};

// Fonction pour mettre à jour le style du point sélectionné
const updateSelectedPointStyle = index => {
    myChart.data.datasets[0].pointBackgroundColor[index] = 'rgba(84, 39, 102, 1)';
    myChart.data.datasets[0].pointRadius[index] = 10;
};

// Hook onBeforeUnmount pour détruire le graphique avant le démontage du composant
onBeforeUnmount(() => {
    if (myChart) {
        myChart.destroy();
    }
});

// Fonction pour trouver l'ID du projet à partir de l'étiquette de version
const findProjectIdByVersion = versionLabel => {
    const versionParts = versionLabel.split(' - ');
    if (versionParts.length === 2) {
        const projectName = versionParts[0];
        const versionNumber = versionParts[1].replace('Version ', '');
        const project = data.find(proj => proj.projectName == projectName && proj.version == versionNumber);
        return project ? project.projectId : null;
    }
    return null;
};

// Fonction pour émettre l'ID du projet
const emitProjectId = projectId => {
    emits('change-interface', `${projectId}`);
};
</script>

<template>
    <!-- Conteneur du graphique -->
    <div class="container">
        <!-- Titre du graphique -->
        <h3 class="title">Voir les versions du projet</h3>
        <!-- Canvas pour afficher le graphique -->
        <canvas ref="chartContainer" class="graph" style="width: 100%; height: 100%;"></canvas>
    </div>
</template>

<style scoped>
.container {
    background-color: var(--color-background-soft);
    padding: 0.25rem;
    border-radius: var(--border-radius);
    border: solid 1px var(--color-border);
    color: var(--color-text);
    width: 100%;
    height: 6rem;
    position: relative;
}

.title {
width: 100%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
}

.graph {
    margin-top: 1.5rem;
    cursor: pointer;
}
</style>
