// import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../../components/Heading';
import { SectionBackground } from '../../components/SectionBackground';

export const Home = ({ children }) => {
    return (
        <Styled.Container>
            <SectionBackground>
            <Heading />
                <h2>Titulo</h2>
                <p>loremsadfjalskdjfaklsjdfkalsjdfòalsjdfklòasjdfaksdfklòasjdfklajsdfklòasjdfklòajsdfklòa</p>
            </SectionBackground>
        </Styled.Container>
    );
};

// Home.propTypes = {

// };


