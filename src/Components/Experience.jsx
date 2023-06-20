import React from 'react'

function Experience() {
  return (
    <>
      <div id='experience' className='h-14'></div>
      <div className='md:w-4/5 mx-auto'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white'>
            <span className='text-2xl bg-white rounded-lg mr-3 p-1'>
              {"💼"}
            </span>
            Experience
          </p>
          <p className='w-28 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='min-h-screen flex flex-col'>
          <div className='md:w-full mt-12 px-4'>
            <ul>
              <li className='flex relative gap-6 pb-5'>
                <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    className='bi bi-circle-fill fill-gray-400'
                    viewBox='0 0 16 16'
                  >
                    <circle cx='8' cy='8' r='8' />
                  </svg>
                </div>
                <div className='main'>
                  <p className='text-xl font-bold text-slate-50'>
                    Frontend Developer - Intern
                  </p>
                  <p className='text-xl font-bold text-slate-50'>Wesupp</p>
                  <p className='text-gray-500'>Apr 2023 - Present</p>
                  <p className='text-gray-500'>
                    • Meeting with clients or stakeholders to understand their
                    needs and requirements for the website or web application.
                  </p>
                  <p className='text-gray-500'>
                    • Optimizing the website or application for performance and
                    user experience, such as improving page load speed and
                    mobile responsiveness.
                  </p>
                  <p className='text-gray-500'>
                    • Maintaining the website or application by updating
                    content, fixing bugs, and adding new features as required.
                  </p>
                </div>
              </li>
              <li className='flex relative gap-6 pb-5'>
                <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    className='bi bi-circle-fill fill-gray-400'
                    viewBox='0 0 16 16'
                  >
                    <circle cx='8' cy='8' r='8' />
                  </svg>
                </div>
                <div className='main'>
                  <p className='text-xl font-bold text-slate-50'>
                    Technology and Project development
                  </p>
                  <p className='text-xl font-bold text-slate-50'>
                    Revolution Software Club
                  </p>
                  <p className='text-gray-500'>Dec 2022 - Present</p>
                  <p className='text-gray-500'>
                    • The latest technological advancements in various fields
                    such as artificial intelligence, machine learning,
                    blockchain, virtual reality, or the Internet of Things
                    (IoT).
                  </p>
                  <p className='text-gray-500'>
                    • Identify and discuss emerging trends in the tech industry,
                    such as edge computing, quantum computing, cybersecurity, or
                    data analytic
                  </p>
                </div>
              </li>
              <li className='flex relative gap-6 pb-5'>
                <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    className='bi bi-circle-fill fill-gray-400'
                    viewBox='0 0 16 16'
                  >
                    <circle cx='8' cy='8' r='8' />
                  </svg>
                </div>
                <div className='main'>
                  <p className='text-xl font-bold text-slate-50'>
                    Hacktoberfest Contributions
                  </p>
                  <p className='text-xl font-bold text-slate-50'>Github</p>
                  <p className='text-gray-500'>Oct 2022 - Nov 2022</p>
                  <p className='text-gray-500'>
                    • Actively participated in Hacktoberfest, contributing to
                    approximately 14 repositories by implementing bug fixes,
                    feature enhancements, and documentation improvements.
                    Collaborated with other contributors and project maintainers
                    to achieve impact-full outcomes, resolving issues and
                    enhancing functionality. Demonstrated growth by acquiring
                    proficiency in various technologies and tools throughout the
                    process
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience