# VueJS tutorial

In this tutorial I learned how to use the following directives:

- `v-if`, `v-else-if` and `v-else`
- `v-bind` and `v-model`
- `v-on` (`@event`)
- `v-for` (`element, index in elements`) and `:key`

Also, I used `props` and `$emit` to pass data through child and parent components. For instance,

```js
// parent component
app.component('parent-component', {
  template:
  `
    <h1>{{title}}</h1>
    <child-component text='This is a child component' @mose-over-event='changeMouseOver'></child-component>
    <p v-show='mouseIsOver'>Mouse over!!!</p>
  `,
  data() {
    isPremium: true,
    mouseIsOver: false,
  },
  computed: {
    title() {
      return 'Tutorial '  + this.isPremium; 
    }
  },
  methods: {
    changeMouseOver(payload) {
      this.changeMouseOver = payload;
    }
  }
});
```

```js
// child component
app.component('child-component', {
  template:
  `
    <p @mouseOver='mouseIsOver'>{{text}}</p>
  `,
  props: {
    text: {
      type: string,
      required: true
    }
  },
  methods: {
    mouseIsOver() {
      this.$emit('mouse-over-event', true);
    }
  }
});

```

💚.
