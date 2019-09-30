import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

class PokemonContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/pokemon/page/:page" component={PokemonList} />
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/404" component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default PokemonContainer;