import P from 'prop-types';
import { Title } from '../Title';
import * as Styled from './styles';

export const Heading = ({ children }) => {
    return (
        <Styled.Container className='container'>
            <Title className='col-sm'>Welcome to the WP</Title>
            <p>You know nothing, John Snow</p>
        </Styled.Container>
    );
};

Heading.propTypes = {
    children: P.node.isRequired,
};
