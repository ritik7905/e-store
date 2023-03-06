import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ProductBanner from "../../components/productBanner";
import {
  featureCard,
  mainSlider,
  ourProducts,
  OurServices,
  SubProducts,
} from "./data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
// Styles
import "./styles.scss";
import CollectionCard from "../../components/featureCollection/collectionCard";
const HomeScreen = () => {
  const [discount, setDiscount] = useState(false);
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <Container>
          <div className="row g-4">
            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {mainSlider?.map((slideBanner, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <ProductBanner slideBanner={slideBanner} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
              <div className="row justify-content-between align-items-center g-3">
                {SubProducts?.map((curElm, i) => (
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="small-banner position-relative">
                      <img
                        src={curElm.img}
                        className="img-fluid rounded-3"
                        alt="banner"
                      />
                      <div className="small-banner-content position-absolute">
                        <h4>{curElm.tag}</h4>
                        <h5>{curElm.name}</h5>
                        <p>{curElm.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services gap-15">
                {OurServices?.map((curElm, i) => {
                  return (
                    <div className="service-card d-flex align-items-center">
                      <img src={curElm.img} alt="service-icon" />
                      <div>
                        <h6 className="mb-1">{curElm.title}</h6>
                        <p className="m-0">{curElm.subTitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row py-5 mt-5">
            <div className="col-12">
              <div className="row categories g-4">
                {ourProducts?.map((curElm, i) => {
                  return (
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                      <div className="category-card gap-30">
                        <div className="product-img">
                          <img
                            src={curElm.img}
                            alt="product-img"
                            className="img-fluid"
                          />
                        </div>
                        <div className="product-details">
                          <h6>{curElm.title}</h6>
                          <p className="m-0">{curElm.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-12">
              <h4>Featured Collection</h4>

              <div className="row feature-collection-wrapper py-5">
                <div className="col-12">
                  <Swiper
                    loop={true}
                    spaceBetween={25}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        // spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        // spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 4,
                        // spaceBetween: 50,
                      },
                      1250: {
                        slidesPerView: 5,
                        // spaceBetween: 50,
                      },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="myswiper"
                  >
                    {featureCard?.map((curElm, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <CollectionCard featureCard={curElm} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
