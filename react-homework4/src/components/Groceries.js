import React from 'react'
import groceries from './GroceryList';
import Inputs from './Inputs';
import DisplayList from './displaylist';
import Bought from './Bought';



class Groceries extends React.Component{
    constructor(){
        super();
        this.state = {
        groceries: groceries,
        }
        this.changingState = this.changingState.bind(this);
        this.submit = this.submit.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    togglePurchased=(index)=> {
        let array = this.state.groceries.slice()
        array[index].isPurchased = !array[index].isPurchased
        this.setState({groceries: array})
    }
    decrement=(index)=> {
        let array2 = this.state.groceries.slice()
        array2.splice(index, 1)
        this.setState({groceries: array2})
    }

    changingState=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
    }
    submit=(state,event)=>{
        const newItem = {
            item: state.item,
            units: state.units,
            quantity: state.quantity,
            isPurchased: state.isPurchased === "true" ? true : false
        }
        this.setState({
        groceries: [...this.state.groceries, newItem],
        item: '',
        units: '',
        quantity: 0,
        isPurchased:true
        }, ()=> console.log(this.state.groceries));
        event.default();
    }
    render() {
        return(
        <div>
            <Inputs submit={this.submit}/>
            <DisplayList groceries={this.state.groceries} togglePurchased={this.togglePurchased} decrement={this.decrement}/>
            <Bought groceries={this.state.groceries}/>
        </div>
        );
    }
}
export default Groceries;