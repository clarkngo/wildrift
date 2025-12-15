import React, { useMemo, useState } from 'react'
import data from '../wild_rift_data.json'

const STAT_KEYS = ['AP', 'AD', 'HP']

function StatGrid({ title, stats }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="stats">
        {STAT_KEYS.map((k) => (
          <div key={k} className="stat">
            <div className="muted">{k}</div>
            <div>{stats[k]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const champions = data.champions
  const items = data.items

  const [champName, setChampName] = useState(champions[0].name)
  const [itemName, setItemName] = useState(items[0].name)

  const champ = useMemo(() => champions.find(c => c.name === champName), [champions, champName])
  const item = useMemo(() => items.find(i => i.name === itemName), [items, itemName])

  const baseStats = champ.baseStats
  const finalStats = useMemo(() => {
    const result = {}
    STAT_KEYS.forEach(k => {
      result[k] = (baseStats[k] || 0) + (item.stats[k] || 0)
    })
    return result
  }, [baseStats, item])

  const efficiency = useMemo(() => {
    const totalGain = STAT_KEYS.reduce((sum, k) => sum + (item.stats[k] || 0), 0)
    return (totalGain / item.goldCost).toFixed(4)
  }, [item])

  return (
    <div className="container">
      <h1>Wild Rift Theorycraft Calculator</h1>
      <p className="muted">Pick a champion and an item to see Base vs Final stats and a simple Gold Efficiency metric.</p>

      <div className="grid" style={{ marginTop: 16 }}>
        <div className="card">
          <label>Champion</label>
          <select value={champName} onChange={(e) => setChampName(e.target.value)}>
            {champions.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="card">
          <label>Item</label>
          <select value={itemName} onChange={(e) => setItemName(e.target.value)}>
            {items.map((i) => (
              <option key={i.name} value={i.name}>{i.name}</option>
            ))}
          </select>
          <p className="muted" style={{ marginTop: 8 }}>Gold Cost: {item.goldCost}</p>
        </div>
      </div>

      <div className="grid" style={{ marginTop: 16 }}>
        <StatGrid title="Base Stats" stats={baseStats} />
        <StatGrid title="Final Stats" stats={finalStats} />
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <strong>Gold Efficiency:</strong> sum(AP+AD+HP gains)/gold = {efficiency}
      </div>
    </div>
  )
}
