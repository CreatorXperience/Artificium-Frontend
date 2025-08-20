import {
  FaPenNib,
  FaCode,
  FaLightbulb,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    title: "Creative Assets",
    icon: <FaLayerGroup className="text-stem-green-600 text-xl" size={30} />,
    Color: "stem-green-100",
    items: [
      "UI wireframe",
      "Brochure design",
      "Social media",
      "Brand guidelines",
    ],
  },
  {
    title: "Developer Tools",
    icon: <FaCode className="text-day-blue-500 text-xl" size={30} />,
    Color: "day-blue-100",
    items: [
      "API Integration",
      "Test automation",
      "DB optimization",
      "Code review",
    ],
  },
  {
    title: "Content Creation",
    icon: <FaPenNib className="text-purple-blue-500 text-xl" size={30} />,
    Color: "purple-blue-100",
    items: [
      "Product description",
      "E-mail copy",
      "Whitepaper",
      "Press release",
    ],
  },
  {
    title: "Idea Generation",
    icon: <FaLightbulb className="text-sunglow-500 text-xl" size={30} />,
    Color: "sunglow-100",
    items: [
      "Hashtag ideas",
      "Brainstorming",
      "Trend analysis",
      "Social media posts",
    ],
  },
];

export default function InnovationStarterPack() {
  return (
    <div className="h-full overflow-auto no-scrollbar  font-plus px-4 py-12 md:px-12">
      <div className="text-center mb-5">
        <h1 className="text-xl md:text-5xl font-md text-white mb-1">
          Innovation Starter Pack
        </h1>
        <p className="text-noble-black-300 max-w-3xl mx-auto">
          Kickstart your innovation process with our comprehensive selection of
          predefined prompts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {categories.map((cat) => (
          <div key={cat.title} className="p-6  transition-shadow duration-300">
            <div className="flex flex-col items-center mb-3">
              <div
                className={`flex items-center justify-center  p-3 rounded-full bg-noble-black-700 w-12 h-12
    ${
      cat.Color === "stem-green-100"
        ? "shadow-[0_0_15px_#16a34a40]"
        : cat.Color === "day-blue-100"
          ? "shadow-[0_0_15px_#0ea5e940]"
          : cat.Color === "purple-blue-100"
            ? "shadow-[0_0_15px_#8b5cf640]"
            : cat.Color === "sunglow-100"
              ? "shadow-[0_0_15px_#facc1540]"
              : ""
    }`}
              >
                {cat.icon}
              </div>

              <h2 className="text-white text-lg font-semibold mt-3 text-center">
                {cat.title}
              </h2>
            </div>
            <div className="w-full max-w-xl mx-auto px-2">
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex justify-between items-center hover:bg-noble-black-600 bg-noble-black-700 p-3 rounded-md text-noble-black-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{item}</span>
                    <FaArrowRight size={15} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
