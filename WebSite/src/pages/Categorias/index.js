import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import ClassIcon from '@material-ui/icons/Class';
import AddCircle  from '@material-ui/icons/AddCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import api from "../../services/api";
import { addCatRequest } from "../../store/modules/categories/actions";
import CatGrafic from "../../components/CatgGrafic";

import { Container, Body, Left, Right, BackChart, Espec, GridItem, GridItemText, GridItemText2, SpaceGrafc, List, ListItem, ListItemAvatar, Avatar, Plus, ListItemText, ListItemText2, FormField, ButtonField, Divisor, Footer } from './styles';


export default function Categorias() {

  const dispatch = useDispatch();
  const [ activeStep, setActiveStep ] = useState(0);
  const [ categorias, setCategorias ] = useState([]);
  const [ companiesList, setCompaniesList ] = useState([]);
  const [ filtragem, setFiltragem ] = useState([]);
  const [ catform, setCatform ] = useState({
    name: '',
    city: '',
    state: ''
  });

  useEffect(() => {
    async function loadCat() {
        const response = await api.get('categories');
        const responseTwo = await api.get('companies')
        
        const filtro = response.data.map(item => item);
        const filtroTwo = responseTwo.data.map(item => item);

        setCategorias(filtro);
        setCompaniesList(filtroTwo);
    }
    loadCat();
    }, []);

    const handleChange = input => event => {
      setCatform({ ...catform, [input]: event.target.value})
    };

    const handleSave = async () => {
      dispatch(addCatRequest(catform));
      
    };

    function HandlePlus(item) {

      const search = companiesList.filter(e => e.categories.id == item.id)

      setFiltragem(search);
      setActiveStep(item.id);
    };

    function handleBack() {
      setActiveStep(0);
    }
    

  return (
    <Container>

      <Body>

        <Left>
          <div>
            <h1>Categorias</h1>

            <List >

              { categorias.map( item => (
                 <ListItem>
                 <ListItemAvatar>
                   <Avatar>
                     <ClassIcon style={{ color: '#fff' }} />
                   </Avatar>
                  
                 </ListItemAvatar>
                 <div>
                  <ListItemText> {item.name} </ListItemText>
                  <ListItemText2>Id: {item.id} </ListItemText2>
                 </div>
                 <Plus onClick={() => HandlePlus(item)} ><AddCircle style={{ color: '#666666' }} /></Plus>
               </ListItem> 
              )) }

            </List>
            
          </div>

        </Left>

        <Right>
          
          <BackChart onClick={handleBack}>
            <ArrowBackIosIcon style={{ color: '#666666', fontSize: 20 }} />
            <h1>{ activeStep <= 0 ? 'Categorias x Empresas': 'Voltar'}</h1>            
            </BackChart>          

          <SpaceGrafc>
            {activeStep <= 0 ? <CatGrafic /> : 
            <Espec>
              {filtragem.map(i => (
                <GridItem>
                  <GridItemText> {i.name} </GridItemText>
                  <GridItemText2> {i.address} </GridItemText2>
                  <GridItemText2> {i.phone} </GridItemText2>
                </GridItem>
              ) )}
            </Espec> }
            
          </SpaceGrafc>

          <Divisor />
          <Footer>
            <FormField>
              <h2>Nova Categoria</h2>
              <TextField name="name" label="Nome" variant="outlined" onChange={handleChange('name')}
            /* defaultValue={values.name} */ />
              <TextField name="city" label="Cidade" variant="outlined" style={{ marginLeft: 20 }} onChange={handleChange('city')} />
              <TextField name="state" label="Estado" variant="outlined" style={{ marginLeft: 20, marginRight: 20 }} onChange={handleChange('state')} />
              <ButtonField onClick={handleSave} >Enviar</ButtonField>
            </FormField>
          </Footer>

        </Right>

      </Body>
      
    </Container>
  );
}