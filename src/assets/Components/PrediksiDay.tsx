import React from 'react'
import { View, Text, Image } from 'react-native'

import DayClear from '../svgs/d-clear.svg'
import DayMostlyCloudy from '../svgs/d-clear-mc.svg'

class PrediksiDay extends React.Component <{title: string}> {
  render() {
    return (
      <View className="items-center">
          <Text className="text-gray-600 text-sm" style={{ fontFamily: 'poppins-semibold' }}>{this.props.title}</Text>
          <Text className="text-blue-600 text-sm" style={{ fontFamily: 'poppins-light' }}>28°</Text>
            {/* <Image source={require('../weather-icons/clear.png')} className="w-14 h-14 p-2"/> */}
          <View className="py-1">
            <DayClear width={56} height={56} />
          </View>
          <Text className="text-gray-600 text-sm" style={{ fontFamily: 'poppins' }}>28°</Text>
      </View>
    )
  }
}

export default PrediksiDay
