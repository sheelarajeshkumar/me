"use client";
import Experience from "@/components/Experience";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Home() {
  const downloadResume = (): void => {
    const element = document.getElementById("resume");
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0, 250, 300);
        pdf.save("rajesh-kumar-sheela.pdf");
      });
    }
  };

  return (
    <>
      <button onClick={downloadResume}>Download Resume</button>
      <main
        id="resume"
        className="flex min-h-screen flex-col items-center justify-between px-24 py-10 h-screen"
      >
        <div className="mb-32 flex flex-row text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left bg-slate-100 w-screen text-black">
          <div className="bg-slate-200 w-2/6">
            <div className="bg-gray-900 text-white p-6 flex flex-col gap-6">
              <span className="text-3xl uppercase">Rajesh Kumar Sheela</span>
              <span className="text-md italic">Software Engineer - III</span>
              <span className="text-sm flex flex-col">
                <span>socalledsheela@gmail.com</span>
                <span>+(91) 7416477224</span>
              </span>
            </div>

            <div className="text-gray-700 p-6 flex flex-col gap-2 ">
              <span className="text-2xl font-bold uppercase">Education</span>
              <span className="text-sm italic">
                Master of Science Information Technology
              </span>
              <span className="text-sm font-bold">
                Jawaharlal Nehru Technological University
              </span>
              <span className="text-sm flex flex-col">
                <span>2017</span>
                <span>Hyderabad, Telangana</span>
                <span>91.2</span>
              </span>
            </div>

            <div className=" text-gray-700 px-6 flex-col">
              <span className="text-2xl font-bold uppercase flex pb-2">
                SKILLS
              </span>
              <span className="text-sm flex flex-col gap-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>NodeJs</li>
                <li>Java</li>
                <li>GoLang</li>
                <li>Spring Boot</li>
                <li>Microservices</li>
              </span>
            </div>
          </div>

          <div className="p-6 text-start gap-4 flex flex-col w-4/6">
            <div>
              <p className="text-2xl font-bold uppercase">Career objective</p>
            </div>
            <div className="text-sm italic text-gray-700">
              As a seasoned software developer, I bring a proven track record in
              the tech industry, with expertise in Java, NodeJS, Golang, and
              React. I hold a degree in engineering from Jawaharlal Nehru
              Technological University, further solidifying my professional
              foundation. I am eager to leverage my skills and experience to
              contribute to innovative software solutions.
            </div>

            <div>
              <p className="text-2xl font-bold uppercase">Work Experience</p>
              <Experience
                title={"Software Engineer III"}
                company={"Fanatics"}
                from="Jul 2021"
                to="Current"
                location="Hyderabad, Telangana"
              />
              <Experience
                title={"Senior Application Engineer"}
                company={"Oracle India Private Limited"}
                from="Jun 2021"
                to="Jul 2021"
                location="Hyderabad, Telangana"
                keyTakeAways={[
                  "Developed a microservice to handle the customer data and integrated with the Oracle Cloud Infrastructure.",
                  "Full stack web developer involving in design and development of REST API services using java.",
                  "Design and development of Responsive web UI using Typescript, HTML5 and CSS.",
                  "Identifying, replicating and fixing web application security vulnerabilities. ",
                  "Designing and developing security layer APIs. ",
                ]}
              />
              <Experience
                title={"Application Engineer II"}
                company={"Oracle India Private Limited"}
                from="Oct 2018"
                to="Jun 2021"
                location="Hyderabad, Telangana"
              />
              <Experience
                title={"Application Developer"}
                company={"CA Technologies"}
                from="Jun 2017"
                to="Oct 2018"
                location="Hyderabad, Telangana"
                keyTakeAways={[
                  "I've engaged in full-stack development, utilizing technologies such as HTML5, CSS3, JavaScript, Angular, and JAX-RS.",
                ]}
              />
            </div>
            <div>
              <p className="text-2xl font-bold uppercase">Projects</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
