<template>
    <header
        class="sticky top-0 w-full shadow-sm z-50 p-4"
        :class="
            colorMode.preference === 'light' ||
            colorMode.preference === 'system'
                ? 'bg-white'
                : 'bg-black'
        "
    >
        <div class="max-w-7xl mx-auto">
            <nav class="md:flex items-center justify-between">
                <!-- Logo bên trái -->
                <div class="flex items-center space-x-2">
                    <!-- <img src="/logo.svg" alt="Logo" class="h-10 w-auto" /> -->
                    <NuxtLink to="/home">
                        <h1
                            class="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse"
                        >
                            阮氏玄妆
                        </h1>
                    </NuxtLink>
                </div>

                <!-- Links bên phải -->
                <div
                    class="flex items-center justify-end space-x-4 md:space-x-6 mt-[8px] md:mt-[0px]"
                >
                    <!-- <NuxtLink to="/my-cv" class="hover:text-blue-600">{{
                        t("my_cv")
                    }}</NuxtLink>
                    <NuxtLink to="/my-story" class="hover:text-blue-600">{{
                        t("story")
                    }}</NuxtLink>
                    <NuxtLink to="/blog" class="hover:text-blue-600">{{
                        t("blog")
                    }}</NuxtLink>
                    <span class="border-l border-gray-400 h-5"></span> -->
                    <UButton
                        @click="
                            colorMode.preference =
                                colorMode.preference === 'dark'
                                    ? 'light'
                                    : 'dark'
                        "
                    >
                        <span v-if="colorMode.preference === 'dark'"
                            >🌙 {{ t("night") }}</span
                        >
                        <span v-else>☀️ {{ t("light") }}</span>
                    </UButton>
                    <!-- <span class="border-l border-gray-400 h-5"></span>

                    <div class="max-w-[160px] ml-auto">
                        <USelect
                            v-model="selectedLanguage"
                            :options="languages"
                            option-attribute="label"
                            @change="changeLanguage($event.target.value)"
                        >
                            <template #leading>
                                <UIcon
                                    name="i-heroicons-flag"
                                    class="w-5 h-5"
                                />
                            </template>
                        </USelect>
                    </div> -->
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const colorMode = useColorMode();
const { locale, t } = useI18n();

// Danh sách ngôn ngữ
const languages = [
    { value: "vi", label: "Tiếng Việt" },
    { value: "en", label: "Tiếng Anh" },
    { value: "zh", label: "Tiếng Trung" },
];

const selectedLanguage = ref("en"); // Ngôn ngữ mặc định

onMounted(() => {
    selectedLanguage.value = localStorage.getItem("locale");
});

// Đổi ngôn ngữ
const changeLanguage = (lang) => {
    locale.value = lang;
    localStorage.setItem("locale", lang);
};
</script>

