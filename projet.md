# Scratchpad - Kryptonite

Projet **Kryptonite**. Microservice de cryptographie.

L'idée, c'est d'avoir un truc propre, "production-ready", et surtout de ne pas réinventer la roue à chaque fois qu'on a besoin de chiffrer un truc dans les apps.

Si vous voulez voir mes autres projets (il y en a en TS), checkez mon Github ici : [softpython2884](https://github.com/softpython2884) ou même [nightproject](https://nightproject.nationquest.fr/).

---

## Phase 1 : Mise en place & Architecture (Le "Setup")

Bon, pour commencer, pas question de faire du spaghetti code. J'ai choisi **TypeScript** direct. Pourquoi ?
- Le ts, c'est la vie. Ça évite 90% des bugs a la con.
- C'est ce qui est demandé partout en entreprise pour les SaaS.
- L'expérience développeur est top, perso je n'utilise plus que le TS pour mes projets.

Structuré le projet comme ça :
```
src/
 ├── services/       # Là où la magie opère (les algos)
 ├── controllers/    # Ce qui gère les requêtes HTTP
 ├── routes/         # Pour définir les URLs
 └── utils/          # Les petits outils pratiques
```


## Phase 2 : Les Services Crypto

### 1. Rot13 & César
C'était l'échauffement. Rot13 c'est juste un César de 13.
J'ai fait une classe `CaesarService` qui gère le décalage, et `Rot13Service` qui est une version simplifiée.
*Challenge* : Gérer le bouclage (z -> a). Avec le modulo `%`, ça passe crème.

### 2. Vigenère
Un peu plus corsé. Il faut gérer une clé qui se répète.
J'ai bien fait gaffe à ce que la casse (Majuscule/Minuscule) soit respectée.

### 3. Carré de Polybe
Celui-là, c'était marrant. Faut mapper des lettres sur une grille 5x5.
J'ai ajouté une option pour générer une grille aléatoire (`generateRandomSquare`). 

## Phase 3 : L'API avec Express

Maintenant qu'on a les moteurs, faut le volant. J'ai utilisé **Express**.
Mais attention, pas n'importe comment. J'ai mis des middlewares de sécurité : (j'ai fait la même que mon projet FlowUp)
- `helmet` : Pour les headers HTTP sécurisés.
- `cors` : Pour gérer qui peut appeler l'API.
- `morgan` : Pour voir les logs dans la console (pour debug).

### La Validation
J'ai découvert **Zod** récemment, et c'est une tuerie pour valider les données.
Au lieu de faire des `if (req.body.text == undefined)`, je définis un schema et Zod gère tout. Si le payload est mauvais, ça renvoie une erreur propre.

## Phase 4 : Les Tests (Parce qu'on est des pros)

"Pas de test, pas de prod".
J'ai utilisé **Jest** et **Supertest**.
- J'ai testé chaque service isolément (Tests unitaires).
- J'ai testé les routes API pour voir si tout s'imbrique bien (Tests d'intégration).

Résultat : Tout est vert ! 

---

## Et la suite ?

Ce projet est une brique de base. On pourrait imaginer ajouter du RSA ou de l'AES plus tard.
Mais pour l'instant, c'est un module solide et réutilisable et c'est pas vraiment ma priorité.

[mon Github](https://github.com/softpython2884)

