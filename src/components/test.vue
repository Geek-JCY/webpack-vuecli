<template>
  <div class="hello">
    用 devServer 来搭建服务器 获取 远程接口
  </div>
</template>

<script>
import {getDiscList} from 'api/test.js'
export default {
  name: 'test',
  data () {
    return {
    }
  },
  created () {
    this._getDiscList()
  },
  methods: {
    _getDiscList () {
      getDiscList().then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
