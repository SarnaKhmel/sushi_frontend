import { useEffect } from "react";

// Object in which we will save our scroll position state
const scrollPositions = {};

/* custom hook which will save the scroll state and also set 
the scroll position of our page */
const useScrollPosition = (page) => {
  useEffect(() => {
    // Get the scroll state if it exists

    const pageScrollPosition = scrollPositions[page];

    // If it exists then set the scroll position of our page

    if (pageScrollPosition) {
      /* Using setTimeout to set the scroll position of the 
page as useEffect gets triggered before the page has 
actually rendered */

      setTimeout(() => {
        window.scrollTo(0, pageScrollPosition);
      }, 50);
    }

    /* save function to save the scroll position in 
the scrollPositions object */

    const save = () => {
      scrollPositions[page] = window.scrollY;
    };

    /* Attaching an event listener to listen for a scroll event 
and then fire the save function everytime a scroll event occurs */

    window.addEventListener("scroll", save);

    /* Removing the event listener when the component unmounts*/

    return () => {
      window.removeEventListener("scroll", save);
    };
  }, [page]);
};

export default useScrollPosition;
