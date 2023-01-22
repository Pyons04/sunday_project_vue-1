<template>
  <div>
    <p>{{name}}で{{contents}}を書こう!</p>
  </div>
</template>
<script>
  export default{
    name: 'TestView',
    data() {
        return {
          name: 'Vue.js',
          contents: 'ComponentTest'
        }
    }
  }
</script>