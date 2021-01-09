import React from "react";
import "./style.css";
let styles = {
  backgroundImage: "linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.7)), url(https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
}
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4" style={styles}>{children}</div>;
}

export default Jumbotron;
