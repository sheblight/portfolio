import './App.css';
import { data } from './data.js'
import NavTab from './NavTab';
import SideMenu from './SideMenu';
import Main from './Main';
import { useState } from 'react';


function NavTabs(props) {
  const pages = props.names;
  const tabs = []
  for (let i=0; i<pages.length; i++) {
    tabs.push(<NavTab key={pages[i]} onclick={props.onclick(i)} name={pages[i]}/>);
  }
  return tabs;
}

function App() {
  const [index, setIndex] = useState(0);

  const toggleMenu = function(e) {
    const t = e.target;
    console.log(t);
  };

  return (
    <div className="App">
      <SideMenu>
        <NavTabs names={ data.pages.map(page => page.title) } onclick={ (index)=>()=>setIndex(index) }/>
      </SideMenu>
      <Main 
        content={data.pages} 
        index={index}
      />
      <svg className="menu" style={{zIndex: "1"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
    </div>
  );
}

export default App;
