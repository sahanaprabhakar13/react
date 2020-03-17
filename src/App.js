import React,{Component} from 'react';

import './App.css';
import Person from './Person/Person'


class App extends Component {
  
  state = {
    
    persons: [
      { id:'1', name: "Sonu", age: 25 },
      { id:'2',name: "Anuj", age: 30 },
      { id:'3',name: "Ashu", age: 27 }
    ],
    showPerson : false
  }
  switchHandler=(newName)=> {
    
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Kala", age: 39 },
        { name: "Prabhakar", age: 48 }
      ] })
    
  }

  nameChanged = (event) => {
    
    this.setState({
      persons: [
        { name: "Max", age: 25 },
        { name: event.target.value, age: 39 },
        { name: "Prabhakar", age: 48 }
      ]
    })
  }

  deleteClickedPerson = (pIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(pIndex, 1);
    this.setState({ persons:persons})

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow})
}

  render() {

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        < div >
          {this.state.persons.map((person,index)=>{
          
            return <Person
                click ={()=>this.deleteClickedPerson(index)}
            name={person.name}
              age={person.age}
              key={person.id}
          />
      })}
      </div>
      );
    }
    ////In JSX format should be with in enclosed brackets
    return (
      <div>
        <button onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}  
       
      </div>
    );
  }
}

export default App;
