import React from 'react';
import CourseCard from './CourseCard';
import { CoursesContainer, CoursesGrid } from './Courses.styles';
import SectionTitle from '../shared/SectionTitle/SectionTitle'; // Importamos o novo componente

const courses = [
    { title: "Ensino Fundamental", description: "Do 6º ao 9º ano, com base sólida para o futuro." },
    { title: "Ensino Médio", description: "Da 1ª à 3ª série, com foco total no ENEM e vestibulares." },
    { title: "Pré-Vestibular", description: "Turmas extensivas para ENEM e os vestibulares mais concorridos." },
    { title: "Pré-Militar", description: "Preparação específica para os principais concursos militares do país." }
];

const Courses = () => {
    return (
        <CoursesContainer id="cursos">
            {/* Usamos o novo componente de título aqui */}
            <SectionTitle>Nossos Cursos</SectionTitle>

            <CoursesGrid>
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        index={index}
                        title={course.title}
                        description={course.description}
                    />
                ))}
            </CoursesGrid>
        </CoursesContainer>
    );
};

export default Courses;