# Wild Rift Theorycraft Calculator (MVP)

Small wins MVP using React + hardcoded JSON and a tiny Python prototype.

## Run the Python Prototype
```zsh
python3 wild_rift_calc.py
```

## Run the React UI
```zsh
# from the project root
npm install
npm run dev
```
Open the URL shown by Vite (typically http://localhost:5173).

## Notes
- Data comes from `wild_rift_data.json`.
- Efficiency metric is a simple `sum(AP+AD+HP gains) / goldCost` for MVP.
- Try combos like Ahri + Deathcap, Darius + Black Cleaver, Jinx + Infinity Edge.