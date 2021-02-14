const initialProducts = [];

function ProductRow(props) {
  const product = props.Product;
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.productname}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>
        <a href={product.url} target="_blank">
          View
        </a>
      </td>
    </tr>
  );
}

function ProductTable(props) {
  const productRows = props.products.map((Product) => (
    <ProductRow key={Product.id} Product={Product} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Price</th>
          <th>Product Name</th>
          <th>Image URL</th>
        </tr>
      </thead>
      <tbody>{productRows}</tbody>
    </table>
  );
}

class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      category: form.products.value,
      price: form.PricePerUnit.value,
      productname: form.ProductName.value,
      url: form.ImageUrl.value,
    };

    this.props.createProduct(product);
    form.products.value = "";
    form.PricePerUnit.value = "$";
    form.ProductName.value = "";
    form.ImageUrl.value = "";
  }

  render() {
    return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <label htmlFor="products">Category</label>
        <select name="products" id="products">
          <option value="empty"></option>
          <option value="Shirts">Shirts</option>
          <option value="Accessories">Accessories</option>
          <option value="Jeans">Jeans</option>
          <option value="Jackets">Jackets</option>
          <option value="Sweaters">Sweaters</option>
        </select>
        <label htmlFor="PricePerUnit">Price Per Unit</label>
        <input
          type="text"
          name="PricePerUnit"
          id="PricePerUnit"
          defaultValue="$"
        />
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="ProductName"
          id="ProductName"
          placeholder="Enter product name"
        />
        <label htmlFor="ImageUrl">Image URL</label>
        <input
          type="text"
          name="ImageUrl"
          id="ImageUrl"
          placeholder="ImageUrl"
        />
        <input type="submit" onClick={cleardollar} />
      </form>
    );

    function cleardollar() {
      var input = document.getElementById("PricePerUnit");
      input.value = input.value.replace(/\$/g, "");
    }
  }
}

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ products: initialProducts });
    }, 500);
  }

  createProduct(product) {
    product.id = this.state.products.length + 1;
    const newProductList = this.state.products.slice();
    newProductList.push(product);
    this.setState({ products: newProductList });
  }

  render() {
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <div>Showing all available products</div>
        <hr />
        <ProductTable products={this.state.products} />
        <div>
          <br />
          Add a new product to inventory
        </div>
        <hr />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}

const element = <ProductList />;

ReactDOM.render(element, document.getElementById("content"));
