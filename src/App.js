import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// css
import "./scss/main.scss"

import Home from "./Home"
import Movies from "./pages/movies/movies"
import SearchMoviesContainer from "./pages/movies/searchMoviesContainer"
import Photography from "./pages/photography/Photography"
import MenSection from "./pages/Men"
import MenShoesComponent from "./pages/shoes/MenShoesComponent"
import MenClothingComponent from "./pages/clothing/MenClothingComponent"
import WomenSection from "./pages/Women"
import WomenClothingComponent from "./pages/clothing/WomenClothingComponent"
import WomenShoesComponent from "./pages/shoes/WomenShoesComponent"

import ErrorBoundary from "./custom/ErrorBoundary"

const App = () => {
  return(
    <Router>
      <div className="app">
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/movies" exact={true} component={Movies}/>
            <Route path="/movies/search" exact={true} component={SearchMoviesContainer} />
            <Route path="/photography" exact={true} component={Photography} />
            <Route path="/men" exact={true} component={MenSection} />
            <Route path="/men/shoes" exact={true} component={MenShoesComponent} />
            <Route path="/men/clothing" exact={true} component={MenClothingComponent} />
            <Route path="/women" exact={true} component={WomenSection} />
            <Route path="/women/shoes" exact={true} component={WomenShoesComponent} />
            <Route path="/women/clothing" exact={true} component={WomenClothingComponent} />
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  )
}

export default App