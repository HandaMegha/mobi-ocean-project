import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class SoftwareUpdatesGraph extends Component {
  render() {
    const options = {
      chart: {
        type: "bar",
        height: 330,
      },
      title: {
        text: "",
      },
      xAxis: {
        categories: [
          "App version update pushed",
          "Installed",
          "Firmware update pushed",
          "Installed",
        ],
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
          data: [
            { y: 100, color: "#962DFF" },
            { y: 65, color: "#E0C6FD" },
            { y: 52, color: "#4A3AFF" },
            { y: 80, color: "#C6D2FD" },
          ],
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default SoftwareUpdatesGraph;
