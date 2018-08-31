// requestDetail

// protocol {string} 请求使用的协议，http或者https
// requestOptions {object} 即将发送的请求配置，供require('http').request作为使用。详见：https://nodejs.org/api/http.html#http_http_request_options_callback
// requestData {object} 请求Body
// url {string} 请求url
// _req {object} 请求的原始request

// 例子
// {
//   protocol: 'http',
//   url: 'http://anyproxy.io/',
//   requestOptions: {
//     hostname: 'anyproxy.io',
//     port: 80,
//     path: '/',
//     method: 'GET',
//     headers: {
//       Host: 'anyproxy.io',
//       'Proxy-Connection': 'keep-alive',
//       'User-Agent': '...'
//     }
//   },
//   requestData: '...',
//   _req: { /* ... */}
// }

// 函数返回值
// 不做任何处理，返回null
// return null;
// 修改请求协议，如强制改用https发起请求
// return {
//   protocol: 'https'
// };
// 修改请求参数
// var newOption = Object.assign({}, requestDetail.requestOptions);
// newOption.path = '/redirect/to/another/path';
// return {
//   requestOptions: newOption
// };
// 修改请求body
// return {
//   requestData: 'my new request data'
//   //这里也可以同时加上requestOptions
// };
// 直接返回客户端，不再发起请求，其中statusCode header 是必选字段
// return {
//   response: {
//     statusCode: 200,
//     header: { 'content-type': 'text/html' },
//     body: 'this could be a <string> or <buffer>'
//   }
// };


module.exports = {
  *beforeSendRequest(requestDetail) {
    if (requestDetail.url.indexOf('http://www.mafengwo.cn/') === 0) {
      const newRequestOptions = requestDetail.requestOptions;
      newRequestOptions.headers['User-Agent'] = 'AnyProxy/0.0.0';
      return {
        requestOptions: newRequestOptions
      };
    }
  },
};









