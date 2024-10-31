import clsx from 'clsx'

import './App.css'
import { DungeonDialog } from './components/DungeonDialog'

function App() {
  return (
    <div className={clsx('flex', 'flex-col', 'justify-center', 'gap-5')}>
      <h1 className="hud-font">Dungeon HUD (a.k.a. heads-up display)</h1>

      <div className="m-auto">
        <DungeonDialog
          title="Welcome Adventurer"
          message="You have awakened."
        />
      </div>
    </div>
  )
}

export default App
