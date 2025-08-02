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

// 1. IMPORTAR OS ÍCONES
import { FaGraduationCap, FaStethoscope } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';

const Approved = () => {
    const sortedYears = useMemo(() => Object.keys(approvedData).sort((a, b) => Number(a) - Number(b)), []);
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
    }, [activeTab]);

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
                        $active={activeTab === year}
                        onClick={() => setActiveTab(year)}
                    >
                        {year}
                    </TabButton>
                ))}
            </TabContainer>

            <ContentContainer>
                {/* 2. ADICIONAR O ÍCONE AO TÍTULO */}
                <CategoryTitle>
                    <FaGraduationCap /> Universidades Públicas
                </CategoryTitle>
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

                {/* 3. ADICIONAR O ÍCONE AO TÍTULO */}
                <CategoryTitle>
                    <FaStethoscope /> Medicina - Particulares
                </CategoryTitle>
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