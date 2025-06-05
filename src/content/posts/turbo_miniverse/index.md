---
title: Turbo Miniverse
description: Turbo Miniverse – Jeu d'arcade miniature dans une chambre d'enfant
published: 2025-06-05
image: ./Logo-Turbo-Miniverse-Transparent_Cleaned.png
tags: [Jeu Vidéo, Unity, C#, Game Design]
category: Projets Scolaires
draft: false
---

> **Pitch express :** Pilotez une voiture RC miniature dans une chambre d’enfant en désordre. Collectez des pièces pour débloquer de nouveaux modèles, explorez des zones ludiques et évitez des jouets animés.

## TL;DR

| 🏆 Objectif                | ⚙️ Action principale   | 🌟 Récompense                |
| -------------------------- | ---------------------- | ---------------------------- |
| Explorer la chambre        | Piloter, esquiver      | Accès à de nouvelles zones   |
| Collecter des pièces       | Ramasser               | Débloquer d'autres véhicules |
| Trouver les clés           | Exploration, curiosité | Accès à des raccourcis       |
| Éviter les jouets hostiles | Réflexes, trajectoires | Maintien de la progression   |

---

## 1. Boucle de jeu (Core Loop)

1. **Exploration** → 2. **Collecte de pièces** → 3. **Déverrouillage de véhicules / zones** → 4. **Nouvelles zones**

## 2. Zones & Progression

| Zone            | Obstacles               | Jouet mobile / Défi      | Visuel de référence          |
| --------------- | ----------------------- | ------------------------ | ---------------------------- |
| Sous le lit     | Poussière, BD empilées  | Chat robot en peluche    | `./images/zone-underbed.jpg` |
| Bureau          | Câbles, trous de souris | Lampe de bureau mobile   | `./images/zone-desk.jpg`     |
| Bibliothèque    | Livres instables        | Dino‑jouet motorisé      | `./images/zone-shelf.jpg`    |
| Coffre à jouets | Pentes, blocs géants    | Figurine de construction | `./images/zone-toychest.jpg` |

> ✨ **Astuce level design :** Chaque zone introduit une mécanique et une ambiance différente, favorisant l'apprentissage progressif.

## 3. Mécaniques clés

### 3.1 Garage & Voitures

Un garage est accessible dans chaque zone. Le joueur peut y acheter de nouvelles voitures (avec stats différentes) en échange des pièces collectées. Changer de voiture permet d'accéder à des zones autrement inaccessibles (vitesse, adhérence, taille).

### 3.2 Jouets mobiles

* **Soldats de plomb** → tirent des projectiles rebondissants
* **Dinosaures plastiques** → se déplacent en rugissant, font trembler l’écran
* **Trains électriques** → croisent les chemins à intervalles réguliers

## 4. Système d’upgrades

> **Note :** Les upgrades sont représentées par le choix de nouveaux véhicules avec des statistiques spécifiques plutôt qu’un système d’amélioration à l’unité.

| Voiture       | Vitesse | Adhérence | Maniabilité | Spécialité     |
| ------------- | ------- | --------- | ----------- | -------------- |
| Mini Buggy    | ★★☆☆☆   | ★★☆☆☆     | ★★★☆☆       | Équilibré      |
| Rocket Kart   | ★★★★☆   | ★★☆☆☆     | ★★☆☆☆       | Turbo rapide   |
| Tank RC       | ★☆☆☆☆   | ★★★★★     | ★☆☆☆☆       | Résistance max |
| Speedster Pro | ★★★★★   | ★★★☆☆     | ★★★★☆       | Sauts longs    |

## 5. Inspirations visuelles

> 💡 *Toy Story* (Pixar), *Micro Machines V3* (Codemasters), *Kenney Assets*

<!-- ![Moodboard](./images/moodboard-toyroom.jpg) -->

## 6. Ressources & outils

* **Moteur** : Unity 6
* **Modélisation** : Blender (props simples) + packs Kenney
* **Gestion de version** : Git + Git LFS pour les assets lourds (>100 Mo)
* **Organisation** : Obsidian (docs)