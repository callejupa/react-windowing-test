import React, { useCallback, useState } from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import { UserItem } from "../shared/UserItem";
import { UserItemSkeleton } from "./userList/UserItemSkeleton";

import { getUsers } from "../../services";

const TOTAL_USERS = 20000;

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const loadMoreItems = useLoadMoreItems({ users, setUsers });
  const isItemLoaded = useCallback(index => !!users[index], [users]);
  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={20000}
      loadMoreItems={loadMoreItems}
      minimumBatchSize={100}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          ref={ref}
          onItemsRendered={onItemsRendered}
          height={700}
          width={500}
          itemSize={50}
          itemData={users}
          itemCount={TOTAL_USERS}
          overscanCount={5}
          useIsScrolling={true}
        >
          {UserListItem}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
};

const useLoadMoreItems = ({ users, setUsers }) =>
  useCallback(
    (startIndex, stopIndex) =>
      new Promise(resolve => {
        setTimeout(() => {
          console.log(
            `Load items from index ${startIndex} to index ${stopIndex}`
          );
          const loadedUsers = getUsers({ startIndex, stopIndex });
          setUsers([...users, ...loadedUsers]);
          resolve();
        }, 1000);
      }),
    [setUsers, users]
  );

const UserListItem = ({ style, index, data, isScrolling }) => (
  <div style={style}>
    {data[index] ? (
      <UserItem user={data[index]} showImageAvatar={!isScrolling} />
    ) : (
      <UserItemSkeleton />
    )}
  </div>
);
