import React from 'react';
import { Container } from './styles';

const withLayout = (Component: any) => (props: any) => {
    return (
        <Container>
            <Component {...props} />
        </Container>
    );
};

export default withLayout;
