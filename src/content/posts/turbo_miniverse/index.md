---
title: "Turbo Miniverse"
description: "Jeu d’exploration miniature dans une chambre d’enfant : trouvez des clés et reconstituez une piste de course !"
published: 2025-06-05
image: ./Logo-Turbo-Miniverse-Transparent_Cleaned.png
tags: [Jeu Vidéo, Unity, Csharp, Game Design]
category: Projets Scolaires
draft: false
---

# Turbo Miniverse

<iframe 
width="600" 
height="350" 
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

---

## ⚙️ Boucle de jeu (Core Loop)

1. **Explorer librement la chambre**
2. **Trouver des clés cachées**
3. **Ouvrir des coffres pour obtenir des morceaux de piste**
4. **Assembler progressivement la piste finale**
5. **Acheter de nouveaux véhicules avec les pièces collectées**

> Chaque session de jeu apporte une nouvelle découverte, renforce la progression vers un objectif visuel clair (la piste), et débloque de nouveaux moyens d'exploration.

---

## 🗝️ Objectifs & Récompenses

| Objectif                  | Action du joueur       | Récompense                   |
| ------------------------- | ---------------------- | ---------------------------- |
| Explorer la chambre       | Observer, manœuvrer    | Trouver clés & pièces        |
| Déverrouiller des coffres | Utiliser une clé       | Obtenir un morceau de piste  |
| Collecter des pièces      | Ramasser librement     | Acheter des véhicules        |
| Changer de véhicule       | Adapter sa stratégie   | Accéder à de nouvelles zones |
| Compléter la piste        | Assembler les morceaux | Déclencher la course finale  |

---

## 🚗 Système de véhicules

Le joueur commence avec une voiture **équilibrée**, puis peut acheter deux autres véhicules via les pièces collectées :

- **Drift Runner** (voiture de départ) : Bon compromis vitesse/maniabilité.
- **Monster Truck** : Très stable, capable de franchir des obstacles massifs mais peu maniable.
- **Racer GT** : Grande vitesse et accélération, idéale pour les grandes zones plates.

| Véhicule      | Vitesse | Adhérence | Maniabilité | Spécialité                |
| ------------- | ------- | --------- | ----------- | ------------------------- |
| Drift Runner  | ★★★☆☆   | ★★★☆☆     | ★★★★☆       | Équilibré                 |
| Monster Truck | ★★☆☆☆   | ★★★★★     | ★☆☆☆☆       | Passe-partout, robustesse |
| Racer GT      | ★★★★★   | ★★☆☆☆     | ★★★☆☆       | Vitesse et réactivité     |

<!-- > Certaines clés ou coffres ne sont accessibles qu’avec un véhicule spécifique (poids, hauteur, contrôle...). -->

---

## 🧭 Exploration & Level Design

Le jeu se déroule dans une **chambre d’enfant vaste et semi-ouverte**, divisée en plusieurs zones interconnectées (sous le lit, bureau, bibliothèque, table de chevet…). Chaque zone offre :

- **Une ambiance visuelle unique** (poussière, câbles, blocs, livres…)
- **Des obstacles physiques** (pentes, objets mobiles, hauteurs à franchir)
- **Des cachettes subtiles** (clés glissées entre deux livres, derrière une peluche…)

> Le joueur n’est jamais dirigé : l'exploration est **libre mais guidée par la curiosité visuelle**. Pas d’ennemis ni de timer → progression tranquille et organique.

---

## 🛠️ Systèmes et mécaniques

### Clés & Coffres

- Les **clés** sont placées à des endroits peu évidents mais accessibles dès le départ.
- Les **coffres** nécessitent une clé pour être ouverts et contiennent des **fragments physiques** de la piste de course finale.

### Pièces & Économie

- **Pièces** placées partout dans la chambre, de manière dynamique (incite à revisiter).
- Les pièces permettent d'acheter de nouveaux véhicules depuis le **garage accessible à tout moment**.

### Assemblage de la piste

- Chaque coffre contient **plusieurs fragments**.
- Une fois tous les fragments réunis, une **séquence spéciale** lance l’assemblage de la piste → le joueur a alors terminé le jeu.

---

## 🎨 Inspirations & Ambiance

- **Visuelles** : _Toy Story_ (Pixar), _Kenney Assets_, _Micro Machines V3_ (Codemasters)
- **Ludiques** : _Trackmania_ (modularité), _Mario Kart DS – Mission Mode_ (exploration sans adversaires)
- **Émotionnelles** : émerveillement de l’enfance, découverte libre, jeu de chambre

---

## 🧰 Technologies & Outils

- **Moteur** : Unity 6
- **Modélisation** : Blender (props simples) + packs Kenney
- **Versioning** : Git + Git LFS (assets >100 Mo)
- **Organisation** : Obsidian (notes, tâches, GDD)
