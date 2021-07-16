import Toast from "@/components/toast/Toast";
const obj = {};

//当vue 执行use操作时，会调用该对象的install方法
obj.install = function(Vue) {
  //1.创建组件构造器,Toast 就是导入的vue组件实例
  const toastContrustor = Vue.extend(Toast);
  //2.new 的方式，根据组件构造器，创建出来一个组件对象
  const newToast = new toastContrustor();
  //3.将组件对象，手动挂载到某一个元素上
  newToast.$mount(document.createElement("div"));
  //4.将挂载的组件元素div ，添加到body上
  document.body.appendChild(newToast.$el);

  //5.为vue原型 添加$toast 属性,所有子组件都能通过this.$toast 获取toast实例，调用对应的方法
  Vue.prototype.$toast = newToast;
};

export default obj;
