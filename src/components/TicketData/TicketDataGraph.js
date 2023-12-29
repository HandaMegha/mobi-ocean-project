import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class TicketDataGraph extends Component {
  render() {
    const options = {
      chart: {
        height: 150,
      },
      title: {
        text: "",
      },

      xAxis: {
        // accessibility: {
        //   rangeDescription: "Range: 2010 to 2020",
        // },
        type: "datetime",
        dateTimeLabelFormats: {
          week: "%e of %b",
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

      yAxis: {
        title: {
          text: "",
        },
        gridLineDashStyle: "longdash",
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
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2023,
        },
      },

      series: [
        {
          name: "Last Month",
          data: [
            5000, 5020, 4900, 800, 900, 6000, 5000, 5070, 5000, 500, 0, 5000,
            8000, 7000, 800, 400, 6000, 5000, 5060, 500, 4090, 5020,
          ],
          pointStart: Date.UTC(2023, 0, 7),
          pointInterval: 24 * 3600 * 1000 * 7, // one week
          color: "#962DFF",
        },
        {
          name: "This Month",
          data: [
            6000, 5090, 4900, 600, 500, 7000, 6000, 5090, 4000, 300, 0, 4000,
            6500, 6000, 700, 200, 7000, 5000, 5060, 400, 4050, 4020,
          ],
          pointStart: Date.UTC(2023, 0, 7),
          pointInterval: 24 * 3600 * 1000 * 7, // one week
          color: "#FCB5C3",
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    };
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  }
}

export default TicketDataGraph;
