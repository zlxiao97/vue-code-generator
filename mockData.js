module.exports = {
  nsip: { list: [], detail: {} },
  auth: {
    list: new Array(20).fill({
      name: "10.0.2.2_LDAP",
      type: "LDAP",
      server: "10.0.2.2:636",
      status: true,
    }),
    detail: {
      name: "10.0.2.2_LDAP",
      type: "LDAP",
      server: "10.0.2.2:636",
      status: true,
      serverType: "name",
      securityType: "纯文本",
      port: 636,
      LDAPType: "AD",
      timeout: 1,
      validate: true,
      basicDn: "",
      bindDn: "",
      adminPwd: "123",
      confirmPwd: "123",
      cloudEnalbe: true,
    },
  },
  route: {
    list: new Array(20).fill({
      network: "0.0.0.0",
      mask: "0.0.0.0",
      gateway: "10.0.2.2",
      status: true,
      distance: 1,
      tag: "静态的",
    }),
    detail: {
      network: "0.0.0.0",
      mask: "0.0.0.0",
      emptyRoute: false,
      gateway: "10.0.2.2",
      distance: 1,
      weight: "",
      cost: "",
      ad: "",
      protocol: "",
    },
  },
  certificate: {
    list: new Array(20).fill({
      name: "服务器秘钥对XXX",
      certificateType: "CLNT_CERT,SRVR_CERT",
      generalName: "默认的XXXXXX",
      issurName: "默认的ZZZZZZ",
      term: 365,
      position: "有效的",
      status: "关联",
    }),
    detail: {
      name: "ns-server.certificate",
      version: 3,
      seriesNumber: "01",
      signature: "sha256WithRSAEncryption",
      generalName:
        "C=美国,ST=加利福尼亚,L=圣何塞,O=Citrix ANG,OU=NS内部,CN=默认OVPUDQ",
      validPieriod: "2021年1月7日04:34:29 GMT",
      validTime: "11月18日19:09:09 2036 GMT",
      theme:
        "C=美国,ST=加利福尼亚,L=圣何塞,O=Citrix ANG,OU=NS内部,CN=默认OVPUDQ",
      algorithm: "rsa加密",
      size: 2048,
      SANDNS: "",
      notification: true,
      update: true,
      domain: false,
    },
  },
  system: { list: [], detail: {} },
  them: {
    list: new Array(20).fill({
      name: "我是主题名",
      template: "X1",
    }),
    detail: {
      name: "我是主题名",
      template: "X1",
    },
  },
  secure: {
    list: new Array(20).fill({
      name: "政策",
      express: "REQ.IP.SOURCEIP==10.0.2.107",
      require: "要求",
    }),
    detail: {
      name: "政策",
      express: "REQ.IP.SOURCEIP==10.0.2.107",
      require: "要求",
    },
  },
};
