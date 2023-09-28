import { React } from "react";
import { Link } from "react-router-dom";


function Footer() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src="../logo.png" width={185} alt="Certificate Gen" />
                    </div>
                    <div className="col-8">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Templates</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Footer