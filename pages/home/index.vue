<template>
    <div>
        <UContainer>
            <div class="my-4">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-6"
                >
                    <!-- Logo bên trái -->
                    <div class="col-span-6 xl:col-span-7">
                        <div class="space-y-4">
                            <div
                                class="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-teal-200"
                            >
                                <h1
                                    class="text-4xl font-bold text-teal-700 mb-4 text-center"
                                >
                                    🌟 Lớp học Tiếng Trung 🌟
                                </h1>
                                <h2
                                    class="text-xl text-orange-500 font-semibold text-center mb-6"
                                >
                                    HSK1-2-3 và Giao Tiếp Căn Bản
                                </h2>

                                <p class="text-gray-700 mb-4">
                                    Xin chào các bạn học viên,
                                </p>
                                <p class="text-gray-700 mb-4">
                                    Mình là
                                    <span class="font-semibold text-gray-900"
                                        >Trang</span
                                    >, tốt nghiệp chuyên ngành Tiếng Trung và sở
                                    hữu chứng chỉ <strong>HSK5</strong>. Hiện
                                    mình đang khai giảng: lớp Tiếng Trung Giao
                                    Tiếp Căn Bản.
                                </p>

                                <div
                                    class="list-disc list-inside text-gray-700 mb-4 space-y-1"
                                >
                                    <p>✨Đảm bảo lộ trình học rõ ràng</p>
                                    <p>✨Phát âm chuẩn và tự tin giao tiếp</p>
                                    <p>
                                        ✨Nhiều khung giờ phù hợp, thuận tiện
                                        cho người đi làm, người mới bắt đầu
                                    </p>
                                    <p>✨ Nhận dạy offline/online 1:1</p>
                                </div>

                                <div
                                    class="bg-teal-50 rounded-xl p-4 mb-4 border border-teal-100"
                                >
                                    <p class="text-gray-800">
                                        <strong>Hình thức học:</strong> Trực
                                        tiếp tại nhà hoặc học online
                                    </p>
                                    <p class="text-gray-800">
                                        <strong>Thời gian học:</strong> 20h -
                                        21h30 (Mỗi tối)
                                    </p>
                                    <p class="text-gray-800">
                                        <strong>Địa điểm:</strong> 542/7, đường
                                        Cần Câu, tổ 2, ấp 1B, xã Phước Hòa, Phú
                                        Giáo, Bình Dương
                                    </p>
                                    <p class="text-gray-800">
                                        <strong>Đối tượng:</strong> Học sinh,
                                        người đi làm, người mới bắt đầu
                                    </p>
                                </div>

                                <!-- <div class="mb-4">
                                    <p class="font-semibold text-teal-700 mb-1">
                                        🎯 Cam kết chất lượng:
                                    </p>
                                    <ul
                                        class="list-disc list-inside text-gray-700 space-y-1"
                                    >
                                        <li>Giáo trình chuẩn – dễ tiếp thu</li>
                                        <li>
                                            Lộ trình học rõ ràng, có hỗ trợ kèm
                                            riêng
                                        </li>
                                        <li>
                                            Ôn thi hiệu quả, ứng dụng thực tế
                                            cao
                                        </li>
                                    </ul>
                                </div> -->

                                <div class="text-center mt-8">
                                    <a
                                        href="tel:0937704598"
                                        class="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
                                    >
                                        📞 Gọi ngay: 093 770 4598
                                    </a>
                                    <p
                                        class="mt-2 text-sm text-gray-500 italic"
                                    >
                                        Đăng ký giữ chỗ sớm – số lượng giới hạn
                                    </p>
                                </div>

                                <p
                                    class="text-center mt-6 text-gray-600 italic"
                                >
                                    Rất hân hạnh được đồng hành cùng bạn trên
                                    hành trình học tiếng Trung!
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Links bên phải -->
                    <div
                        class="col-span-4 xl:col-span-3 text-center p-[24px] flex lg:block space-x-6"
                    >
                        <div
                            class="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md w-full max-w-xs mx-auto"
                        >
                            <!-- Avatar -->
                            <div
                                class="w-20 lg:w-full rounded-full overflow-hidden shadow-md border-4 border-white"
                            >
                                <img
                                    src="/assets/images/avatar.jpg"
                                    alt="Ảnh giáo viên"
                                    class="w-full h-full object-cover"
                                />
                            </div>

                            <!-- Thông tin liên hệ -->
                            <div class="mt-6 text-center space-y-2">
                                <div
                                    class="flex items-center justify-center gap-2 text-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 5h2l.4 2M7 13h10l1 9H6l1-9zm12-6h2a2 2 0 012 2v12a2 2 0 01-2 2h-2M16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z"
                                        />
                                    </svg>
                                    <span class="text-base font-medium"
                                        >(84+) 093.770.4598</span
                                    >
                                </div>
                                <p class="text-sm text-gray-500 italic">
                                    📱 Liên hệ qua Zalo hoặc gọi trực tiếp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-24">
                <div class="space-y-4 mb-12">
                    <h1
                        class="text-2xl md:text-5xl font-bold text-center text-teal-700"
                    >
                        {{ t("personal_journey") }}
                    </h1>
                    <p class="text-center text-gray-600">
                        {{ t("personal_development_steps_over_time") }}
                    </p>
                </div>

                <div class="gap-4 md:space-x-6 space-y-12">
                    <div class="col-span-6 space-y-6 mt-[46px]">
                        <div
                            class="relative flex items-start"
                            v-for="(item, index) in personalJourneys"
                            :key="index"
                        >
                            <div
                                class="w-10 h-10 text-center rounded-full flex items-center justify-center text-white"
                                :class="item.bgColor"
                            >
                                <p class="p-1">{{ item.year }}</p>
                            </div>
                            <div
                                class="h-full w-1 bg-gray-300 absolute top-10 left-5 md:left-5"
                            ></div>
                            <div class="ml-6">
                                <h3 class="text-lg font-semibold text-gray-800">
                                    {{ setLangTitlePersonalJourneys(index) }}
                                </h3>
                                <p class="text-sm text-gray-600">
                                    {{ setLangCompanyPersonalJourneys(index) }}
                                </p>
                                <p class="text-sm text-gray-600">
                                    {{ setLangAddressPersonalJourneys(index) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 
            <div class="my-4">
                <div class="space-y-4">
                    <h1 class="text-2xl md:text-5xl font-bold text-center">
                        {{ t("Projects") }}
                    </h1>
                    <p class="text-center">
                        {{ t("project_handling_experience") }}
                    </p>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mt-[46px]"
                >
                    <div v-for="item in projects" :key="item">
                        <UCard>
                            <template #header>
                                <p class="text-1xl font-bold text-center">
                                    {{ item.title }}
                                </p>
                            </template>

                            <img
                                :src="item.image"
                                alt="Ảnh lớn"
                                class="object-cover"
                            />
                            <div class="space-y-4 mt-3">
                                <UTooltip :text="item.description">
                                    <p class="line-clamp-2">
                                        {{ item.description }}
                                    </p>
                                </UTooltip>
                            </div>

                            <template #footer>
                                <p>{{ t("year") }}: {{ item.finishTime }}</p>
                            </template>
                        </UCard>
                    </div>
                </div>
            </div> -->
        </UContainer>

        <!-- ==== POPUP MODAL ==== -->
        <!-- <PopupModalWelcome /> -->
        <!-- ==== POPUP MODAL ==== -->
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import jobImage from "@/assets/images/job.png";
import { useMeta } from "./useMeta";
// import PopupModalWelcome from "@/components/popup/welcome.vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const { $amplitude } = useNuxtApp();

useMeta();

onMounted(() => {
    $amplitude.track("View Home Page", {
        page: "Home",
        time: new Date().toISOString(),
    });
});

const projects = computed(() => [
    {
        image: jobImage,
        title: setLangTitleProjects(0),
        description: setLangDescriptionProjects(0),
        finishTime: "2023",
    },
]);

const personalJourneys = [
    {
        year: "2025",
        bgColor: "bg-purple-500",
    },
    {
        year: "2025",
        bgColor: "bg-red-500",
    },
    {
        year: "2024",
        bgColor: "bg-green-500",
    },
    {
        year: "2023",
        bgColor: "bg-blue-500",
    },
];

const setLangTitlePersonalJourneys = (value) => {
    switch (value) {
        case 0:
            return "Giảng dạy Tiếng Trung";
        case 1:
            return "Thư ký & Phiên dịch viên";
        case 2:
            return "Trợ Giảng Tiếng Trung";
        case 3:
            return "Tốt nghiệp chuyên ngành Ngôn Ngữ Trung Quốc";
        default:
            return "";
    }
};

const setLangCompanyPersonalJourneys = (value) => {
    switch (value) {
        case 0:
            return "Online & Offline";
        case 1:
            return "CÔNG TY TNHH NỘI THẤT HONG SHAN VIỆT NAM";
        case 2:
            return "Công ty TNHH Far Eastern Polytex (Việt Nam)";
        case 3:
            return "Trường Đại học Nguyễn Tất Thành";
        default:
            return "";
    }
};

const setLangAddressPersonalJourneys = (value) => {
    switch (value) {
        case 0:
            return "542/7, đường Cần Câu, tổ 2, ấp 1B, xã Phước Hòa, huyện Phú Giáo, tỉnh Bình Dương";
        case 1:
            return "Lô 1G11, 1G12, đường CN6, CN11, Khu công nghiệp Tân Bình, Thị trấn Tân Bình, Huyện Bắc Tân Uyên, Bình Dương";
        case 2:
            return "Lô đất B_5B_CN, Đường DC, Khu công nghiệp Bàu Bàng, Thị trấn Lai Uyên, Huyện Bàu Bàng, Tỉnh Bình Dương";
        case 3:
            return "331 QL1A, An Phú Đông, Quận 12, Hồ Chí Minh";
        default:
            return "";
    }
};

// ======================== LANG FOR PROJECT ========================
const setLangTitleProjects = (value) => {
    switch (value) {
        case 0:
            if (locale.value === "en") {
                return "Import Activities of Raw Materials at NB Nam Phuong Co., Ltd.";
            } else if (locale.value === "zh") {
                return "在 NB 南方有限公司的原材料进口活动";
            }
            return "HOẠT ĐỘNG NHẬP KHẨU NGUYÊN VẬT LIỆU TẠI CÔNG TY TNHH NB NAM PHƯƠNG";

        default:
            return "";
    }
};
const setLangDescriptionProjects = (value) => {
    switch (value) {
        case 0:
            if (locale.value === "en") {
                return "In order to overcome the consequences of the Covid pandemic and help businesses escape from severe crises, this project focuses on researching and studying raw materials to provide the best solutions for enterprises. Additionally, it aims to enhance the quality of output products, ensuring high-quality and safe products for consumers while also generating high profits for businesses, thereby driving Vietnam's economic growth.";
            } else if (locale.value === "zh") {
                return "为了克服新冠疫情带来的影响，并帮助企业摆脱严重的危机，本项目专注于研究和分析原材料，以为企业提供最佳解决方案。此外，该项目还旨在提高产品质量，确保为消费者提供优质、安全的产品，同时为企业创造高利润，从而推动越南经济发展。";
            }
            return "Nhằm khắc phục hậu quả của đại dịch Covid, đưa doanh nghiệp thoát khỏi tình trạng khủng hoảng nặng nề. Tìm hiểu và nghiên cứu nguyên vật liệu đầu vào mang lại những giải pháp tốt nhất cho doanh nghiệp. Ngoài ra, dự án này còn giúp nâng cao chất lượng sản phẩm đầu ra, đem lại nguồn sản phẩm tốt, an toàn cho người tiêu dùng và đồng thời mang lại lợi nhuận cao cho các doanh nghiệp, thúc đẩy nền kinh tế Việt Nam phát triển.";

        default:
            return "";
    }
};
</script>