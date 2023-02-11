import P from 'prop-types';
import * as Styled from './styles';



export const YoutubeEmbed = ({ children,url }) => {

    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    );
};

YoutubeEmbed.propTypes = {
    children: P.node.isRequired,
};
