const ListItem = (props) => {

    return (
        <div>
            <li>
                <a href={props.url}>{props.text}</a>
            </li>

        </div>
    )
}

export default ListItem