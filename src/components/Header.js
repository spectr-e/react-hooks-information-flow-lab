import React from 'react';

function Header({mode, handler }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={handler}>
        {mode ? "Dark" : "Light"} Mode
      </button>
    </header>
  )
}
export default Header