import React from "react";

import { userItem } from "./userItem.module.css";
import defaultAvatar from "../../assets/images/user.png";

export const UserItem = ({
  showImageAvatar = true,
  user: { name, firstName, avatar }
}) => (
  <div className={userItem}>
    <img
      src={showImageAvatar ? avatar : defaultAvatar}
      alt={`${name} avatar`}
    />
    <span>
      {name} {firstName}
    </span>
  </div>
);
