import { DeleteList, GetList } from '@/store/actionCreators'

const mapStateToProps = (state) => {
  const { listItem } = state
  return {
    listItem,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    DeleteListItem(value) {
      const action = DeleteList(value)
      dispatch(action)
    },
    GetListData(value) {
      const action = GetList(value)
      dispatch(action)
    },
  }
}

export { mapStateToProps, mapDispatchToProps }
