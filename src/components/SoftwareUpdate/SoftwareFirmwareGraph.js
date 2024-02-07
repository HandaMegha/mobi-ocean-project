import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class SoftwareFirmwareGraph extends Component {
  render() {
    const { data, height, yLabel, title, subtitle } = this.props;
    const options = {
      chart: {
        type: "bar",
        height: height,
      },
      title: {
        text: title,
        align: "left",
      },
      subtitle: {
        text: subtitle,
        align: "left",
        style: {
          fontSize: "12px",
          fontWeight: 600,
          color: "#222",
        },
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
          y: yLabel,
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
            enabled: true,
            x: 0,
            align: "left",
            reserveSpace: false,
            y: -5,
            style: {
              color: "#06152B",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              fontFamily: "Inter",
              whiteSpace: "nowrap",
            },
          },
        },
      },
      series: [
        {
          showInLegend: false,
          pointWidth: 15,
          data: data,
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default SoftwareFirmwareGraph;
