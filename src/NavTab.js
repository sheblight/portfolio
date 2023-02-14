function NavTab(props) {
    const onHover = function(isHovering){ 
        return function(e) {
            e.target.style.backgroundColor = isHovering ? "rgba(100,100,100,0.5)" : "transparent";
            e.target.style.color = isHovering ? "var(--text-color)" : "var(--text-color)";
        }
    };

    return (
        <li onClick={props.onclick} onMouseEnter={onHover(true)} onMouseLeave={onHover(false)} style={{margin:"0.5rem 0"}}>{props.name}</li>
    );
}
export default NavTab;