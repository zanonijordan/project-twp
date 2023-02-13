import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';

export const Base = ({ children }) => {
    return (
        <Styled.Container>
            <Menu />
            {children}
        </Styled.Container>
    );
};

Base.propTypes = {
    children: P.node.isRequired,
};
