import React from "react";

class ListItem extends React.Component {

    render() {
        const { image, name, description } = this.props;

        return (
            <div className="box">
                <img src={image} alt="" className="avatar" />
                <h3 className="box-title">{name}</h3>
                <p className="box-description">{description}</p>

                <div className="button-wrap">
                    <a href="#" className="button">Report user</a>
                </div>

            </div>
        )
    }
}
export default ListItem;
