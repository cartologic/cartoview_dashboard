import React, { Component } from 'react';


var Line = require("react-chartjs").Line;
var Doughnut = require("react-chartjs").Doughnut;
var Bar = require("react-chartjs").Bar;

// var Bar = ChartJs.Bar;
// var Line = ChartJs.Line;
// var Doughnut = ChartJs.Doughnut;


class BaseChartWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.wpsClient = new WpsClient({
      geoserverUrl: "/geoserver"
    });
  }
  componentDidMount()  {
    this.update(this.state.config);
  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.config != nextState.config ){
      this.update(nextState.config);
    }
    return true;
  }
  update(config){
    if(config.typeName){
      this.wpsClient.aggregate(config).then((data) => {
        this.setData(data);
      });
    }
  }
  setData(data){
    var labels = data.AggregationResults.map((item) => item[0]);
    var values = data.AggregationResults.map((item) => item[1]);
    // data.AggregationResults.map((item) => {
    //   labels.push(item[0]);
    //   values.push(item[1]);
    // });
    this.state.data.labels = labels;
    this.state.data.datasets[0].data = values;
    this.setState({
      data: this.state.data
    });
  }

}
class BarChartWidget extends BaseChartWidget{
  constructor(props) {
    super(props);
    this.state.data = {
        labels: [],
        datasets: [
          {
            // label: 'Bar Chart First dataset',
            fillColor: '#0094D6',
            // strokeColor: '#0094D6',
            // highlightFill: 'rgba(220,220,220,0.75)',
            // highlightStroke: 'rgba(220,220,220,1)',
            data: [],
          }
        ]
      };
  }

  render() {
      return <div className="bar-chart-ct">
        <Bar data={this.state.data}  options={{responsive: true, animationSteps: 100 }} height="210" width="800"/>
      </div> ;
  }
};


class LineChartWidget extends BaseChartWidget {
  constructor(props) {
    super(props);

    this.state.data = {
        labels: [],
        datasets: [
          {
            // label: 'Singal',
            fillColor: '#F1E7E5',
            strokeColor: '#E8575A',
            pointColor: '#E8575A',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#ff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [],
          },
        ],
    };
  }

  render() {
    return (
      <div className="line-chart-ct">
         <Line data={this.state.data} options={{responsive: true, animationSteps: 100 }} height="210" width="800"/>
       </div>
    );
  }
}


class DoughnutChartWidget extends BaseChartWidget {
  constructor(props) {
    super(props);
    this.state.data = [];
  }
  setData(data){
    var values = [];
    data.AggregationResults.map((item) => {
      values.push({
        label: item[0],
        value:item[1]
      });
    });
    this.state.data = values;
    this.setState({
      data: this.state.data
    });
  }
  render() {
    return (
      <div className="doughnut-chart-ct">
         <Doughnut data={this.state.data} options={{ animationEasing: 'easeInSine', showTooltips: true }} height="200" width="350"/>
       </div>
    );
  }
}

Dashboard.registerWidget(LineChartWidget);
Dashboard.registerWidget(DoughnutChartWidget);
Dashboard.registerWidget(BarChartWidget);
