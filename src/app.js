import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component{

  constructor() {
    super()

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange({ target: { name, value }}) {
    // const search = {...this.state.data, [name]: value }
    this.setState({ [name]: value })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('hello')
    this.state.items.filter(item => {
      if (item.supplier === this.state.supplier && item.product === this.state.product) {
        this.setState({selectedItem: item})
        console.log(this.state.selectedItem)
      }
    })
  }

  componentDidMount(){
    axios('/api/items')
      // .then(res => {
      //   console.log(res.data)
      //   const suppliers = res.data.map(item => {
      //     return {value: item.supplier, display: item}
      //   })
      //   this.setState({ items: [{value: '', display: 'Choose a supplier'}].concat(suppliers) })
      // })
      .then(({ data }) => this.setState({ items: data }))
      .catch(err => console.log(err))
  }


  render() {
    if (!this.state.items) return null
    console.log(this.state.items)
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>Supplier</label>
          <div>
            <select name="supplier" onChange={this.handleChange}>
              {this.state.items.map(item =>
                <option key={item._id} value={item.supplier}>{item.supplier}</option>
              )}
            </select>
          </div>

          <label>Product</label>
          <div>
            <select name="product" onChange={this.handleChange}>
              {this.state.items.map(item =>
                <option key={item._id} value={item.product}>{item.product}</option>
              )}
            </select>
          </div>

          <input type="submit" value="Submit"/>
        </form>


        {/*<form onSubmit={this.handleSubmit}>

          <label>
            Supplier:
            <select value={this.state.value} name="supplier" onChange={this.handleChange}>
              <option name="supplier" value="new co ltd">New Co Ltd</option>
              <option name="supplier" value="old co ltd">Old Co Ltd</option>
            </select>
          </label>

          <label>
            Product:
            <select value={this.state.value} name="product" onChange={this.handleChange}>
              <option value="" disabled>Select Product</option>
              <option value="small wongle">Small Wongle</option>
              <option value="medium wongle">Medium Wongle</option>
              <option value="large wongle">Large Wongle</option>
            </select>
          </label>

          <input type="submit" value="Submit" />
        </form>*/}
        {this.state.selectedItem && console.log(this.state.selectedItem)}
        {this.state.selectedItem &&
          <div>
            <ul>
              <li>Supplier: {this.state.selectedItem.supplier}</li>
              <li>Product: {this.state.selectedItem.product}</li>
              <li>Price: £{this.state.selectedItem.price}</li>
            </ul>
          </div>
        }

      </div>
    )
  }
}

// <div>
//   {this.state.selectedItem.forEach(item =>
//     <div key={item._id}>
//       <h1>{item.supplier}</h1>
//       <h1>{item.product}</h1>
//       <h1>{item.price}</h1>
//     </div>
//   )}
// </div>

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
