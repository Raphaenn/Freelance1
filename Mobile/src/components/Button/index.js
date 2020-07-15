import React, { forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from "prop-types";

import { Container, Text } from "./styles";

// children vao ser as propriedades que ficam dentro da tag do botao
export default function Button({ children, loading, ...rest }) {
    return (
        // Container vai receber as propriedades de style
        <Container {...rest}>
            {/* Caso exista um loading,mostraremos o activ.., se nao mostra o Text */}
            { loading ? (
                <ActivityIndicator size="small" color="#FFF" />
            ) : (
                <Text> {children} </Text>
            )
        }
        </Container>
    )
}

Button.protoTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

Button.defaultProps = {
    loading: false,
}
