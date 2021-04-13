export default [
    {"type":"TextInput","title":"name","dataIndex":"name"},{"type":"TextInput","title":"express","dataIndex":"express"},{"type":"TextInput","title":"require","dataIndex":"require"},
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
  