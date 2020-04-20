import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'

interface MyProps {
}

interface MyState {
  list: Array<string>;
  inputVal: string;
}

export default class Index extends Component<MyProps, MyState> {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      list: ['get up', 'eat breakfast', 'study',],
      inputVal: ''
    }

  }

  addItem() {
    let { list } = this.state
    const inputVal = this.state.inputVal

    if (inputVal == '') return
    else {
      list.push(inputVal)
    }
    this.setState({
      list,
      inputVal: ''
    })
  }

  removeItem(index) {
    let { list } = this.state
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  inputHandler(e) {
    this.setState({ inputVal: e.target.value })
  }

  render() {
    let { list, inputVal } = this.state

    return (
      <View className='index'>
        <Input className='input' type='text' value={inputVal} onInput={this.inputHandler.bind(this)} />
        <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
        <View className='list_wrap'>
          <Text>Todo List</Text>
          {
            list.map((item, index) => {
              return <View className='list_item'>
                <Text>{index + 1}.{item}</Text>
                <Text className='del' onClick={this.removeItem.bind(this, index)}>删除</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}
