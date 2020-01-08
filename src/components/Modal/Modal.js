import React from "./node_modules/react";


class Modal extends React.Component {
    render() {

        // tak wygląda struktura HTML dla modal boxa
        return (
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <h3 className="modal-title">Report user %username%</h3>
                        <textarea rows="6"></textarea>

                        <div className="button-wrap">
                            <a href="#" className="button button-link">Cancel</a>
                            <a href="#" className="button ml-auto">Report</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;