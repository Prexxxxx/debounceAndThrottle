<template>
  <div class="home">
    <button
      v-debounce:debounceTest="[1, 2, 3]"
      :debounceTime="1000"
      :debounceType="'click'"
    >防抖测试</button>
    <br />
    <br />
    <button
      v-throttle:throttleTest="[4, 5, 6]"
      :throttleTime="1000"
      :throttleType="'click'"
    >节流测试</button>

  </div>

  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
		/**
     * 防抖指令测试
		 * @param arg1
		 * @param arg2
		 * @param arg3
		 */
		debounceTest (arg1, arg2, arg3) {
			console.log('---防抖指令测试---')
      console.log('---参数---', arg1, arg2, arg3)
    },
		/**
     * 节流指令测试
		 * @param arg1
		 * @param arg2
		 * @param arg3
		 */
		throttleTest (arg1, arg2, arg3) {
			console.log('---节流指令测试---')
      console.log('---参数---', arg1, arg2, arg3)
    }
  }
}
</script>
