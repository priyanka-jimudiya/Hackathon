import { Avatar } from "@mui/material";
import React from "react";
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import JoinFullIcon from '@mui/icons-material/JoinFull';

function Home() {
    const colorStyle = { backgroundColor: '#71BFBC' }
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
                        <img src="sideimg.png" className="mt-5" width={440} alt="SideImage" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-5 col-lg-6 none">
                        <div className="mt-5 home-heading">
                            Make your <br /><b>bulk certificates </b><br />
                            from here . . .
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 col-lg-6 text-body-secondary slogan">Be certified, be confident, be the best</div>

                    </div>
                </div>
                <h4 className="font-poppins mt-4" style={{ color: '#111' }}>Our motive</h4>
            </div>
            <div className="container" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <div class="row cards " style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <div class="col-sm-12 col-md-4 mt-4">
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <div class="card-body card-bg1">
                                <Avatar style={colorStyle}><RocketLaunchOutlinedIcon></RocketLaunchOutlinedIcon></Avatar>
                                <h5 class="card-title font-poppins  mt-4"><b>More than a certificate maker</b></h5>
                                <p class="card-text mt-3">
                                    We’re not just a certificate maker. Certifier is an all-in-one solution for all aspects of digital certification, from certificate designs to issuing and tracking.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 mt-4">
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <div class="card-body card-bg1">
                                <Avatar style={colorStyle}><SettingsIcon></SettingsIcon> </Avatar>
                                <h5 class="card-title font-poppins mt-4"><b>Features beyond the expected</b></h5>
                                <p class="card-text mt-3">On other hand certificate makers are limited in the features they offer. With Certificate-Gen, you can take your certificate creation process according to the advanced.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 mt-4">
                        <div class="card" style={{ width: "18rem", height: "18rem" }}>
                            <div class="card-body card-bg1">
                                <Avatar style={colorStyle}><JoinFullIcon></JoinFullIcon></Avatar>
                                <h5 class="card-title font-poppins mt-4"><b>Best value at a competitive price</b></h5>

                                <p class="card-text mt-3">Certifier offers a quick and easy way to manage your entire certification issuing process at the best value for a competitive price.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Home