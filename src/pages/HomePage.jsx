import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProduct } from '../store/actions/productActions';
import HeroSlider from '../components/home/HeroSlider';
import BrandCarousel from '../components/home/BrandCarousel';
import ProductShowcase from '../components/product/ProductShowcase';
import QutesTrust from '../components/home/QutesTrust'
import CustomerReviews from '../components/home/CustomerReviews';
import ContactSection from '../components/home/ContactSection';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Chatbot from '../components/common/Chatbot';

const HomePage = () => {
  const dispatch = useDispatch();
  // const featuredProducts = useSelector(state => state.products.featured);

  useEffect(() => {
    dispatch(fetchFeaturedProduct());
  }, [dispatch]);

  return (
    <div className="home-page">
      {/* <HeroSlider/> <br /><br /><br /> */}
      <ProductShowcase /><br /><br /><br />
      <QutesTrust />
      <Chatbot/>
      <BrandCarousel />
    </div>
  );
};

export default HomePage;