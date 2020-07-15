import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Grid } from "./styles";

const Pagination = ({ listPerPage, totalPages, paginate }) => {
  const pageNumbers = [1, 2, 3];
  const [test, setTest] = useState([]);
  const [next, setNext] = useState(4);


  // Se next for menor que total de página - 2 limpamos o array test e pagenumber e depois iteramos por ele criando arrays de 3 números, sempre aumentando o valor das duas ultimas casas.
  function handleNext() {
   if(next <= (Math.ceil((totalPages/listPerPage)))) {
    test.splice(0, test.length);
    pageNumbers.splice(0, pageNumbers.length);
    for (let i = next; i <= next + 2; i++) {
     test.push(i);
     setNext(i);
    }
   }
  };

  function handlePrev() {
    setTest([]);
    setNext(4)
  };

  return (
    <Grid>
      <ul className='pagination'>
      <button onClick={handlePrev} className='page-link'><MdKeyboardArrowLeft size={20} color="#666666" /></button>
        {test.length == 0 ? 
        pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        )):
        test.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))  
      }
        <button onClick={handleNext} className='page-link'><MdKeyboardArrowRight size={20} color="#666666" /></button>
      </ul>
    </Grid>
  );
};

export default Pagination;
