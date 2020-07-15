import React, { useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import api from "../../../services/api";
import Background from "../../../components/background";
import { Container, Title, SearchContainer, SeachBar, Searchresult, Line, Name, Body, CatList, Agreg, Brenchs, Desc } from './styles';


export default function Categories({ navigation }) {

  const [ category, setCategory ] = useState([]);
  const [ searchCompany, setSearchCompany ] = useState([]);
  const [ listagem, setListagem ] = useState('');
  const [ showCard, setShowCard ] = useState([]);
  const [ active, setActive ] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');
      const responseTwo = await api.get('companies');

      setCategory(response.data);
      setSearchCompany(responseTwo.data);
    }
    loadCategories();
  }, []);

  function handlesearch(text) {

    if(text !== '') {
      setActive(true);
      setListagem(text);
    } else {
      setActive(false);
    }
    
  };

  function handleSubmitSearch() {
    const filtro = searchCompany.filter( el => el.name.toLowerCase().indexOf(listagem.toLowerCase()) > -1 );
    const mapa = filtro.map(item => item);
    setShowCard(mapa);
  };

  return (
    <Background>
      <Container>
        <Title>Categorias</Title>

        <Body>

          <SearchContainer>
            <Icon name="search" size={20} color="#666666" />
            <SeachBar 
            placeholder="Pesquisar empresa"
            /* clearButtonMode="always" */
            value={listagem}
            returnKeyType="search"
            onChangeText={handlesearch}
            onSubmitEditing={() => handleSubmitSearch()}
            />
            <Icon name="clear" size={20} color="#666666" onPress={() => setActive(false) & setShowCard(['']) & setListagem('')} />
          </SearchContainer>

          { active == false ? (
            <CatList
            data={category}
            keyExtractor={ categories => String(categories.id) }
            renderItem={({item: category}) => (
              <Agreg>
                <Brenchs onPress={() => navigation.navigate('StoresList', { categorynumber: category.id })} >
                  {category.name == 'Comida' ? <Icon name="restaurant" size={25} color="#353131" /> : category.name == 'Beleza' ? <Icon name="assistant" size={25} color="#353131" /> : category.name == 'Moda' ? <Icon name="shopping-basket" size={25} color="#353131" /> : category.name == 'Casa' ? <Icon name="home" size={25} color="#353131" /> : category.name == 'Automóvel' ? <Icon name="directions-car" size={25} color="#353131" /> : category.name == 'Construção' ? <Icon name="build" size={25} color="#353131" /> : category.name == 'Educação' ? <Icon name="school" size={25} color="#353131" /> : category.name == 'Eventos' ? <Icon name="event" size={25} color="#353131" /> : category.name == 'Informática' ? <Icon name="computer" size={25} color="#353131" /> : category.name == 'Pet' ? <Icon name="pets" size={25} color="#353131" /> : category.name == 'Saúde' ? <Icon name="local-hospital" size={25} color="#353131" /> : <Icon name="layers" size={25} color="#353131" />}
                </Brenchs>
                <Desc>{category.name}</Desc>
              </Agreg>
            )}
          />
          ) : <Searchresult>
                {showCard.map(item => (
                  <Line onPress={() => navigation.navigate('Company', { brand: item })}>
                  <Name key={item.id}>{item.name}</Name>
                  </Line>
                ))}
              </Searchresult>
          }

        </Body>
      </Container>
    </Background>
  );
}
