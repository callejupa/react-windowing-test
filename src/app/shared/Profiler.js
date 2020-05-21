import React from "react";

const profileMountTime = (id, phase, renderTime) =>
  phase === "mount"
    ? console.log(
        `The ${id} list in ${phase} render spent ${(renderTime / 1000).toFixed(
          4
        )}s`
      )
    : null;

export const Profiler = ({ id, children }) => (
  <React.unstable_Profiler id={id} onRender={profileMountTime}>
    {children}
  </React.unstable_Profiler>
);
