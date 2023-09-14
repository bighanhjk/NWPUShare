/* eslint-disable jsx-quotes */
import {
  View,
  Text,
  Image,
  Button,
  Swiper,
  SwiperItem,
} from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import login_next from "../../assets/images/login_slideshow1.png";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Login Page loaded.");
  });
  return (
    <View className="index">
      <View className="container">
        <Image className="app_icon" mode="widthFix" src={login_next}></Image>
        <View>
          <Swiper
            className="login_Swiper"
            indicator-dots="true"
            indicator-color="rgba(0,0,0,.3)"
            autoplay="true"
            current="0"
            interval="5000"
            duration="1000"
          >
            <SwiperItem item-id="1">
              <Image
                className="login_Swiper_image"
                mode="widthFix"
                src="/assets/images/login_slideshow1.png"
              ></Image>
            </SwiperItem>
            <SwiperItem item-id="2">
              <Image
                className="login_Swiper_image"
                mode="widthFix"
                src="/assets/images/login_slideshow2.png"
              ></Image>
            </SwiperItem>
          </Swiper>
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
          <Button className="loginBtn">
            <Image src={login_next} mode="widthFix"></Image>
          </Button>
        </View>
      </View>
    </View>
  );
}
