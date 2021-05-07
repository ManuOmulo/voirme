import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loadable from "react-loadable"
import { Loading } from "./custom/Loading"

// css
import "./scss/App.scss"

import Home from "./Home"
import ErrorBoundary from "./custom/ErrorBoundary"

const Movies = Loadable({
  loader: () => import("./pages/movies/movies"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})

const SearchMoviesContainer = Loadable({
  loader: () => import("./pages/movies/searchMoviesContainer"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})

const Photography = Loadable({
  loader: () => import("./pages/photography/Photography"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})

const MenSection = Loadable({
  loader: () => import("./pages/Men"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})

const MenShoesComponent = Loadable({
  loader: () => import("./pages/shoes/MenShoesComponent"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})

const MenClothingComponent = Loadable({
  loader: () => import("./pages/clothing/MenClothingComponent"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})

const WomenSection = Loadable({
  loader: () => import("./pages/Women"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})

const WomenClothingComponent = Loadable({
  loader: () => import("./pages/clothing/WomenClothingComponent"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})

const WomenShoesComponent = Loadable({
  loader: () => import("./pages/shoes/WomenShoesComponent"),
  loading: Loading,
  timeout: 10000,
  delay: 300
})


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