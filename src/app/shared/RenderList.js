import React, { useState, Fragment } from "react";

import { renderButton } from "./renderList.module.css";

export const RenderList = ({ children }) => {
  const [renderList, setRenderList] = useState(false);

  return (
    <Fragment>
      {!renderList ? (
        <button className={renderButton} onClick={() => setRenderList(true)}>
          Render list
        </button>
      ) : null}
      {renderList ? children : null}
    </Fragment>
  );
};
