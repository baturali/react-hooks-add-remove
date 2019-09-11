import React, { useContext } from 'react'
import TestContext from '../Context'

export default function TestForm() {
  const { state, dispatch } = useContext(TestContext);

  return (
    <div className="App container">
      <header className="App-header">
        <h2>
          Languages
        </h2>
        {state.listLang.map(lang => (
          <p key={'pr' + lang.id}>
            <input type="text" key={lang.id} value={lang.text} readOnly />

            <button type="button" onClick={() => {
              dispatch({ type: 'SET_NEW_LANG', payload: lang})
            }}>Add</button>
          </p>
        ))}
      </header>
    </div>
  )
}