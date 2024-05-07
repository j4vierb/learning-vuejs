app.component('product-details', {
  props: {
    details: {
      type: Array,
      requiered: true
    }
  },
  template:
  /*html*/
  `
    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>
  `
});