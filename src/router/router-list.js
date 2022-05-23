export const routerList = [
  {
    path: '/',
    title: '首页',
    name: 'Home'
  },
  {
    path: '/use/useTabs',
    title: 'tabs示例',
    name: 'TabsDemo'
  },
  {
    path: '/use/bindStyle',
    title: 'style样式绑定',
    name: 'BindStyle'
  },
  {
    path: '/use/useArr',
    title: '数组使用示例',
    name: 'UseArrDemo'
  },
  {
    path: '/use/useSlots',
    title: '作用域插槽',
    name: 'UseSlots'
  },
  {
    path: '/use/useDirective',
    title: '自定义指令',
    name: 'UseDirective'
  },
  {
    path: '/use/lifeCycle',
    title: '生命周期',
    name: 'LifeCycle'
  },
  {
    path: '/use/eventBedeck',
    title: '事件修饰符',
    name: 'EventBedeck'
  },
  {
    path: '/use/eventBind',
    title: '事件绑定',
    name: 'EventBind'
  },
  {
    path: '/use/computed',
    title: '计算属性使用',
    name: 'UseComputed'
  },
  {
    path: '/use/nextTick',
    title: 'nextTick使用',
    name: 'NextTick'
  },
  {
    path: '/use/useVfor',
    title: '分支循环',
    name: 'UseVfor'
  },
  {
    path: '/use/useWatch',
    title: '侦听器使用',
    name: 'UseWatch'
  },
  {
    path: '/use/useForm',
    title: '表单操作',
    name: 'UseForm'
  },
  {
    path: '/use/shopCart',
    title: '购物车示例',
    name: 'ShopCart'
  },
  {
    path: '/use/libraryDemo',
    title: '图书管理示例',
    name: 'LibraryDemo'
  },
  {
    path: '/use/registerComp',
    title: '组件注册',
    name: 'RegisterComp'
  },
  {
    path: '/use/UseFilter',
    title: '过滤器使用',
    name: 'UseFilter'
  },
  {
    path: '/use/attrAndModifier',
    title: '属性绑定及修饰符',
    name: 'AttrAndModifier'
  },
  {
    path: '/use/crossDataToP',
    title: '子组件向父组件传值',
    name: 'CrossDataToP'
  },
  {
    path: '/use/crossDataToC',
    title: '父组件向子组件传值',
    name: 'CrossDataToC'
  },
  {
    path: '/use/eventBus',
    title: '事件总线传值',
    name: 'UseEventBus'
  },
  {
    path: '/use/UseVuex',
    title: 'Vuex使用',
    name: 'UseVuex'
  },
  {
    path: '/use/useRouter',
    title: '路由使用',
    name: 'UseRouter',
    children: [
      {
        path: '/use/useRouter/one',
        name: 'One',
        component: () => import('../components/router-one.vue')
      },
      {
        path: '/use/useRouter/two',
        name: 'Two',
        component: () => import('../components/router-two.vue')
      }
    ]
  }
];