import React from 'react';


const Footer = () =>{
  return(
      <footer className="w-full flex  justify-center py-10">
        <div >
          <span className="text-3xl ">
            developer
          </span>
        </div>
        <div>
          <span>minesp3164</span>
          <i className="fa-brands fa-github rounded-full flex " onClick={() => window.open("https://github.com/minesp3164")}/>
          <div>
            {new Date().getFullYear()}.
            {new Date().getMonth()}.
            {new Date().getDay()}
          </div>
        </div>
    </footer>
  )
}
export default Footer;