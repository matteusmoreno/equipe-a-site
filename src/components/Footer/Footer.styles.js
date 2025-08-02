import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 5rem 5% 2rem;
`;

export const FooterContent = styled.div`
  display: grid;
  gap: 2.5rem;
  margin-bottom: 3rem;

  /* Padrão (Mobile): 1 coluna */
  grid-template-columns: 1fr;

  /* Tablet: 2 colunas */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 4 colunas com larguras ajustadas */
  @media (min-width: 1200px) {
    grid-template-columns: 1.5fr 1.5fr 1.2fr 1fr; 
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FooterLogo = styled.img`
  max-width: 250px;
  margin-bottom: 0.5rem;
`;

export const ColumnTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  position: relative;
  padding-bottom: 0.8rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const InfoText = styled.p`
  line-height: 1.7;
  color: rgba(255,255,255,0.7);
  max-width: 350px;

  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.secondary};
    vertical-align: middle;
    margin-top: -3px;
  }
  
  a {
    color: rgba(255,255,255,0.7);
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const SocialIcon = styled.a`
  color: rgba(255,255,255,0.7);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px);
  }
`;

export const MapWrapper = styled.div`
  max-width: 220px;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.1);

  iframe {
    filter: grayscale(1) invert(1) contrast(0.9) hue-rotate(180deg);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;

  /* ADICIONADO PARA ESTILIZAR O LINK DE CRÉDITOS */
  a {
    color: rgba(255,255,255,0.7);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;