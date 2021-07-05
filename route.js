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
      path: "/application",
      name: "application",
      component: RouteView,
      redirect: "/application/application-list",
      meta: { title: "应用管理", icon: "appstore" }
    }
  ]
};
