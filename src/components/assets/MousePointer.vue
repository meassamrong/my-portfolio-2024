<template>
    <div class="pointer absolute -rotate-45 bg-transparent" :style="{ top: offsetY + 'px', left: offsetX + 'px' }">
        <i class="bi bi-mouse pointer bg-transparent"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
            offsetX: 0,
            offsetY: 0
        };
    },
    mounted() {
        window.addEventListener('mousemove', this.handleMouseMove);
    },
    beforeUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
        handleMouseMove(event) {
            this.offsetX = event.clientX;
            this.offsetY = event.clientY;
        }
    }
};
</script>
<style>
.pointer {
    text-shadow: 20px 10px rgba(255, 255, 255, 0.5);
    /* Adjust the values to your liking */
    /* The box-shadow property consists of horizontal offset, vertical offset, blur radius, spread radius, and color */
}
</style>