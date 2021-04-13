export default [
    {"type":"TextInput","title":"name","dataIndex":"name"},{"type":"TextInput","title":"type","dataIndex":"type"},{"type":"TextInput","title":"server","dataIndex":"server"},{"type":"TextInput","title":"status","dataIndex":"status"},
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
  