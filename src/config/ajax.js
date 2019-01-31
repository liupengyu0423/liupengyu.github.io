// 应用axios完成ajax请求
import axios from 'axios'
import qs from 'qs'

// axios默认会导出实例axios，通常只要使用这个实例就可以，但是也可以创建实例以下为由！！
// 是否创建实例的理由：如果有多个服务器，状态码返回的不一致等，可以创建多个实例处理不同的状态
// 比如axios1是用http状态码确定响应是否正常，而axios2是服务器自己定义的状态码，又或者他们的请求头不同，支持的content-type不同，那么我可以单独为axios1和axios2写拦截器

// 没有再创建实例
// axios.defaults.timeout = 5000
// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 创建实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  withCredentials: true
})

// request拦截器
instance.interceptors.request.use(config => {
  // post提交 data存在  并且data不是FormData对象时对数据进行json化处理
  if (config.method === 'post' && config.data && config.data.constructor !== 'FormData') {
    // qs是一个npm仓库所管理的包，可以通过npm install qs安装
    // qs.parse()将url解析成对象的形式
    // qs.stringify()将对象序列化成url的形式，以&进行连接 这种形式更适合后台获取参数
    config.data = qs.stringify(config.data)
    // Content-Type常见的有application/x-www-form-urlencoded 和 application/json 都是表单数据发送时的编码类型
    /* application/x-www-form-urlencoded :
      客户端发送"test=1"，则浏览器network中查看到FormData中显示 test : 1
      服务端接收数据：$_post["test"] 即可
    */
    /*
      application/json(序列化后的json字符串) :
      客户端发送json格式字符串 {test : 1}
      服务端$_POST['test']取不到数据，php中json访问方式没有{test : 1}格式，$json = {test:"I'm Client"}会报错
      所以要想使用json格式，php头部需要加上如下代码，否则会报错 header('Access-Control-Allow-Headers:x-requested-with,content-type');
    */
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, err => {
  return Promise.reject(err)
})

// response拦截器
instance.interceptors.response.use(config => {
  // const res = config.data
  // 错误处理
  // if (res.errcode === 200) {
  //   return res
  // } else {
  //   if (res.code === 200) {
  //     return res
  //   } else {
  //     return Promise.reject(res.errmsg)
  //   }
  // }
  return config
}, err => {
  return Promise.reject(err)
})

// 封装get方法
export function getAjax (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

// 封装post方法
export function postAjax (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

// 封装patch方法  局部更新
export function patchAjax (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

// 封装put方法
export function putAjax (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
