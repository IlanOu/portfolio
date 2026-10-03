---
title: Kolizeo
published: 2025-09-01
description: Des mini-jeux pour les fans de sport, partis de zéro !
tags: [Jeu Vidéo, Unity, Csharp, WebGL, UGS]
category: Expériences Pro
draft: true
---

<!-- # Kolizeo -->

<!-- TODO image de couverture + visuels des jeux -->

## C'est quoi Kolizeo ? 🤔

[**Kolizeo**](https://kolizeo.fr) est une petite startup qui crée des **mini-jeux pour les fans de sport**.  
Avant le match, les supporters jouent sur leur téléphone, tentent de grimper dans le classement et gagnent des points. Pendant le match, ils peuvent aussi faire leurs **pronostics** et **voter pour le meilleur joueur**.

On travaille avec des clubs et des organisateurs d'événements, qui sont aujourd'hui plus des **collaborateurs** que des clients :
- **VNVB** (volley féminin)
- **SLUC** (basket)
- **ASNL** (foot)
- **Metz Handball** (féminin)
- **La LNH** à Aix-en-Provence, pour la finale PSG x MHB
- **Le FC Metz**, pour le jubilé de Robert Pirès
- **Le Luxembourg du Rire**, le temps d'un événement

---

## L'équipe

- Frédéric KASTENDEUCH (CEO)
- Tania XAVIER (CMO, marketing, communication et design)
- Thomas MUTIN KASTENDEUCH (business developer)
- Sylvain KASTENDEUCH (partenaire stratégique)
- Camille METARD (développeur web)
- Rémi LEPRÉVOST (développeur Unity)
- [Ilan OUTHIER](https://github.com/IlanOu) (développeur Unity) *(moi)*

Côté dev, on est donc **trois**. Camille s'occupe du portail web, la partie visible qui mène aux mini-jeux. Avec Rémi, on fait les jeux et leur backend.  
D'ailleurs, j'ai participé au **recrutement de Camille** : comme j'ai suivi une formation web pendant trois ans, je savais ce dont on aurait besoin. J'ai trié les candidatures, fait les entretiens avec Frédéric et réfléchi avec lui pour choisir le meilleur profil.

Pour le backend, on utilise les **Unity Gaming Services** : Cloud Code, Cloud Save, Remote Config, Leaderboards et un peu d'Economy.  
C'est surtout Rémi qui s'en occupe, moi j'y touche un peu.

---

## Tout doit être adaptable

Chaque collaborateur a son propre **branding**, et chaque événement a ses propres règles : temps de jeu, part de hasard, nombre de points à gagner...  
Alors tout ce qu'on fait doit être **ultra adaptable et réutilisable**. On ne fait pas un jeu, on fait un jeu qu'on peut décliner à l'infini !

Du coup, on s'est fabriqué **beaucoup d'outils** :
- Un outil pour **dessiner des grilles**, utilisé dans plusieurs jeux
- Un outil pour **lancer les builds** plus rapidement
- Un outil pour **intégrer les sons** facilement

<!-- TODO visuel d'un outil -->

---

## Mobile, web et écran géant 📱

Au début, on faisait aussi des **jeux en live**, pendant le match. Ils s'affichaient à la fois sur le téléphone de tout le monde et sur **l'écran géant** du stade, avec deux vues différentes.  
Autant dire qu'on avait intérêt à ce que tout marche parfaitement, parce que sinon, ça se voit... 😬

Pour ces jeux, il fallait choisir la bonne techno :
- Si le jeu est simple, on le fait **en web**, pour éviter de charger une WebGL pour rien.
- Si le gameplay ou les animations sont plus complexes, on passe sur une **WebGL Unity**.

Finalement, on a presque arrêté le live : trop de contraintes techniques, et les gens viennent surtout pour voir le match !  
Aujourd'hui, on se concentre sur les **mini-jeux avant-match**, sur mobile en WebGL, sans écran géant.

---

## Pas de designer ? Pas de souci !

Comme on est une petite startup, on n'a pas de designer dans l'équipe. On a travaillé un temps avec Clément CAMPARGUE, un artiste freelance, et visuellement, ça nous a fait beaucoup de bien !  
Le reste du temps, les visuels, c'est nous qui les faisons : en **pixel art** ou générés par IA.

Pour le son, c'est moi qui l'ai intégré dans nos jeux 🔊  
J'ai fait un outil pour simplifier son intégration, et j'ai constitué une **librairie de SFX et de musiques libres de droits** pour tous nos prochains jeux.  
Et ça donne une tout autre dimension aux jeux !

---

## Ce que j'en retiens

On est partis de **zéro** : il a fallu tout imaginer, et tout structurer proprement.  
Il y a eu des périodes de stress, avec des jeux à commencer et à finir en **moins d'une semaine** !

Depuis le début, on a pris énormément de maturité, sur la technique mais aussi sur nos jeux et sur notre cible.  
Et de mon côté, c'est clairement chez Kolizeo que j'ai le plus appris sur le jeu vidéo 🚀
