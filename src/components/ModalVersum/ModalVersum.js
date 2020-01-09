import React from "react";

class ModalVersum extends React.Component {
    state = {
        description: "",
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.description]: e.target.value,
        });

    };
    render() {
        const { isModalOpen, closeModalFn, name, description } = this.props
        const showHideClassName = isModalOpen ? "modal display-block" : "modal display-none";

        function displayAlert() {
            alert('ok');
            closeModalFn();
        }

        return (
            <div className={showHideClassName}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <h3 className="modal-title">Report user {name}</h3>
                        <textarea
                            rows="6"
                            onChange={this.handleInputChange}
                        >
                            {description}
                        </textarea>
                        <div className="button-wrap">
                            <a href="#" onClick={closeModalFn} className="button button-link">Cancel</a>
                            <a href="#" onClick={displayAlert} className="button ml-auto">Report</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ModalVersum;