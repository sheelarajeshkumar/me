export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 flex flex-row text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left bg-slate-100 w-screen h-screen text-black">
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

        <div className="p-6 text-start gap-6 flex flex-col">
          <div>
            <p className="text-2xl font-bold uppercase">Career objective</p>
          </div>

          <div>
            <p className="text-2xl font-bold uppercase">Work Experience</p>
            <div className="flex flex-col gap-3">
              <span>Role</span>
              <span>Company</span>
              <div className="flex flex-row gap-20">
                <span>from - to</span>
                <span>Location</span>
              </div>
              <div className="flex flex-col gap-1">
                <li> key take aways 1</li>
                <li> key take aways 2</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
