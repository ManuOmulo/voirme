import React from "react"

import Movies from "./pages/movies/movies"

import ErrorBoundary from "./custom/ErrorBoundary"

const App = () => {
  return(
    <div>
      <ErrorBoundary>
        <Movies />
      </ErrorBoundary>
    </div>
  )
}

export default App