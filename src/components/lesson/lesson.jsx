import React from 'react';

import SectionHeading from '../heading/section-heading';
import lessonImg from '../../images/video-bg.jpg';
import CustomButton from '../button/CustomButton';

import '../../scss/style.scss';;

const Lesson = () => {
    return (
        <div className="lesson">
            <div className="lesson__img" style={{backgroundImage: `url(${lessonImg})`}} >
                <button className="lesson-play-btn" type="button">
                    <i className="fa fa-play"></i>
                </button>
            </div>
            <div className="lesson__content">
                <SectionHeading title='LOOKING FOR LESSONS?' subtitle='WELCOME TO ONLINE TRAFIC SCHOOL' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum vidnas accumsan lacus vel facilisis.</p>
                <CustomButton btnPrimary>Learn More</CustomButton>
            </div>
        </div>
    )
}

export default Lesson;