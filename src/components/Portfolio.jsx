import React from "react";
import emporiumCoffee from "../assets/portfolio/emporium-coffee.png";
import makeBurguer from "../assets/portfolio/make-burguer.png";
import portfolio from '../assets/portfolio/portfolio.png';
/* import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg"; */

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: emporiumCoffee,
      demo: true,
      hrefDemo: 'https://emporium-coffe.vercel.app/',
      hrefCodeFront: 'https://github.com/SilvanMoura/emporium-coffe-vue',
      hrefCodeBack: ''
    },
    {
      id: 2,
      src: makeBurguer,
      demo: false,
      hrefCodeFront: 'https://github.com/SilvanMoura/makeBurguer_vue_front',
      hrefCodeBack: 'https://github.com/SilvanMoura/makeBurguer_vue_back'
    },
    {
      id: 3,
      src: portfolio,
      demo: true,
      hrefDemo: 'https://emporium-coffe.vercel.app/',
      hrefCodeFront: 'https://github.com/SilvanMoura/personal-portfolio',
      hrefCodeBack: ''
    },
  ];

  return (
    <div
      name="projetos"
      className="bg-black w-full h-auto text-white md:h-screen pt-28 pb-40"
      id="projetos"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
          <p className="py-6">Confira um pouco do meu trabalho aqui</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, hrefDemo, hrefCodeFront, hrefCodeBack }) => (
            <div key={id} className="bg-gray shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {demo &&
                  <a href={hrefDemo} target="_blank" class="no-underline text-white">
                    <button className="w-1/10 py-4 m-3 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                }
                <a href={hrefCodeFront} target="_blank" class="no-underline text-white">
                  <button className="w-1/10 py-4 m-3 duration-200 hover:scale-105">
                    Code Front
                  </button>
                </a>
                {hrefCodeBack != '' &&
                  <a href={hrefCodeBack} target="_blank" class="no-underline text-white">
                    <button className="w-1/10 py-4 m-3 duration-200 hover:scale-105">
                      Code Back
                    </button>
                  </a>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
