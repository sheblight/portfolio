import './App.css';
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

function Thumbnail(props) {
    return <img className={props.className} src={require(`${props.src}`)} alt={props.alt}/>;
}

function Gallery(props) {
    if (props.images.length === 0) {
        return null;
    }
    return props.images.map(image => <Thumbnail key={image.src} className={"thumbnail"} src={image.src} alt={image.alt}/>);
}

function LinkButton(props) {
    return <a target="_blank" rel="noreferrer" href={props.href}><button >{props.title}</button></a>;
}

function LinkButtonGroup(props) {
    if (props.links.length === 0) {
        return null;
    }
    return props.links.map(link => <LinkButton key={link.url} href={link.url} title={link.title}/>)
}

function ProjectEntry(props) {
    const content = props.content;
    const embedVideo = (content.videoId ? <YouTube videoId={content.videoId}/> : null);
    return (
        <div className="project-entry">
            <h2>{content.title}</h2>
            <div className="divider"></div>
            <p>{content.role}</p>
            <p>{content.period}</p>
            {content.video !== "" ? embedVideo : null}
            <Gallery images={content.images}/>
            <p>{content.notes}</p>
            <LinkButtonGroup links={content.links}/>
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

function SoundEntry(props) {
    return (
        <div className="sound-entry">
            <ReactPlayer width={"50%"} url={props.content.url}/>
            <div>
                <h2>{props.content.title}</h2>
                <div className="divider"></div>
                <p>{props.content.notes}</p>
            </div>
        </div>
    );
}

function Entry(props) {
    switch(props.type) {
        case "Projects":
            return <ProjectEntry content={props.content}/>;
        case "Art":
            return <ArtEntry content={props.content}/>;
        case "Sound":
            return <SoundEntry content={props.content}/>;
        default:
            return null;
    } 
}

function EntryList(props) {
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
                <EntryList content={content}/>
            </section>
        </main>
    );
}

export default Main;
