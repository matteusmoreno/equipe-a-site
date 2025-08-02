import React from 'react';
import { CardContainer, CardTitle, CardText } from './CourseCard.styles';
import { motion } from 'framer-motion';

// Animação para o card aparecer
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const CourseCard = ({ title, description, index }) => {
    return (
        <CardContainer
            as={motion.div} // Usamos o "as" para que o styled-component se comporte como um motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // Anima quando o elemento entra na tela
            viewport={{ once: true }} // Anima apenas uma vez
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay escalonado para cada card
        >
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
        </CardContainer>
    );
};

export default CourseCard;