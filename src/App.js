import './App.css';
import React from 'react'

class App extends React.Component{
  state = {
    person :{
      fullName :"Mohamed Salah",
      bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc :'https://example.com/profile.jpg',
      profession : "football player",
    }
  }
  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };
  render(){
    return(
      <div>
        <div>
          <button onClick={this.toggleShow}>Toggle Profile</button>
          <h2>{this.state.person.fullName}</h2>
          <p>{this.state.person.bio}</p>
          <img scr={this.state.person.imgSrc} alt={this.state.person.fullName}/>
          <p>{this.state.person.profession}</p>
        </div>
      </div>
    )
  }
}
export default App;
