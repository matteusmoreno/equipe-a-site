import React, { useState, useEffect } from 'react';
import logoSrc from '../../assets/logo-equipe-a.png';
import { HeaderContainer, LogoWrapper, Logo, LogoText, ActionsWrapper, Nav, NavLink, CtaButton, MobileIcon, MobileMenu, CloseIcon } from './Header.styles';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const formsUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc7bqaJqrj6h2MLczX72INEMxAmEHBitLSGxUGbfKxpK7VPsg/viewform";

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

                <ActionsWrapper>
                    <Nav>
                        <NavLink href="#cursos">Nossos Cursos</NavLink>
                        <NavLink href="#aprovados">Aprovados</NavLink>
                        <NavLink href="#student-area">Área do Estudante</NavLink>
                    </Nav>

                    <CtaButton className="desktop-only" href={formsUrl} target="_blank">
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
                {/* NOVO: Link para a Área do Estudante no menu mobile */}
                <NavLink onClick={toggle} href="#student-area">Área do Estudante</NavLink>
                <NavLink onClick={toggle} href="#contato">Contato</NavLink>
                <CtaButton href="#contato">
                    Matrículas Abertas <FaArrowRight />
                </CtaButton>
            </MobileMenu>
        </>
    );
};

export default Header;