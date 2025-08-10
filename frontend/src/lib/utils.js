export function formatDate(date) {
    if (date instanceof Date) {
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    }

    return "";
}
