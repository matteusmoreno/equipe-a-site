import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  height: 82px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

  background: linear-gradient(110deg, rgba(10, 58, 130, 0.8) 0%, rgba(20, 110, 100, 0.8) 100%);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.25)' : 'none'
  };
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 55px;
`;

export const LogoText = styled.span`
  font-family: 'Goldman', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-weight: 600;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: relative;
  padding: 5px 0;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.secondary};
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 0.7rem 1.4rem;
  border-radius: 50px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.headings};
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  /* NOVO: Essencial para o efeito de brilho funcionar */
  position: relative;
  overflow: hidden;

  svg {
    transition: transform 0.3s ease;
  }

  /* NOVO: Pseudo-elemento que cria o efeito de brilho */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%; /* Começa fora do botão, à esquerda */
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transition: left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover {
    /* NOVO: A cor do botão NÃO MUDA. Apenas ativamos a animação */
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

    svg {
      transform: translateX(5px);
    }

    /* NOVO: Move o brilho para o outro lado, fazendo-o passar pelo botão */
    &::before {
      left: 100%;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  
  background: linear-gradient(110deg, rgba(10, 58, 130, 0.85) 0%, rgba(20, 110, 100, 0.85) 100%);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  
  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  ${NavLink} {
    font-size: 2rem;
    opacity: 1;
  }

  ${CtaButton} {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;

    /* Desativamos o efeito de brilho no menu mobile para uma interação mais simples */
    &::before {
      display: none;
    }
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 5%;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;