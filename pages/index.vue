<template>
  <div
    class="container mx-auto relative bg-white font-sans text-xs shadow-lg rounded-xl print:rounded-none"
    style="height: 29.6cm; width: 21cm"
  >
    <welcome-overlay></welcome-overlay>

    <tweets-overlay v-if="showTweets"></tweets-overlay>

    <empty-state v-if="$fetchState.pending"></empty-state>
    <error-state v-else-if="$fetchState.error"></error-state>
    <div v-else class="flex">
      <div class="px-12 pt-12 flex-grow">
        <header @mouseover="titleHover = true" @mouseleave="titleHover = false">
          <h1 class="text-4xl font-serif">{{ resume.basics.name }}</h1>
          <h2 class="text-xs uppercase">{{ resume.basics.label }}</h2>
        </header>
        <fade-transition mode="out-in">
          <div v-if="titleHover" class="absolute top-0 mt-14 ml-72">
            <img
              src="https://pbs.twimg.com/profile_images/905922965849739264/qsS4wUMH_400x400.jpg"
              alt="Ma photo à moi !"
              class="inline-block h-16 w-16 rounded-full"
              width="400px"
              height="400px"
            />
          </div>
        </fade-transition>

        <main-block
          title="Profil"
          @mouseover.native="profileHover = true"
          @mouseleave.native="profileHover = false"
        >
          <fade-transition mode="out-in">
            <div
              v-if="profileHover"
              class="flex items-center absolute top-0 z-0"
              style="left: 50px"
            >
              <svg
                width="32"
                height="11"
                viewBox="0 0 32 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.5 10.5C27.3333 6.33334 15.3 0.500002 0.5 10.5"
                  stroke="black"
                />
                <path d="M4.5 0.5L1 10.5H10" stroke="black" />
              </svg>
              <button
                class="font-hand pl-3 text-xl outline-none"
                @click="toggleTweets"
              >
                En savoir plus
              </button>
            </div>
          </fade-transition>
          <p class="text-xs">
            {{ resume.basics.summary }}
          </p>
        </main-block>

        <main-block title="Expériences professionnelles">
          <div
            v-for="(work, index) in resume.work"
            :key="index"
            class="flex flex-col"
          >
            <h4 class="text-base font-bold leading-none">
              {{ work.position }}
              <span class="text-sm text-gray-700">{{ work.company }}</span>
            </h4>
            <em
              class="uppercase text-gray-600 font-bold font-serif not-italic text-tiny pt-2 pb-1 tracking-widest"
              >{{ printDate(work.start) }} - {{ printDate(work.end) }}</em
            >
            <p class="text-xs pb-3">
              {{ work.summary }}
            </p>
          </div>
        </main-block>

        <main-block title="Formation / Education">
          <div
            v-for="(education, index) in resume.education"
            :key="index"
            class="flex flex-col"
          >
            <h4 class="text-base font-bold leading-none">
              {{ education.studyType }}
              <span class="text-sm text-gray-700">{{
                education.institution
              }}</span>
            </h4>
            <em
              class="uppercase text-gray-600 font-bold font-serif not-italic text-tiny pt-2 pb-1 tracking-widest"
              >{{ printDate(education.start) }} -
              {{ printDate(education.end) }}</em
            >
            <p class="text-xs pb-3">
              {{ education.area }}
            </p>
          </div>
        </main-block>
      </div>
      <div
        class="p-12 pt-32 bg-gray-900 text-gray-200 text-xs flex-none w-64 rounded-r-xl print:rounded-none bg-no-repeat bg-contain"
        :class="{ 'bg-map': addressHover }"
        style="height: 29.6cm"
      >
        <main-block
          class="text-gray-200"
          title="Détails"
          @mouseover.native="addressHover = true"
          @mouseleave.native="addressHover = false"
        >
          <address>
            <span class="block">{{ resume.basics.region }}</span>
            <a class="block" href="tel:+33630520817">06 30 52 08 17</a>
            <a class="block" href="mailto:roussel.xavier@gmail.com"
              >roussel.xavier@gmail.com</a
            >
          </address>
        </main-block>

        <main-block class="text-gray-200" title="Liens">
          <a
            v-for="(profile, index) in profiles"
            :key="index"
            class="block"
            :href="profile.url"
            >{{ profile.network }}</a
          >
        </main-block>

        <main-block class="text-gray-200" title="Compétences">
          <div
            v-for="(skill, index) in resume.skills"
            :key="index"
            class="flex-col"
          >
            <label class="w-full" :for="`skill_${index}`">{{
              skill.name
            }}</label>
            <meter
              :id="`skill_${index}`"
              :value="skill.rating"
              min="0"
              max="5"
              class="w-full"
            >
              {{ skill.rating }} sur 5
            </meter>
          </div>
        </main-block>

        <main-block
          class="text-gray-200"
          title="Langues"
          @mouseover.native="languageHover = true"
          @mouseleave.native="languageHover = false"
        >
          <div
            v-for="(language, index) in resume.languages"
            :key="index"
            class="flex-col"
          >
            {{ language.language }}
            <em class="text-gray-400">- {{ language.fluency }}</em>
          </div>
        </main-block>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  async fetch() {
    this.resume = await fetch(
      'https://gitconnected.com/v1/portfolio/xavrsl'
    ).then((res) => res.json())
  },
  data() {
    return {
      resume: {},
      addressHover: false,
      profileHover: false,
      titleHover: false,
      languageHover: false,
    }
  },
  computed: {
    title() {
      if (Object.keys(this.resume).length === 0) {
        return 'CV'
      }

      return `CV - ${this.resume.basics.name}`
    },
    description() {
      if (Object.keys(this.resume).length === 0) {
        return 'CV'
      }

      return `${this.resume.basics.label}`
    },
    profiles() {
      return this.resume.basics.profiles.filter((profile) =>
        profile.network.indexOf('gitconnected')
      )
    },
    showTweets() {
      return this.$store.state.showTweets
    },
  },
  methods: {
    printDate(dateObject) {
      if (Object.keys(dateObject).length === 0) {
        return `Aujourd'hui`
      }

      const months = {
        1: 'Janvier',
        2: 'Février',
        3: 'Mars',
        4: 'Avril',
        5: 'Mai',
        6: 'Juin',
        7: 'Juillet',
        8: 'Août',
        9: 'Septembre',
        10: 'Octobre',
        11: 'Novembre',
        12: 'Décembre',
      }

      if (dateObject.month === null) {
        return dateObject.year
      }

      return `${months[dateObject.month]} ${dateObject.year}`
    },
    ...mapMutations({
      toggleTweets: 'toggleTweets',
    }),
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
</script>
<style>
meter {
  background-color: rgba(0, 0, 0, 0.1);
}

meter::-webkit-meter-bar {
  background: none;
  background-color: rgba(0, 0, 0, 0.1);
}

meter::-webkit-meter-optimum-value {
  background: grey;
}
meter::-moz-meter-bar {
  background: grey;
}
</style>
