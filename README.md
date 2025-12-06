# Kryptonite - Microservice de Cryptographie Node.js

Bienvenue sur **Kryptonite** !
C'est un projet que j'ai codé pour avoir une API de cryptographie propre, robuste et prête pour la prod. L'idée c'est d'avoir une "source de vérité" pour tout ce qui est chiffrement dans une architecture microservices.

C'est codé avec ❤️ en **TypeScript** (parce que le ts c'est la vie ).

## À propos de l'auteur

Moi c'est **NightFury** (ou *softpython2884*). Je suis déjà développeur Full-Stack.

J'ai pas mal de projets cool sur mon Github, notamment des trucs en **TypeScript** et d'autres implémentations d'algos de crypto.
**Allez voir mon github de code ici : [github.com/softpython2884](https://github.com/softpython2884)** *(Sa sert comme preuve de compétense en plus)*

---

## Fonctionnalités

On gère les classiques de la crypto historique :
- **ROT13** : Le classique. Simple et efficace.
- **Code César** : Avec décalage personnalisable ou clé aléatoire générée à la volée.
- **Chiffre de Vigenère** : Pour ceux qui veulent du polyalphabétique costaud.
- **Carré de Polybe** : Le top du top. Avec grille par défaut, custom, ou **totalement aléatoire** (super secure !).
Tout ça via une API REST hyper clean. Bon après j'suis plus habituée a dev du JWT...

## La Stack Technique

J'ai choisi des outils modernes et standards :
- **Node.js & TypeScript** : Pour la performance et la sécurité du code. (Ce que j'utilise tt le temps, c mon bébé)
- **Express.js** : Le standard pour les API REST.
- **Zod** : Pour la validation des données (fini les `undefined` qui font crash le serveur !).
- **Jest & Supertest** : Parce qu'on ne push rien sans tests (TDD ftw).

## Comment c'est rangé ?

J'ai essayé de faire une architecture la plus découplée possible (Clean Architecture vibes) :

```bash
src/
├── controllers/    # Ça gère les requêtes HTTP (c'est le chef d'orchestre)
├── services/       # C'est là que les maths opèrent (logique pure)
├── routes/         # Les URLs de l'API
├── utils/          # Les petits outils (ex: validateurs Zod)
└── app.ts          # La config d'Express
```

## Comment lancer le projet ?

1.  **Récupère le code :**
    ```bash
    git clone https://github.com/softpython2884/kryptonite.git
    cd kryptonite
    ```

2.  **Installe les dépendances :**
    (C'est du Node, donc classique)
    ```bash
    npm install
    ```

3.  **Lance le mode dév :**
    J'ai mis `nodemon` pour que le serveur redémarre quand je modifies un fichier.
    ```bash
    npm run dev
    ```

4.  **Lance les tests :**
    J'ai écrit plein de tests pour être sûr que ça ne casse pas.
    ```bash
    npm test
    ```

## Exemples d'appel API

### Chiffrer avec César
**POST** `/api/caesar/encrypt`
```json
{
  "text": "Salut les devs",
  "shift": 3
}
```
**Réponse :**
```json
{
  "success": true,
  "data": { "result": "Vdoxw ohv ghys", "key": 3 }
}
```

### Carré de Polybe (Mode Hacker)
Tu peux demander au serveur de générer une grille aléatoire pour toi :
**POST** `/api/polybe/encrypt`
```json
{
  "text": "SECRET",
  "random": true
}
```

---
*Fait avec ☕ et ❤️ par Night.*
*N'hésitez pas à checker mes autres repos :)) !*
