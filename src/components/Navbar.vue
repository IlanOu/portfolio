<script setup>

</script>


<template>
    <div class="topbar">
        <div class="navbar">
            <a>Home</a>
            <a>Projects</a>
            <a>Contacts</a>
        </div>
    </div>
</template>


<style scoped>

.topbar{
    position: fixed;
    top: -7vh;
    left: 0;
    
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.5s ease;
}

.topbar:hover{
    top: 0vh;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 4rem);
    /* margin: 2rem; */
    padding: 2rem 4rem;
    max-width: 1200px;

    background-color: var(--color-background-soft);
    border-radius: 0 0 1.5rem 1.5rem;
    border-bottom: solid 1px var(--color-border);
    border-left: solid 1px var(--color-border);
    border-right: solid 1px var(--color-border);

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

}

.navbar a {
    width: 10%;
    text-align: center;
}
</style>