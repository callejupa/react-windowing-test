import React from "react";

import { RenderList } from "./shared/RenderList";
import { UserList } from "./novirtualized/UserList";

export const NoVirtualizedUserList = () => (
  <RenderList>
    <UserList />
  </RenderList>
);
