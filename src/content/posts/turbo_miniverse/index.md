---
title: "Turbo Miniverse"
description: "Jeu d’exploration miniature dans une chambre d’enfant : trouvez des clés et reconstituez une piste de course ! 🚗"
published: 2025-06-08
image: ./Logo-Turbo-Miniverse-Transparent_Cleaned.png
tags: [Jeu Vidéo, Unity, Csharp, Game Design]
category: Projets Scolaires
draft: false
---

## Retrouvez le repo Github

::github{repo="IlanOu/turbo-miniverse"}

## Présentation rapide du jeu

<iframe 
width="560" 
height="315" 
src="https://www.youtube-nocookie.com/embed/a6zPc6u_vfQ?si=CMFehosJd5A6fxzX" 
title="Turbo Miniverse" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen>
</iframe>

## 🎮 Concept

> **Pilotez une voiture RC dans une chambre d’enfant pleine de secrets. Explorez, collectez des clés, ouvrez des coffres, et reconstituez une piste de course pièce par pièce.**

Turbo Miniverse est un jeu d’exploration à la troisième personne, sans combat, axé sur la curiosité et la récompense visuelle. Le joueur contrôle une voiture télécommandée miniature dans un environnement domestique surdimensionné (chambre d’enfant). L'objectif principal : **trouver des clés cachées**, **ouvrir des coffres**, **assembler une grande piste de course**. Les pièces de monnaie récoltées en chemin permettent d’acheter de **nouvelles voitures**, offrant des styles de conduite différents et un accès à certaines zones spécifiques.

## ⚙️ Développement

### Défis Rencontrés 🤔

- **Physique de la voiture** 🚗 : Créer une maniabilité réaliste pour une petite voiture cartoon a été un défi constant. J'ai dû ajuster plusieurs fois les paramètres pour obtenir un comportement de conduite qui me semblait intuitif et amusant.
- **Level Design** 🗺️ : La création de la map a été le processus le plus long. C'était mon premier projet avec autant de level design, et j'ai appris beaucoup sur l'importance de l'équilibre entre exploration et progression.
- **Système de personnalisation** 🔧 : Initialement, je voulais inclure un système de personnalisation approfondi pour les voitures, permettant aux joueurs d'ajuster des paramètres tels que le taux de drift, les suspensions, et la vitesse maximale. Cependant, par manque de temps, j'ai décidé de simplifier ce système en proposant des voitures préconfigurées avec des caractéristiques fixes.

## 🗝️ Objectifs & Récompenses

| Objectif                  | Action du joueur       | Récompense                   |
| ------------------------- | ---------------------- | ---------------------------- |
| Explorer la chambre       | Observer, manœuvrer    | Trouver clés & pièces        |
| Déverrouiller des coffres | Utiliser une clé       | Obtenir un morceau de piste  |
| Collecter des pièces      | Ramasser librement     | Acheter des véhicules        |
| Changer de véhicule       | Adapter sa stratégie   | Accéder à de nouvelles zones |
| Compléter la piste        | Assembler les morceaux | Déclencher la fin du jeu     |

## 🚗 Système de véhicules

Le joueur commence avec une voiture **équilibrée**, puis peut acheter deux autres véhicules via les pièces collectées :

- **Drift Runner** (voiture de départ) : Bon compromis vitesse/maniabilité.
- **Monster Truck** : Très stable, capable de franchir des obstacles massifs mais peu maniable.
- **Racer GT** : Grande vitesse et accélération, idéale pour les grandes zones plates.

## 🧭 Exploration & Level Design

Le jeu se déroule dans une **chambre d’enfant**, avec plusieurs zones (sous le lit, sur le lit, bureau, bibliothèque, table de chevet…). Chaque zone offre :

- **Une ambiance visuelle unique** (plantes, blocs, livres…)
- **Des obstacles physiques** (tremplins, objets mobiles, hauteurs à franchir)
- **Des cachettes subtiles** (clés glissées entre deux livres, dans un tiroir...)

## 🛠️ Systèmes et mécaniques

### Clés & Coffres

- Les **clés** sont placées à des endroits peu évidents mais accessibles dès le départ.
- Les **coffres** nécessitent une clé pour être ouverts et contiennent des **fragments physiques** de la piste de course finale.

### Pièces & Économie

- **Pièces** placées partout dans la chambre, avec plusieurs niveaux de rareté : 
    - **Or** : 25c
    - **Argent** : 15c
    - **Bronze** : 10c
- Les pièces permettent d'acheter de nouveaux véhicules depuis le **garage accessible à tout moment**.

J'ai créé un outil très pratique dans l'éditeur Unity qui me permet de placer les pièces plus facilement.
Il permet d'en placer sous forme de ligne, cercle, triangle, rectangle, spirale... Je peux choisir le nombre de pièces et leur espacement.

## 🎨 Inspirations & Ambiance

- **Visuelles** : _Toy Story_ (Pixar), _Kenney Assets_, _Micro Machines V3_ (Codemasters)
- **Émotionnelles** : émerveillement de l’enfance, découverte libre, jeu de chambre

## 🧰 Technologies & Outils

- **Moteur** : Unity 6
- **Modélisation** : Blender (props simples) + packs Kenney
- **Versioning** : Git + Git LFS (assets >100 Mo)
- **Organisation** : Obsidian (notes, tâches, GDD)

## 📝 Conclusion

Turbo Miniverse est un projet que j'ai réalisé en solo dans le cadre de mes études. Malgré les défis, j'ai appris énormément sur le développement de jeux, notamment sur la physique des véhicules et le level design. Bien que je n'envisage pas de poursuivre ce projet pour le moment, il reste une expérience précieuse dans mon portfolio ! 