import Vue from 'vue';
import Slide from '../../../component/main';

new Vue({
	el: '#app',
	data: {
		isShow1: false,
		input1: ''
	},
	components: {
		Slide
	},
	methods: {
		save1(){
			// setTimeout(() => {
			// 	this.isShow1 = false;
			// }, 1000)
			this.$refs.slideout.scrollTo(100);
		},
		show1(){
			setTimeout(() => {
				this.input1 = '玛丽吗卡卡阿卡卡卡卡';
			}, 1000)
		},
		afterEnter(){
			alert('enter')
		},
		afterLeave(){
			alert('leave')
		}
	}
})