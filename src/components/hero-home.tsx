import ModalVideo from "@/components/modal-video";
import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";


export default function HeroHome() {
  return (
    <section className="relative">
       <div
        className="absolute top-0 -mt-20 -translate-x-1/2 pointer-events-none left-1/2 -z-10"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />

      </div>
      <div
        className="pointer-events-none absolute left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="flex flex-col items-center justify-center py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl lg:text-7xl"
              data-aos="fade-up"
            >
              Prompt to Deployment <br className="hidden md:block" />
              One <span className="text-white">GenAI</span> platform
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Meet the new standard for {' '}<br className="md:hidden" />
                AI Agents and workflows
                <br />
                Prompt <span className="text-accent">→</span> Build{" "}
                <span className="text-accent">→ </span>Test{" "}
                <span className="text-accent">→</span> Deploy
              </p>
              <div className="max-w-xs mx-auto sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}                      
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
          <Image
            src="/home/hero.webp"
            alt="Hero Image"
            width={1000}
            height={400}
            className="z-10 rounded-lg transition-opacity delay-[680ms] duration-[400ms] mx-auto"
          />
        </div>
      </div>
      
    </section>
  );
}
