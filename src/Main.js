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
            <img src={require(`${props.content.src}`)} alt={props.content.title}/>
            <p>{props.content.title}</p>
        </div>
    );
}

function Entry(props) {
    switch(props.type) {
        case "Sites":
            return <SiteEntry content={props.content}/>;
        case "Art":
            return <ArtEntry content={props.content}/>;
        default:
            return null;
    } 
}

function Gallery(props) {
    const content = props.content;
    if (!content["entries"]) {
        return null;
    }
    return (
        <ul>
            {content.entries.map(entry => <Entry key={entry.title} type={content.title} content={entry}/>)}
        </ul>
    );
    
}

function Main(props) {
    const content = props.content[props.index];
    return (
        <main style={{margin: 0, padding: "30px", overflow: "auto"}}>
            <section>
                <h1>{content.title}</h1>
                <p>{content.caption}</p>
                <Gallery content={content}/>
            </section>
        </main>
    );
}

export default Main;
