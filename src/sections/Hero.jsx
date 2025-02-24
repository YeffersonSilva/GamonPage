import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pb-40 pt-60 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="flex items-center justify-between gap-8">
            <div className="relative z-2 max-w-[45%] max-lg:max-w-388">
              <div className="uppercase caption small-2 text-p3">
                Desarrollo de Software
              </div>
              <h1 className="mb-6 font-black leading-none tracking-tight text-transparent uppercase bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-xl text-7xl max-lg:text-6xl max-md:text-5xl max-md:leading-tight">
                Soluciones de Software
              </h1>

              <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                En <strong>Gamon</strong>, creamos soluciones tecnológicas
                adaptadas a tus necesidades. Desarrollamos software eficiente y
                automatizamos procesos para optimizar tu empresa.
              </p>
              <LinkScroll to="features" offset={-100} spy smooth>
                <Button icon="/images/zap.svg">
                  Conoce nuestras soluciones
                </Button>
              </LinkScroll>
            </div>

            <div className="w-[800px] max-lg:hidden">
              <img
                src="/images/3dlogo.png"
                className="w-full h-auto"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
