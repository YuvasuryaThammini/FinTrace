# FinTrace

FinTrace is a financial-crime intelligence and investigation workspace covering AML, KYC/CDD, EDD, sanctions, PEPs, CTF, proliferation financing, fraud, virtual assets, TBML, correspondent banking, SAR/STR reporting, FIU workflows, analytics, and control governance.

All customers, cases, transactions, reports, and operational events in this repository are fictional demonstration data.

## Run Locally

```powershell
npm start
```

Open `http://localhost:4173`.

## Publish With GitHub Pages

This repository includes an automatic workflow at `.github/workflows/deploy-pages.yml`.

1. Install [Git for Windows](https://git-scm.com/download/win) if `git --version` does not work.
2. On GitHub, create an empty public repository named `fintrace`. Do not add a README, `.gitignore`, or license.
3. Open PowerShell in this project folder.
4. Replace `YOUR-GITHUB-USERNAME` below, then run:

```powershell
git init
git add .
git commit -m "Deploy FinTrace"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/fintrace.git
git push -u origin main
```

5. Open the repository on GitHub and select **Settings > Pages**.
6. Under **Build and deployment**, set **Source** to **GitHub Actions**.
7. Open **Actions > Deploy FinTrace to GitHub Pages**.
8. If the first run occurred before Pages was enabled, select **Run workflow**.
9. After the workflow succeeds, open **Settings > Pages > Visit site**.

The published address will normally be:

```text
https://YOUR-GITHUB-USERNAME.github.io/fintrace/
```

Every later push to `main` automatically republishes the site.

## Important Production Boundary

GitHub Pages hosts the static interactive demonstration only. It does not run `server.js`, `/health`, authentication, databases, audit storage, or private APIs.

Before using real financial-crime or customer data, deploy the server-backed application through an approved environment and add enterprise authentication, role-based access, encrypted storage, immutable audit logging, secrets management, monitoring, backups, and approved data providers.
