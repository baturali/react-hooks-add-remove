import React, { useContext } from 'react'
import TestContext from '../Context'

export default function Capabilities() {
  const { state: {knowledge}, dispatch } = useContext(TestContext);

  return (
    <>
      {knowledge && knowledge.length !== 0 &&
        <div className="capabilities">
          <header className="App-header">
            <h2>Capabilities</h2>
            {knowledge.map(lang => (
              <p key={'pr' + lang.id}>
                <input type="text" key={lang.id} value={lang.text} readOnly />

                <button
                  type="button" onClick={() => {
                  dispatch({ type: 'REMOVE_NEW_LANG', payload: lang })
                }}>
                  Remove
                </button>
              </p>
            ))}
          </header>
        </div>
      }
    </>
  )
}