<template>
    <!-- Navigation bar -->
    <div class="control-navigation-bar">
        <NavigationBar />
    </div>
    <div class="c-home container" @scroll="handleScroll">
        <!-- Welcome-section -->
        <div class="parallax-content welcome-section grid justify-center h-screen items-center relative overflow-hidden">
            <div ref="titleEl" class="name text-[5rem] bg-transparent font-silkscreen -translate-y-1/2"
                :style="{ opacity:  100 - scrollY + '%'}">
                SAMRONG MEAS {{   100 - scrollY }}
            </div>
        </div>
    </div>
    <div class="second-section h-screen bg-slate-500">

    </div>
</template>
<script>
import NavigationBar from '@/components/NavicationBar.vue'
import { useWindowScroll } from '@vueuse/core'

export default {
    data() {
        return {
            scrollX: 0,
            scrollY: 0,
            titlePosition: {
                top : 0,
                bottom : 0,
                right : 0,
                left : 0
            }
        }
    },
    methods: {
        checkPycicleTitlePosition(){
            this.titlePosition = this.$refs.titleEl.getBoundingClientRect()
        },
        handleScroll() {
            this.checkPycicleTitlePosition()
            const { x, y } = useWindowScroll()
            this.scrollX = x.value
            this.scrollY = y.value
        }
    },
    components: {
        NavigationBar
    },
    mounted() {
        this.handleScroll() // Initial scroll position
        window.addEventListener('scroll', this.handleScroll) // Adding scroll event listener
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll) // Remove event listener on component unmount
    }
}
</script>
