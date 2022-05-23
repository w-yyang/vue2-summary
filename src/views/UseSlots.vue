<template>
  <div>
    <fruit-list :list='list'>
      <template slot-scope='slotProps'>
        <strong v-if='slotProps.info.id==2' class="current">{{ slotProps.info.name }}</strong>
        <span v-else>{{ slotProps.info.name }}</span>
      </template>
    </fruit-list>
    <alert-box>有bug</alert-box>
		<alert-box></alert-box>
		<!-- 不传递默认显示 -->
		<alert-box>有一个警告</alert-box>
    <base-layout>
			<p slot='header'>标题信息</p>
			<p>主要内容1</p>
			<p>主要内容2</p>
			<p slot='footer'>底部信息</p>
		</base-layout>

		<base-layout>
			<template slot='header'>
				<p>标题信息1</p>
				<p>标题信息2</p>
			</template>
			<!-- 临时包裹中间内容 -->
			<p>主要内容1</p>
			<p>主要内容2</p>
			<template slot='footer'>
				<p>底部信息1</p>
				<p>底部信息2</p>
			</template>
		</base-layout>
  </div>
</template>

<script>
/**
 *  全局注册
 * Vue.component('fruit-list', {
*  	props:['list'],
    template:`
      <div>
        <li :key='item.id' v-for='item in list'>
          <slot :info='item'>{{ item.name }}</slot>
        </li>
      </div>
    `
 * })
 */

export default {
  data() {
    const list = [
      {
        id:1,
        name:'apple'
      },{
        id:2,
        name:'orange'
      },{
        id:3,
        name:'banana'
      }
    ];
    return {
      list
    };
  },
  components: {
    // vue-cli默认不支持template模板编译，修改cli配置
    'fruit-list': {
			props:['list'],
			template:`
				<div>
					<li :key='item.id' v-for='item in list'>
						<slot :info='item'>{{ item.name }}</slot>
					</li>
				</div>
			`
		},
    'alert-box': {
			template:`
				<div>
					<strong>ERROR:</strong>
					<slot>默认内容</slot>
				</div>
			`
		},
    'base-layout': {
			template:`
				<div>
					<header>
						<slot name='header'></slot>
					</header>
					<main>
						<slot></slot>
					</main>
					<footer>
						<slot name='footer'></slot>
					</footer>
				</div>
			`
		}
  }
}
</script>

<style lang="scss" scoped>
  .current {
    color: orange;
  }
</style>