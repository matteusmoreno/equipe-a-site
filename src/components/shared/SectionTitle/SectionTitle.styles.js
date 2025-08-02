import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem; /* Espaçamento padrão abaixo do título */
`;

export const StyledTitle = styled.h2`
  font-family: 'Goldman', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: inline-block; /* Permite que o padding e a borda funcionem bem */
  position: relative;
  padding-bottom: 1rem; /* Espaço para a linha decorativa abaixo */

  /* A linha decorativa */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); /* Centraliza a linha */
    width: 100px; /* Largura da linha */
    height: 6px; /* Espessura da linha */
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
`;