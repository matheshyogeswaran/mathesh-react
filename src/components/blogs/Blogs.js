import React, { useState, useEffect } from 'react';
import Title from '../layouts/Title';
import BlogsCard from './BlogsCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(1); // State to manage slidesToShow dynamically

  useEffect(() => {
    // Fetch blog data from Medium RSS feed in JSON format
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40matheshyogeswaran')
      .then(response => response.json())
      .then(data => {
        if (data && data.items) {
          setArticles(data.items);
        } else {
          console.error('Invalid JSON response');
        }
      })
      .catch(error => console.error('Error fetching Medium articles:', error));
  }, []);

  // Function to determine number of slides based on screen width
  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setSlidesToShow(3); // Show 3 slides for large screens
    } else if (screenWidth >= 768) {
      setSlidesToShow(2); // Show 2 slides for medium screens
    } else {
      setSlidesToShow(1); // Show 1 slide for small screens
    }
  };

  // Call updateSlidesToShow when component mounts and on window resize
  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1
  };

  return (
    <section id="blogs" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Blogs" />
      </div>
      <Slider {...sliderSettings}>
        {articles.map((article, index) => (
          <BlogsCard
            key={index}
            title={article.title}
            des={article.description}
            link={article.link}
            thumbnail={article.thumbnail}
          />
        ))}
      </Slider>
    </section>
  );
}

export default Blogs;
