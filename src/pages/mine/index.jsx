/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
// import profile_top from "../../assets/images/profile_top.png";
import "./index.less";

export default function Index() {
  // const onHandleLogin = () => {
  //   console.log("login");
  // };
  return (
    <View className="index">
      <View className="head-wrapper">
        {/* <Image
          className="head-wrapper-image"
          src={profile_top}
          mode="widthFix"
        /> */}
        <View className="head-wrapper-login-wrapper">
          <View className="head-wrapper-login-wrapper-icon"></View>
          <View
            className="head-wrapper-login-wrapper-text"
            onClick={() => Taro.navigateTo({ url: "/pages/npulogin/index" })}
          >
            <Text>登录</Text>
          </View>
        </View>
      </View>
      <View className="body-wrapper">
        <View className="body-wrapper-border">
          <View className="body-wrapper-border-item">
            <Text className="body-wrapper-border-item-text">我的订单</Text>
          </View>
          <View className="body-wrapper-border-item">
            <Text className="body-wrapper-border-item-text">共享商品</Text>
          </View>
          <View className="body-wrapper-border-item">
            <Text className="body-wrapper-border-item-text">二手商品</Text>
          </View>
          <View className="body-wrapper-border-item">
            <Text className="body-wrapper-border-item-text">意见反馈</Text>
          </View>
          <View className="body-wrapper-border-item">
            <Text className="body-wrapper-border-item-text">使用说明</Text>
          </View>
          <View className="body-wrapper-border-item">
            <Text className="body-wrapper-border-item-text">我的足迹</Text>
          </View>
        </View>
      </View>
      <View className="version">版本0.0.1</View>
    </View>
  );
}
