 <template>
  <div>
    <div class="row">
      <div class="col-lg-11">
        <a href="#bag">
          <h5 id="cart">Cart {{items.length}}</h5>
        </a>
      </div>
    </div>
    <div class="row">
      <div
        v-for="product in products"
        :key="product.name"
        class="col-sm-12 col-md-10 col-lg-3"
        id="shop-item"
      >
        <img id="productimage" :src="product.image" />
        <h4 class="name">{{product.name}}</h4>
        <h5 class="price"># {{product.price}}</h5>
        <h5
          id="addToCart"
          v-on:click="addToCart(product.id, product.image, product.name, product.price, product.stock)"
        >Add to Cart</h5>
        <!-- <div v-else>
          <button id="add" v-on:click="addToCart"> + </button>
          <button id="subtract" v-on:click="removeFromCart"> - </button>
        </div>-->
      </div>
    </div>
    <div>
      <h1 id="bag">Cart</h1>
      <hr id="line" />
      <table>
        <tr>
          <td>Item</td>
          <td>Name</td>
          <td>Price</td>
        </tr>
        <tr v-for="item in items" :key="item.name">
          <td>
            <img id="itemimage" :src="item.image" />
          </td>
          <td>
            <h5 id="item">{{item.name}}</h5>
          </td>
          <td>
            <h5 id="item">{{item.price}}</h5>
          </td>
          <td>
            <button v-on:click="deleteItem">Delete</button>
          </td>
          <td>
            <router-link to="/buy"><button>Purchase</button></router-link>
          </td>
        </tr>
      </table>
      <hr id="line" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      bag: "",
      total: null,
      products: [
        {
          id: 1,
          name: "Coconut Fruit",
          price: 500,
          image: require("@/assets/crops/coconut 3.jpg"),
          quantity: 42
        },
        {
          id: 2,
          name: "Cocoyam",
          price: 1500,
          image: require("@/assets/crops/cocoyam-1-j.jpg"),
          quantity: 9
        },
        {
          id: 3,
          name: "Irish Potato",
          price: 1200,
          image: require("@/assets/crops/irish-potato.jpg"),
          quantity: 4
        },
        {
          id: 4,
          name: "Palm Fruit",
          price: 600,
          image: require("@/assets/crops/palm fruit.png"),
          quantity: 6
        },
        {
          id: 5,
          name: "Red Pepper",
          price: 200,
          image: require("@/assets/crops/Red pepper.jpg"),
          quantity: 4
        },
        {
          id: 6,
          name: "Benue Yam",
          price: 2000,
          image: require("@/assets/crops/Benue-Yam-min-600x711.png"),
          quantity: 3
        }
      ],
      items: [],
    };
  },
  methods: {
    addToCart: function(id, image, name, price, stock) {
      var singleProduct = {};
      singleProduct.id = id;
      singleProduct.image = image;
      singleProduct.name = name;
      singleProduct.price = price;
      singleProduct.stock = stock;

      this.items.push(singleProduct);


    },
    deleteItem: function() {
      this.items.pop();
    }
  }
};
</script>

<style scoped>
#itemqty {
  display: none;
}
#calculation {
  display: inline;
}
#productimage {
  width: 100%;
  height: 50%;
}
#cart {
  float: right;
  background: green;
  width: 100px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  color: lightgreen;
  margin-top: 60px;
}
#shop-item {
  margin: 50px;
  width: 30%;
  padding: 10px;
}
#addToCart {
  background: green;
  color: lightgreen;
  width: 130px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
}
#add {
  width: 30px;
  margin-left: 10px;
  margin-right: 50px;
  background: lightgreen;
  border: none;
  color: darkgreen;
  margin-bottom: 10px;
}
#subtract {
  width: 30px;
  background: lightgreen;
  border: none;
  color: darkgreen;
}
#one {
  margin: 20px;
}
#line {
  background: darkgreen;
}
#shop-item:hover {
  box-shadow: gray;
}
#addToCart:hover {
  background: lightgreen;
  color: darkgreen;
}
#cart:hover {
  background: lightgreen;
  color: darkgreen;
}
a:hover {
  text-decoration: none;
  color: darkgreen;
}
a {
  color: lightgreen;
}
#item {
  color: darkgreen;
}
#itemimage {
  width: 20%;
}
button {
  background: lightgreen;
  color: darkgreen;
  border-radius: 5px;
  border: none;
}
td {
  width: 20%;
  color: darkgreen;
}
h1 {
  color: darkgreen;
  text-align: center;
}
table {
  text-align: center;
}
</style>