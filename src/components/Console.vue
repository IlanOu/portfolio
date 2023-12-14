<template>

    <div class="console-background">
        <div class='console-container'>
            > <span id="text"></span>
            <div class='console-underscore' id='console'>
                &#95;
            </div>
        </div>
    </div>
</template>

<script setup>
    
    document.addEventListener('DOMContentLoaded', function() {
        consoleText(['Hello World', 'Console Text', 'print("Hello world")'], 'text', ['#a5c6c3', 'rebeccapurple', 'lightblue']);
    });
    
    // function([string1, string2], target id, [color1, color2])    

    function consoleText(words, id, colors) {
        let speed = 100;
        let timeWaiting = 1000;
        
        if (colors === undefined) colors = ['#fff'];
        let visible = true;
        let con = document.getElementById('console');
        let letterCount = 1;
        let x = 1;
        let waiting = false;
        let target = document.querySelector('#'+id);
        if (target) {
            target.setAttribute('style', 'color:' + colors[0]);
            target.style.whiteSpace = 'pre-line';
            window.setInterval(function () {
                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount);
                    window.setTimeout(function () {
                        let usedColor = colors.shift();
                        colors.push(usedColor);
                        let usedWord = words.shift();
                        words.push(usedWord);
                        x = 1;
                        target.setAttribute('style', 'color:' + colors[0]);
                        target.style.whiteSpace = 'pre-line';
                        letterCount += x;
                        waiting = false;
                    }, timeWaiting);
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    window.setTimeout(function () {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, timeWaiting);
                } else if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount);
                    letterCount += x;
                }
            }, speed);
            window.setInterval(function () {
                if (visible === true) {
                    con.className = 'console-underscore hidden';
                    visible = false;
                } else {
                    con.className = 'console-underscore';
                    visible = true;
                }
            }, 400);
        }
    }
</script>


<style scoped>


    .console-background{
        background-color: rgb(17, 17, 20);
        position: relative;
        width: 20rem;
        height: 10rem;

        padding: 1rem;
        border-radius: var(--border-radius-large);
        border: var(--color-border) 1px solid;
    }

    .hidden {
        opacity: 0;
    }
    .console-container {
       
        display: block;
        position: relative;
        color: white;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .console-underscore {
        display: inline-block;
        position: relative;
        top: -0.14rem;
    }

    @media (max-width: 1024px) {
        .console-background{
            width: 100%;
        }
    }
</style>