
    // 模块名：身份认证
    const mockList = [{"id":1,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":2,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":3,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":4,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":5,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":6,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":7,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":8,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":9,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":10,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":11,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":12,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":13,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":14,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":15,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":16,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":17,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":18,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":19,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true},{"id":20,"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true}]

    const mockDetail = {"name":"10.0.2.2_LDAP","type":"LDAP","server":"10.0.2.2:636","status":true,"serverType":"name","securityType":"纯文本","port":636,"LDAPType":"AD","timeout":1,"validate":true,"basicDn":"","bindDn":"","adminPwd":"123","confirmPwd":"123","cloudEnalbe":true}

    const mockEditSuccess = {
      success: true,
      message: '编辑成功！'
    }

    const mockCreateSuccess = {
      success: true,
      message: '新增成功！'
    }

    export function fetchAuthList(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetchAuthDetail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function editAuth(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function createAuth(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    