
    // 模块名：路由管理
    const mockList = [{"id":1,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":2,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":3,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":4,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":5,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":6,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":7,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":8,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":9,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":10,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":11,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":12,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":13,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":14,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":15,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":16,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":17,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":18,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":19,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"},{"id":20,"network":"0.0.0.0","mask":"0.0.0.0","gateway":"10.0.2.2","status":true,"distance":1,"tag":"静态的"}]

    const mockDetail = {"network":"0.0.0.0","mask":"0.0.0.0","emptyRoute":false,"gateway":"10.0.2.2","distance":1,"weight":"","cost":"","ad":"","protocol":""}

    const mockEditSuccess = {
      success: true,
      message: '编辑成功！'
    }

    const mockCreateSuccess = {
      success: true,
      message: '新增成功！'
    }

    export function fetchRouteList(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetchRouteDetail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function editRoute(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function createRoute(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    