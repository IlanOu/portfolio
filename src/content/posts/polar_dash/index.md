---
title: Polar Dash
published: 2023-12-08
description: Reconnaissance de mouvements et Unity 2D
image: "./polar_dash_cover.png"
tags: [Projet de cours, Unity, Python, Game, 2D]
category: Jeu vidéo
draft: false
---

<!-- # Polar Dash -->

## Retrouvez le repo Github

::github{repo="IlanOu/Polar-Dash"}

## Notre équipe

- [Elsa FREPPAZ](https://studiomeraki.fr/) (graphiste)
- Théotime NOBLET (graphiste)
- Ugo MOLLIER-BILLET (graphiste)
- [Emmanuel MOULIN](https://github.com/Kibishi47) (Développeur)
- [Ilan OUTHIER](https://github.com/IlanOu) (Développeur)(Moi)

## C'était quoi l'objectif ?

Comme premier projet de deuxième année de bachelor, nous avions comme consigne, de **représenter par un jeu, le mouvement**.

L'objectif était de s'entraîner à récupérer des données puis de les traiter.

## Pitch du jeu

> Dans ce jeu de course infinie à défilement horizontal, les joueurs incarnent un pingouin dans le monde de Noël, qui doit éviter les différents obstacles qu'il rencontre en sautant et en se baissant.<br/>
> Ses actions sont contrôlées par des mouvements physiques précis à effectuer par les joueurs dans l'espace.<br>
> Ces commandes évoluent au fur et à mesure du jeu.<br/>
> Les points sont comptabilisés en fonction du temps passé avant l'échec.<br>
> Il faut rester dans la course le plus longtemps possible !

## Description

Avec [Emmanuel Moulin](https://github.com/Kibishi47), nous avons décidé pour ce projet de jeu de le faire sur **Unity**, pour ses nombreux avantages techniques.
Emmanuel a dû apprendre à utiliser cet outil mais il connaissait déjà le C#.

Le problème était de savoir comment récupérer les données de mouvement du joueur sur Unity ?
<br>
`Spoiler alert :` On ne peut pas...
<br>

Alors notre idée a été de créer un système de détection de mouvement des joueurs en **Python**.
<br>
Ce système capte les mouvements des joueurs, les analyse, les modifies un petit peu et les envoies en websocket à Unity (c'est instantané)
