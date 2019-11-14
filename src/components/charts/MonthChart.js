import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./Chart.module.css";

class BarGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        let myData = [100,20,48,12,108,85];
        let myDataSum = 0;
        for (let i=0;i<myData.length;i++)
        {
            myDataSum+=myData[i];
        }
        let myDataMean = myDataSum/myData.length;

        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ['Day 5','Day 10','Day 15','Day 20','Day 25','Day 30'],
                datasets: [
                    {
                        label: `Mean: ${Math.round(myDataMean)}`,
                        data: myData,
                        backgroundColor: 'rgba(125,255,22,.6)'
                    }
                ]
            },
            options: {
                maintainAspectRatio: false 
                // ,title: {
                //     display: true,
                //     text:'Decibel level for various sounds',
                //     fontSize:25
                // }
                ,legend: {
                    labels: {
                        fontStyle: 'bold'
                    },
                    display: true,
                    position:'top'
                    
                }
                ,scales: {
                    yAxes: [{
                        ticks: {
                            max: 140,
                            min: 0 
                        },
                    }]
                }
                //Customize chart options
            }
        });
    }
    render() {
        return (
                <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
        )
    }
}

export default BarGraph;