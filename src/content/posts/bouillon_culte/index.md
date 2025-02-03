---
title: Le Bouillon Culte
published: 2024-06-13
description: Jeu de société connecté sur la culture française pour une EHPAD
image: "./bouillon_culte_cover.png"
tags: [Jeu Vidéo, Python, Raspberry PI, JS]
category: Projets Scolaires
draft: false
---

<!-- # Le Bouillon Culte -->

---

:::important[TL;DR]
<br>
<details>
<summary>En résumé</summary> 

### Qu'est-ce que c'est ?

"Le Bouillon Culte" est notre projet de fin d'année : un **objet connecté** qui stimule la mémoire des résidents en EHPAD grâce à un jeu de société interactif.  
Collaborant avec [La Fondation du Parmelan](https://fondationduparmelan.org/), nous avons conçu un jeu mêlant questions de culture générale et challenges ludiques, avec une carte interactive, boutons, écran et enceinte.

![photo de l'objet](LBC_photo_ouvert.png)
</details>
:::

---

## Retrouvez le repo Github

::github{repo="IlanOu/Le_Bouillon_Culte"}

## Notre équipe

- [Elsa FREPPAZ](https://studiomeraki.fr/) (graphiste)
- Jeremy BERTHET (graphiste)
- [Billie Lou AZZANO](http://www.linkedin.com/in/billie-lou-azzano-066330258) (graphiste)
- Théotime NOBLET (graphiste)
- [Anthony PELAZ](https://github.com/anthony74742) (développeur)
- [Ilan OUTHIER](https://github.com/IlanOu) (développeur) *(moi)*

---

## L'objectif

En deuxième partie de notre bachelor, on s'est lancé dans le défi suivant :  
> **Comment faciliter le quotidien des personnes âgées en EHPAD ?**

La réponse : imaginer un **objet connecté** ludique pour renforcer les liens et stimuler la mémoire autour de la culture française des années 60 à 80.

---

## Le concept du jeu

On a rencontré [La Fondation du Parmelan](https://fondationduparmelan.org/) et observé que les résidents adoraient les jeux de société. Du coup, l'idée était de créer un jeu interactif qui les rassemble et les fait réfléchir.

### Les mini-jeux proposés

- **Quelle est cette musique ?**  
  Un blind test pour retrouver la bonne musique.
- **Où c'est ?**  
  Identifier un lieu à partir d'une description.
- **Devine la suite**  
  Compléter les paroles d'une chanson.
- **Qui suis-je ?**  
  Deviner un personnage historique à partir d'indices.
- **Culture générale**  
  Des questions classiques sur divers sujets.
- **Trois images**  
  Relier trois images pour deviner un lieu ou une recette.

### L'objet en lui-même

- **Partie gauche :** Une carte de France pour positionner le pion.
- **Partie droite :** Un bouton rouge pour tourner la roue et quatre boutons pour répondre.
- **Deuxième partie :** Un écran pour afficher les questions et une enceinte pour la lecture audio.

| ![photo de l'objet](LBC_photo_ouvert.png) | ![3D de l'objet](LBC_3D_ouvert.png) |
|:-----------------------:|:-----------------------:|
| **Photo de l'objet** | **3D de l'objet** |

Le déroulé est simple :

1. **Choix du nombre de questions.**
2. **Tour de roue** pour sélectionner un mode de jeu.
3. **Sélection de la région** sur la carte.
4. **Affichage de la question** et réponse via les boutons.
5. **Vérification** de la réponse et attribution d’un point.
6. **Répétition** jusqu’à la fin de la partie et affichage du score final.

<iframe src="https://www.youtube.com/embed/lY2ekTzoxIg?si=z9Esf8ow9zbRBDUV" width="600" height="350"></iframe>

---

## Le parcours des développeurs

Pour éviter de surcharger le Raspberry Pi avec les capteurs RFID et boutons, nous avons ajouté un **ESP32** pour gérer certaines tâches.  
Quelques points clés :

- **Connexion des capteurs et boutons :**  
  Raspberry Pi et ESP32 en parfaite harmonie.
- **Affichage et audio :**  
  Un écran web et une enceinte pour une expérience immersive.
- **Gestion des questions :**  
  Lecture de fichiers JSON pour alimenter 6 mini-jeux différents.
- **Challenge supplémentaire :**  
  Un système de points et un nombre défini de questions pour inciter les joueurs à rejouer.

> **Bon à savoir :** Un grand merci à Théotime pour sa patience et son aide sur les 60 questions !

---

## Pour conclure

Même si le rendu final de l'objet n'est qu'un prototype (la contrainte du temps et des moyens nous a limité), nous sommes super fiers du résultat.  
Ce projet m'a permis de plonger dans la POO et de vraiment comprendre ce concept, le tout en s'amusant !

