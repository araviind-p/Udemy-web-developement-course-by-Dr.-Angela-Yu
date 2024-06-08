import React from "react";
import ReactDOM from "react-dom";
const currentYear=new Date().getFullYear();

function Footer(){
    return(
        <footer>
            <p>
                copyright©{currentYear}
            </p>
        </footer>
    )
}
export default Footer;