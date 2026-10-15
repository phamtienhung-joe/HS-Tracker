# HS Order Book (OB) & Forecast (FC) Executive Dashboard

Executive-level interactive HTML dashboard for the Hospitality Division (HS) at Rochdale Spears Co.

## Live Deployment (GitHub Pages)
This repository is configured to serve `index.html` directly via GitHub Pages:
- **Zero build step required**: `index.html` is 100% self-contained.
- **Data Source**: Reconciled directly with `HS GENERAL TRACKER.xlsx`.

## Project Structure
- `index.html`: Standalone production dashboard for GitHub Pages.
- `src/style.css`: Modular stylesheet (executive design system).
- `src/main.js`: Modular application logic and embedded dataset.
- `refresh_data.py`: Automated ETL pipeline to pull the latest updates from the master tracker.
- `package.json` & `vite.config.js`: Optional Vite bundler configuration.

## Refreshing Data
To pull the latest updates from the master tracker in `COMMERCIAL WORKSPACE - 1.5_TRACKERS`:
```bash
python refresh_data.py
```
