---
title: Projet | Kelna
published: 2023-05-04
description: Un jeu vidéo avec Ivo, un courageux aventurier !
image: "./kelna_cover.png"
tags: [p5js, JS, Game, 2D]
category: Jeu vidéo
draft: false
---

<!-- # Kelna -->

## Liens du projet

Retrouvez le repo Github de Kelna : 

::github{repo="IlanOu/Kelna"}

Nous avons aussi fait un site web du projet : [retrouvez-le ici](https://readymag.website/u2730643025/4237179/)

## Notre équipe

- Alice MELAN (graphiste)
- Matias LA CORTE (graphiste)
- Ugo MOLLIER-BILLET (graphiste)
- [Raphaël MAKARYAN](https://github.com/raphaelmakaryan) (Développeur)
- [Ilan OUTHIER](https://github.com/IlanOu) (Développeur)(Moi)

## Qu'est-ce qu'on devait faire ?

Kelna, un jeu vidéo en 2D entièrement réalisé en p5.js, sans l'aide d'aucune librairie externe, a été notre projet de fin de première année de bachelor.

Le défi était de créer un jeu vidéo en 2D avec p5.js, sans l'appui de librairies externes, et en y intégrant deux modes de vue distincts.

## Qu'est-ce qu'on a fait ?

Mon équipe et moi avons donné vie à Kelna, un platformer (comme Mario Bros), avec donc de la gravité, des ennemis, une barre de vie, des items, des échanges, des PNJ, des pièges...

**Des voix et une intro pour une expérience immersive**

Nous avons sollicité l'aide de [Pierre-Alain de Garrigues (PADG)](https://fr.wikipedia.org/wiki/Pierre-Alain_de_Garrigues) pour faire l'introduction de notre jeu et il a accepté de faire en plus des voix pour le sound design (par exemple lorsqu'on meurt, il dit "Vous êtes morts").
<br>
Un ajout qui rend meilleure l'expérience de jeu de Kelna !

## Pitch du jeu

> Dans un monde ravagé par une maladie mortelle, la bien-aimée d’Yvo est mourante.<br/>
> Il se lance à la recherche de la plante légendaire "Kelna", réputée pour guérir tous les maux.<br/>
> Cette plante est gardée par un sorcier fou dans une citadelle à des centaines de kilomètres.<br/>
> Après une aventure semée d'embûches, Yvo parvient à récupérer la plante et un remède est élaboré, mettant fin à l'infection après quelques années.

<iframe src="https://www.youtube.com/embed/lg2jKY5BJls?si=kAcO-KzA2w-I_9aV" width=600 height=350/>

.

## Parcours des développeurs

On a commencé par créer les mouvements du personnage, donc comme on faisait un plateformer, il fallait faire un système de gravité.
> Gravité : Check ✔

Ensuite, et bien il fallait un sol pour éviter de tomber à l'infini ! Donc on a créé un système de collisions.
> Collisions : Check ✔

Après ça, on a commencé à réfléchir à la carte du jeu. On a imaginé une assez grande carte et qui dit grande carte, dit, utilises beaucoup de ressources !
Pour régler ce soucis, on a fait un système de "chunk". L'idée c'est de découper la carte en rectangles et charger uniquement les rectangles autour du joueur.
> Chunks : Check ✔

Nous avons continué avec les monstres et les PNJ pour ajouter de la vie à notre jeu, donc avec les PNJ, il fallait ajouter des items et avec les monstres, il fallait ajouter un système de combat !
> PNJ : Check ✔ <br>
> Monstres : Check ✔ <br>
> PVE (combat) : Check ✔ <br>
> Items : Check ✔ <br>
> Trocs : Check ✔

Et boom ! On a créé Kelna ! Oui, enfin j'ai passé quelques détails (comme la parallax, notre système d'interfaces pour les trocs et les discussion, l'affichage des tuiles, etc.) mais en gros c'est le parcours qu'on a eu (et j'ai pas parlé du stresse, des modifications à la dernière minute, des bugs à perte de vue, etc.).
