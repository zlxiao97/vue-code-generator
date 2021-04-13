const fs = require("fs");
const route = require("./route");

fs.mkdir(`${__dirname}/dist/api`, { recursive: true }, console.error);

const temp = `
// 模块名：Title
const mockList = [
  {
    id: 1,
    name: '记事本',
    description: '说明',
    source: '描述',
    status: '状态'
  }
]

const mockDetail = {
  a: 'xxx',
  b: 'xxx'
}

const mockEditSuccess = {
  success: true,
  message: '编辑成功！'
}

const mockCreateSuccess = {
  success: true,
  message: '新增成功！'
}

export function fetchXXXList(params) {
  return new Promise(resolve => {
    resolve(mockList)
  })
}

export function fetchXXXDetail(params) {
  return new Promise(resolve => {
    resolve(mockDetail)
  })
}

export function editXXX(params) {
  return new Promise(resolve => {
    resolve(mockEditSuccess)
  })
}

export function createXXX(params) {
  return new Promise(resolve => {
    resolve(mockCreateSuccess)
  })
}

`;

const allModules = route.children;

const mockData = {
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

const getFileContent = (name, title, list, detail) => {
  const moduleName = String(name.split("")[0]).toUpperCase() + name.slice(1);
  return `
    // 模块名：${title}
    const mockList = ${JSON.stringify(
      list.map((item, index) => ({ id: index + 1, ...item }))
    )}

    const mockDetail = ${JSON.stringify(detail)}

    const mockEditSuccess = {
      success: true,
      message: '编辑成功！'
    }

    const mockCreateSuccess = {
      success: true,
      message: '新增成功！'
    }

    export function fetch${moduleName}List(params) {
      return new Promise(resolve => {
        resolve(mockList)
      })
    }

    export function fetch${moduleName}Detail(params) {
      return new Promise(resolve => {
        resolve(mockDetail)
      })
    }

    export function edit${moduleName}(params) {
      return new Promise(resolve => {
        resolve(mockEditSuccess)
      })
    }

    export function create${moduleName}(params) {
      return new Promise(resolve => {
        resolve(mockCreateSuccess)
      })
    }

    `;
};
allModules.forEach(({ name, meta: { title }, hidden }) => {
  if (!hidden) {
    const content = getFileContent(
      name,
      title,
      mockData[name].list,
      mockData[name].detail
    );
    fs.writeFile(`${__dirname}/dist/api/${name}.js`, content, console.error);
  }
});
