import React, { Fragment } from "react";
import { Router, Redirect } from "@reach/router";

import { Menu } from "./app/Menu";
import { NoVirtualizedUserList } from "./app/NoVirtualized";
import { VirtualizedUserList } from "./app/Virtualized";
import { VirtualizedScrollingUserList } from "./app/VirtualizedScrolling";
import { VirtualizedLazy } from "./app/VirtualizedLazy";

export const App = () => (
  <Fragment>
    <header>
      <Menu />
    </header>
    <main>
      <Router>
        <Redirect noThrow from="/" to="no-virtualized" />
        <NoVirtualizedUserList path="/no-virtualized" />
        <VirtualizedUserList path="/virtualized" />
        <VirtualizedScrollingUserList path="virtualized-scrolling" />
        <VirtualizedLazy path="virtualized-lazy" />
      </Router>
    </main>
  </Fragment>
);
