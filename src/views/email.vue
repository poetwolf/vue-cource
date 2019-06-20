<template>
  <div>
    <button @click="handleClick">按我</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {

    }
  },
  mounted () {
    console.log(this.$bus)
  }
}
</script>
