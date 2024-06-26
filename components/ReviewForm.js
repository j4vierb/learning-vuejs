app.component('review-form', {
  template:
  /*html*/
  `
  <form class='review-form' @submit.prevent='onSubmit'>
    <h3>Leave a review</h3>
    <label for='name'>Name:</label>
    <input id='name' v-model='name'>

    <label for='review'>Review:</label>
    <textarea id='review' v-model='review'></textarea>

    <label for='rating'>Rating:</label>
    <select id='rating' v-model.number='rating'>
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <button class='button' type='submit'>Submit</button>
  </form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null
    }
  },
  methods: {
    onSubmit() {
      console.log('Create a new review!');

      if(this.name === '' || this.review === '' || this.rating === null) {
        alert('All form fields should to be filled!');
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }
      // productReview corresponds to the payload
      this.$emit('review-submitted', productReview);

      console.log(productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
    }
  }
});