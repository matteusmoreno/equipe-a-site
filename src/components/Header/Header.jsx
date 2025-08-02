import React, { useState, useEffect } from 'react';
import logoSrc from '../../assets/logo-equipe-a.png';
// NOVO: Importamos ActionsWrapper
import { HeaderContainer, LogoWrapper, Logo, LogoText, ActionsWrapper, Nav, NavLink, CtaButton, MobileIcon, MobileMenu, CloseIcon } from './Header.styles';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <HeaderContainer isScrolled={isScrolled}>
                <LogoWrapper>
                    <Logo src={logoSrc} alt="Colégio e Curso Equipe A" />
                    <LogoText>Colégio e Curso Equipe A</LogoText>
                </LogoWrapper>

                {/* NOVO: Agrupamos Nav e CtaButton para alinhar à direita */}
                <ActionsWrapper>
                    <Nav>
                        <NavLink href="#cursos">Nossos Cursos</NavLink>
                        <NavLink href="#aprovados">Aprovados</NavLink>
                        <NavLink href="#contato">Contato</NavLink>
                    </Nav>

                    <CtaButton className="desktop-only" href="#contato">
                        Matrículas Abertas <FaArrowRight />
                    </CtaButton>
                </ActionsWrapper>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

            </HeaderContainer>

            <MobileMenu isOpen={isOpen}>
                <CloseIcon onClick={toggle}>
                    <FaTimes />
                </CloseIcon>
                <NavLink onClick={toggle} href="#cursos">Nossos Cursos</NavLink>
                <NavLink onClick={toggle} href="#aprovados">Aprovados</NavLink>
                <NavLink onClick={toggle} href="#contato">Contato</NavLink>
                <CtaButton href="#contato">
                    Matrículas Abertas <FaArrowRight />
                </CtaButton>
            </MobileMenu>
        </>
    );
};

export default Header;