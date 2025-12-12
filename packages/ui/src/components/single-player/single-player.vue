<template>
    <div :class="$style.main" :style="myStyle">
        <ElSlider
            v-model="currentTime"
            :max="duration"
            :style="sliderStyle"
            :show-tooltip="false"
            @change="handleTimeChange"
            @mouseedown="setDraging(true)"
            @mouseup="setDraging(false)"
        />
        <div :class="$style['volume-container']">
            <ElSlider v-model="volume" vertical height="100px" :show-tooltip="false" :class="$style.volume" />
            <VcAwesomeIcon name="fas" :class="[$style['volume-controll'], volumeIcon]" @click="toggleVolume" />
        </div>
        <VcAwesomeIcon name="fas" :class="[$style.play, playClass]" @click="togglePlay" />
        <audio ref="myAudio" :src="src" loop />
    </div>
</template>

<script lang="ts" setup>
import type { ISinglePlayerProps } from './single-player'
import { isBoolean } from 'lodash-es'
import VcAwesomeIcon from '../awesome-icon/awesome-icon.vue'

const props = withDefaults(defineProps<ISinglePlayerProps>(), {
    width: 300,
})

const emits = defineEmits<{
    (e: 'error', error: any): void
    (e: 'timeupdate', time: number): void
}>()

const DEFAULT_VOLUME = 50

const myAudio = ref<HTMLAudioElement>()
const volume = ref(DEFAULT_VOLUME) // 音量
const duration = ref(100) // 音乐长度
const currentTime = ref(0) // 当前进入
const isDraging = ref(false) // 正在拖拽进度
const isPlaying = ref(false)

const myStyle = computed(() => ({ width: `${props.width}px` }))
const sliderStyle = computed(() => ({ width: `${props.width - 80}px` }))
const src = computed(() => props.src)
const playClass = computed(() => ({ 'fa-play': !isPlaying.value, 'fa-pause': isPlaying.value }))
const volumeIcon = computed(() => {
    if (volume.value === 0) { return 'fa-volume-mute' }
    if (volume.value > 70) { return 'fa-volume-up' }
    return 'fa-volume-down'
})

watch(volume, val => {
    if (myAudio.value) {
        myAudio.value.volume = val / 100
    }
})

watch(src, () => {
    nextTick(() => {
        myAudio.value && myAudio.value.play()
    })
})

onMounted(() => {
    if (!myAudio.value) { return }
    const audio = myAudio.value

    // 开始播放时
    audio.onplay = () => {
        audio.volume = volume.value / 100
        isPlaying.value = true
    }

    // 暂停时
    audio.onpause = () => {
        isPlaying.value = false
    }

    // 获取当前播放时间
    audio.ontimeupdate = () => {
        if (!isDraging.value) {
            currentTime.value = Math.floor(audio.currentTime)
            emits('timeupdate', currentTime.value)
        }
    }

    audio.onprogress = () => {
        duration.value = Math.floor(audio.duration)
    }

    audio.onerror = e => {
        if (!props.src) { return }
        emits('error', e)
    }
})

function handleTimeChange(val: any) {
    if (myAudio.value) {
        myAudio.value.currentTime = Math.floor(val)
    }
}

function setDraging(status: boolean) {
    isDraging.value = status
}

function toggleVolume() {
    volume.value = volume.value > 0 ? 0 : DEFAULT_VOLUME
}

function togglePlay(play: boolean) {
    if (!myAudio.value || !src.value) { return }
    if (isBoolean(play)) {
        play ? myAudio.value.play() : myAudio.value.pause()
        return
    }
    isPlaying.value ? myAudio.value.pause() : myAudio.value.play()
}
</script>

<style lang="scss" module>
$bg-color: #f5f5f5;

.main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;

    :global {
        .awesome-icon {
            position: relative;
            z-index: 1;
            width: 38px;
            font-size: 28px;
            text-align: center;
        }
    }
}

.volume {
    position: absolute !important;
    bottom: 25px;
    left: 0;
    display: none !important;
    height: auto !important;
    padding: 20px 0;
    background-color: $bg-color;
}

.volume-container {
    position: relative;
    z-index: 1500;
    margin-left: 20px;

    &:hover {
        color: var(--active-color);
        background-color: $bg-color;

        .volume {
            display: block !important;
        }
    }
}

.volume-controll {
    cursor: pointer;
}

.play {
    font-size: 20px !important;
    cursor: pointer;

    &:hover {
        color: var(--active-color);
    }
}
</style>
