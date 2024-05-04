export const totalTaskCalculator = (total) => {
    if (total === 0) return 0;
    const calculateTotal = (total * 100) / 20;
    return calculateTotal
}

export const calculateTime = (time) => {
    return new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
};