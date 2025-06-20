import { GrGallery } from "react-icons/gr";
import { MdContentCopy } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { SlBulb } from "react-icons/sl";
import { IoPlayCircleOutline } from "react-icons/io5";

const features = [
  {
    icon: <GrGallery className="text-indigo-400" size={30} />,
    title: "Image",
    subtitle: "Generator",
  },
  {
    icon: <FaCode className="text-blue-300" size={30} />,
    title: "Code",
    subtitle: "Engineering",
  },
  {
    icon: <GoPencil className="text-indigo-400" size={30} />,
    title: "Content",
    subtitle: "Creation",
  },
  {
    icon: <SlBulb className="text-orange-400" size={30} />,
    title: "Idea",
    subtitle: "Generation",
  },
  {
    icon: <IoPlayCircleOutline className="text-green-300" size={30} />,
    title: "Audio/Video",
    subtitle: "Creation",
  },
];

const IdeaCard_3 = () => {
  return (
    <div className="my-[5px]">
      <div className="flex w-[73rem] gap-3 px-9 rounded-3xl py-3 border border-gray-700">
        <div className="bg-[url(https://i.pinimg.com/736x/7a/dd/c4/7addc46af04e63e7a92a1e8cc3a224cb.jpg)] w-[40px] h-[40px] bg-cover rounded-2xl"></div>
        <div className="flex justify-between w-full my-4">
          <div className="flex flex-col gap-5">
            <p className="text-gray-300 font-semibold">
              Artificium <span className="text-gray-600">11sec Now</span>
            </p>
            <p className="text-gray-400">
              Of course! What kind of Ideas are you looking for?
            </p>

            <div className="flex gap-6 flex-wrap">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inset-shadow-xs inset-shadow-noble-black-500 bg-linear-to-r from-noble-black-600  to-noble-black-900 backdrop-blur-xs flex flex-col gap-4 items-left w-[11.5rem] pl-3 py-10 rounded-xl"
                >
                  {feature.icon}
                  <div className="leading-5">
                    <p>{feature.title}</p>
                    <p>{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <p className="bg-noble-black-500 text-gray-300 text-sm rounded-2xl px-4 py-2 cursor-pointer">
                Regenerate response
              </p>
              <div className="flex items-center bg-noble-black-500 text-gray-300 text-sm rounded-2xl px-4 py-2 cursor-pointer">
                <p>Modify</p>
                <RiArrowDropDownLine />
              </div>
            </div>
          </div>
          <p className="text-gray-600 cursor-pointer">
            <MdContentCopy />
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard_3;
