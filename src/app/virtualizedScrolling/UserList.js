import React from "react";
import { FixedSizeList } from "react-window";

import { UserItem } from "../shared/UserItem";

import { getUsers } from "../../services";

export const UserList = () => {
  const users = getUsers({ startIndex: 0, stopIndex: 20000 });

  return (
    <FixedSizeList
      height={700}
      width={500}
      itemSize={50}
      itemData={users}
      itemCount={users.length}
      overscanCount={5}
      useIsScrolling={true}
    >
      {UserListItem}
    </FixedSizeList>
  );
};

const UserListItem = ({ style, index, data, isScrolling }) => (
  <div style={style}>
    <UserItem user={data[index]} showImageAvatar={!isScrolling} />
  </div>
);
