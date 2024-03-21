import { useEffect, useState } from "react";
import Dashboards from "@highcharts/dashboards/es-modules/masters/dashboards.src.js";
import DataGrid from "@highcharts/dashboards/es-modules/DataGrid/DataGrid";
import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
import HighchartsPlugin from "@highcharts/dashboards/es-modules/Dashboards/Plugins/HighchartsPlugin";
import DataGridPlugin from "@highcharts/dashboards/es-modules/Dashboards/Plugins/DataGridPlugin";
import { Container, Button, Stack } from "react-bootstrap";
import axios from "axios";
import "../styles/Dashboard.css";

HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.PluginHandler.addPlugin(HighchartsPlugin);

DataGridPlugin.custom.connectDataGrid(DataGrid);
Dashboards.PluginHandler.addPlugin(DataGridPlugin);

type DataItem = {
  "date-time": string;
  data: string;
};

export default function Dashboard() {
  const [data, setData] = useState<DataItem[]>([]);

  const modifyData = (data: DataItem[]) => {
    const latestTenData = data.slice(-10);

    const sortedData = latestTenData.sort(
      (a, b) =>
        new Date(a["date-time"]).getTime() -
        new Date(b["date-time"]).getTime()
    );

    const modifiedData = sortedData.map(item => ({
      ...item,
      data: String((parseInt(item["data"]) / 255) * 150)
    }));

    return modifiedData;
  };

  useEffect(() => {
    const minX = Math.min(
      ...data.map((item) => new Date(item["date-time"]).getTime())
    );
    const maxX = Math.max(
      ...data.map((item) => new Date(item["date-time"]).getTime())
    );    
    
    Highcharts.chart("container", {
      chart: {
        type: "spline",
        scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1,
        },
      },
      title: {
        text: "Most recent sound level data from your FestiFob",
        align: "left",
      },
      subtitle: {
        text: "FestiFob id",
        align: "left",
      },
      xAxis: {
        type: "datetime",
        min: minX,
        max: maxX,
        labels: {
          overflow: "justify",
        },
      },
      yAxis: {
        title: {
          text: "Decibels (db)",
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [
          {
            from: 0,
            to: 70,
            color: "rgba(68, 170, 213, 0.1)",
            label: {
              text: "Safe",
              style: {
                color: "#bde8a2",
              },
            },
          },
          {
            from: 70,
            to: 85,
            color: "rgba(0, 0, 0, 0)",
            label: {
              text: "Risk of hearing damage",
              style: {
                color: "#e8e1a2",
              },
            },
          },
          {
            from: 85,
            to: 120,
            color: "rgba(68, 170, 213, 0.1)",
            label: {
              text: "Danger of hearing damage",
              style: {
                color: "#e8c6a2",
              },
            },
          },
          {
            from: 120,
            to: 150,
            color: "rgba(0, 0, 0, 0)",
            label: {
              text: "High risk of hearing damage",
              style: {
                color: "#e8a4a2",
              },
            },
          },
        ],
      },
      tooltip: {
        valueSuffix: " db",
      },
      plotOptions: {
        spline: {
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5,
            },
          },
          marker: {
            enabled: false,
          },
        },
      },
      series: [
        {
          name: "Sound level",
          data: data.map((item) => [
            new Date(item["date-time"]).getTime(),
            parseInt(item["data"]),
          ]),
        },
      ],
      navigation: {
        menuItemStyle: {
          fontSize: "10px",
        },
      },
    });
  }, [data]);

  const handleGetSoundData = async () => {
    try {
      const response = await axios.get(
        `${process.env.VITE_BACKEND_DATA_BASE_URL}/sound-data`
      );
      console.log(response);
      const modifiedData = modifyData(response.data);
      setData(modifiedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Stack gap={3}>
        <div className="p-2">
          <h1>Dashboard</h1>
        </div>
        <div className="p-2">
          <Button onClick={handleGetSoundData}>Get data</Button>
        </div>
        <div className="p-2">
          <div id="container"></div>
        </div>
      </Stack>
    </Container>
  );
}
