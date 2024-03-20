import { useEffect, useState } from "react";
import Dashboards from "@highcharts/dashboards/es-modules/masters/dashboards.src.js";
import DataGrid from "@highcharts/dashboards/es-modules/DataGrid/DataGrid";
import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
import HighchartsPlugin from "@highcharts/dashboards/es-modules/Dashboards/Plugins/HighchartsPlugin";
import DataGridPlugin from "@highcharts/dashboards/es-modules/Dashboards/Plugins/DataGridPlugin";
import { Container, Button, Stack } from "react-bootstrap";
import axios from "axios";

HighchartsPlugin.custom.connectHighcharts(Highcharts);
Dashboards.PluginHandler.addPlugin(HighchartsPlugin);

DataGridPlugin.custom.connectDataGrid(DataGrid);
Dashboards.PluginHandler.addPlugin(DataGridPlugin);

export default function Dashboard(props: any) {
  const { config } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    Dashboards.board("container", config, true);
  }, [config]);

  const handleGetSoundData = async () => {
    try {
      const response = await axios.get(
        `${process.env.VITE_BACKEND_DATA_BASE_URL}/sound-data`,
      );
      console.log(response);
      setData(response.data);
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
        <div className="p-2"><Button onClick={handleGetSoundData}>Get data</Button></div>
        <div className="p-2">
          <div id="container"></div>
        </div>
      </Stack>
    </Container>
  );
}
