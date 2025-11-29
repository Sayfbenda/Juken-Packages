# ⚛️ Juken Packages (Nanos World)

![Platform](https://img.shields.io/badge/Platform-nanos%20world-4CAF50)
![Languages](https://img.shields.io/badge/Langages-Lua%20%7C%20JS%20%7C%20HTML-blueviolet)
![Type](https://img.shields.io/badge/Type-Monorepo%20%2F%20GameMode-red)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

## 🌟 Introduction

This `Juken-Packages` repository constitutes the official **monorepo** grouping all modules, scripts, and configurations that form the **Juken Roleplay** GameMode for the **nanos world** game.

Each folder at the root of this repository is an independent nanos world **Package**, ready to be deployed on a server. The modular architecture ensures easy maintenance and focused development of each component of the GameMode.

---

## 🛠️ Key Technologies

| Domain | Technology | Usage |
| :--- | :--- | :--- |
| **Server/Client Logic** | **Lua** | Main scripts for the GameMode (`jukenrp`). |
| **User Interface (UI/HUD)** | **JavaScript, HTML, CSS** | Client-side resources for the loading screen (`loadingscreen-juken`) and the in-game HUD. |
| **Engine** | **nanos world** | Scripting API and game environment. |

---

## ⚙️ Installation and Deployment

Deploying these resources requires a standard nanos world Server installation.

### 1. Server Preparation

Ensure your nanos world server is operational.

### 2. Cloning the Packages

Clone this repository directly into your server's `Packages/` directory:

```bash
cd /path/to/your/nanos-world-server/Packages
git clone [https://github.com/Sayfbenda/Juken-Packages.git](https://github.com/Sayfbenda/Juken-Packages.git)
