import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import AppContext from "../../context/context";


class Form extends React.Component {
    state = {
        title: "",
        link: "",
        image: "",
        description: "",
    };


    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };

    render() {
        const { submitFn } = this.props;

        return (
            <AppContext.Consumer>
                {context => (
                    <div className={styles.wrapper}>
                        <h2>Add new User</h2>
                        <form
                            autoComplete="off"
                            className={styles.form}
                            onSubmit={(e) => context.addItem(e, this.state)}
                        >

                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.title}
                                name="title"
                                label="Title"

                            />

                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.image}
                                name="image"
                                label="Image"
                            />

                            <Input
                                onChange={this.handleInputChange}
                                value={this.state.description}
                                tag="textarea"
                                name="description"
                                label="Description"
                            />
                            <button className="button" onClick={submitFn}>
                                Add New User
                            </button>
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Form;




// const Form = ({ submitFn }) => (
//     <div className={styles.wrapper}>
//         <h2>Add new User</h2>
//         <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
//             <Input
//                 name="name"
//                 label="Name"
//                 maxLength={30}
//             />

//             <Input
//                 name="image"
//                 label="Image"
//             />
//             <Input
//                 tag="textarea"
//                 name="description"
//                 label="Description"
//             />
//             <button className={styles.button}>add new item</button>
//         </form>
//     </div>
// );
// export default Form;