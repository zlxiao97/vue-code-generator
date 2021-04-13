export default [
    {"type":"TextInput","title":"network","dataIndex":"network"},{"type":"TextInput","title":"mask","dataIndex":"mask"},{"type":"TextInput","title":"gateway","dataIndex":"gateway"},{"type":"TextInput","title":"status","dataIndex":"status"},{"type":"TextInput","title":"distance","dataIndex":"distance"},{"type":"TextInput","title":"tag","dataIndex":"tag"},
    {
      title: '操作',
      dataIndex: 'action',
      width: '150px',
      scopedSlots: { customRender: 'action' },
      dcActionTypes: [
        {
          title: '详情',
          type: 'detaile'
        }
      ]
    }
  ]
  