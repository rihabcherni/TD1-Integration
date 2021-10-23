import React from "react";
import Icone from "./Icone.js";
import 'font-awesome/css/font-awesome.min.css';
class Pictogramme extends React.Component {
  constructor(props){
    super(props);
    this.state={
        msg:"Bonne découverte des composants React \"Components!!!\""
    }
   }
Changement=()=>{
  this.setState(
      {
          msg:"Premier défi réussi"
      }
  )
  }
    render() {
      return (
    <div>
          <p>{this.state.msg}</p>
          {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
          <Icone />
          <hr />
        <div>
         <button type="button" className="btn no-outline btn-secondary" onClick={this.Changement}>
          <i className="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
          &nbsp;
          <span className="align-middle">J'aime</span>
        </button>
        </div>
    </div>
        )
    }
  }
export default Pictogramme;