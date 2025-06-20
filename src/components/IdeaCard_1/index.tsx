import { MdContentCopy } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";


const IdeaCard_1 = () => {
  return (
    <div>
        <div className="flex w-[70rem] gap-3 leading-13 px-10 rounded-3xl py-3  border border-gray-700">
                  <img
                    className="flex w-10 h-10 rounded-2xl"
                    src="https://thumbs.dreamstime.com/b/vector-brush-strokes-circles-paint-white-background-ink-hand-drawn-paint-brush-circle-logo-label-design-element-vector-brush-143779821.jpg"
                    alt=""
                  />
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="text-gray-400">
                        Artificium <span className="text-gray-600">11sec Now</span>{" "}
                      </p>
                      <p className="text-gray-400">
                        Of course! What kind of Ideas are you looking for?
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="bg-noble-black-500 text-gray-300 text-sm rounded-2xl px-4 py-2 cursor-pointer">
                          Regenerate response
                        </p>
                        <div className="flex items-center bg-noble-black-500 text-gray-300 text-sm rounded-2xl px-4 py-2 cursor-pointer">
                          {" "}
                          <p>Modify</p> <p>{<RiArrowDropDownLine />}</p>{" "}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 cursor-pointer">{<MdContentCopy />}</p>
                  </div>
                </div>
    </div>
  )
}

export default IdeaCard_1;