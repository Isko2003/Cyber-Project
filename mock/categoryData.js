import { IoMdPhonePortrait } from "react-icons/io";
import { IoWatchSharp } from "react-icons/io5";
import { LiaCameraSolid } from "react-icons/lia";
import { CiHeadphones } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";

export const categoryData = [
  {
    id: 1,
    icon: <IoMdPhonePortrait className="text-xl" />,
    title: "phones",
  },
  {
    id: 2,
    icon: <IoWatchSharp className="text-xl" />,
    title: "smartWatches",
  },
  {
    id: 3,
    icon: <LiaCameraSolid className="text-xl" />,
    title: "cameras",
  },
  {
    id: 4,
    icon: <CiHeadphones className="text-xl" />,
    title: "headphones",
  },
  {
    id: 5,
    icon: <RiComputerLine className="text-xl" />,
    title: "computers",
  },
  {
    id: 6,
    icon: <IoGameControllerOutline className="text-xl" />,
    title: "gaming",
  },
];
