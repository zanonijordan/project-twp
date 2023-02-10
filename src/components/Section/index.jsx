import P from 'prop-types';
import * as Styled from './styles';

export const Section = ({ children }) => {
    return (
        <Styled.Container>
            <h1>{children}</h1>
        </Styled.Container>
    );
};

Section.propTypes = {
    children: P.node.isRequired,
};
