import React, { Component } from 'react'
import "../styles/style.css"
import { Puff } from "react-loader-spinner"
import Info from './Info';
import getInfo from '../Services/getInfo';


export default class IpInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: null,
            isloading: true
        }

    }

    componentDidMount() {
        getInfo().then(data => {
            this.setState({
                info: data,
                isloading: false
            })
        })
    }


    render() {
        const isloading2 = this.state.isloading ;
        console.log(isloading2);

        return (
            <>
                { isloading2 ? <Puff
                    height="80"
                    width="80"
                    radius={1}
                    color="#4fa94d"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                :
                <Info item={this.state.info} />
                }
            </>
        )
    }
}
