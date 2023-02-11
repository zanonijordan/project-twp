import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        height: 100vh;
        width: 90%;
        margin: 0 auto;
    `}
`;
