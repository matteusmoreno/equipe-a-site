// NOVO: importamos 'useMemo' para evitar o loop
import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
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
    SliderWrapper,
    SlidingIndicator
} from './Approved.styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';

const Approved = () => {
    // CORREÇÃO: Usamos o useMemo para que a lista de anos seja calculada APENAS UMA VEZ.
    // Isso quebra o loop infinito.
    const sortedYears = useMemo(() => Object.keys(approvedData).sort((a, b) => Number(b) - Number(a)), []);

    const [activeTab, setActiveTab] = useState(sortedYears[0]);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabsRef = useRef({});

    useLayoutEffect(() => {
        const activeRef = tabsRef.current[activeTab];
        if (activeRef) {
            setIndicatorStyle({
                left: activeRef.offsetLeft,
                width: activeRef.offsetWidth,
                opacity: 1,
            });
        }
    }, [activeTab]); // A dependência 'sortedYears' foi removida, pois agora ela é estável.

    const sortAlphabetically = (array) => {
        return [...array].sort((a, b) => a.name.localeCompare(b.name));
    };

    const dataForActiveTab = approvedData[activeTab];
    const sortedPublic = sortAlphabetically(dataForActiveTab.public);
    const sortedPrivate = sortAlphabetically(dataForActiveTab.private);

    const swiperOptions = {
        modules: [Grid, Autoplay],
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            320: { slidesPerView: 1, slidesPerGroup: 1, grid: { rows: 2, fill: 'row' } },
            768: { slidesPerView: 2, slidesPerGroup: 2, grid: { rows: 2, fill: 'row' } },
            1024: { slidesPerView: 3, slidesPerGroup: 3, grid: { rows: 2, fill: 'row' } },
        }
    };

    return (
        <ApprovedSection id="aprovados">
            <SectionTitle>Nossos Aprovados</SectionTitle>

            <TabContainer>
                <SlidingIndicator style={indicatorStyle} />
                {sortedYears.map(year => (
                    <TabButton
                        key={year}
                        ref={(el) => (tabsRef.current[year] = el)}
                        // CORREÇÃO: Usando a prop transiente '$active' para remover o aviso do console
                        $active={activeTab === year}
                        onClick={() => setActiveTab(year)}
                    >
                        {year}
                    </TabButton>
                ))}
            </TabContainer>

            <ContentContainer>
                <CategoryTitle>Universidades Públicas</CategoryTitle>
                <SliderWrapper>
                    <Swiper {...swiperOptions}>
                        {sortedPublic.map((student, index) => (
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
                        {sortedPrivate.map((student, index) => (
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