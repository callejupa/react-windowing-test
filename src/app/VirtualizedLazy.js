import React from "react";

import { RenderList } from "./shared/RenderList";
import { UserList } from "./virtualizedLazy/UserList";

export const VirtualizedLazy = () => (
  <RenderList>
    <UserList />
  </RenderList>
);
