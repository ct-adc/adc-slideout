<template>
	<div>
		<transition name="fade">
			<div class="mask" @click="clickMask" v-show="isShow" :style="{'z-index': maskIndex}"></div>
		</transition>
		<transition name="slide">
			<div class="main" v-show="isShow" :style="{'width': width, 'z-index': bodyIndex}">
				<div class="head clearfix">
					<div class="pull-left title-text">{{title}}</div>
					<button class="btn btn-default pull-right" @click="hide">取消</button>
				</div>
				<div class="body">
					<slot></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: '',
        data(){
            return {
            	isShow: this.value
            };
        },
		computed: {
			bodyIndex(){
				return this.index + 1;
			},
			maskIndex(){
				return this.index;
			}
		},
        props: {
			index: {
				type: Number,
				default: 1000
			},
        	title: {
        		type: String,
        		default: '标题'
        	},
        	width: {
        		type: String,
        		default: '80%'
        	},
        	time: {
        		type: Number,
        		default: 1000
        	},
        	hideOnBlur: {
        		type: Boolean,
        		default: false
        	},
        	value: {
        		type: Boolean,
        		default: false
        	}
        },
        watch: {
        	value(val){
        		this.isShow = val;
        	},
        	isShow(val){
        		this.$emit('input', val);

        		if(val){
        			this.$emit('on-show');
					document.body.style.overflow = 'hidden';
        		}else{
        			this.$emit('on-hide');
					document.body.style.overflow = 'visible';
        		}
        	}
        },
        methods: {
        	clickMask(){
        		if(this.hideOnBlur){
        			this.hide();
        		}
        	},
        	hide(){
        		this.isShow = false;
        	},
        	beforeEnter(el){
        		el.style.transform = 'translateX(100%)';
        		el.style.transition = '1s';
        	},
        	enter(el, done){
        		el.style.transform = 'translateX(0)';
        		el.addEventListener('transitionend', function(){
        			done();
        		})
        	},
        	afterEnter(){
        		this.$emit('on-show')
        	},
        	leave(el, done){
        		el.style.transform = 'translateX(100%)';
        		el.style.transition = this.time;
        		done();
        	}
        }
    };
</script>

<style scoped>

	.fade-enter{
		opacity: 0;
	}
	.fade-enter-active{
		transition: .6s;
	}
	.fade-leave-active{
		opacity: 0;
		transition: .6s;
	}
	.slide-enter{
		transform: translateX(100%);
	}
	.slide-leave-active{
		transform: translateX(100%);
	}
	.title-text{
		height: 34px;
		line-height: 34px;
	}
	.mask{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}
	.main{
		position: fixed;
	    background-color: #fff;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    padding: 0px;
	    box-shadow: 0 0 40px -10px #000;
	    transition: .6s;
	}
	.head {
	    border-bottom: 1px #ddd solid;
	    padding: 10px 15px;
	    margin-bottom: 10px;
	    font-size: 14px;
	    color: #888;
	}
	.body{
		position: absolute;
		top: 55px;
		right: 0;
		bottom: 0;
		left: 0;
		overflow-y: scroll;
		padding: 10px 15px;
	}
	.body::-webkit-scrollbar{
		width: 6px;
		height: 6px;
		
	}
	.body::-webkit-scrollbar-thumb, .body::-webkit-scrollbar-thumb:horizontal, .body::-webkit-scrollbar-thumb:vertical{
		background-color: #dbd6cd;
	}
	.body::-webkit-scrollbar-track-piece{
		background-color: rgba(0,0,0,.04);
	}
</style>

