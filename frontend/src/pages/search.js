import * as React from "react";
import axios from "axios";
import { Grid, Card, TextField, Button } from "@mui/material";
import { styled } from "@mui/styles";

import Tables from "../components/table";
import Cards from "../components/cards";

const { REACT_APP_API } = process.env;

const Search = () => {
  const [data, setData] = React.useState([]);
  const [car, setCar] = React.useState([]);
  // const [week, setWeek] = React.useState([]);
  // const [month, setMonth] = React.useState([]);
  const [menber, setMenber] = React.useState([]);
  const [url, setUrl] = React.useState(`${REACT_APP_API}/api/search`);

  const [ctrlC, setCtrlC] = React.useState();
  const [ctrlM, setctrlM] = React.useState();
  const [ctrlW, setctrlW] = React.useState();
  const [ctrlMt, setctrlMt] = React.useState();

  React.useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios(url);
      const M = result.data.result.map((item) => {
        return item.menberID;
      });

      const C = result.data.result.map((item) => {
        return item.carID;
      });

      const W = result.data.result.map((item) => {
        return item.week;
      });

      const Mt = result.data.result.map((item) => {
        return item.month;
      });

      console.log(Mt);

      const m = M.filter((v, i, a) => a.indexOf(v) === i).length;
      const c = C.filter((v, i, a) => a.indexOf(v) === i).length;
      const w = W.filter((v, i, a) => a.indexOf(v) === i).length;
      const mt = Mt.filter((v, i, a) => a.indexOf(v) === i).length;

      setCtrlC(c);
      setctrlM(m);
      setctrlW(w);
      setctrlMt(mt);
      setData(result.data.result);
    };
    fetchAPI();
  }, [url]);

  const BtnSubmit = styled(Button)({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 46,
    marginTop: "5px",
    marginLeft: "5px",
    padding: "0 30px",
  });

  return (
    <Grid container spacing={{ xs: 1 }} columns={{ xs: 2, sm: 8, md: 10 }}>
      <Grid item md={2}>
        <Cards total={data.length} type="red" title="ข้อมูล" unit="ชุด" />
      </Grid>
      <Grid item md={2}>
        <Cards total={ctrlM} type="blue" title="พนักงาน" unit="คน" />
      </Grid>
      <Grid item md={2}>
        <Cards total={ctrlC} type="red" title="รถ" unit="คัน" />
      </Grid>
      <Grid item md={2}>
        <Cards total={ctrlW} type="blue" title="สัปดาห์" unit="สัปดาห์" />
      </Grid>
      <Grid item md={2}>
        <Cards total={ctrlMt} type="blue" title="เดือน" unit="เดือน" />
      </Grid>
      <Grid item xs={8}>
        <Card
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: 500, maxWidth: "100%" },
          }}
        >
          <TextField
            label="รหัสทะเบียนรถยนต์"
            size="small"
            value={car}
            onChange={(event) => setCar(event.target.value)}
          />
          <TextField
            label="รหัสพนักงาน"
            size="small"
            value={menber}
            onChange={(event) => setMenber(event.target.value)}
          />
          {/* <TextField
            label="สัปดาห์"
            size="small"
            value={week}
            onChange={(event) => setWeek(event.target.value)}
          />
          <TextField
            label="เดือน"
            size="small"
            value={month}
            onChange={(event) => setMonth(event.target.value)}
          /> */}
          <BtnSubmit
            type="button"
            onClick={() =>
              setUrl(
                `${REACT_APP_API}/api/search?menberID=${menber}&carID=${car}`
              )
            }
          >
            ค้นหา
          </BtnSubmit>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Tables data={data} />
      </Grid>
    </Grid>
  );
};

export default Search;
