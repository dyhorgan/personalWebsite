import React, {useState} from 'react'

export const Gate = props => {
  return (
    <div className="margins">
      <h1 className="center white huge swordScriptStyle">Dylan Horgan</h1>
      <a
        href="http://localhost:8080/"
        className="white center large"
        onClick={props.changeFunc}
      >
        Enter
      </a>
    </div>
  )
}
