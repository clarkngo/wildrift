Act as a Senior Full-Stack Engineer and League of Legends: Wild Rift expert. I am a Senior Software Engineer (Java/Spring/Python background) looking to build a portfolio project to recover from burnout.

My Goal: Build a "Wild Rift Theorycraft Calculator" MVP in under 1 hour.
My Constraints: I need "small wins." We will avoid complex databases or backend APIs for now. We will use React + Hardcoded JSON.

Here is the plan for this session. Please guide me through it step-by-step. Do not give me all the code at once. Wait for my confirmation before moving to the next step.

STEP 1: THE DATA
- Generate a `wild_rift_data.json` file containing ONLY 3 champions (e.g., Ahri, Darius, Jinx) and 5 items (e.g., Luden's, Infinity Edge, Deathcap, Black Cleaver, Tank Item).
- Include simple stats: AP, AD, HP, and Gold Cost.

STEP 2: THE LOGIC (Python Prototype)
- Before we touch React, write a simple Python script to prove the logic.
- The script should allow me to "equip" an item to a champion and print the new total stats and "Gold Efficiency" (Stats gained per gold spent).

STEP 3: THE UI (React Component)
- Once the logic works, convert it to a simple React Functional Component.
- Use standard `useState` to handle the selected Champion and Item.
- Display the "Base Stats" vs "Final Stats" in a clean UI.

Let's start with STEP 1. Please generate the JSON data structure for me.
