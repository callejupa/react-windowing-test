import React from "react";

import {
  userItemSkeleton,
  imageSkeleton,
  textSkeleton
} from "./userItemSkeleton.module.css";

export const UserItemSkeleton = () => (
  <div className={userItemSkeleton}>
    <div className={imageSkeleton} />
    <div className={textSkeleton} />
  </div>
);
