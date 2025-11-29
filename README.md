# ⚛️ Juken Packages (Nanos World)

![Platforme](https://img.shields.io/badge/Platform-nanos%20world-4CAF50)
![Langages](https://img.shields.io/badge/Langages-Lua%20%7C%20JS%20%7C%20HTML-blueviolet)
![Type](https://img.shields.io/badge/Type-Monorepo%20%2F%20GameMode-red)
![Licence](https://img.shields.io/badge/Licence-MIT-lightgrey)

## 🌟 Introduction

Ce dépôt `Juken-Packages` constitue le **monorepo** officiel regroupant l'ensemble des modules, scripts et configurations formant le GameMode **Juken Roleplay** pour le jeu **nanos world**.

Chaque dossier à la racine de ce dépôt est un **Package** nanos world indépendant, prêt à être déployé sur un serveur. L'architecture modulaire garantit une maintenance aisée et un développement ciblé de chaque composante du GameMode.

---

## 🛠️ Technologies Clés

| Domaine | Technologie | Usage |
| :--- | :--- | :--- |
| **Logique Serveur/Client** | **Lua** | Scripts principaux pour le GameMode (`jukenrp`). |
| **Interface Utilisateur (UI/HUD)** | **JavaScript, HTML, CSS** | Ressources Client-side pour l'interface de chargement (`loadingscreen-juken`) et le HUD en jeu. |
| **Moteur** | **nanos world** | API de scripting et environnement de jeu. |

---

## ⚙️ Installation et Déploiement

Le déploiement de ces ressources requiert une installation standard de nanos world Server.

### 1. Préparation du Serveur

Assurez-vous que votre serveur nanos world est opérationnel.

### 2. Clonage des Packages

Clonez ce dépôt directement dans le répertoire `Packages/` de votre serveur :

```bash
cd /chemin/vers/votre/nanos-world-server/Packages
git clone [https://github.com/Sayfbenda/Juken-Packages.git](https://github.com/Sayfbenda/Juken-Packages.git)
