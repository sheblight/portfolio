import './App.css';
import './Main.css';
import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';

function Thumbnail(props) {
    return <img className={props.className} src={require(`${props.src}`)} alt={props.alt} />;
}


function LinkButton(props) {
    return (
        <a target="_blank" rel="noreferrer" href={props.href}>
            <button className={"caps bold"}>{props.title}</button>
        </a>
    );
}

function LinkButtonGroup(props) {
    if (props.links.length === 0) {
        return null;
    }
    return props.links.map(link => <LinkButton key={link.url} href={link.url} title={link.title} />)
}

//{content.images.length === 1 ? <Thumbnail src={content.images[0].original} alt={content.images[0].originalAlt}/> : null}
function ProjectEntry(props) {
    const content = props.content;
    return (
        <div className="project-entry">
            <div style={{ width: "50%" }}>
                {content.videoId ? <ReactPlayer width={"100%"} url={content.videoId} /> : null}
                {content.images.length === 1 ? <img className={"thumbnail"} src={content.images[0].original} alt={content.images[0].originalAlt} />: null}
                {content.images.length > 1 ? <ImageGallery items={content.images} /> : null}
            </div>
            <div style={{ width: "40%" }}>
                <h2>{content.title}</h2>
                <div className="divider"></div>
                <p className={"caps bold"}>{content.role}</p>
                <p>{content.period}</p>
                <p>{content.notes}</p>
                <LinkButtonGroup links={content.links} />
            </div>
        </div>
    );
}

function SoundEntry(props) {
    return (
        <div className="sound-entry">
            <ReactPlayer width={"50%"} url={props.content.url} />
            <div>
                <h2>{props.content.title}</h2>
                <div className="divider"></div>
                <p>{props.content.notes}</p>
            </div>
        </div>
    );
}

function Entry(props) {
    switch (props.type) {
        case "Projects":
            return <ProjectEntry content={props.content} />;
        case "Sound":
            return <SoundEntry content={props.content} />;
        default:
            return null;
    }
}

function EntryList(props) {
    const content = props.content;
    if (!content["entries"]) {
        return null;
    }
    else if (content.title === "Art") {
        return (
            <div className="art-entry">
                {content.entries.map(image => <Thumbnail key={image.src} className={"thumbnail"} src={image.src} alt={image.alt} />)}
            </div>
        )
    }
    return (
        <ul>
            {content.entries.map(entry => <Entry key={entry.title} type={content.title} content={entry} />)}
        </ul>
    );

}

function Main(props) {
    const content = props.content[props.index];
    return (
        <main style={{ margin: 0, padding: "30px", overflow: "auto" }}>
            <section>
                <h1>{content.title}</h1>
                <p>{content.caption}</p>
                <EntryList content={content} />
            </section>
        </main>
    );
}

export default Main;
