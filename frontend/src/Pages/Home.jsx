import { Carousel } from "flowbite-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderOne from "../assets/images/slider/slider-1.png";
import sliderTwo from "../assets/images/slider/slider-2.png";
import sliderThree from "../assets/images/slider/slider-3.png";
import img from "../assets/images/category/pizza.jpg";

// Category Data
const categories = [
  { name: "Pizza", img },
  { name: "Burgers", img },
  { name: "Fried Items", img },
  { name: "Salads", img },
  { name: "Steak", img },
  { name: "Pasta", img },
  { name: "Drinks", img },
];

// Recommended Products Data
const products = [
  {
    name: "Butter Chicken",
    img: "src/assets/images/products/butter-chicken.jpg",
    desc: "A plant-based burger made...",
    price: "$5.00",
    discount: "$0.00 off",
    oldPrice: "",
  },
  {
    name: "Tomahawk",
    img: "src/assets/images/products/butter-chicken.jpg",
    desc: "Lightly breaded and perfectly...",
    price: "$11.40",
    discount: "5% off",
    oldPrice: "$12.00",
  },
  {
    name: "Cup Cake",
    img: "src/assets/images/products/butter-chicken.jpg",
    desc: "Golden battered fish fillets...",
    price: "$4.80",
    discount: "20% off",
    oldPrice: "$6.00",
  },
  {
    name: "Burger Bliss",
    img: "src/assets/images/products/butter-chicken.jpg",
    desc: "A juicy, flame-grilled beef patty...",
    price: "$7.00",
    discount: "$0.00 off",
    oldPrice: "",
  },
  {
    name: "Classic Burger",
    img: "src/assets/images/products/butter-chicken.jpg",
    desc: "A juicy, flame-grilled beef...",
    price: "$6.00",
    discount: "$0.00 off",
    oldPrice: "",
  },
];

// Slick settings
const slickSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 600, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const productSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,  // Show 5 products at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,  // Show 3 products on medium screens
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,  // Show 2 products on smaller screens
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,  // Show 1 product on mobile
      },
    },
  ],
};


export default function Home() {
  return (
    <div className="container mx-auto py-6">
      {/* Hero Image Slider */}
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 py-4">
        <Carousel>
          <img src={sliderOne} alt="Slider 1" className="w-full h-full object-cover" />
          <img src={sliderTwo} alt="Slider 2" className="w-full h-full object-cover" />
          <img src={sliderThree} alt="Slider 3" className="w-full h-full object-cover" />
        </Carousel>
      </div>

      {/* Category Carousel using Slick */}
      <div className="py-6">
        <Slider {...slickSettings}>
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center px-2">
              <img
                src={category.img}
                alt={category.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 m-auto"
              />
              <p className="mt-2 text-lg font-semibold text-center">{category.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Recommended Products Section */}
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
        <Slider {...productSliderSettings}>
          {products.map((product, index) => (
            <div key={index} className="p-2">
              <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden relative flex flex-col justify-between">

                {/* Product Image */}
                <div className="relative h-[160px]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg transition-all duration-300 ease-in-out"
                  />
                  <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-semibold">
                    {product.discount}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500 text-sm truncate">{product.desc}</p>
                  <div className="flex items-center mt-2">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through mr-2">{product.oldPrice}</span>
                    )}
                    <span className="text-orange-600 font-bold">{product.price}</span>
                  </div>
                </div>

                {/* Add to Bag Button (Rounded & Always Visible) */}
                <div className="p-4 flex justify-center">
                  <button className="w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-full flex justify-center items-center space-x-2 shadow-md">
                    <span className="text-lg">+</span>
                    <span>ADD TO BAG</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

        {/* Most popular */}
        <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Most popular</h2>
        <Slider {...productSliderSettings}>
          {products.map((product, index) => (
            <div key={index} className="p-2">
              <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden relative flex flex-col justify-between">

                {/* Product Image */}
                <div className="relative h-[160px]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-lg transition-all duration-300 ease-in-out"
                  />
                  <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-semibold">
                    {product.discount}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500 text-sm truncate">{product.desc}</p>
                  <div className="flex items-center mt-2">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through mr-2">{product.oldPrice}</span>
                    )}
                    <span className="text-orange-600 font-bold">{product.price}</span>
                  </div>
                </div>

                {/* Add to Bag Button (Rounded & Always Visible) */}
                <div className="p-4 flex justify-center">
                  <button className="w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-full flex justify-center items-center space-x-2 shadow-md">
                    <span className="text-lg">+</span>
                    <span>ADD TO BAG</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
