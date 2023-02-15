import './App.css';

function ProjectEntry(props) {
    const content = props.content;
    const embedVideo = (<div></div>);
    const screenshot = (src, alt) => <img className="thumbnail" src={require(`${src}`)} alt={alt}/>;
    return (
        <div className="project-entry">
            <h2>{content.title}</h2>
            <div className="divider"></div>
            <p>{content.period}</p>
            {content.video !== "" ? embedVideo : null}
            {content.images.length > 0 ? content.images.map(image => screenshot(image.src, image.alt)) : null}
            <p>{content.notes}</p>

        </div>
    );
}

function ArtEntry(props) {
    return (
        <div className="art-entry">
            <img src={require(`${props.content.src}`)} alt={props.content.alt}/>
            <p>{props.content.title}</p>
        </div>
    );
}

function Entry(props) {
    switch(props.type) {
        case "Projects":
            return <ProjectEntry content={props.content}/>;
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
