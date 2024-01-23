import React from 'react';
import Global from './styles/global';
import Home from './components/home/Home';

let lorem: string =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

let data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    text: lorem,
    backgroundColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    backgroundColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    text: lorem,
    backgroundColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    text: lorem,
    backgroundColor: "#9FEACD"
  }
];

const App = () => {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  )
}

export default App;