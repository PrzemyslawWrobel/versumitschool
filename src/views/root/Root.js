import React from "react";
import "./index.scss";
import AppContext from "../../context/context";
import List from "../../components/List/List";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header"
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import UserView from "../UsersView/UsersView";



const initialStateItems = [
    {
        image: "https://randomuser.me/api/portraits/women/81.jpg",
        name: "LaurenGilbert",
        description: "Sydney, Australia"
    },
    {
        image: "https://randomuser.me/api/portraits/men/81.jpg",
        name: "JacobDaniels",
        description: "Chicago, United States"
    },
    {
        image: "https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg",
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.'
    },
    {
        image: "https://pbs.twimg.com/profile_images/1166030195834273794/pBb6hjVb_400x400.jpg",
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    },
    {
        image: "https://pbs.twimg.com/profile_images/1095819845382299649/zG-2_UHS_400x400.jpg",
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.'
    },
    {
        image: "https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg",
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS'
    }
]
class Root extends React.Component {
    state = {
        items: [...initialStateItems],
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

    addItem = (e, newItem) => {
        e.preventDefault();
        // const newItem = {
        //     name: e.target[0].value,
        //     image: e.target[1].value,
        //     description: e.target[2].value,
        // }

        this.setState(prevStete => ({
            items: [...prevStete.items, newItem],
        }));

        this.closeModal();
    }

    render() {
        //const { isModalOpen } = this.state;
        const contextElements = {
            ...this.state,
            addItem: this.addItem
        }

        return (
            <AppContext.Provider value={contextElements}>
                <Header openModalFn={this.openModal} />
                <List items={this.state.items} />
                {this.state.isModalOpen && <Modal closeModalFn={this.closeModal} />}
            </AppContext.Provider>
        )
    }
}
export default Root;