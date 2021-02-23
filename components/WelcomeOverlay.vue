<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div v-if="showWelcome" class="fixed z-10 inset-0 overflow-y-auto">
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
          v-if="showWelcome"
          class="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
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
          v-if="showWelcome"
          class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div class="mx-auto flex items-center justify-center">
              <img
                src="https://pbs.twimg.com/profile_images/905922965849739264/qsS4wUMH_400x400.jpg"
                alt="Ma photo à moi !"
                class="inline-block h-32 w-32 rounded-full"
              />
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                id="modal-headline"
                class="text-xl leading-6 font-medium text-gray-900 font-hand"
              >
                Welcome to my resume!
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  J'ai ajouté un peu d'interactivité dans mon CV. <br />À vous
                  de jouer avec !
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
              @click="toggleWelcome"
            >
              Allons-y
            </button>
          </div>
        </div>
      </fade-transition>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    showWelcome() {
      return this.$store.state.showWelcome
    },
  },
  methods: {
    ...mapMutations({
      toggleWelcome: 'toggleWelcome',
    }),
  },
}
</script>
