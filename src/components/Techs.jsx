import React from "react";

import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import reactImage from "../assets/img/react.png";
import vue from "../assets/img/vue.png";
import github from "../assets/img/github.png";
import tailwind from "../assets/img/tailwind.png";
import bootstrap from "../assets/img/bootstrap.png";
import php from "../assets/img/php.png";
import laravel from "../assets/img/laravel.png";
import node from "../assets/img/node.png";
import docker from "../assets/img/docker.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "Node",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: vue,
      title: "Vue JS",
      style: "shadow-green-700",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },
    {
      id: 10,
      src: php,
      title: "PHP",
      style: "shadow-purple-400",
    },
    {
      id: 11,
      src: laravel,
      title: "Laravel",
      style: "shadow-orange-600",
    },
    {
      id: 12,
      src: docker,
      title: "Docker",
      style: "shadow-blue-600",
    }
  ];

  return (
    <div
      id="techs"
      name="techs"
      className="bg-gradient-to-b bg-transparent from-black to-purple-700 w-full h-screen pt-10 h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Tecnologias
          </p>
          <p className="py-6">Estas são as tecnologias com as quais trabalhei</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
