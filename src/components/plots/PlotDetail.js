import React, {useState} from 'react';
import PlotComment from './PlotComment';
import NewPlotComment from './NewPlotComment';
import {Redirect} from 'react-router-dom';


import '../../css/Plots.css';
import LogoSmall from '../../css/LogoSmall.png';

const PlotDetail = ({currentUser, plot, plots, getDate, postComment}) =>{

    const [backHandler, setBackHandler] = useState(0);

    const getPlotHolders = () => {
    let plotHolders = "";
    let i = 0;
    for(let user of plot.users){
        if (i>0){plotHolders += ", "};
        plotHolders += user.shortName;
        i++;
    }
    return plotHolders;
    }

    const plotComments = plot.comments.map((comment, index) => 
    
            <li><PlotComment key={index} comment={comment} currentUser={currentUser}/>
            <hr/>
            </li>  
            
        )
    
    const getArea = (length, breadth) => (Math.round(length * breadth * 10) / 10);
    const plotSize = getArea(plot.length, plot.breadth);

    const plotSizes = plots.map((item) => getArea(item.length, item.breadth));

    // calculates position in plot sizes league table
    const calculateClassification = function(mySize){
    return plotSizes.filter((size) => (size > mySize)).length;
    }

    const handleBackClick= () => {
        setBackHandler(1);
    }

    return(
        <>
        <div id="plots-grid-container2">

            <div id="logo-grid">
                <img  class="logo2" src={LogoSmall} alt="LogoSmall" />
            </div>

            <div id="plot-details-grid">
            <p class="plot-detail1">Details for {plot.areaName}</p>
            <ul class="margin">
                <li class="plot-detail2"> - Plot Number: {plot.plotNumber}</li>
                <li class="plot-detail2"> - Dimensions: {plot.length}m x {plot.breadth}m</li>
                <li class="plot-detail2"> - Area: {plotSize} m&sup2;</li>
                <li class="plot-detail2"> - classification: {calculateClassification(plotSize)}</li>
                <li class="plot-detail2"> - Inclination: {plot.isFlat ? "flat" : "slope"}</li>
                <li class="plot-detail2"> - Plot holders: {getPlotHolders()}</li>
            </ul>
            </div>
        


            <div id="plot-history-grid">
                <p class="plot-detail1">Plot history</p>
                
                <NewPlotComment plot={plot} getDate={getDate} currentUser={currentUser}  postComment={postComment}/>
                
                {plot.comments?<ul  class="plot-detail2">{plotComments}</ul>: null}
            </div>
            <div className = "plot-back" onClick = {()=> handleBackClick()}>
                Back
            </div>

            {backHandler === 1 ? <Redirect to='/plots'/> : null}
        </div>  
        </>
    )

}

export default PlotDetail;