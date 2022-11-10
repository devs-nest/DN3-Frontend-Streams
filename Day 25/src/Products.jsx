import React, { Component } from "react";

export default class Products extends Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {
      categories: [],
      products: [],
      selectedCategory: null,
    };
  }

  componentDidMount() {
    console.log("component did mount");
    this.getAllCategories();
  }

  componentWillUnmount() {
    // clean up logic will come inside this function
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log({ prevProps, prevState, snapshot });
    if (this.state.selectedCategory !== prevState.selectedCategory) {
      this.getProductsBySelectedCategory();
    }
  }

  getAllCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          categories: json,
        });
      });
  }

  getProductsBySelectedCategory() {
    fetch(`https://fakestoreapi.com/products/category/${this.state.selectedCategory}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
      });
  }

  handleCategoryChange = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };
  render() {
    console.log("component rendered");

    return (
      <div>
        <select name="categories" id="categories" onChange={this.handleCategoryChange}>
          {this.state.categories.map((category) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
        <section className="product">
          {this.state.products.map((prod) => {
            return (
              <section className="product-item">
                <img style={{ height: 200, width: 200 }} src={prod.image} alt={prod.title} />
                <section>
                  <h2>{prod.title}</h2>
                </section>
              </section>
            );
          })}
        </section>
      </div>
    );
  }
}
