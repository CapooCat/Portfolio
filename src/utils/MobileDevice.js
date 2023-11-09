export function isMobileDevice() {
    return /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
}
