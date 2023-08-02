import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-auto bg-gradient-to-b from-purple-700 to-black text-white pt-10"
      id="sobre"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
          <p className="py-6">Resumo sobre mim e minha experiência profissional</p>
        </div>

        <p className="text-xl mt-10">
          Possuo 1 ano de experiência como desenvolvedor, apaixonado por resolver
          problemas e com habilidades sólidas em desenvolvimento de software. Tenho
          facilidade para aprender e me adaptar a novas tecnologias. Meu foco principal
          é entregar soluções eficientes e de alta qualidade, de forma técnica e criativa.
          Sou motivado, proativo e possuo excelentes habilidades de trabalho tanto
          independente quanto em equipe.
        </p>

        <br />

        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            Desenvolvedor Front-end
          </p>
        </div>

        <div className="pb-4">
          <p className="text-1xl">
            TEDxBeloHorizonte | mar 2022 - dez 2022
          </p>
        </div>
        
        <p className="text-xl">
          Fui responsável pela manutenção e implementação de novas
          funcionalidades em uma página web, onde tive o cuidado constante de
          seguir boas práticas de desenvolvimento de software, demonstrando assim
          minha expertise como um desenvolvedor habilidoso e comprometido.
        </p>

        <br />

        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            Desenvolvedor Full Stack
          </p>
        </div>

        <div className="pb-4">
          <p className="text-1xl">
            Escola Mario Quintana | ago 2022 - mar 2023
          </p>
        </div>

        <div className="pb-10">
          <p className="text-xl">
            Minha atuação envolveu a criação de novos módulos para o sistema de uso
            interno da empresa, além de adaptar os módulos já existentes no sistema
            anterior para o novo sistema em uso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
