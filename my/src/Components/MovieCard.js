import React from 'react'
import "./Moviscartlist.css";

const MovieCard = ({ Titl, Description, Poster, Rate, Year  } ) => {
    
    return (
        <div className="card h-100 mb-4">                    
            <div className="card-header">                                
                <h5 className="card-title m-0 p-0 font-weight-bolder text-secondary">{Titl}</h5>
            </div>
            <div className="card-body text-left">
                <p className="card-text"><img src={Poster} alt="" /></p>
                <span className="font-lead-base font-weight-bold text-muted"> {Year} </span>
                <div className="promotion-promo">{Description}</div>
                <div className="promotion-price">
                    <div className="promotion-price-desc">Rate</div>
                    <div className="promotion-price-text">{Rate}</div>                                    
                </div>
            </div>
            <div className="card-footer"><a href='#'  className="btn btn-warning">Open</a></div>
        </div>
    )
}

export default MovieCard
