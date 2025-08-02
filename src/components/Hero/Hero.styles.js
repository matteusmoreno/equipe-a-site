import styled from 'styled-components';

export const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 1;
`;

export const HeroOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
      to right,
      rgba(13, 71, 161, 0.7), 
      rgba(27, 155, 136, 0.5)
    );
  z-index: 2;
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  color: ${({ theme }) => theme.colors.white};
  z-index: 3;
  position: relative;
  padding: 0 20px;
  margin-bottom: 10vh;
`;

export const HeroH1 = styled.h1`
  font-family: 'Goldman', sans-serif;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const HeroP = styled.p`
  font-family: 'Goldman', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

export const HeroButton = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.headings};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  
  &:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
    color: ${({ theme }) => theme.colors.white};
    
    transform: translateY(-5px) scale(1.08);
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  }
`;

export const CurveSvgWrapper = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: 4;
  line-height: 0;

  svg {
    width: 100%;
    height: auto;
  }
`;