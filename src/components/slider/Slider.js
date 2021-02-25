import SwiperCore, { Virtual, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
// install Virtual module
SwiperCore.use([Virtual, Pagination]);

const Slider = ({ slide, length }) => {
	const slides = Array.from({ length }).map((slide, index) => `Slide${index + 1}`);

	return (
		<Swiper
			spaceBetween={100}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}
			loop={true}
			pagination={{ clickable: true }}>
			{slides.map((slideContent, idx) => (
				<SwiperSlide key={idx}>{slide}</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
