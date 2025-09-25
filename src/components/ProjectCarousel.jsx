import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function ProjectCarousel({ projects }) {
    return (
        <Swiper
            initialSlide={0}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            // autoplay={{ delay: 2000 }}
            modules={[Navigation, Pagination, Autoplay]}
            style={{ padding: '20px' }} // minimal padding
        >
            {projects.map((project, idx) => (
                <SwiperSlide key={idx} style={{ textAlign: 'center' }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', maxWidth: '400px', height: 'auto', maxHeight: '400px',borderRadius: '4px',objectFit: 'contain' }}
                    />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.link && <a href={project.link}>View Project</a>}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
