import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import PrediksiDay from "../assets/Components/PrediksiDay";
import PrediksiWeek from "../assets/Components/PrediksiWeek";

// weather svgs
import DayClear from "../assets/svgs/d-clear.svg";
import DayMostlyCloudy from '../assets/svgs/d-clear-mc.svg';
import DayPartlyCloudy from '../assets/svgs/d-clear-pc.svg';

export default function Home() {
  const [fontsLoaded] = useFonts({
    'poppins': require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'poppins-extabold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'poppins-light': require('../assets/fonts/Poppins-Light.ttf'),
    'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });

  const today = new Date();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const hour = today.getHours();
  
  // live clock no seconds with 24 hours format
  const [clock, setClock] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' }));
  setInterval(() => {
    setClock(new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' }));
  }, 1000);

  // handle date
  const todayDate = weekday[today.getDay()] + ', ' + today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear();

  // handle color gradient by hour
  let colorGradient = ['#0ea5e9', '#a5f3fc'];
  if (hour >= 6 && hour < 12) {
    colorGradient = ['#0ea5e9', '#a5f3fc'];
  } else if (hour >= 12 && hour < 18) {
    colorGradient = ['#ea580c', '#fde047'];
  } else if (hour >= 18 && hour < 24) {
    colorGradient = ['#172554', '#c084fc'];
  } else if (hour >= 0 && hour < 6) {
    colorGradient = ['#172554', '#3730a3'];
  }

  if (!fontsLoaded) {
    return null;
  }

  function sayHi() {
    alert('Hi!');
  }

  return (
    <View className="flex-1 relative bg-gray-200">
      <StatusBar style="auto" />

      <SafeAreaView className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false}>

          <View className="space-y-4 mt-14 mb-4">
            <View className="px-4 py-1 rounded-lg mx-4 bg-white">
              <Text className="text text-center text-gray-600" style={{ fontFamily: 'poppins-semibold' }}>
                Banyumas, Jawa Tengah
              </Text>
            </View>

            <View className="flex rounded-2xl mx-4 bg-white">
              <LinearGradient colors={colorGradient} className="px-6 py-8 rounded-t-2xl">
                
                <Text className="text-2xl text-white" style={{ fontFamily: 'poppins-semibold' }}>Hari ini</Text>
                <Text className="text-white" style={{ fontFamily: 'poppins-light' }}>{todayDate + ' | ' + clock}</Text>
                
                <View className="flex flex-row items-center justify-between mt-5">
                  <View className="flex flex-col items-center">
                    <Text className="text-6xl pt-4 text-white" style={{ fontFamily: 'poppins-semibold' }}>28°</Text>
                  </View>
                  <View className="flex flex-col items-center">
                    <DayPartlyCloudy width={80} height={80} />
                  </View>
                </View>
                <View className="flex flex-row items-center justify-between mt-5">
                  <Text className="text-white" style={{ fontFamily: 'poppins-light' }}>Siang 28°, Malam 23°</Text>
                  <View className="items-center w-20">
                    <Text className="text-white text-center" style={{ fontFamily: 'poppins-light' }}>Cerah</Text>
                  </View>
                </View>
              </LinearGradient>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} className="py-6">

                <View className="px-4 flex-row">
                  {/* loop for item */}
                  
                  <PrediksiDay title='Now' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                  <PrediksiDay title='11:00' />
                </View>
                
                

              </ScrollView>

              <View className="px-6 py-3 rounded-b-2xl bg-white items-center border-t border-gray-200">
                <TouchableOpacity onPress={sayHi}>
                  <Text className="text-sm text-blue-500" style={{ fontFamily: 'poppins-light' }}>
                    Lihat selengkapnya
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex rounded-2xl mx-4 pb-4 bg-white">
              <Text className="text-lg text-gray-600 px-6 py-4" style={{ fontFamily: 'poppins-semibold' }}>7 hari kedepan</Text>

              <PrediksiWeek date='Senin, 12 Jan' />
              <PrediksiWeek date='Senin, 12 Jan' />
              <PrediksiWeek date='Senin, 12 Jan' />
              <PrediksiWeek date='Senin, 12 Jan' />
              <PrediksiWeek date='Senin, 12 Jan' />
              
              <Text className="text-xs text-gray-600 px-6 pt-2" style={{ fontFamily: 'poppins-light' }}>Supported by Open weather API</Text>

            </View>

          </View>

        </ScrollView>




      </SafeAreaView>
      
    </View>
  );
}
