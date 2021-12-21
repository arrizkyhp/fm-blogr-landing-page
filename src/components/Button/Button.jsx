import propTypes from 'prop-types';

export default function Button(props) {
    const className = [props.className];
    if(props.isPrimary) className.push("btn-primary");
    if(props.isWhite) className.push("btn-white");
    if(props.isBorder) className.push("btn-border");


    return (
        <button className={`btn ${className.join("")}`}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    isPrimary: propTypes.bool,
    isWhite: propTypes.bool,
    isBorder: propTypes.bool,
}