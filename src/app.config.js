export default defineAppConfig({
  pages: ["pages/home/index", "pages/mine/index"],
  tabBar: {
    color: "#2c2c2c",
    selectedColor: "#1296db",
    backgroundColor: "#ffffff",
    position: "bottom",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "assets/icons/home.png",
        selectedIconPath: "assets/icons/home_s.png",
      },
      // {
      //   "pagePath": "pages/search/search",
      //   "text": "搜索",
      //   "iconPath": "icons/search.png",
      //   "selectedIconPath": "icons/search_s.png"
      // },
      // {
      //   "pagePath": "pages/message/message",
      //   "text": "消息",
      //   "iconPath": "icons/message.png",
      //   "selectedIconPath": "icons/message_s.png"
      // },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "assets/icons/user.png",
        selectedIconPath: "assets/icons/user_s.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
