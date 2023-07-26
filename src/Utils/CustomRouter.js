import { useLayoutEffect, useState } from "react";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const CustomRouter = ({ ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
