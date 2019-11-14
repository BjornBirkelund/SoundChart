import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./Chart.module.css";

class BarGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        let myData = [120,30,40,100,30,70,90];
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
                labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                datasets: [
                    {
                        label: `Mean: ${Math.round(myDataMean)}`,
                        data: myData,
                        backgroundColor: 'rgba(255,240,77,.6)'
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