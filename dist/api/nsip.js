
    // 模块名：NSIP、SNIP配置
    const mockList = []

    const mockDetail = {}

    const mockEditSuccess = {
      success: true,
      message: '编辑成功！'
    }

    const mockCreateSuccess = {
      success: true,
      message: '新增成功！'
    }

    export function fetchNsipList(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetchNsipDetail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function editNsip(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function createNsip(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    