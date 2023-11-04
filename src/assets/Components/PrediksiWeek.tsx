import React from 'react'
import { View, Text, Image } from 'react-native'

class PrediksiDay extends React.Component <{date: string}> {
  render() {
    return (
      <View className="flex flex-row px-6 py-3 border-t border-gray-200">
        <View className="">
          <Text className="text-gray-600 text-sm" style={{ fontFamily: 'poppins-semibold' }}>{this.props.date}</Text>
          <Text className="text-blue-600 text-sm" style={{ fontFamily: 'poppins-light' }}>Siang 28° | Malam 23°</Text>
        </View>
          
      </View>
    )
  }
}

export default PrediksiDay
