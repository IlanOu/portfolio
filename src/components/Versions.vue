<script setup>
import { ref, onMounted, defineEmits, onBeforeUnmount } from 'vue';

let myChart; // Déclarer la variable myChart en dehors de la fonction pour y accéder lors du démontage
let data;

const emits = defineEmits(['closePopup']);

const props = defineProps(['project']);

const chartData = ref({
    labels: [],
    datasets: [{
        label: "Versions",
        data: [],
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 5,
        pointRadius: 5,
        fill: false,
    }],
});

const chartContainer = ref(null);

onMounted(async () => {
    try {
        const currentProjectData = props.project;
        const response = await fetch('./src/projects.json');
        data = await response.json();

        data.forEach(project => {
            if (project.projectNumber === currentProjectData.projectNumber){
                const versionLabel = `${project.projectName} - Version ${project.version}`;
                chartData.value.labels.push(versionLabel);
                chartData.value.datasets[0].data.push(0);
            }
        });


        // Initialiser le graphique
        initChart();
    } catch (error) {
        console.error("Erreur lors du chargement des données JSON:", error);
    }
});

const initChart = () => {
    const ctx = chartContainer.value.getContext('2d');

    myChart = new Chart(ctx, {
        type: 'line',
        data: chartData.value,
        options: {
            maintainAspectRatio: false,
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
                            return chartData.value.labels[context.dataIndex];
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
                    const clickedVersion = chartData.value.labels[elements[0].index];
                    const projectId = findProjectIdByVersion(clickedVersion);
                    
                    if (projectId !== null) {
                        // Émettre l'id du projet à afficher
                        emitProjectId(projectId);
                    }
                }
            },
        },
    });
}

onBeforeUnmount(() => {
    if (myChart) {
        myChart.destroy();
    }
});


const findProjectIdByVersion = (versionLabel) => {
    // Extraire l'id du projet à partir du label de la version
    const versionParts = versionLabel.split(' - ');
    if (versionParts.length === 2) {
        const projectName = versionParts[0];
        const versionNumber = versionParts[1].replace('Version ', '');
        
        // Recherche du projet dans les données chargées
        const project = data.find(proj => {
            
            return proj.projectName == projectName && proj.version == versionNumber
        });
        return project ? project.projectId : null;
    }
    return null;
};

const emitProjectId = (projectId, context) => {
    // Émettre l'id du projet
    console.log(`Id du projet à afficher : ${projectId}`);
    emits('change-interface', `${projectId}`);
};
</script>


<template>
    <div class="container">
        <h3 class="title">Versions</h3>
        <canvas ref="chartContainer" class="graph" style="width: 100%; height: 100%;"></canvas>
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
    height: 6rem;
    position: relative;
}

.title {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
}

.graph {
    margin-top: 1.5rem;
}
</style>
