import { FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import LineGraph from "./components/LineGraph";
import axios from './axios';

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: theme.spacing(5),
    '& .MuiTypography-h4': {
      fontWeight: 700
    },
    '& .MuiTypography-h5': {
      textTransform: 'capitalize'
    },
    '& .MuiFormControl-root': {
      width: theme.spacing(35),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up(768)]: {
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(10)
      }
    },
    [theme.breakpoints.up(768)]: {
      marginTop: theme.spacing(10)
    },
    '& .MuiTypography-caption': {
      fontWeight: 700
    }
  },
  h4: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}))
function App() {

  const classes = useStyles();

  const [country, setCountry] = useState('Global');
  const [totalCases, setTotalCases] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidSummary, setCovidSummary] = useState({});
  const [newCases, setNewCases] = useState(0);
  const [globalCount, setGlobalCount] = useState([]);

  useEffect(() => {
    setLoading(false);
    axios.get('/summary')
      .then(res => {
        setLoading(false);

        if (res.status === 200) {
          setTotalCases(res.data.Global.TotalConfirmed);
          setTotalDeaths(res.data.Global.TotalDeaths);
          setTotalRecovered(res.data.Global.TotalRecovered);
          setNewCases(res.data.Global.NewConfirmed);
          setCovidSummary(res.data);
        }
      })
      .catch(error => {
        console.log(error);
      });

    axios.get('/world?from=2021-01-01T00:00:00Z&to=2021-04-27T00:00:00Z')
      .then(res => {

        const globalGraph = res.data.map(d => d.TotalConfirmed);

        setGlobalCount(globalGraph);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const countryHandler = (e) => {
    setCountry(e.target.value);

    getCoronaReport(e.target.value);
  };

  const getCoronaReport = (countrySlug) => {
    axios.get(`/country/${countrySlug}/status/confirmed?from=2021-01-01T00:00:00Z&to=2021-04-27T00:00:00Z`)
      .then(res => {

        const yAxisCoronaCount = res.data.map(d => d.Cases);
        const covidDetails = covidSummary.Countries.find(country => country.Slug === countrySlug);

        setGlobalCount(yAxisCoronaCount);
        setTotalCases(covidDetails.TotalConfirmed);
        setTotalDeaths(covidDetails.TotalDeaths);
        setTotalRecovered(covidDetails.TotalRecovered);
        setNewCases(covidDetails.NewConfirmed);
      })
      .catch(error => {
        console.log(error);
      });
  }

  if (loading) {
    return <p>Loading</p>
  }

  return (
    <>
      <Grid
        className={classes.grid}
        container
        direction='column'
        alignItems='center'>
        <Typography
          variant='h4'>
          COVID-19
    </Typography>
        <Typography
          className={classes.h4}
          variant='h4'>
          2021
    </Typography>
        <Typography
          align='center'
          variant='h5'>
          {country}
        </Typography>
        <LineGraph graph={globalCount} />
        <FormControl variant='outlined'>
          <InputLabel>Select Country</InputLabel>
          <Select
            value={country}
            label='Select Country'
            onChange={countryHandler}>
            {covidSummary.Countries && covidSummary.Countries.map(country =>
              <MenuItem key={country.Slug} value={country.Slug}>{country.Country}</MenuItem>
            )}
          </Select>
        </FormControl>
        <Card
          newCases={newCases}
          totalCases={totalCases}
          totalDeaths={totalDeaths}
          totalRecovered={totalRecovered} />
        <Typography variant='caption'>
          Made with <a style={{ textDecoration: 'none' }} href="https://covid19api.com/">COVID 19 API</a> by Anjeryan.S.P
        </Typography>
      </Grid>
    </>
  );
}

export default App;
