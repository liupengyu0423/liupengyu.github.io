<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org"
           target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org"
           target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org"
           target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs"
           target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/"
           target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/"
           target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/"
           target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/"
           target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue"
           target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // get请求
    /* global getAjax */
    getAjax('/movie/top250', {
      params: {
        id: 123
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    let params = { id: 3 }
    /* global postAjax */
    postAjax('/movie/top250?wfffs', params).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    let data = { id: 4 }
    /* global putAjax */
    putAjax('/movie/top250', data).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // // post请求
    // this.$axios.post('/movie/top250', {
    //   a: 1,
    //   b: 2
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // 执行多个并发请求
    // function gettop1 () {
    //   return ajax.get('/movie/top250?id=1')
    // }
    // function gettop2 () {
    //   return ajax.get('/movie/top250?id=2')
    // }
    // function gettop3 () {
    //   return ajax.get('/movie/top250?id=3')
    // }
    // axios.all([gettop1(), gettop2(), gettop3()])
    //   .then(ajax.spread((top1, top2, top3) => {
    //     console.log(top1, top2, top3)
    //   }))
    // this.$axios.request('/movie/top250')
    // this.$axios.delete('/movie/top250')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
