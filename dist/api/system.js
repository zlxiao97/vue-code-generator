
    // 模块名：系统配置管理
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

    export function fetchSystemList(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetchSystemDetail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function editSystem(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function createSystem(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    