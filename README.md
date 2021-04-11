# TD n°6, 7 et 8 Store

Les objectifs initiaux de cette application est de permettre aux commerçants de gérer son magasin (sections et produits) 
ainsi que la préparation des commandes et leur retrait par les clients, en interne. 


## Technologie utilisé
Ce projet utilise le framework EmberJS. Celui-ci est développé par la communauté et est sortie en 2011.
Ce framewok est en Javascript et s'appuie sur une architecture de type MVC 


## Prise en main
Tout d'abord, l'employé doit se connecter avec son adresse mail et son code.
Ensuite, le board s'affiche, en cliquant sur le bouton Sections on retrouve toutes les sections différentes du store.

![image](https://user-images.githubusercontent.com/77676647/114320881-6753d600-9b18-11eb-99c7-04480d8fcb82.png)

On peut supprimer une section mais c'est aussi sur cette page que l'utilisateur peut ajouter une nouvelle section ou un nouveau produit.
En appuyant sur le bouton d'édition on accède à la liste des différents produits. Ici aussi on peut ajouter un nouveau produit ou en supprimer.

## Documentation technique
Utilisation de Semantic-UI pour la partie CSS.
### Serializers
- application.js
- orderdetail.js
- section.js
### Services
- user-auth.js
### Routes
- abstractroute.js
- board.js
- index.js
- my-orders.js
- section.js
- section/add.js
- section/add-product.js
- section/edit.js
- section/index.js
- section/edit/add-product.js
- my-orders/prepare.js
- my-orders/prepare/cancel.js
- my-orders/prepare/prepared.js
### Adapters
- application.js
### Controllers
- products.js

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


