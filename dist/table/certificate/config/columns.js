export default [
    {"type":"TextInput","title":"name","dataIndex":"name"},{"type":"TextInput","title":"certificateType","dataIndex":"certificateType"},{"type":"TextInput","title":"generalName","dataIndex":"generalName"},{"type":"TextInput","title":"issurName","dataIndex":"issurName"},{"type":"TextInput","title":"term","dataIndex":"term"},{"type":"TextInput","title":"position","dataIndex":"position"},{"type":"TextInput","title":"status","dataIndex":"status"},
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
  