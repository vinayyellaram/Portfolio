import React from "react";

export default function Sky({ darkMode }) {

    console.log("Sky component rendered with darkMode:", darkMode);
    return (
        <div className={`sky ${darkMode ? "dark" : "light"}`}>
            {/* Clouds */}
            {/* <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
            <div className="cloud cloud3"></div> */}

            {/* Sun or Moon */}
            {/* {darkMode ? <div className="moon"></div> : <div className="sun"></div>} */}

            {/* Stars (only visible in dark mode) */}
            {darkMode && (
                <>
                    <div className="star star1"></div>
                    <div className="star star2"></div>
                    <div className="star star3"></div>
                    <div className="star star4"></div>
                    <div className="star star5"></div>
                </>
            )}
        </div>
    );
}
