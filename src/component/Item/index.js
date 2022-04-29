function Item(props) {
    const {text, type, del} = props;
    return(
      <li>
        <span>{text}</span>
        <button>{type}</button>
        <button>{del}</button>
      </li>
    )
  }

export default Item;