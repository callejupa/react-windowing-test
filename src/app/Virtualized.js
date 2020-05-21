import React from "react";

import { RenderList } from "./shared/RenderList";
import { UserList } from "./virtualized/UserList";

export const VirtualizedUserList = () => (
  <RenderList>
    <UserList />
  </RenderList>
);
