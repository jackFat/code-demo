const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel} = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method 
  const url = req.url
  req.path = url.split('?')[0]

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id
    const data = getDetail(id)
    return new SuccessModel(data)
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body
    const data = newBlog(blogData)
    return new SuccessModel(data)
  }

  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const id = req.query.id
    const result = updateBlog(id, req.body)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('更新博客内容失败')
    }
    return {
      msg: '这是更新博客接口'
    }
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/del') {
    const id = req.query.id
    const result = updateBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel('删除博客失败')
    }
  }

}


module.exports = handleBlogRouter