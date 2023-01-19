# User Stories

* *(C) 2023 IUT BLAGNAC*  
* *All rights reserved.*

## Introduction

###  Objectif

L’objectif de ce document est de présenter les user stories du sprint 1. Nous avons choisi de présenter les user stories par ordre de priorité. Ainsi, les user stories sont présentées dans l’ordre décroissant de leur priorité.

### User Story

Une user story est une description de ce que l’utilisateur souhaite faire. Elle est écrite de manière à ce que l’utilisateur puisse la comprendre et la valider. Enfin, elle est écrite dans un format simple et court.

## I. User Stories

### 1 - Consulter la température de la tireuse à bière (US1)

### Description

**En tant que** utilisateur    
**Je souhaite** consulter la température de la tireuse à bière  
**Afin de** savoir si la tireuse est à la bonne température

### Critères d’acceptation :

    - La température de la tireuse est affichée sur l’écran de l'application
    - La température de la tireuse est affichée sur l’application mobile

### Tâches correspondantes :

    - Récupérer la température de la tireuse à bière
    - Créer une interface graphique pour afficher la température de la tireuse
    - Créer une interface graphique pour afficher la température de la tireuse sur l’application mobile

### Contraintes :

    - La température de la tireuse doit être récupérée via le flux MQTT

### 2 - Consulter le niveau de la tireuse à bière (US2)

### Description

**En tant que** utilisateur
**Je souhaite** consulter le niveau de la tireuse à bière  
**Afin de** savoir si la tireuse est vide

### Critères d’acceptation :

    - Le niveau de la tireuse est affiché sur l’écran de l'application  
    - Le niveau de la tireuse est affiché sur l’application mobile

### Tâches correspondantes :
    
      - Récupérer le niveau de la tireuse à bière
      - Créer une interface graphique pour afficher le niveau de la tireuse
      - Créer une interface graphique pour afficher le niveau de la tireuse sur l’application mobile

### Contraintes :

        - Le niveau de la tireuse doit être récupéré via le flux MQTT

### 3 - Consulter la puissance de la tireuse à bière (US3)

### Description

**En tant que** utilisateur  
**Je souhaite** consulter la puissance de la tireuse à bière  
**Afin de** savoir si la tireuse est en marche  

### Critères d’acceptation :

    - La puissance de la tireuse est affichée sur l’écran de l'application
    - La puissance de la tireuse est affichée sur l’application mobile

### Tâches correspondantes :

    - Récupérer la puissance de la tireuse à bière
    - Créer une interface graphique pour afficher la puissance de la tireuse
    - Créer une interface graphique pour afficher la puissance de la tireuse sur l’application mobile

### Contraintes :

    - La puissance de la tireuse doit être récupérée via le flux MQTT


### 4 - Diagnostic de la tireuse à bière (US4)

### Description

**En tant que** utilisateur  
**Je souhaite** avoir un diagnostic de la tireuse à bière  
**Afin de** savoir si la tireuse est en panne

### Critères d’acceptation :

    - Le diagnostic de la tireuse est affiché sur l’onglet "maintenance" de l'application
    - Dans un encadré, le diagnostic de la tireuse est affiché sur l’application
    - Un cercle rouge est affiché sur l’application si la tireuse est en panne
    - Un cercle vert est affiché sur l’application si la tireuse n’est pas en panne
    - Un message affichant le diagnostic doit être présent sur l’application

### Tâches correspondantes :

    - Créer un onglet "maintenance" dans l'application
    - Récupérer le diagnostic de la tireuse à bière
    - Créer un encadré pour afficher le diagnostic de la tireuse
    - Gérer l'affichage des cercles en fonction du diagnostic de la tireuse
    - Gérer l'affichage du message en fonction du diagnostic de la tireuse

### Contraintes :

    - Le diagnostic de la tireuse doit être récupéré via le flux MQTT
    - Une fonction doit être créée pour gérer l'affichage des cercles en fonction du diagnostic de la tireuse

### 5 - Consulter la notice de la tireuse (US5)

### Description

**En tant que** utilisateur  
**Je souhaite** consulter la notice de la tireuse à bière  
**Afin de** savoir comment utiliser la tireuse  

### Critères d’acceptation :

    - Un bouton "notice" est présent sur l’application
    - Ce bouton doit être présent dans l'onglet "maintenance" de l'application
    - Un clic sur le bouton "notice" ouvre un PDF de la notice de la tireuse

### Tâches correspondantes :

    - Créer un bouton "notice" dans l'application
    - Créer un un onglet "maintenance" dans l'application
    - Créer une fonction qui ouvre un PDF de la notice de la tireuse

### Contraintes :

    - Il faut intégrer le PDF de la notice de la tireuse dans l'application

### 6 - Consulter le manuel de service de la tireuse (US6)

### Description

**En tant que** utilisateur  
**Je souhaite** consulter le manuel de la tireuse à bière  
**Afin de savoir** comment mettre en service la tireuse  

### Critères d’acceptation :

    - Un bouton Manuel de service" est présent sur l’application
    - Ce bouton doit être présent dans l'onglet "maintenance" de l'application
    - Un clic sur le bouton "manuel de service" ouvre un PDF du manuel de service de la tireuse

### Tâches correspondantes :

    - Créer un bouton "manuel de service" dans l'application
    - Créer un un onglet "maintenance" dans l'application
    - Créer une fonction qui ouvre un PDF du manuel de service de la tireuse

### Contraintes :

    - Il faut intégrer le PDF du manuel de service de la tireuse dans l'application

### 7 - Consulter la notice de maintenance préventive (US7)

### Description

**En tant que** utilisateur      
**Je souhaite** consulter la notice de maintenance   préventive de la tireuse à bière
**Afin de** savoir comment entretenir la tireuse

### Critères d’acceptation :

    - Un bouton "Maintenance préventive" est présent sur l’application
    - Ce bouton doit être présent dans l'onglet "maintenance" de l'application
    - Un clic sur le bouton "notice de maintenance préventive" ouvre un PDF de la notice de maintenance préventive de la tireuse

### Tâches correspondantes :

    - Créer un bouton "notice de maintenance préventive" dans l'application
    - Créer un un onglet "maintenance" dans l'application
    - Créer une fonction qui ouvre un PDF de la notice de maintenance préventive de la tireuse

### Contraintes :

    - Il faut intégrer le PDF de la notice de maintenance préventive de la tireuse dans l'application

### 8 - Consulter la notice de maintenance curative (US8)

### Description

**En tant que** utilisateur  
**Je souhaite** consulter la notice de maintenance     curative de la tireuse à bière  
**Afin de** savoir comment réparer la tireuse  

### Critères d’acceptation :

    - Un bouton "Maintenance curative" est présent sur l’application
    - Ce bouton doit être présent dans l'onglet "maintenance" de l'application
    - Un clic sur le bouton "notice de maintenance curative" ouvre un PDF de la notice de maintenance curative de la tireuse

### Tâches correspondantes :

    - Créer un bouton "notice de maintenance curative" dans l'application
    - Créer un un onglet "maintenance" dans l'application
    - Créer une fonction qui ouvre un PDF de la notice de maintenance curative de la tireuse

### Contraintes :

    - Il faut intégrer le PDF de la notice de maintenance curative de la tireuse dans l'application







    





