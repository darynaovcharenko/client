import React from 'react';
import AnimalService from '../services/AnimalService';

class AnimalComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            animals:[]
        }
    }

    componentDidMount(){
        AnimalService.getAnimals().then((response) => {
            this.setState({ animals: response.data})
        });
    }

    render (){
        return (
            <div class="animals">
                <h1 className = "text-center"> Клієнтська база</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                        <td> id</td>
                            <td> Власник</td>
                            <td> Тварина</td>
                            <td> Email</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.animals.map(
                                animal => 
                                <tr key = {animal.id}>
                                     <td> {animal.id}</td>   
                                     <td> {animal.ownerName}</td>   
                                     <td> {animal.petsName}</td>   
                                     <td> {animal.email}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default AnimalComponent