<template>
<!-- YOUR HTML HERE -->
  <div class="app-page">
    <div class="page-content">
      <h1>default page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import your components and others here
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "DefaultView",
  components: {
    HelloWorld, // declare compononents here
  },
  data() {
    // YOUR data and variables
    return {
      // declare here
    }
  },
  created: {
    // this is a lifecycle hook
  },
  mounted: {
    // this is a lifecycle hook
  },
  beforeDestroy: {
    // this is a lifecycle hook
  },
  methods: {
    // write your methods and functions HERE
    someMethod() {
      console.log('alo');
    },
    async someAsyncMethod(value) {
      console.log('some async methods');
    },
  },
};
</script>

<style lang="scss" module>

</style>