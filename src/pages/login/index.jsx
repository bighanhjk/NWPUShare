/* eslint-disable jsx-quotes */
import { View, Image, Text } from "@tarojs/components";
// import { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Index() {
  return (
    <View className="index">
      <View className="container">
        <Image
          className="app_icon"
          mode="widthFix"
          src="/icons/login_next.png"
        ></Image>
        <View>
          <swiper
            className="login_swiper"
            indicator-dots="true"
            indicator-color="rgba(0,0,0,.3)"
            autoplay="true"
            current="0"
            interval="5000"
            duration="1000"
          >
            <swiper-item item-id="1">
              <navigator>
                <Image
                  className="login_swiper_image"
                  mode="widthFix"
                  src="/assets/images/login_slideshow1.png"
                ></Image>
              </navigator>
            </swiper-item>
            <swiper-item item-id="2">
              <navigator>
                <Image
                  className="login_swiper_image"
                  mode="widthFix"
                  src="/assets/images/login_slideshow2.png"
                ></Image>
              </navigator>
            </swiper-item>
          </swiper>
        </View>

        <View className="login-form">
          <View className="tipInputView">
            <text className="tipNameText">学工号</text>
            <View className="inputView">
              <label className="loginLab"></label>
              <input
                className="inputText"
                placeholder="请输入帐号"
                bindinput="phoneInput"
              />
            </View>
          </View>
          <View className="tipInputView">
            <text className="tipPwdText">密码</text>
            <View className="inputView">
              <label className="loginLab"></label>
              <input
                className="inputText"
                password="true"
                placeholder="请输入密码"
                bindinput="passwordInput"
              />
            </View>
          </View>

          <button className="loginBtn">
            <Image src="/icons/login_next.png" mode="widthFix"></Image>
          </button>
        </View>
      </View>
    </View>
  );
}
