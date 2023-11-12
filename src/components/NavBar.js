import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const bar = links.map((titles , index) =>{
    return <a key={index} href={`#${titles}`} >{titles}</a>
  })
  return <nav>
        {bar}
        </nav>;
}

export default NavBar;
