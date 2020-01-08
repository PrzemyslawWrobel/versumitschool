import React from "react";
import "./index.scss";
import Modal from "../../components/Modal/Modal";
import List from "../../components/List/List";

const initialStateItems = [
    {
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.'

    },
    {
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    },
    {
        image: "https://randomuser.me/api/portraits/men/111.jpg",
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.'
    },
    {
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS'
    },
    {

        image: "https://randomuser.me/api/portraits/women/81.jpg",
        title: "LaurenGilbert",
        description: "Sydney, Australia"

    },
    {
        image: "https://randomuser.me/api/portraits/men/81.jpg",
        title: "JacobDaniels",
        description: "Chicago, United States"

    },
    {
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        title: "QuercusRobur",
        description: "Lorem ipsum dolor"

    }]
class Root extends React.Component {
    state = {
        items: [...initialStateItems],

        isModalOpen: false,
    };

    render() {
        return (
            <>
                <List
                    items={this.state.items}
                />


            </>



        )
    }
}
export default Root;