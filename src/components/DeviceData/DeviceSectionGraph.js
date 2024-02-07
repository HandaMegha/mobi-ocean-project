import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class DeviceSectionGraph extends Component {
  render() {
    const options = {
      chart: {
        height: 300,
      },
      title: {
        text: "",
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        valueDecimals: 2,
      },
      credits: { enabled: false },
      plotOptions: {
        series: {
          borderWidth: 0,
          colorByPoint: true,
          type: "pie",
          size: "100%",
          innerSize: "50%",
          dataLabels: {
            enabled: true,
            crop: false,
            distance: "-5%",
            format: "<b>{point.name}</b> <br /> {point.y}",
            style: {
              color: "#06152B",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "400",
              fontFamily: "Inter",
              whiteSpace: "nowrap",
            },
            connectorWidth: 0,
          },
        },
      },
      colors: ["#7E74E9", "#E9A5F3", "#98EDD1", "#F4D6A8"],
      series: [
        {
          type: "pie",
          name: "",
          data: this.props.data,
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default DeviceSectionGraph;
