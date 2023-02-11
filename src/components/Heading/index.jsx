import P from 'prop-types';
import { Title } from '../Title';
import * as Styled from './styles';

export const Heading = ({ children }) => {
    return (
        <Styled.Container>
            <Title>Welcome to the WP</Title>
            <p>You know nothing, John Snow</p>
        </Styled.Container>
    );
};

Heading.propTypes = {
    children: P.node.isRequired,
};
