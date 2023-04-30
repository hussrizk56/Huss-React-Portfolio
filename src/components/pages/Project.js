import React from "react";

function Project() {
  const images = [
    {
      img_name:'',
      app_name:'Note Taker',
      app_url:'https://salty-ridge-34439.herokuapp.com/',
      git_url:'https://github.com/hussrizk56/Huss-Note-Taker'
    },
    {
      img_name:'',
      app_name:'PWA Editor',
      app_url:'https://ancient-tor-42022.herokuapp.com/',
      git_url:'https://github.com/hussrizk56/Huss-PWA-Editor'
    },
    {
      img_name:'',
      app_name:'Password Generator',
      app_url:'https://hussrizk56.github.io/JavaScript-Password-Generator/',
      git_url:'https://github.com/hussrizk56/JavaScript-Password-Generator'
    },
    {
      img_name:'',
      app_name:'Work Day Scheduler',
      app_url:'https://hussrizk56.github.io/Work-Day-Scheduler/',
      git_url:'https://github.com/hussrizk56/Work-Day-Scheduler'
    },
    {
      img_name:'',
      app_name:'Huss Code Quiz',
      app_url:'https://hussrizk56.github.io/JavaScript-Fundamentals-Quiz/',
      git_url:'https://github.com/hussrizk56/JavaScript-Fundamentals-Quiz'
    },
    {
      img_name:'',
      app_name:'Huss Tech Blog',
      app_url:'https://still-stream-14407.herokuapp.com/',
      git_url:'https://github.com/hussrizk56/Huss-Blog-Post'
    },

  ]

  return(
  <div>
    <div>
    <h2>Projects</h2>
    </div>
    <div className="flex-row">
      {images.map(image => (
      <figure key={image.img_name}>
          <div className="cap"><a className="lk" href={image.app_url} target="_blank">{image.app_name}</a><a className="lk" href={image.git_url} target="_blank"><i className="fa logo">&#xf09b;</i></a></div>
          <img src={require(`../../assets/small/${image.img_name}`).default} className="img-thumbnail mx-1" alt={image.app_name} key={image.app_name}/>                
      </figure>   
        ))}
    </div>
  </div>
  );
};

export default Project;