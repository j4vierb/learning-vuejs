app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  `
  <div class="product-display">
  <div class="product-container">
    <div class="product-image">
      <img
        v-bind:src="image"
        alt="img"
        v-bind:class="inStock ? '' : 'out-of-stock-img'"/>
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <h2>Status</h2>
      <p v-if="inStock && inventory > 10" style="color: rgb(61, 145, 61);">In stock</p>
      <p v-else-if="inventory > 0 && inventory <= 10">Buy now!</p>
      <p v-else style="color: rgb(214, 51, 51);">Out of Stock</p>

      <h2>Shipping</h2>
      <p>Shipping: <b>{{shipping}}</b></p>

      <h2>Details</h2>
      <product-details :details="details"></product-details>

      <h2>Variants</h2>
      <div
        v-for="variant, index in variants" 
        :key="variant.id" 
        @mouseover="updateVariant(index)" 
        class="color-circle"
        v-bind:style="{ backgroundColor: variant.color }"
      ></div>

      <button
        class="button"
        :class="{ disabledButton: !inStock }" 
        v-on:click="addToCart()" 
        :disabled="!inStock"
      >Add to cart</button>

      <!-- @ abbreviates v-on: Vue directive -->
      <button
        class="button"
        :class="{ disabledButton: !inStock }" 
        v-on:click="removeFromCart()" 
        :disabled="!inStock"
      >Remove</button>

    </div>
  </div>

  <review-list :reviews='reviews' v-show='reviews.length > 0'></review-list>

  <!-- add review form -->
  <review-form @review-submitted='addReview'></review-form>

  </div>
  `,
  data() {
    return {
      brand: 'Vue mastery',
      product: 'Socks',
      description: 'This is the description to the component',
      selectedVariant: 0,
      inventory: 100,
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
      ],
      details: ['50% cotton', '30% wool', '20% polyester'],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      console.log('incrementing cart items!');
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id); // emit to parents
    },
    updateVariant(index) {
      console.log("Change variant: " + index);
      this.selectedVariant = index;
    },
    removeFromCart() {
      console.log("Decrementing cart items!");
      this.$emit('remove-to-cart');
    },
    addReview(review) { // here review is the payload
      console.log('add review by Product component');
      this.reviews.push(review);
    }
  },
  computed: { // precomputed properties
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant]['image'];
    },
    inStock() {
      return this.variants[this.selectedVariant]['quantity'];
    },
    shipping() {
      if(this.premium)
        return 'Free'
      return '$2.99'
    }
  }
});