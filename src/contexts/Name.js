import React, { useState } from 'react'
import { createContext } from 'react'
import usePersistedState from '@hoeks/use-persisted-state';

const NAME_KEY = 'name'

export const NameCtx = createContext(NAME_KEY)

function Name() {
    const [name, setName] = usePersistedState(NAME_KEY);

    const saveName = (newName) => {
        setName(newName)
    }

  return (
    <NameCtx.Provider value={{ name, saveName }}>{children}</NameCtx.Provider>
  )
}

export default Name

