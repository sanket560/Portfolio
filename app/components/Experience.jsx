import React from 'react'

const Experience = () => {
  return (
    <>
      <div id='experience' className='h-14'></div>
      <div className='md:w-4/5 md:mt-5 mx-auto'>
        <div className='flex flex-col items-center pt-4'>
          <p className='text-3xl font-bold text-white'>Experience</p>
          <p className='w-28 border-b-4 border-indigo-400 mt-3'></p>
        </div>
        <div className='min-h-screen md:flex gap-4'>
          <div className='md:w-4/6 mt-12 px-4'>
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
                  <p className='text-xl font-bold text-slate-50'>President</p>
                  <div className='flex gap-4 my-1 items-center'>
                    <p className='text-xl font-bold text-slate-50'>
                      Revolution Software Development Club
                    </p>
                    <p className='text-gray-500 mt-1'>Jan 2024 - Present</p>
                  </div>
                  <p className='text-gray-500'>
                    • Managing all inquiries and concerns from my departments
                    and overseeing the recruitment process for potential
                    candidates.
                  </p>
                  <p className='text-gray-500'>
                    • Assigning specific tasks and responsibilities to
                    department heads, ensuring effective delegation and
                    coordination among team members to achieve organizational
                    goals..
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
                    Head - Technology and Project Department
                  </p>
                  <div className='flex gap-4 my-1 items-center'>
                    <p className='text-xl font-bold text-slate-50'>
                      Revolution Software Development Club
                    </p>
                    <p className='text-gray-500  mt-1'>Aug 2023 - Dec 2023</p>
                  </div>
                  <p className='text-gray-500'>
                    • Strategic planning initiatives for both the technical and
                    project departments, aligning departmental goals with the
                    club’s overarching objectives.
                  </p>
                  <p className='text-gray-500'>
                    • Seamless collaboration between technical and project
                    teams, promoting interdisciplinary knowledge sharing and
                    synergy. Facilitated effective communication channels to
                    streamline project workflows and drive successful project
                    deliveries.
                  </p>
                  <p className='text-gray-500'>
                    • Mentored junior team members in technical domains,
                    equipping them with essential programming fundamentals and
                    insights into cutting-edge technologies.
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
                    Frontend Developer - Intern
                  </p>
                  <div className='flex gap-4 my-1 items-center'>
                    <p className='text-xl font-bold text-slate-50'>Wesupp</p>
                    <p className='text-gray-500 mt-1'>Apr 2023 - Jul 2023</p>
                  </div>
                  <p className='text-gray-500'>
                    • Meeting with clients or stakeholders to understand their
                    needs and requirements for the web application.
                  </p>
                  <p className='text-gray-500'>
                    • Optimizing the website for performance and user
                    experience, such as improving page load speed and mobile
                    responsiveness. Maintaining the website by updating content,
                    fixing bugs, and adding new features as required.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className='mt-12 px-4'>
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
                    Instructor at RSDC,VU
                  </p>
                  <div className='flex items-center gap-4 my-1'>
                    <p className='text-xl font-bold text-slate-50'>
                      Git and GitHub Workshop
                    </p>
                    <p className='text-gray-500 mt-1'>1 Jan 2024</p>
                  </div>
                  <div className='text-gray-500'>
                    <p className='text-white'>
                      1. Introduction to Version Control:
                    </p>
                    <p>- Overview of version control concepts.</p>
                    <p>
                      - Importance of version control in collaborative projects.
                    </p>
                  </div>
                  <div className='text-gray-500'>
                    <p className='text-white'>2. Getting Started with Git:</p>
                    <p>- Git installation and configuration.</p>
                    <p>- Basic Git commands and operations.</p>
                  </div>
                  <div className='text-gray-500'>
                    <p className='text-white'>3. GitHub Collaboration:</p>
                    <p>- Introduction to GitHub and account setup.</p>
                    <p>
                      - Collaborative workflows with pull requests and branches.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience