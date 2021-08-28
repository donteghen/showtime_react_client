export const videoTimeFormat = (duration) => {
    const integerPart = Math.floor(duration / 60);
    const decimalPart = duration % 60;
    return `${integerPart}:${decimalPart}`
}