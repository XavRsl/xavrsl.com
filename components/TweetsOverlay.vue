<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div v-if="showTweets" class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <fade-transition mode="out-in">
        <div
          v-if="showTweets"
          class="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div
            class="absolute inset-0 bg-gray-500 opacity-75"
            @click="toggleTweets"
          ></div>
        </div>
      </fade-transition>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <fade-transition mode="out-in">
        <div
          v-if="showTweets"
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm md:max-w-xl sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <a
            class="twitter-timeline"
            href="https://twitter.com/XavRsl/likes?ref_src=twsrc%5Etfw"
            >Tweets aimés par @XavRsl</a
          >
        </div>
      </fade-transition>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    showTweets() {
      return this.$store.state.showTweets
    },
  },
  mounted() {
    window?.twttr?.widgets?.load() // https://9sako6.com/posts/nuxt_embed_twitter
  },
  methods: {
    ...mapMutations({
      toggleTweets: 'toggleTweets',
    }),
  },
}
</script>
