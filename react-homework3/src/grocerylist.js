import React from 'react'

class GroceryList extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            items:'',
            units:'',
            quantity:'',
            isPurchase:false
        }
 
    }       


    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let grocery = {
            items:this.state.items,
            units:this.state.units,
            quantity:this.state.quantity,
            isPurchase:this.state.isPurchase,
            id:this.props.list.length
        }
        this.props.addGrocery(grocery)


}




    render(){
        return(

            <div class="container">
                <form onSubmit={this.handleSubmit}>  
                    <label>
                    Item: <input type="text" placeholder="Item" onChange={this.handleChange} value={this.state.items} name ='items'/>
                    Units: <input type="text" placeholder="Units" onChange={this.handleChange} value={this.state.units} name ='units'/>
                    Quantity: <input type="text" placeholder="Quantity" onChange={this.handleChange} value={this.state.quantity} name ='quantity'/>
                    isPurchase: <input type="text" placeholder="isPurchase" onChange={this.handleChange} value={this.state.isPurchase} name ='isPurchase'/>
                    <input id="me" type="submit" value="submit"/>
                    </label>
                </form>
            </div>
                )
        }
}
export default GroceryList