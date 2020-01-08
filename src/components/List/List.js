import React from "react";
import PropTypes from "prop-types";   
import ListItem from "./ListItem";



const List = (props) => (


    <div className="container">
        {props.items.map(item => (
            <ListItem key={item.name} {...item} />
        ))}
    </div>
)
ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
};

ListItem.defaultProps = {
    image: null
};

export default List;

// {...item} zawiera w sobie propsy, które wcześniej podałem w taki sposób jak poniżej

// name = { item.name }
// description = { item.description }
// image = { item.image }