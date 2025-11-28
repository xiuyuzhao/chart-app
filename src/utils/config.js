//config.js文件

const config = {
    apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://localhost:8000',
    apiPrefix: 'http://localhost:8000',
    proxy: true  //是否开启mock代理
  };
  
export default config;
  