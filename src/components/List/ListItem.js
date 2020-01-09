import React from "react";
import ModalVersum from "../ModalVersum/ModalVersum";


class ListItem extends React.Component {
    state = {

        isModalOpen: false,
    };

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render() {
        const { image, name, description } = this.props;

        return (
            <>
                <div className="box">
                    <img src={image} alt="" className="avatar" />
                    <h3 className="box-title">{name}</h3>
                    <p className="box-description">{description}</p>
                    <div className="button-wrap">
                        <a href="#" onClick={this.openModal} className="button">Report user</a>
                    </div>
                    {this.state.isModalOpen && <ModalVersum closeModalFn={this.closeModal} name={name} description={description} />}
                </div>
            </>
        )
    }
}

export default ListItem;
