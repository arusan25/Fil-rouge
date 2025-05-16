# Projet Fil Rouge : Intégration et Sécurisation d'une BDD

## Présentation

Bonjour, je suis un débutant en développement, c’est mon tout premier vrai projet.  
Je n’avais jamais fait de dev avant ce projet.

L’objectif principal était de créer une application web avec une base de données, en mettant surtout l’accent sur **l’intégration** et la **sécurisation** des données.  

---

## Technologies utilisées

- Frontend : React.js (découverte et premiers pas)
- Backend : Express.js (API REST sécurisée)
- Base de données : MongoDB

---

## Ce que j’ai réussi à faire (partie intégration & sécurité)

- Mise en place complète du backend avec Express.js
- Création d’une API REST fonctionnelle
- Sécurisation des données avec validation des entrées côté serveur
- Authentification sécurisée avec JSON Web Token (JWT)
- Hash sécurisé des mots de passe avec bcrypt
- Intégration correcte avec MongoDB et protection des accès aux données
- Protection contre certaines attaques (exemple : prévention basique des injections et XSS)

---

## Ce que je n’ai pas réussi à faire (autres parties)

- Le frontend n’est pas totalement fonctionnel ni sécurisé
- Je n’ai pas encore mis en place de gestion avancée des rôles utilisateurs
- Pas de certificat SSL en production (seulement en local)
- Pas de gestion avancée des logs et des sessions
- Manque de tests approfondis et de nettoyage des traces utilisateurs

---

## Structure du projet

- `/client` : frontend (en cours)
- `/server` : backend et sécurité (fonctionnel)
- `.env.example` : variables d’environnement
- `README.md` : ce fichier

---

## Comment tester

1. Cloner le projet  
2. Installer les dépendances (`npm install` dans `/client` et `/server`)  
3. Lancer le backend (`npm run dev` dans `/server`)  
4. Lancer le frontend (`npm start` dans `/client`)  

---

Merci pour votre compréhension.
