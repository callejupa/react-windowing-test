import React from "react";

import { UserItem } from "../shared/UserItem";

import { getUsers } from "../../services";

import { userList } from "./userList.module.css";
import { Profiler } from "../shared/Profiler";

export const UserList = () => {
  const users = getUsers({ startIndex: 0, stopIndex: 20000 });

  return (
    <Profiler id="noVirtualized">
      <ul className={userList}>
        {users.map((user, index) => (
          <li key={index}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </Profiler>
  );
};
