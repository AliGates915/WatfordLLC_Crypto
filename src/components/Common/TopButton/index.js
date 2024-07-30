import React, { useEffect } from "react";
import './styles.css';
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

function TopButton() {
  useEffect(() => {
    // Get the button
    let mybutton = document.getElementById("top-btn");

    // When the user scrolls down 500px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        mybutton.style.display = "flex";
      } else {
        mybutton.style.display = "none";
      }
    }
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div
      className="top-btn"
      id="top-btn"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }}
    >
      <ExpandLessRoundedIcon style={{ color: "var(--white)" }} />
    </div>
  );
}

export default TopButton;
