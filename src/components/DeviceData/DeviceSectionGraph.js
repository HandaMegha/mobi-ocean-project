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
            distance: "-25%",
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
      colors: ["#4A3AFF", "#DB5AEE", "#1AD598", "#F9B959"],
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
