import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class TransactionDataGraph extends Component {
  render() {
    const { height, countColor, amountColor } = this.props;
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
        categories: ["Total Transaction Count", "Total Transaction Amount"],
        title: {
          text: null,
        },
        lineWidth: 0,
        labels: {
          x: 0,
          align: "left",
          y: -25,
          style: {
            color: "#06152B",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "inherit",
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
            fontFamily: "inherit",
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
            y: -4,
            style: {
              color: "#615E83",
              fontSize: "14px",
            },
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          showInLegend: false,
          pointWidth: 20,
          data: [
            { y: 999500, color: countColor },
            { y: 505000, color: amountColor },
          ],
        },
      ],
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default TransactionDataGraph;
