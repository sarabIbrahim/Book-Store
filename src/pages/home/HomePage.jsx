import React from 'react';
import HeadingTitle from '../../components/heading-title/HeadingTitle';
import Services from '../../components/services/Services';
import Slider from '../../components/slider/Slider';
import {books} from '../../data/books';
import BookSlider from '../../components/book-slider/BookSlider';
const HomePage = () => {
    return (
        <div className='home'>
            <Slider/>
      <Services/>
      <HeadingTitle title="Most Gifted"/>
      <BookSlider data={books}/>
      <HeadingTitle title="Best Seller"/>
      <BookSlider data={books}/>
      <HeadingTitle title="Most Wished For"/>
      <BookSlider data={books}/>
            
        </div>
    );
}

export default HomePage;
