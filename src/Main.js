import './App.css';

function SiteEntry(props) {
    return (
        <div>
            <h2>Entry Title</h2>
            <p>Description</p>
        </div>
    );
}

function ArtEntry(props) {
    return (
        <div>
            <img src="" alt=""/>
            <h2>A picture entry</h2>
        </div>
    );
}

function Entry(props) {
    switch(props.type) {
        case "Sites":
            return <SiteEntry/>;
        case "Art":
            return <ArtEntry/>;
        default:
            return null;
    } 
}

function Main(props) {
    const content = props.content[props.index];
    return (
        <main style={{margin: 0, padding: "30px", overflow: "auto"}}>
            <section>
                <h1>{content.title}</h1>
                <p>{content.caption}</p>
                <ul>
                    <Entry type={content.title} index={0}/>
                </ul>
            </section>
        </main>
    );
}

export default Main;
