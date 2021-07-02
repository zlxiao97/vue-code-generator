const RouteView = "RouteView";
const BasicLayout = "BasicLayout";
module.exports = {
  path: "/",
  name: "index",
  component: BasicLayout,
  meta: { title: "menu.home" },
  redirect: "/third/registry",
  children: [
    {
      path: "/info",
      name: "info",
      component: RouteView,
      redirect: "/info/info-list",
      meta: { title: "用户信息管理", icon: "info" },
    },
  ]
};
