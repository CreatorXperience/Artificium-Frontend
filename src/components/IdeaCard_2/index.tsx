import { MdContentCopy } from "react-icons/md";

const IdeaCard_2 = () => {
  return (
    <div className="my-[5px]">
      <div className="flex w-[70rem] gap-3 leading-13 px-10 rounded-3xl py-4  border border-gray-700">
        <div className="bg-[url(https://i.pinimg.com/736x/e1/c6/0e/e1c60e9b11744e70db6fe425296a5471.jpg)] w-[40px] h-[40px] bg-cover rounded-2xl"></div>
        <div className="flex justify-between w-full">
          <div>
            <p className="text-gray-300 font-bold">
              RyanLee <span className="text-gray-500">4sec ago</span>{" "}
            </p>
            <p className="text-gray-300">
              I'm not sure, maybe something related to the spaceship?
            </p>
          </div>
          <p className="text-gray-600 cursor-pointer">{<MdContentCopy />}</p>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard_2;
