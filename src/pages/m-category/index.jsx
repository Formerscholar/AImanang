import React, { memo } from 'react'
import { Button } from 'antd'

function m_category() {
  return <Button type="primary">main-category</Button>
}

export default memo(m_category)
