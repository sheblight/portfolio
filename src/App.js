import './App.css';

function App() {
  return (
    <div className="App" style={{ display: "grid", gridTemplateColumns: "300px auto", gridTemplateAreas: "100vh", height: "100vh", background: "var(--body-color)", alignItems: "stretch", margin: 0 }}>
      <nav className="Side-menu" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", padding: "25px", borderRight: "5px dashed var(--text-color)", background: "var(--menu-color)", textAlign: "right", fontSize: "25px", color: "var(--text-color)" }}>
        <div className="Nav-tabs">
          <h1 style={{ marginBottom: "35px", fontFamily: "var(--header-font)", textAlign: "right", fontSize: "30px", fontWeight: "bold", textTransform: "none" }}>Hibiki Takaku</h1>
        </div>
        <footer style={{width: "230px", color: "var(--text-color)"}}>
          <div className="Divider"></div>
          <a href="mailto:sheblight@gmail.com" style={{fontFamily: "var(--header-font)", textDecoration: "none", color: "var(--text-color)", letterSpacing: "1px", fontSize: "15px"}}>sheblight@gmail.com</a>
          <div className="External-icons" style={{display: "flex", height: "50px", justifyContent: "flex-end", alignItems: "center", gap: "10px"}}>
            <a target="_blank" rel="noreferrer" href="https://soundcloud.com/hibiki-takaku">
              <svg className="Soundcloud" style={{width:"22px", height:"22px", padding:"4px"}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M11.56,8.87V17H20.32V17C22.17,16.87 23,15.73 23,14.33C23,12.85 21.88,11.66 20.38,11.66C20,11.66 19.68,11.74 19.35,11.88C19.11,9.54 17.12,7.71 14.67,7.71C13.5,7.71 12.39,8.15 11.56,8.87M10.68,9.89C10.38,9.71 10.06,9.57 9.71,9.5V17H11.1V9.34C10.95,9.5 10.81,9.7 10.68,9.89M8.33,9.35V17H9.25V9.38C9.06,9.35 8.87,9.34 8.67,9.34C8.55,9.34 8.44,9.34 8.33,9.35M6.5,10V17H7.41V9.54C7.08,9.65 6.77,9.81 6.5,10M4.83,12.5C4.77,12.5 4.71,12.44 4.64,12.41V17H5.56V10.86C5.19,11.34 4.94,11.91 4.83,12.5M2.79,12.22V16.91C3,16.97 3.24,17 3.5,17H3.72V12.14C3.64,12.13 3.56,12.12 3.5,12.12C3.24,12.12 3,12.16 2.79,12.22M1,14.56C1,15.31 1.34,15.97 1.87,16.42V12.71C1.34,13.15 1,13.82 1,14.56Z" />
              </svg>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/sheblight">
              <svg className="Github" style={{width:"32px", height:"32px"}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </a>
          </div>
          <p style={{fontFamily: "var(--header-font)", fontSize: "17px"}}>© 2023 Hibiki Takaku</p>
        </footer>
      </nav>
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
