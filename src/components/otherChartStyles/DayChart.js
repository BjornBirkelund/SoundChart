import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    // chartRef = React.createRef();
    constructor(props){
        // const myChartRef = this.chartRef.current.getContext("2d");
        super(props); //pass properties like height into
        this.state = { //create a state as object
            chartData:{ //create chart data as object
                labels: ['6AM','8AM','10AM','12PM','2PM','4PM','6PM'],
                datasets:[
                    {
                       label:'Decibel Level',
                       data:[
                           38,
                           50,
                           100,
                           124,
                           107,
                           85,
                           43  
                       ], 
                       backgroundColor: 'rgba(255,133,22,.6)' 
                    }
                ]
            }
        }
    }

    static defaultProps = {
        numSoundsDisplayed: 5,
        displayTitle:true,
        displayLegend: true
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={1000}
                    height={500}
                    options={{ 
                        maintainAspectRatio: false 
                        ,title: {
                            display:this.props.displayTitle,
                            text:'Decibel level for various sounds',
                            fontSize:25
                        }
                        ,legend: {
                            display: this.props.displayLegend,
                            position:'right'
                        }
                        ,scales: {
                            yAxes: [{
                                ticks: {
                                    max: 140,
                                    min: 0,
                                    
                                }
                            }]
                        }
                    }}
                />
            </div>  
        )
    }
}

export default Chart;