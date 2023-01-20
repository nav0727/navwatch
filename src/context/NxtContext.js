import React from 'react'

const NxtContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
})

export default NxtContext
