import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useField } from '@rocketseat/unform';

import api from "../../../services/api";

import { Container } from './styles';

export default function AvatarInput() {

    const companies = useSelector(state => state.edit.dados);

    // Pegar os dados em formato objeto do usuário/avatar que está salvo no profile
    const { defaultValue, registerField } = useField('path');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    // caso tenha algo salvo em defaultvalue pega o mesmo 
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();
    
    useEffect(() => {
        if (ref.current) {
          registerField({
            name: 'path1',
            ref: ref.current,
            path: 'dataset.file',
          });
        }
      }, [ref.current]); 
    
      async function handleChange(e) {
        const data = new FormData();
    
        data.append('file', e.target.files[0]);
    
        const response = await api.post('file', data);
    
        const { id, url } = response.data;
        
        setFile(id);
        setPreview(url);
      }


    return ( 
        <Container>
            <label htmlFor="path">
                <img src={
                    preview || companies.path.url
                }
                alt=""/>

                <input 
                type="file"
                id="path"
                accept="image/*"
                data-file={file}
                onChange={handleChange}
                ref={ref}
                />
            </label>
        </Container>
    )
};