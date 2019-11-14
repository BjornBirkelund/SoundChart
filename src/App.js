import React, { Component } from 'react';
import './App.css';
import * as Charts from './components/charts';
import { Button,ButtonGroup,ButtonToolbar,ToggleButtonGroup,ToggleButton,Row,Col, Container } from 'react-bootstrap';
import './buttonGroup.css';

const b1Style = {
  // backgroundColor: 'rgba(255,255,255,0)',
  borderColor: 'white',
  borderWidth: '2px',
  borderRight: 'none'
};
const b2Style = {
  // backgroundColor: 'rgba(255,255,255,0)',
  borderColor: 'white',
  borderWidth: '2px',
  borderLeft: 'none',
  borderRight: 'none'
};
const b3Style = {
  // backgroundColor: 'rgba(255,255,255,0)',
  borderColor: 'white',
  borderWidth: '2px',
  borderLeft: 'none',
  borderRight: 'none'

};
const b4Style = {
  // backgroundColor: 'rgba(255,255,255,0)',
  borderColor: 'white',
  borderWidth: '2px',
  borderLeft: 'none'
};

const titleStyle = {
  color: "white",
  fontFamily: "PT Sans",
  fontWeight: "bold",
  fontSize: "200%",
};

class App extends Component {
  state = {
    selectedChartType: 'DayChart',
    soundlevels: {
      'DayChart': [ 10, 23, 30, 40,  50, 80, 12, 12,  12, 44, 55, 66 ],
      //...
    }
  };

  // TODO: caculate the different datas

  constructor() {
    super();

    setInterval(this.updateSoundLevels.bind(this), 2000);
  }

  updateSoundLevels( ) {
      console.log("update");
      let newSoundLevels = this.state.soundlevels['DayChart'].map((sl) => sl*2);

      this.setState({'soundlevels': { 'DayChart':  newSoundLevels }});
  }
  
  render(){
    return (
      
      <div className="App">
        <header className="App-header"> 
          <Container>    
            <Row>
              <Col xs={6} text-align-left>
                <h4 style={titleStyle}>Decibel Levels</h4>
              </Col>
              <Col col2 my-auto text-center xs={6}>
                {this.renderTimeSelector(b1Style,b2Style,b3Style,b4Style)}
              </Col>
            </Row> 
          </Container>

              {this.renderSelectedChart(this.state.selectedChartType)}
        </header>
      </div>
    );
  }

  renderTimeSelector(b1Style,b2Style,b3Style,b4Style) {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup size='lg' type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1} style={b1Style} variant="outline-light"
          onClick={(e) => {this.setState({ selectedChartType: "DayChart"})}}>Day</ToggleButton>
          <ToggleButton value={2} style={b2Style} variant="outline-light"
          onClick={(e) => {this.setState({ selectedChartType: "WeekChart"})}}>Week</ToggleButton>
          <ToggleButton value={3} style={b3Style} variant="outline-light"
          onClick={(e) => {this.setState({ selectedChartType: "MonthChart"})}}>Month</ToggleButton>
          <ToggleButton value={4} style={b4Style} variant="outline-light"
          onClick={(e) => {this.setState({ selectedChartType: "YearChart"})}}>Year</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }

  renderSelectedChart(selectedChartType) {
    const Chart = Charts[selectedChartType];
    const data = this.state.soundlevels[selectedChartType];
    return <Chart data={data}/>
  }

}

  

export default App;
