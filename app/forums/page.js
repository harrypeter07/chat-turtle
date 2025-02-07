import React from 'react'
 

const topics = [
    {
      text: "Python",
      img: "/python.png",
      desc: "Learn the versatile and powerful Python programming language."
    },
    {
      text: "JavaScript",
      img: "/javascript.png",
      desc: "Master the core of web development with JavaScript."
    },
    {
      text: "React",
      img: "/react.png",
      desc: "Build dynamic and interactive user interfaces with React."
    },
    {
      text: "Node.js",
      img: "/nodejs.png",
      desc: "Develop server-side applications with Node.js."
    },
    {
      text: "Data Science",
      img: "/data_science.png",
      desc: "Explore the world of data analysis and machine learning."
    },
    {
      text: "Artificial Intelligence",
      img: "/ai.png",
      desc: "Delve into the exciting field of artificial intelligence."
    }
  ];




const Forums = () => {
    
  return (
    <div className='container bg-red-500 mx-auto my-28'>
      <h1>
        discsn forms</h1>      
        

        {topics.map((topic) => {
            return <div key={topic.img}>
            {topic.text}
            </div>
})}
    </div>
  )
}

export default Forums
