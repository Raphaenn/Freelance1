import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { format, parseISO, formatDistance } from "date-fns";
import pt from 'date-fns/locale/pt';

import PetsIcon from '@material-ui/icons/Pets';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import AssistantIcon from '@material-ui/icons/Assistant';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import WorkIcon from '@material-ui/icons/Work';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
/* Material Table Imports  */
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { Container, Body, Left, TitleLeft, ListLeft, ListItem, ListItemAvatar, Avatar, Plus, ListItemText, ListItemText2, Right, Top, TitleRight, Bar, Base} from './styles';
import DropSelect from "../../components/Select";

import api from "../../services/api";


export default function Tickets() {

  const classes = useStyles();
  const [ cupons, setCupons ] = useState([]);
  const [ empresas, setEmpresas ] = useState([]);
  const [ separar, setSeparar ] = useState([]);
  const [ chartData, setChartData ] = useState([]);

  useEffect(() => {
    async function loadTickets() {
        const response = await api.get('cupom');
        
        const allTickets = response.data.map(item => item);

        const companiesFilter = response.data.map( item => item.companies.name );
        const onlynames = companiesFilter.filter((el, i, arr) => companiesFilter.indexOf(el) == i);

        const ChartSum = allTickets.reduce(function( object , item ){  
          if ( !object[item.companies.name] ) {
             object[item.companies.name]=1;
          } else {
             object[item.companies.name]++;
          }
          return object; 
        },{});  

        const ChartInput = Object.keys(ChartSum).map(e => ({ Chave: e, [e]: ChartSum[e]}))

        setCupons(allTickets);
        setEmpresas(onlynames);
        setChartData(ChartInput);
    }
    loadTickets();
    }, []);

    const catchData = dados => {
      setSeparar(dados);
    }

    const carregar = separar.length !== 0 ? separar : cupons;

  return (
    <Container>
      <Body>

        <Left>
          <TitleLeft>
            <h1>Últimos cupons adquiridos</h1>
          </TitleLeft>

          <ListLeft>
           {cupons.map(item => (
              <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>
                  { item.category.name === "Comida" ? <RestaurantIcon style={{ color: '#E93148' }} /> : item.category.name === "Beleza" ? <AssistantIcon style={{ color: '#fff' }} /> : item.category.name === "Casa" ? 
                  <HomeIcon style={{ color: '#fff' }} /> : item.category.name === "Construção" ? <BuildIcon style={{ color: '#fff' }} /> : item.category.name === "Moda" ? <LocalOfferIcon style={{ color: '#FF9F1C' }} />
                  : item.category.name === "Serviços" ? <WorkIcon style={{ color: '#17248B' }} /> : item.category.name === "Automóvel" ? <DirectionsCarIcon style={{ color: '#010F19' }} /> : item.category.name === "Pet" ? <PetsIcon style={{ color: '#fff' }} /> : item.category.name === "Saúde" ? <DirectionsRunIcon style={{ color: '#8DB438' }} /> : <ShoppingCartIcon style={{ color: '#fff' }} />
                  }
                </Avatar>
              
              </ListItemAvatar>
              <div>
              <ListItemText> {item.companies.name} </ListItemText>
              <ListItemText2> {format(parseISO(item.created_at), "dd/MM/yyyy", {locale: pt})}  - {item.category.city}</ListItemText2>
              </div>
              <Plus ><span> {item.name} </span></Plus>
            </ListItem>
           ))}
          </ListLeft>
          
        </Left>

        <Right>
            <TitleRight>
              <h1>Dados dos Cupons</h1>
              <DropSelect catchData={catchData} nomes={empresas} tickets={cupons}/>
            </TitleRight>

            <Top>
              <Bar>
                
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">Empresa</StyledTableCell>
                        <StyledTableCell align="center">Ticket</StyledTableCell>
                        <StyledTableCell align="center">Id</StyledTableCell>
                        <StyledTableCell align="center">Data</StyledTableCell>
                        <StyledTableCell align="center">Destaque</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {carregar.map((row) => (
                        <StyledTableRow key={row.id}>
                          <StyledTableCell align="center" component="th" scope="row">
                            {row.companies.name}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.name}</StyledTableCell>
                          <StyledTableCell align="center">{row.id}</StyledTableCell>
                          <StyledTableCell align="center">{format(parseISO(row.created_at), "dd/MM/yyyy", {locale: pt})}</StyledTableCell>
                          <StyledTableCell align="center">{row.companies.name}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Bar>

            </Top>

            <Base>
                <ResponsiveBar
                  data={chartData}
                  keys={empresas}
                  indexBy="Chave"
                  margin={{ top: 50, right: 150, bottom: 50, left: 40 }}
                  padding={0.3}
                  colors={{ scheme: 'paired' }}
                  defs={[
                      {
                          id: 'dots',
                          type: 'patternDots',
                          background: 'inherit',
                          color: '#38bcb2',
                          size: 4,
                          padding: 1,
                          stagger: true
                      },
                      {
                          id: 'lines',
                          type: 'patternLines',
                          background: 'inherit',
                          color: '#eed312',
                          rotation: -45,
                          lineWidth: 6,
                          spacing: 10
                      }
                  ]}
                  fill={[
                      {
                          match: {
                              id: 'fries'
                          },
                          id: 'dots'
                      },
                      {
                          match: {
                              id: 'sandwich'
                          },
                          id: 'lines'
                      }
                  ]}
                  borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                  }}
                  axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: '',
                      legendPosition: 'middle',
                      legendOffset: -40
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                  legends={[
                      {
                          dataFrom: 'keys',
                          anchor: 'bottom-right',
                          direction: 'column',
                          justify: false,
                          translateX: 120,
                          translateY: 0,
                          itemsSpacing: 2,
                          itemWidth: 100,
                          itemHeight: 20,
                          itemDirection: 'left-to-right',
                          itemOpacity: 0.85,
                          symbolSize: 20,
                          effects: [
                              {
                                  on: 'hover',
                                  style: {
                                      itemOpacity: 1
                                  }
                              }
                          ]
                      }
                  ]}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
                />
            </Base>

        </Right>

      </Body>

    </Container>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rgba(113, 89, 193, 0.6)',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    width: 30,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});