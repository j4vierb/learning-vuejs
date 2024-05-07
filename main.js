const app = Vue.createApp({
  data() {
    return {
      cart: [],
      githubProfile: 'https://github.com/j4vierb/',
      premiumValue: false
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeFromCart() {
      if(this.cart.length >= 0)
        this.cart.pop();
    }
  }
})