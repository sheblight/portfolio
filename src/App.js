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

  return (
    <div className="App">
      <SideMenu>
        <NavTabs names={ data.pages.map(page => page.title) } onclick={ (index)=>()=>setIndex(index) }/>
      </SideMenu>
      <Main 
        content={data.pages} 
        index={index}
      />
    </div>
  );
}

export default App;
