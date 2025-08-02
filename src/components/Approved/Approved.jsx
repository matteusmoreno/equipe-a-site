import React, { useState } from 'react';
import { approvedData } from '../../data/approvedData';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import {
    ApprovedSection,
    TabContainer,
    TabButton,
    ContentContainer,
    CategoryTitle,
    ApprovedCard,
    StudentName,
    StudentCourse,
    SliderWrapper
} from './Approved.styles';

// 1. Importar componentes do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// NOVO: Removemos 'Navigation' dos módulos importados
import { Grid, Autoplay } from 'swiper/modules';

// 2. Importar os estilos do Swiper (removendo o de navigation)
import 'swiper/css';
import 'swiper/css/grid';

const Approved = () => {
    const [activeTab, setActiveTab] = useState('2025');
    const data = approvedData[activeTab];

    const swiperOptions = {
        // NOVO: Removemos o módulo 'Navigation' daqui
        modules: [Grid, Autoplay],
        // A propriedade 'navigation: true' foi REMOVIDA
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                    rows: 2,
                    fill: 'row'
                },
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                    rows: 2,
                    fill: 'row'
                },
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                    rows: 2,
                    fill: 'row'
                },
            },
        }
    };

    return (
        <ApprovedSection id="aprovados">
            <SectionTitle>Nossos Aprovados</SectionTitle>

            <TabContainer>
                <TabButton active={activeTab === '2025'} onClick={() => setActiveTab('2025')}>2025</TabButton>
                <TabButton active={activeTab === '2024'} onClick={() => setActiveTab('2024')}>2024</TabButton>
            </TabContainer>

            <ContentContainer>
                <CategoryTitle>Universidades Públicas</CategoryTitle>
                <SliderWrapper>
                    <Swiper {...swiperOptions}>
                        {data.public.map((student, index) => (
                            <SwiperSlide key={`public-${index}`}>
                                <ApprovedCard>
                                    <StudentName>{student.name}</StudentName>
                                    <StudentCourse>{student.course}</StudentCourse>
                                </ApprovedCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SliderWrapper>

                <CategoryTitle>Medicina - Particulares</CategoryTitle>
                <SliderWrapper>
                    <Swiper {...swiperOptions}>
                        {data.private.map((student, index) => (
                            <SwiperSlide key={`private-${index}`}>
                                <ApprovedCard>
                                    <StudentName>{student.name}</StudentName>
                                    <StudentCourse>{student.university}</StudentCourse>
                                </ApprovedCard>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SliderWrapper>
            </ContentContainer>
        </ApprovedSection>
    );
};

export default Approved;