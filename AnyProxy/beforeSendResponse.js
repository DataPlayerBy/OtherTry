// responseDetail

// response {object} 服务端的返回信息，包括statusCode header body三个字段
// _res {object} 原始的服务端返回对象

// 例子
// {
//   response: {
//     statusCode: 200,
//     header: {
//       'Content-Type': 'image/gif',
//       Connection: 'close',
//       'Cache-Control': '...'
//     },
//     body: '...'
//   },
//   _res: { /* ... */ }
// }

// 函数返回值
// 不做任何处理，返回null
// return null;
// 修改返回的状态码
// var newResponse = Object.assign({}, responseDetail.response);
// newResponse.statusCode = 404;
// return {
//   response: newResponse
// };
// 修改返回的内容
// var newResponse = Object.assign({}, responseDetail.response);
// newResponse.body += '--from anyproxy--';
// return {
//   response: newResponse
// };

module.exports = {
  *beforeSendResponse(requestDetail, responseDetail) {
    if (requestDetail.url.indexOf('http://www.mafengwo.cn') === 0) {
      const newResponse = responseDetail.response;
      newResponse.header['X-Proxy-By'] = 'AnyProxy';
      return {
        response: newResponse
      };
    }
  }
};









