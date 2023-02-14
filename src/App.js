import './App.css';
import { data } from './data.js'
import NavTab from './NavTab';
import SideMenu from './SideMenu';
import Main from './Main';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const onClickTab = (index) => {
    return ()=>{
      setIndex(index) 
    };
  };

  return (
    <div className="App">
      <SideMenu>
        { data.pages.map(page => <NavTab key={page.title} onclick={onClickTab(data.pages.indexOf(page))} name={page.title}/>) }
      </SideMenu>
      <Main 
        content={data.pages} 
        index={index}
      />
    </div>
  );
}

export default App;
