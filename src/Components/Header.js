import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Menu Section</h1>
      </div>
    );
  }
}

// class Header extends Component {
//     render() {
//         render(){
//             if(this.props.data){
//                 var name = this.props.data.name;
//                 var occuption= this.props.data.occuption;
//                 var description= this.props.data.description;
//                 var city= this.props.data.address.city;
//                 var networks= this.props.data.social.map(function(network){
//                     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
//                 })
//             }
//         }
//     }
// }
