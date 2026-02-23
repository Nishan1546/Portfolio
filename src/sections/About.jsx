import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex items-end grid-default-color grid-1 rounded-2xl overflow-hidden border border-transparent transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:brightness-110 hover:border-indigo-400 hover:shadow-indigo-200/50">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Nishan Kumar Prusty</p>
            <p className="subtext">
              As a final-year B.Tech CSE student at SOA University, I’m focused on developing my analytical skills to interpret data and transform it into actionable business intelligence.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="relative grid-default-color grid-2 rounded-2xl overflow-hidden border border-transparent transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:brightness-110 hover:border-indigo-400 hover:shadow-indigo-200/50">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              DATA IS EVERYWHERE
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Python"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SQL"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="PowerBi"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Ms-Excel"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/python.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/SQL.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "70%" }}
              image="assets/logos/powerbi.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "43%", left: "1%" }}
              image="assets/logos/excel.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="relative grid-black-color grid-3 rounded-2xl overflow-hidden border border-transparent transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:brightness-110 hover:border-indigo-400 hover:shadow-indigo-200/50">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mars, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="relative grid-special-color grid-4 rounded-2xl overflow-hidden border border-transparent transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:brightness-110 hover:border-indigo-400 hover:shadow-indigo-200/50">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
         <div className="relative grid-default-color grid-5 rounded-2xl overflow-hidden border border-transparent transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:brightness-110 hover:border-indigo-400 hover:shadow-indigo-200/50">
          <div className="z-10 w-[50%]">
            <p className="text-5xl font-bold headText md:text-4xl">Data Analysis Stack</p>
            <p className="subtext">
              Skilled in using analytical tools, technologies and transform raw data into actionable insights using Python, SQL, Excel, Power BI, and AWS to collect, process, and visualize data that powers business intelligence and innovation.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
