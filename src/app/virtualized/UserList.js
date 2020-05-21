import React from "react";
import { FixedSizeList } from "react-window";

import { UserItem } from "../shared/UserItem";

import { getUsers } from "../../services";
import { Profiler } from "../shared/Profiler";

export const UserList = () => {
  const users = getUsers({ startIndex: 0, stopIndex: 20000 });

  return (
    <Profiler id="virtualized">
      <FixedSizeList
        height={700}
        width={400}
        itemSize={50}
        itemData={users}
        itemCount={users.length}
        overscanCount={5}
      >
        {UserListItem}
      </FixedSizeList>
    </Profiler>
  );
};

const UserListItem = ({ style, index, data }) => (
  <div style={style}>
    <UserItem user={data[index]} />
  </div>
);
