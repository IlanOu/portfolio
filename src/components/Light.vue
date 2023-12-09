<template>

    <div></div>

</template>


<style scoped>

div {
    position: fixed;
    top: 115%;
    left: calc(50% - 0.5%);
    width: 1%;
    height: 0px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow:
        0 0 150px 100px rgb(0, 255, 255),
        0 0 200px 150px rgb(150, 100, 255);
    animation: flicker 5s infinite alternate;
    z-index: -5;
}
  
@keyframes flicker {
  0% {
    box-shadow:
        0 0 100px 75px rgb(0, 255, 255),
        0 0 150px 100px rgb(150, 100, 255);
  }
  100% {
    box-shadow:
        0 0 150px 100px rgb(0, 255, 255),
        0 0 250px 180px rgb(150, 100, 255);
  }
}

</style>