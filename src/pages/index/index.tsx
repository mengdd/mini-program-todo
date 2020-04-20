import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
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

  render() {
    let { list, inputVal } = this.state

    return (
      <View className='index'>
        <View className='list_wrap'>
          <Text>Todo List</Text>
          {
            list.map((item, index) => {
              return <View>
                <Text>{index + 1}.{item}</Text>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}
