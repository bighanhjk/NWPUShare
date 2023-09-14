/* eslint-disable jsx-quotes */
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import profile_top from "../../assets/images/profile_top.png";
import "./index.less";

export default function Index() {
  const onHandleLogin = () => {
    console.log("login");
  };
  return (
    <View className="index">
      <View className="login-wrapper">
        <View className="login_icon"></View>
        <View
          className="login_text"
          onClick={() => Taro.navigateTo({ url: "/pages/npulogin/index" })}
        >
          <Text>登录</Text>
        </View>
        <Image className="topimage" src={profile_top} mode="aspectFill" />
      </View>
      <View className="function_wrapper">
        <View className="function_border">
          <View className="function_item">
            <Text className="itemtext">我的订单</Text>
          </View>

          <View className="function_item">
            <Text className="itemtext">共享商品</Text>
          </View>

          <View className="function_item">
            <Text className="itemtext">二手商品</Text>
          </View>

          <View className="function_item">
            <Text className="itemtext">意见反馈</Text>
          </View>

          <View className="function_item">
            <Text className="itemtext">使用说明</Text>
          </View>

          <View className="function_item">
            <Text className="itemtext">我的足迹</Text>
          </View>
        </View>
      </View>

      <View className="version">版本0.0.1</View>
    </View>
  );
}
