var baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseUrl = 'https://testagent.xiaopangche.cn:30001';
} else {
  
}

export { baseUrl }