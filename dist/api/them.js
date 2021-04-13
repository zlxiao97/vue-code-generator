
    // 模块名：主题配置
    const mockList = [{"id":1,"name":"我是主题名","template":"X1"},{"id":2,"name":"我是主题名","template":"X1"},{"id":3,"name":"我是主题名","template":"X1"},{"id":4,"name":"我是主题名","template":"X1"},{"id":5,"name":"我是主题名","template":"X1"},{"id":6,"name":"我是主题名","template":"X1"},{"id":7,"name":"我是主题名","template":"X1"},{"id":8,"name":"我是主题名","template":"X1"},{"id":9,"name":"我是主题名","template":"X1"},{"id":10,"name":"我是主题名","template":"X1"},{"id":11,"name":"我是主题名","template":"X1"},{"id":12,"name":"我是主题名","template":"X1"},{"id":13,"name":"我是主题名","template":"X1"},{"id":14,"name":"我是主题名","template":"X1"},{"id":15,"name":"我是主题名","template":"X1"},{"id":16,"name":"我是主题名","template":"X1"},{"id":17,"name":"我是主题名","template":"X1"},{"id":18,"name":"我是主题名","template":"X1"},{"id":19,"name":"我是主题名","template":"X1"},{"id":20,"name":"我是主题名","template":"X1"}]

    const mockDetail = {"name":"我是主题名","template":"X1"}

    const mockEditSuccess = {
      success: true,
      message: '编辑成功！'
    }

    const mockCreateSuccess = {
      success: true,
      message: '新增成功！'
    }

    export function fetchThemList(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetchThemDetail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function editThem(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function createThem(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    