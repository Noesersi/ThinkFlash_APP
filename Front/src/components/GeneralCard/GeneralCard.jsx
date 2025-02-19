import GetProgress from './components/GetProgress';
import GetImage from './components/GetImage';
import React from 'react';
import getPreferentColor from '../../services/colors/getPreferentColor';

export default function GeneralCard({ children, title, shadow, minWidth, minHeight, img, progress, overflow }) {
    const colorMode = getPreferentColor(localStorage.getItem("opposite_color"));

    return (
        <div className={`m-2 d-flex justify-content-center align-items-center `} style={{ minHeight: minHeight, minWidth: minWidth, maxHeight: minHeight, maxWidth: minWidth }}>
            <div className="d-flex flex-wrap" style={{ minHeight: minHeight, minWidth: minWidth }}>

                <div className={`card bg-${colorMode} shadow${shadow}`} style={{ minHeight: minHeight, minWidth: minWidth }}>

                    <div className="container">
                        {img && GetImage(img)}
                        {progress && GetProgress({ progress: progress })}
                    </div>
                    <h5 className="card-title mx-2 my-1 text-center">{title}</h5>
                    {
                        overflow ? overflow !== "game" ? (<div className="card-body" style={{ maxHeight: 100 }}>
                            <div className="mh-100 d-flex flex-column justify-content-center align-item-center text-center">{children}</div>
                        </div>) :
                        (<div className="card-body" style={{ maxHeight: "21rem" }}>
                        <div className="h-100 d-flex flex-column justify-content-center align-item-center text-center">{children}</div>
                    </div>) :
                            (<div className="card-body px-1 p-0 d-flex flex-column justify-content-center align-item-end text-center">
                                <div className="mh-100 d-flex flex-column justify-content-center align-item-end text-center">{children}</div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}
