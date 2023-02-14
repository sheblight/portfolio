import './App.css';
import SideMenu from './SideMenu';
import Main from './Main';
import { useState } from 'react';

function App() {
  function NavTab(props) {
    const onHover = function(isHovering){ 
        return function(e) {
            e.target.style.backgroundColor = isHovering ? "rgba(100,100,100,0.5)" : "transparent";
            e.target.style.color = isHovering ? "var(--text-color)" : "var(--text-color)";
        }
    };

    return (
        <li onClick={props.onclick} onMouseEnter={onHover(true)} onMouseLeave={onHover(false)} style={{margin:"0.5rem 0"}}>{props.name}</li>
    );
  }

  const bodyStyle = { 
    display: "grid", 
    gridTemplateColumns: "300px auto", 
    gridTemplateAreas: "100vh", 
    height: "100vh", 
    background: "var(--body-color)", 
    alignItems: "stretch", 
    margin: 0 
  };

  const pages = [
    {
      title: "Games",
      caption: "Some games I've developed from 2018 to 2022"
    },
    {
      title: "Sites",
      caption: "Some sites developed in 2023"
    },
    {
      title: "Art",
      caption: "Some illustrations and models made over time"
    },
    {
      title: "Sound",
      caption: "Some music composed over time"
    },
  ]

  const [index, setIndex] = useState(0);
  const onClickTab = (index) => {
    return ()=>{
      setIndex(index) 
    };
  };

  return (
    <div className="App" style={bodyStyle}>
      <SideMenu>
        { pages.map(page => <NavTab key={page.title} onclick={onClickTab(pages.indexOf(page))} name={page.title}/>) }
      </SideMenu>
      <Main 
        content={pages} 
        index={index}
      />
    </div>
  );
}

export default App;
