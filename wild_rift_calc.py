import json
from pathlib import Path

DATA_FILE = Path(__file__).parent / "wild_rift_data.json"

STAT_KEYS = ["AP", "AD", "HP"]


def load_data():
    with open(DATA_FILE, "r") as f:
        return json.load(f)


def find_champion(data, name):
    for champ in data["champions"]:
        if champ["name"].lower() == name.lower():
            return champ
    raise ValueError(f"Champion '{name}' not found")


def find_item(data, name):
    for item in data["items"]:
        if item["name"].lower() == name.lower():
            return item
    raise ValueError(f"Item '{name}' not found")


def equip_item(champion, item):
    base = champion["baseStats"].copy()
    bonus = item["stats"]
    final = {k: base.get(k, 0) + bonus.get(k, 0) for k in STAT_KEYS}
    return base, final


def gold_efficiency(item):
    # Simple efficiency metric: sum of raw stat gains divided by gold cost
    # Note: This ignores true in-game scaling and conversions; it's an MVP metric.
    total_gain = sum(item["stats"].get(k, 0) for k in STAT_KEYS)
    cost = item.get("goldCost", 1) or 1
    return total_gain / cost


def print_result(champion_name: str, item_name: str):
    data = load_data()
    champ = find_champion(data, champion_name)
    item = find_item(data, item_name)
    base, final = equip_item(champ, item)
    efficiency = gold_efficiency(item)

    print(f"Champion: {champion_name}")
    print(f"Item: {item_name} (Cost: {item['goldCost']})")
    print("Base Stats:")
    for k in STAT_KEYS:
        print(f"  {k}: {base[k]}")
    print("Final Stats (after item):")
    for k in STAT_KEYS:
        print(f"  {k}: {final[k]}")
    print(f"Gold Efficiency (sum(stats_gain)/gold): {efficiency:.4f}")


if __name__ == "__main__":
    # Tiny demo; change names as desired
    # Examples: ("Ahri", "Rabadon's Deathcap"), ("Darius", "Black Cleaver"), ("Jinx", "Infinity Edge")
    print_result("Ahri", "Rabadon's Deathcap")
