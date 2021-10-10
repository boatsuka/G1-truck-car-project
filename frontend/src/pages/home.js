import * as React from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import Tables from "../components/table";
import Cards from "../components/cards";

const { REACT_APP_API } = process.env;

const Home = () => {
  const [car, setCar] = React.useState(0);
  const [menber, setMenber] = React.useState(0);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios(`${REACT_APP_API}/api/data`);
      
      const M = result.data.result.map((item) => {
        return item.menberID
      })

      const C = result.data.result.map((item) => {
        return item.carID;
      });

      const m = M.filter((v, i, a) => a.indexOf(v) === i).length
      const c = C.filter((v, i, a) => a.indexOf(v) === i).length;

      setCar(c);
      setMenber(m);
      setData(result.data.result);
    };
    fetchAPI();
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Cards total={data.length} type="red" title="จำนวนข้อมูล" unit="ชุด" />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Cards total={menber} type="blue" title="จำนวนพนักงาน" unit="คน" />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Cards total={car} type="blue" title="จำนวนรถ" unit="คัน" />
        </Grid>
        <Grid item xs={8}>
          <Tables data={data} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
