import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props); //pass properties like height into
        this.state = { //create a state as object
            chartData:{ //create chart data as object
                labels: ['Day 5','Day 10','Day 15','Day 20','Day 25','Day 30'], //days in the month
                datasets:[
                    {
                       label:'Decibel Level',
                       data:[
                           100,
                           20,
                           48,
                           12,
                           108,
                           85  
                       ], 
                       backgroundColor: 'rgba(125,255,22,.6)' 
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