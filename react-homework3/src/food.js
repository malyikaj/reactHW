
import React from 'react'
import DisplayList from './listdisplayed'
import GroceryList from './grocerylist'


class Food extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         
            list:
            [

                {
                    items:'bananas',
                    units: '1',
                    quantity:'2',
                    isPurchase:false,
                },
                {
                    items:'apples',
                    units: '1',
                    quantity:'4',
                    isPurchase:false,
                },
                {
                    items:'pineapple',
                    units: '1',
                    quantity:'1',
                    isPurchase:false,
                }
            ],
                
    }
 
} 

handlePurchase = (event) => {
      alert("added to cart")
    var array1 = this.state.list.slice()
    var keynum = array1.findIndex((item)=> item.id === event.target.value ? true:false)
    array1[keynum].isPurchase = !array1[keynum].isPurchase
    this.setState({list:array1})  
    console.log(keynum)
}

    addGrocery =(item)=>{
        let array = this.state.list.slice()
        array.push(item)
        this.setState({
            list:array,
        })
    }

    
        render(){
            return(
                <div>
            <DisplayList  list = {this.state.list} 
                            purchase={this.handlePurchase}/>
              <GroceryList addGrocery = {this.addGrocery} 
                           list = {this.state.list} />
            </div>
        )
    }
}
export default Food