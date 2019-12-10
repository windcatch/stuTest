import React from 'react'

var styles = {
    'title': {
        paddingLeft: '20px',
        paddingRight: '50px',
        position: 'relative'
    },
    'delete': {
        marginLeft: '20px',
        marginRight: '50px'
    }
}

class AppTodos extends React.Component {
    handleChangeComplete() {
        this.props.ChangeCompleteItem(this.props.id)
    }

    handleDelete() {
        this.props.SubmitDeleteItem(this.props.id);
    }


    render() {
        return (
            <div className='comment'>
                <div className='content'>
          <span
              className='author'
              style={styles.title}
              onClick={this.handleChangeComplete.bind(this)}
          >
              {this.props.text}
              <span
                  className={this.props.complete ? 'line' : ''}
              />
          </span>
                    <span className='author'
                          style={styles.title}>
                {this.props.complete ? '已完成' : '未完成'}
          </span>
                    <span className='author'>{this.props.id}</span>
                    <span className='btn btn-primary'
                          style={styles.delete}
                          onClick={this.handleDelete.bind(this)}
                    >
                删除
          </span>
                </div>
            </div>
        )
    }
}

export default AppTodos;