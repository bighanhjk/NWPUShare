/* eslint-disable jsx-quotes */
import { View, Text } from "@tarojs/components";
import "./index.less";

export default function Index() {
  return (
    <View className="index">
      <View class="login-wrapper">
        <View class="login_icon"></View>
        <navigator url="/pages/login/login">
          <View class="login_text">登录</View>
        </navigator>
        <image
          class="topimage"
          src="/assets/images/profile_top.png"
          mode="aspectFill"
        />
      </View>
      <View class="function_wrapper">
        <View class="function_border">
          <navigator url="/pages/login/login">
            <View class="function_item">
              <Text class="itemtext">我的订单</Text>
            </View>
          </navigator>

          <navigator url="/pages/login/login">
            <View class="function_item">
              <Text class="itemtext">共享商品</Text>
            </View>
          </navigator>

          <navigator url="/pages/login/login">
            <View class="function_item">
              <Text class="itemtext">二手商品</Text>
            </View>
          </navigator>

          <navigator url="/pages/login/login">
            <View class="function_item">
              <Text class="itemtext">意见反馈</Text>
            </View>
          </navigator>

          <navigator url="/pages/login/login">
            <View class="function_item">
              <Text class="itemtext">使用说明</Text>
            </View>
          </navigator>

          <navigator url="/pages/login/login">
            <View class="function_item">
              <Text class="itemtext">我的足迹</Text>
            </View>
          </navigator>
        </View>
      </View>

      <View class="version">版本0.0.1</View>
    </View>
  );
}
