# Test technique – Landing Page eSIM

**La maquette et les contenus sont sur Figma ; les liens des visuels sont en bas de ce document.**

---

## Démarrage

Prérequis : **Node.js ≥ 20.9**.

```bash
npm install
npm run dev
```

La page à développer : http://localhost:3000/forfaits-mobiles/esim

Tout se passe dans `src/app/forfaits-mobiles/esim/` :

| Fichier | Rôle |
| --- | --- |
| `page.tsx` | Point d'entrée de la route |
| `data.json` | Contenus de la page |
| `style.scss` | Styles spécifiques |

## Objectif

Intégrer la **Landing Page eSIM** à partir de la maquette Figma et du design system **Trilogy**. Cette page d'acculturation client valorise les avantages de l'eSIM auprès du grand public : elle explique ce service et accompagne l'utilisateur pour l'inciter à passer à l'eSIM.

## Détails clés

| | |
| --- | --- |
| Maquette | [Figma](https://www.figma.com/design/nGAeM2oUhHDSid4pdtsyK3/Test-t%C3%A9chnique?node-id=967-11915&p=f&t=qAB8m9fBZ2h1vHBF-0) |
| Route | `/forfaits-mobiles/esim` |
| Technologies | Next.js (App Router) + TypeScript |
| Design system | Trilogy – [`@trilogy-ds/react@4.20.4`](https://github.com/BouyguesTelecom/trilogy) – [documentation](https://design.bouyguestelecom.fr/) |

> **Header / Footer** : à ne pas intégrer, pas besoin du header et du footer sur la page.

---

## Liens des visuels

**Cover**

- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/Illustration_eSIM.webp

**eSIM et carte SIM : quelles différences ?**

- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/Illustration_eSIM2.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/Illustration_eSIM3.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/rvb_esim_bleu.svg

**Installez votre eSIM en quelques clics seulement !**

- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/phone_step1@2x.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/phone_step2@2x.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/phone_step3@2x.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/phone_step4@2x.webp

**Nos téléphones compatibles eSIM**

- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/iPhone-17-Pro_desktop@2x.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/iPhone-17-Pro_mobile@2x.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/Samsung_Galaxy_S25_Bleu_Clair_desktop@2x.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/Samsung_Galaxy_S25_Bleu_Clair_mobile@2x.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/HONOR-400_desktop@2x.webp
- https://www.bouyguestelecom.fr/static/com/assets/forfaits-mobiles/esim/HONOR-400_mobile@2x.webp

---

## Consignes

- Construire la page principalement avec les **composants Trilogy**.
- Éviter autant que possible les styles personnalisés, ainsi que les paquets et librairies externes.
- Pour la mise en page, privilégier le composant **`FlexBox`** (et `FlexItem`) plutôt que `Columns` / `Rows`.

## Livraison

N’hésitez pas à forker ce dépôt en privé, puis à m’ajouter comme collaborateur.

N'hésitez pas si vous avez la moindre question.

Bon courage !
