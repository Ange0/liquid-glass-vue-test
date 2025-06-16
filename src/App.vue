<template>
  <div class="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 shadow-2xl w-full max-w-5xl mx-auto md:my-10 h-screen md:max-h-[calc(100vh-5rem)] md:rounded-3xl overflow-hidden" style="font-family: 'Geist', sans-serif;">
    <!-- Left Panel - Glass Effect Demo -->
    <div class="flex-1 relative overflow-auto min-h-screen md:col-span-2" ref="containerRef" @scroll="handleScroll">
      <div class="w-full min-h-[200vh] absolute top-0 left-0 pb-96 mb-96">
        <img src="https://picsum.photos/2000/2000" class="w-full h-96 object-cover" />
        <img src="https://picsum.photos/1200/1200" class="w-full h-80 object-cover" />
        <img src="https://picsum.photos/1400/1300" class="w-full h-72 object-cover" />
        <img src="https://picsum.photos/1100/1200" class="w-full h-96 object-cover my-10 mb-96" />
      </div>

      <LiquidGlass v-if="activeTab === 'userInfo'"
        :style="{ position: 'fixed', top: '25%', left: '35%' }"
      >
        <div class="w-72 text-shadow-lg text-white">
          <h3 class="text-xl font-semibold mb-4">User Info</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-black/10 backdrop-blur rounded-full flex items-center justify-center text-white font-semibold">JD</div>
              <div>
                <p class="font-medium">John Doe</p>
                <p class="text-sm ">Software Engineer</p>
              </div>
            </div>
            <div class="pt-2 space-y-2">
              <div class="flex justify-between">
                <span class="text-sm text-white">Email:</span>
                <span class="text-sm">john.doe@example.com</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-white">Location:</span>
                <span class="text-sm">San Francisco, CA</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm text-white">Joined:</span>
                <span class="text-sm">March 2023</span>
              </div>
            </div>
          </div>
        </div>
      </LiquidGlass>

      <LiquidGlass v-if="activeTab === 'logOut'"
        :hover-effect="true"
        :turbulenceSeed="1"
        :blurIntensity="200"
        :backdrop-blur="'5px'"
        @click="() => console.log('Logged out')"
          :style="{ position: 'fixed', top: '20%', left: '38%', color: 'white' }"
      >
        <h3 class="text-lg font-medium flex items-center gap-2">
          Log Out
          <LogOutIcon class="w-5 h-5" />
        </h3>
      </LiquidGlass>
    </div>

    <!-- Right Panel - Control Panel -->
     <div class=" flex justify-center items-center rounded-t-3xl md:rounded-none md:col-start-3 bg-black h-full overflow-y-auto  border-l border-white/10 p-5">
        <div>
        <div class="mb-8">
            <div class="flex flex-col items-center justify-between mb-4">
                <h2 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#42d392] to-[#647eff]">WWDC 2025 Liquid Glass Effect Vue 3</h2>
                <a href="https://github.com/rdev/liquid-glass-react" target="_blank" rel="noopener noreferrer" class="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg" title="View on GitHub">
                    <Github class="w-10 h-10" />
                </a>
            </div>
            <p class="text-white/60 text-sm">Liquid Glass container effect for Vue. With settings and effects and stuff.</p>
            <p class="font-semibold text-yellow-300 text-xs mt-2 leading-snug">⚠️ This doesn't fully work in Safari and Firefox. You will not see edge refraction on non-chromium browsers.</p>
        </div>

        <!-- Tab Switcher -->
        <div class="flex bg-white/5 rounded-lg">
            <button @click="setActiveTab('userInfo')" :class="`cursor-pointer flex-1 text-xs px-4 py-2 font-medium rounded-md transition-all ${activeTab === 'userInfo' ? 'bg-blue-500 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/5'}`">
            User Info Card
            </button>
            <button @click="setActiveTab('logOut')" :class="`cursor-pointer  flex-1 text-xs px-4 py-2 font-medium rounded-md transition-all ${activeTab === 'logOut' ? 'bg-blue-500 text-white shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}`">
            Log Out Button
            </button>
        </div>
        </div>
     </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { LiquidGlass } from 'liquid-glass-vue3'
import { LogOutIcon, Github } from 'lucide-vue-next';
import 'liquid-glass-vue3/dist/style.css'

// User Info Card Controls
const displacementScale = ref(100);
const blurAmount = ref(0.5);
const saturation = ref(140);
const aberrationIntensity = ref(2);
const elasticity = ref(0);
const cornerRadius = ref(32);
const userInfoOverLight = ref(false);
const userInfoMode = ref('standard');

// Log Out Button Controls
const logoutDisplacementScale = ref(64);
const logoutBlurAmount = ref(0.1);
const logoutSaturation = ref(130);
const logoutAberrationIntensity = ref(2);
const logoutElasticity = ref(0.35);
const logoutCornerRadius = ref(100);
const logoutOverLight = ref(false);
const logoutMode = ref('standard');

// Shared state
const activeTab = ref('userInfo');
const containerRef = ref(null);
const scroll = ref(0);

const handleScroll = (event) => {
  requestAnimationFrame(() => {
    scroll.value = event?.target?.scrollTop;
  });
};

const scrollingOverBrightSection = computed(() => scroll.value > 230 && scroll.value < 500);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>