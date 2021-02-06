//import React, {Component} from 'react'
// import ShowPage from '/ShowPage'

class App extends React.Component {
    state = {
        number: 0,
        people:[]
    }

    componentDidMount = () => {
        axios.get('/api/people').then(
            (response) => {
                this.setState({
                    people:response.data
                })
            }
        )
    }

    createPerson = (event) => {
        event.preventDefault();
        axios.post(
            '/api/people',
            {
                name:this.state.newPersonName,
                age:this.state.newPersonAge,
            }
        ).then(
            (response) => {
                this.setState({
                    people:response.data
                })
            }
        )
    }

    changeNewPersonAge = (event) => {
        this.setState({
            newPersonAge:event.target.value
        });
    }

    changeNewPersonName = (event) => {
        this.setState({
            newPersonName:event.target.value
        });
    }

    deletePerson = (event) => {
        axios.delete('/api/people/' + event.target.value).then(
            (response) => {
                this.setState({
                    people:response.data
                })
            }
        )

    }

    updatePerson = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/api/people/' + id,
            {
                name:this.state.updatePersonName,
                age:this.state.updatePersonAge,
            }
        ).then(
            (response) => {
                this.setState({
                    people:response.data,
                    name:'',
                    age:null,
                })
            }
        )
    }

    changeUpdatePersonName = (event) => {
        this.setState(
            {
                updatePersonName:event.target.value
            }
        )
    }

    changeUpdatePersonAge = (event) => {
        this.setState(
            {
                updatePersonAge:event.target.value
            }
        )
    }

    increase = (event)=>{
      this.setState({
        number: this.state.number +=1
      })
    }

    render = () => {
        return <div className='main'>
        <h1>People CRUD App</h1>
        <a href='/pics'>PICS PAGE</a><br />
        <a href='/test'>TEST PAGE</a><br /><br />
        <button onClick={this.increase}>Likes:
        </button><h2>{this.state.number}</h2><br />

            <h2>Create Person</h2>
            <form onSubmit={this.createPerson}>
                <input onKeyUp={this.changeNewPersonName} type="text" placeholder="name" /><br/>
                <input onKeyUp={this.changeNewPersonAge} type="number" placeholder="age" /><br/>
                <input type="submit" value="Create Person" />
            </form><br />

            <h2>List of People</h2><br />

            <div className='container'>
                {
                    this.state.people.map(
                        (person, index) => {
                            return <div className='box' key={index}>

                                {person.name} Age: {person.age}

                                <form id={person.id} onSubmit={this.updatePerson}>
                                    <input onKeyUp={this.changeUpdatePersonName} type="text" placeholder="name"/><br/>
                                    <input onKeyUp={this.changeUpdatePersonAge} type="number" placeholder="age"/><br/>
                                    <input type="submit" value="Update Person"/><br />
                                    <button className='delete' value={person.id} onClick={this.deletePerson}>DELETE</button>
                                </form>
                            </div>
                        }
                    )
                }
            </div>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    //<ShowPage></ShowPage>,
    document.querySelector('main')
)
