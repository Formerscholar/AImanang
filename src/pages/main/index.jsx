import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { Route, Switch, Redirect } from 'react-router-dom'
import { mapStateToProps, mapDispatchToProps } from '@/store/action'

import m_index from '@/pages/m-index'
import m_category from '@/pages/m-category'

import { Button } from 'antd'

const Main = (props) => {
  const { GetListData, DeleteListItem, listItem } = props

  useEffect(() => {
    GetListData(['起床洗脸刷牙', '吃饭骑车去公司'])
  }, [])

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          DeleteListItem(1)
        }}
      >
        Primary Button
      </Button>
      {listItem}
      <Switch>
        <Route exact path="/index/main" component={m_index} />
        <Route exact path="/index/category" component={m_category} />
        <Redirect to="/index/main"></Redirect>
      </Switch>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
