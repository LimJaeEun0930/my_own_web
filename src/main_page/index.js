import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage(){
    return (
 <div>

    <div id="banner">
        <span className="banner_name">재은 </span>
        <img src= "/images/selfie.png" />
        <span className="banner_name"> 월드</span>
    </div>
    <div id="menubar" >
        <Link className="menubar-link" to={`/exercise`}>
            <span className="menu_name">운동 기록</span>
        </Link>
        <Link className="menubar-link" to={`/english`}>
            <span className="menu_name">영어 공부</span>
        </Link>
        <Link className="menubar-link" to={`/programming`}>
            <span className="menu_name">프로그래밍 공부</span>
        </Link>
        <Link className="menubar-link" to={`/myphotos`}>
            <span className="menu_name">개인전</span>
        </Link>
    </div>
</div>

    )
}

export default MainPage;