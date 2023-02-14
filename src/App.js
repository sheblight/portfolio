import './App.css';
import SideMenu from './SideMenu'

function App() {
  return (
    <div className="App" style={{ display: "grid", gridTemplateColumns: "300px auto", gridTemplateAreas: "100vh", height: "100vh", background: "var(--body-color)", alignItems: "stretch", margin: 0 }}>
      <SideMenu />
      <main style={{margin: 0, padding: "30px", overflow: "auto"}}>
        <section className="Games">
          <h1>Games</h1>
          <p>Some of my past projects spanning from 2018 to 2023.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
