
    // 模块名：安全接入策略管理
    const mockList = [{"id":1,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":2,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":3,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":4,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":5,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":6,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":7,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":8,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":9,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":10,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":11,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":12,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":13,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":14,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":15,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":16,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":17,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":18,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":19,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"},{"id":20,"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"}]

    const mockDetail = {"name":"政策","express":"REQ.IP.SOURCEIP==10.0.2.107","require":"要求"}

    const mockEditSuccess = {
      success: true,
      message: '编辑成功！'
    }

    const mockCreateSuccess = {
      success: true,
      message: '新增成功！'
    }

    export function fetchSecureList(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetchSecureDetail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function editSecure(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function createSecure(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    