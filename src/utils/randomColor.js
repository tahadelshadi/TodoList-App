const tailwindColors = [
    "text-red-500",
    "text-blue-500",
    "text-yellow-600",
    "text-orange-500",
    "text-sky-500",
    "text-lime-600",
    "text-cyan-500",
    "text-indigo-500",
    "text-fuchsia-500",
];
export default function RandomColor() {
    return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
}


