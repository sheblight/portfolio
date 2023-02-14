import './App.css';
import SideMenu from './SideMenu'
import Main from './Main'

function App() {
  const bodyStyle = { 
    display: "grid", 
    gridTemplateColumns: "300px auto", 
    gridTemplateAreas: "100vh", 
    height: "100vh", 
    background: "var(--body-color)", 
    alignItems: "stretch", 
    margin: 0 
  };

  return (
    <div className="App" style={bodyStyle}>
      <SideMenu />
      <Main title="Games" description="Games I've developed from 2018 to 2022."/>
    </div>
  );
}

export default App;
