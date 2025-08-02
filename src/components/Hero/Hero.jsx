import React from 'react';
// Importamos o wrapper do SVG e o hook do tema
import { HeroContainer, VideoBg, HeroOverlay, HeroContent, HeroH1, HeroP, HeroButton, CurveSvgWrapper } from './Hero.styles';
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const Hero = () => {
    const theme = useTheme(); // Acessamos nosso objeto de tema para pegar a cor

    return (
        <HeroContainer id="hero">
            <VideoBg autoPlay loop muted playsInline>
                <source src="/video-hero.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </VideoBg>

            <HeroOverlay />

            <HeroContent>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <HeroH1>Aqui, potencializamos vencedores!</HeroH1>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                    <HeroP>1º lugar no ENEM em Saquarema desde 2018 e liderança em aprovações para Universidades Públicas.</HeroP>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                    <HeroButton href="#contato">Fale Conosco</HeroButton>
                </motion.div>
            </HeroContent>

            {/* Usamos o SVG para desenhar a curva convexa na parte inferior */}
            <CurveSvgWrapper>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                    <path
                        /* Este path desenha a forma de cúpula para cima */
                        d="M0,120 L1440,120 L1440,0 C1100,80 340,80 0,0 Z"
                        fill={theme.colors.lightGray}
                    />
                </svg>
            </CurveSvgWrapper>
        </HeroContainer>
    );
};

export default Hero;