// Utility functions
const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    return (
        "#" +
        Array.from(
            { length: 6 },
            () => letters[Math.floor(Math.random() * 16)]
        ).join("")
    );
};

export default getRandomColor