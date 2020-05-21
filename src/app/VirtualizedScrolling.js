import React from "react";

import { RenderList } from "./shared/RenderList";
import { UserList } from "./virtualizedScrolling/UserList";

export const VirtualizedScrollingUserList = () => (
  <RenderList>
    <UserList />
  </RenderList>
);
