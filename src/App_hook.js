import React, { useState } from 'react';
import Person from './Person/Person'

const App = props => {
    const [personState ,setPersonState] = useState({
        persons: [
            { name: "Sonu", age: 25 },
            { name: "Anuj", age: 30 },
            { name: "Ashu", age: 27 }
        ]
    });//returns an array as two elements

    const switchHandler = () => {

        setPersonState({
            persons: [
                { name: "Sahana", age: 25 },
                { name: "Kala", age: 39 },
                { name: "Prabhakar", age: 48 }
            ]
        })

    }
    return(
        <div>
            { <button onClick={switchHandler}>Switch Name</button> }
            <Person
                name={personState.persons[0].name}
                age={personState.persons[0].age}>
                
            </Person>
            <Person
                name={personState.persons[1].name}
                age={personState.persons[1].age} gender="he">My hobies:Writing
            </Person>
            <Person
                name={personState.persons[2].name}
                age={personState.persons[2].age} >
            </Person>    
        </div>

    );
}

export default App;