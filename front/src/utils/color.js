export function getBackgroundColor(str) {
    switch (str) {
        case 'light':
            return '#f8f9fa';
        case 'dark':
            return '#212529';
        case 'primary':
            return '#0d6efd';
        case 'secondary':
            return '#6c757d';
        case 'success':
            return '#198754';
        case 'info':
            return '#0dcaf0';
        case 'warning':
            return '#ffc107';
        case 'danger':
            return '#dc3545';
        default:
            return '#f8f9fa';
    }
}

export function getTextColor(str) {
    switch (str) {
        case 'white':
            return '#f8f9fa';
        case 'dark':
            return '#fff';
        case 'primary':
            return '#fff';
        case 'secondary':
            return '#fff';
        case 'success':
            return '#fff';
        case 'info':
            return '#fff';
        case 'warning':
            return '#fff';
        case 'danger':
            return '#fff';
        default:
            return '#f8f9fa';
    }
}
