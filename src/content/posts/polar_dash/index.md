---
title: Projet | Polar Dash
published: 2023-12-08
description: Reconnaissance de mouvements et Unity 2D
image: "./polar_dash_cover.png"
tags: [Unity, Python, Game, 2D]
category: Jeu vidéo
draft: false
---

<!-- # Polar Dash -->

## Github

Retrouvez le repo Github :

::github{repo="IlanOu/Polar-Dash"}

## Consignes

Comme premier projet de deuxième année de bachelor, nous avions comme consigne, de représenter par un jeu, le mouvement.

## Pitch du jeu

>Dans ce jeu de course infinie à défilement horizontal, les joueurs incarnent un pingouin dans le monde de Noël, qui doit éviter les différents obstacles qu'il rencontre en sautant et en se baissant.<br/>
>Ces actions sont contrôlées par des mouvements physiques précis à effectuer par les joueurs dans l'espace.
>Ces commandes évoluent au fur et à mesure du jeu.<br/>
>Les points sont comptabilisés en fonction du temps passé avant l'échec.
>Il faut rester le plus longtemps possible.

## Description

Avec mon collègue développeur [Emmanuel Moulin](https://github.com/Kibishi47), nous avons décidé pour ce projet de jeu de le faire sur Unity, pour ses nombreux avantages techniques.

Le problème était de savoir comment récupérer les données de mouvement du joueur sur Unity ?<br/>
`Spoiler alert :` On ne peut pas...<br/>

Alors notre idée a été de créer un système de détection de mouvement des joueurs en Python. Pas le jeu lui-même, mais ce système de détection : il capte les mouvements, les analyse, les transforme pour qu'Unity puisse les comprendre, puis les envoie en websocket. Tout cela, en boucle, toutes les n millisecondes.
