import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class SoftwareFirmwareGraph extends Component {
  render() {
    const { data, height } = this.props;
    const options = {
      chart: {
        type: "bar",
        height: height,
      },
      title: {
        text: "",
      },
      credits: { enabled: false },
      xAxis: {
        categories: ["Firmware update pushed", "Installed"],
        title: {
          text: null,
        },
        lineWidth: 0,
        labels: {
          x: 0,
          align: "left",
          y: -20,
          style: {
            color: "#06152B",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Inter",
            whiteSpace: "nowrap",
          },
        },
      },
      yAxis: {
        title: {
          text: "",
        },
        labels: {
          style: {
            color: "#615E83",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "Inter",
          },
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: false,
            x: 0,
            align: "left",
            reserveSpace: false,
            y: -30,
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          showInLegend: false,
          data: data,
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default SoftwareFirmwareGraph;
