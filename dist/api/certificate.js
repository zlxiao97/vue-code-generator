
    // 模块名：服务器证书
    const mockList = [{"id":1,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":2,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":3,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":4,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":5,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":6,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":7,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":8,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":9,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":10,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":11,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":12,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":13,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":14,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":15,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":16,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":17,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":18,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":19,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"},{"id":20,"name":"服务器秘钥对XXX","certificateType":"CLNT_CERT,SRVR_CERT","generalName":"默认的XXXXXX","issurName":"默认的ZZZZZZ","term":365,"position":"有效的","status":"关联"}]

    const mockDetail = {"name":"ns-server.certificate","version":3,"seriesNumber":"01","signature":"sha256WithRSAEncryption","generalName":"C=美国,ST=加利福尼亚,L=圣何塞,O=Citrix ANG,OU=NS内部,CN=默认OVPUDQ","validPieriod":"2021年1月7日04:34:29 GMT","validTime":"11月18日19:09:09 2036 GMT","theme":"C=美国,ST=加利福尼亚,L=圣何塞,O=Citrix ANG,OU=NS内部,CN=默认OVPUDQ","algorithm":"rsa加密","size":2048,"SANDNS":"","notification":true,"update":true,"domain":false}

    const mockEditSuccess = {
      success: true,
      message: '编辑成功！'
    }

    const mockCreateSuccess = {
      success: true,
      message: '新增成功！'
    }

    export function fetchCertificateList(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetchCertificateDetail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function editCertificate(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function createCertificate(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    