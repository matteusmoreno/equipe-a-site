import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 5% 2rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ColumnTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const InfoText = styled.p`
  line-height: 1.7;
  color: rgba(255,255,255,0.8);

  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.secondary};
    vertical-align: middle;
  }
  
  a {
    color: rgba(255,255,255,0.8);
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.7);
`;