// eslint-disable-next-line
import {style} from './styles.css'
import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children }) => {
    return (
        <Styled.Container className='container'>
            <h1 className='title'>Welcome to the WP</h1>
            <p className='title-p'>You know nothing, John Snow</p>
        </Styled.Container>
    );
};

Heading.propTypes = {
    children: P.node
};

// className='col-sm'