"use client"
import Image from "next/image";
import React,{ Component } from "react";

class Header extends Component {
  scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <div className='navbar fixed bg-[#0f172a] bg-opacity-40 dark:bg-grey-900 dark:bg-opacity-40 backdrop-filter backdrop-blur-lg w-full h-20 border-b text-white flex items-center justify-around gap-40 md:gap-72 z-10'>
        <div className='logo flex items-center'>
          <Image
            src='/Images/logo.png'
            className='w-full h-14 ml-4'
            alt='logo'
            width={100}
            height={50}
          />
        </div>
        <div className='hidden md:block'>
        <a
            onClick={() => this.scrollTo("home")}
            className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700 cursor-pointer'
          >
            Home
          </a>
          <a
            onClick={() => this.scrollTo("education")}
            className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700 cursor-pointer'
          >
            Education
          </a>
          <a
            onClick={() => this.scrollTo("experience")}
            className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700 cursor-pointer'
          >
            Experience
          </a>
          <a
            onClick={() => this.scrollTo("skills")}
            className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700 cursor-pointer'
          >
            Skills
          </a>
          <a
            onClick={() => this.scrollTo("project")}
            className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700 cursor-pointer'
          >
            Project
          </a>
          <a
            onClick={() => this.scrollTo("contact")}
            className='mx-1 hover:bg-indigo-400 p-3 rounded-lg transition duration-700 cursor-pointer'
          >
            Contact
          </a>
        </div>
        <div className='humburger md:hidden'>
          <p className='text-3xl cursor-pointer'></p>
        </div>
      </div>
    );
  }
}

export default Header;