import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./Chart.module.css";


class BarGraph extends Component {
    chartRef = React.createRef();
    
    constructor() {
        super();
        this.chart = null;
    }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        let myData = this.props.data;

        this.chart = new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["12AM","2AM","4AM","6AM", "8AM", "10AM","12PM", "2PM", "4PM","6PM","8PM","10PM","12PM"],
                datasets: [
                    {
                        label: "", // `Mean: ${Math.round(myDataMean)}`,
                        data: myData,
                        backgroundColor: 'rgba(255,52,33,.6)'     
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
        console.log("made chart", this.chart);
    }

    render() {
        var {data} = this.props;
        console.log("got data", data, this.chart);
        if (this.chart) {
            this.chart.datasets[0].data = data;
        } else {
            
        }
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