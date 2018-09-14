<template>
	<div>
		<transition name="fade">
			<div class="slide-mask"
			     :class="{'is-transparent': isTransparent}"
			     @click="clickMask"
			     v-show="isShow"
			     :style="{'z-index': maskIndex}"></div>
		</transition>
		<transition name="slide"
		            @after-enter="afterEnter"
		            @after-leave="afterLeave">
			<div class="slide-main"
			     v-show="isShow"
			     :style="{'width': width, 'z-index': bodyIndex}">
				<div class="slide-head clearfix"
				     id="slide-head"
				     :style="{height: headHeight+'px'}">
					<slot name="head">
						<div class="slide-flex">
							<div>{{title}}</div>
							<div class="slide-flex-1">
								<button class="close pull-right" @click="isShow = false">×</button>
							</div>
						</div>
					</slot>
				</div>
				<div class="slide-body"
				     id="slide-body"
				     :style="{top: headHeight+'px'}">
					<slot name="body"></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      isShow: this.show,
      headHeight: ""
    };
  },
  computed: {
    bodyIndex() {
      return this.index + 1;
    },
    maskIndex() {
      return this.index;
    }
  },
  props: {
    index: {
      type: Number,
      default: 1000
    },
    width: {
      type: String,
      default: "80%"
    },
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "标题"
    },
    isTransparent: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      this.isShow = val;
    },
    isShow(val) {
      this.$emit("input", val);
      if (val) {
        this.$nextTick(() => {
          this.headHeight = this.$el.querySelector("#slide-head").getBoundingClientRect().height;
          this.$emit("on-show");
          document.body.style.overflow = "hidden";
        });
      } else {
        this.$nextTick(() => {
          this.$emit("on-hide");
          document.body.style.overflow = "visible";
        });
      }
    }
  },
  methods: {
    clickMask() {
      if (this.hideOnBlur) {
        this.hide();
      }
    },
    hide() {
      this.isShow = false;
    },
    afterLeave() {
      this.$emit("on-after-hide");
    },
    afterEnter() {
      this.$emit("on-after-show");
    },
    scrollTo(axisY) {
      document.getElementById("slide-body").scrollTop = axisY || 0;
    }
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: 0.4s;
}
.fade-leave-active {
  opacity: 0;
  transition: 0.4s;
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.4s;
}
.slide-enter,
.slide-leave-active {
  transform: translateX(100%);
}
.slide-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.slide-mask.is-transparent {
  opacity: 0;
}
.slide-main {
  position: fixed;
  background-color: #fff;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0px;
  box-shadow: 0 0 20px -10px #000;
}
.slide-head {
  border-bottom: 1px #ddd solid;
  padding: 5px 15px;
  font-size: 14px;
  color: #888;
}
.slide-body {
  position: absolute;
  top: 41px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  padding: 10px 15px;
}
.slide-body::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.slide-body::-webkit-scrollbar-thumb,
.body::-webkit-scrollbar-thumb:horizontal,
.body::-webkit-scrollbar-thumb:vertical {
  background-color: #dbd6cd;
}
.slide-body::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.04);
}
.slide-flex {
  display: flex;
  align-items: center;
}
.slide-flex-1 {
  flex: 1;
}
.slide-flex-1 .close {
    font-size: 28px;
    font-weight: normal;
}
</style>
