# [JDLT](https://jdlt.co.uk) full-stack developer challenge

We're hoping to see how you approach a challenge and what sort of standards you use in your code so please feel free to be as creative as you like.

The [job spec](https://jdlt.co.uk/join/full-stack-developer) will help you understand what we'd like to see.

## Dependencies
* NPM / Yarn
## Instructions
From the project root folder:
```
$ npm install
```
OR
```
$ yarn
```
Then it's over to you!

**Please demonstrate:**
* Selecting suppliers and products in the drop-downs
* A round-trip to a server pulling back prices
* Displaying the returned data in the grid
* Anything else you'd like to show us

### Sample data

| Supplier    | Product      | Price (£) |
| ------------|--------------|-----------|
| New Co Ltd  | Small wongle | 5         |
| New Co Ltd  | Large wongle | 8         |
| New Co Ltd  | Super wongle | 12        |
| Old Co Ltd  | Mini wongle  | 4         |
| Old Co Ltd  | Small wongle | 6         |
| Old Co Ltd  | Large wongle | 9         |
| Old Co Ltd  | Super wongle | 13        |


## Process

The first thing I did was think about what sort of software I could use for both the frontend and the backend. Since I am most familiar with React, and since it is used at JDLT, I decided to start the frontend afresh using this framework. I also decided on using an express framework on the backend which would connect with MongoDB, since I have used this software before and I can see that it is used at JDLT.

Once I had decided this, I started to build out the backend. I created a model for the items which included the supplier, product and price, then set up a controller so the appropriate response would be sent back when requested, and made sure the routing configuration worked with express. I tested this using Insomnia before creating a seed file with some sample information. I then moved onto the frontend.

I created a webpack configuration and added scripts to my package.json so I could run the seeds file and start the front end in my browser. I set up the React frontend and used axios in componentDidMount so I could extract data from the backend and store it in state. I was unsure whether to request the item data on page-load or to request it when a product and supplier had been selected from the dropdowns. In the end I chose the former method, as I could then populate the dropdowns with the data that I had requested from the backend, which was stored in state. It also had the advantage of making only one API request.

Initially I had the dropdowns cycling through the supplier and product of each item using their state. However, this resulted in lots of duplicated values, as there were four items with 'New Co Ltd' and four with 'Old Co Ltd'. To avoid these duplicate values, I created a function that would take the unique values and store them in an array. I then cycled through the array to render only unique values in the dropdown.

Once a supplier and produce had been selected, the information was passed through  function to find the searched-for item and it was set to state as 'selectedItem'. This would then be rendered with its price in the table using a ternary operation.
