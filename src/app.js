import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './css/dashboard.css'

class App extends React.Component{

  constructor() {
    super()

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.state.items.filter(item => {
      if (item.supplier === this.state.supplier && item.product === this.state.product) {
        this.setState({selectedItem: item})
      }
    })
  }

  componentDidMount(){
    axios('/api/items')
      .then(({ data }) => this.setState({ items: data }))
      .catch(err => console.log(err))
  }


  render() {
    if (!this.state.items) return null
    return (
      <div>

        <h1>Product Pricing</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="block">
            <label>Supplier</label>
            <div className="selectHolder">
              <select name="supplier" onChange={this.handleChange}>
                <option value=''>Please select a supplier</option>
                {this.state.items.map(item =>
                  <option key={item._id} value={item.supplier}>{item.supplier}</option>
                )}
              </select>
            </div>
          </div>

          <div className="block">
            <label>Product</label>
            <div className="selectHolder">
              <select name="product" onChange={this.handleChange}>
                <option>Please select a product</option>
                {this.state.items.map(item =>
                  <option key={item._id} value={item.product}>{item.product}</option>
                )}
              </select>
            </div>
          </div>

          <input className="submit" type="submit" value="Submit"/>
        </form>

        <h2>Product Details</h2>
        <table>
          <tbody>
            <tr id="row0">
              <td id="cell0-0">Supplier</td>
              <td id="cell0-1">Product</td>
              <td id="cell0-2">Price</td>
            </tr>
            {this.state.selectedItem && console.log(this.state.selectedItem)}
            {this.state.selectedItem &&
              <tr id="row1">
                <td id="cell1-0">{this.state.selectedItem.supplier}</td>
                <td id="cell1-1">{this.state.selectedItem.product}</td>
                <td id="cell1-2">£{this.state.selectedItem.price}</td>
              </tr>
            }
          </tbody>
        </table>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
