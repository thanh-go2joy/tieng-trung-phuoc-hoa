// composables/useMeta.ts
import { useHead } from "#imports";

export function useMeta() {
    useHead({
        title: "Nguyễn Thị Huyền Trang",
        meta: [
            {
                name: "description",
                content: "CV Nguyễn Thị Huyền Trang",
            },
            { property: "og:title", content: "Nguyễn Thị Huyền Trang" },
            {
                property: "og:description",
                content: "CV Nguyễn Thị Huyền Trang",
            },
        ],
    });
}
