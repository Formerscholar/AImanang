import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { getTopAlbums } from '@/services/main'
import { mapStateToProps, mapDispatchToProps } from '@/store/action'

function Login(props) {
  const { GetListData, DeleteListItem, listItem } = props
  useEffect(() => {
    setTimeout(() => {
      GetListData(['起床洗脸刷牙', '吃饭骑车去公司'])
    }, 200)
  }, [])

  return (
    <Button
      type="primary"
      onClick={() => {
        DeleteListItem(1)
        getTopAlbums()
      }}
    >
      {listItem}
    </Button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Login))
