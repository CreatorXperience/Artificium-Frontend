import { MdContentCopy } from "react-icons/md";


const IdeaCard_2 = () => {
  return (
    <div>
         <div className="flex w-[70rem] gap-3 leading-13 px-10 rounded-3xl py-4  border border-gray-700">
                  <img
                    className="flex w-10 h-10 rounded-2xl"
                    src="https://thumbs.dreamstime.com/b/vector-brush-strokes-circles-paint-white-background-ink-hand-drawn-paint-brush-circle-logo-label-design-element-vector-brush-143779821.jpg"
                    alt=""
                  />
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="text-gray-300 font-bold">
                        RyanLee <span className="text-gray-500">4sec ago</span>{" "}
                      </p>
                      <p className="text-gray-300">
                        I'm not sure, maybe something related to the spaceship?
                      </p>
                      {/* <div className="flex items-center gap-2">
                        <p className="bg-gray-800 text-gray-300 rounded-2xl px-4 cursor-pointer">
                          Regenerate response
                        </p>
                        <div className="flex items-center bg-gray-700 text-gray-300 rounded-2xl px-4 cursor-pointer">
                          {" "}
                          <p>Modify</p> <p>{<RiArrowDropDownLine />}</p>{" "}
                        </div>
                      </div> */}
                    </div>
                    <p className="text-gray-600 cursor-pointer">{<MdContentCopy />}</p>
                  </div>
                </div>
    </div>
  )
}

export default IdeaCard_2;