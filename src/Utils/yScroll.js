import React, { createContext, useState } from "react";

export const yScrollContext = createContext({
  yScroll: 0,
  setYscroll: () => {},
});

export const YScroll = ({ children }) => {
  const [yScroll, setYscroll] = useState(0);
  const value = { yScroll, setYscroll };

  return (
    <yScrollContext.Provider value={value}>{children}</yScrollContext.Provider>
  );
};
