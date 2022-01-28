import HeaderLeft from "./HeaderLeft";
import {
  SearchIcon,
  MapsIcon,
  NewspaperIcon,
  PhotographIcon,
  DotsVerticalIcon,
  PlayIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 
    justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-38 lg:pl-52 border-b-[1px]">
      {/* Left */}
      <div className="flex space-x-6 ">
        <HeaderLeft Icon={SearchIcon} title="All" selected={true} />
        <HeaderLeft Icon={PhotographIcon} title="Images" />
        <HeaderLeft Icon={PlayIcon} title="Videos" />
        <HeaderLeft Icon={NewspaperIcon} title="News" />
        <HeaderLeft Icon={MapsIcon} title="Maps" />
        <HeaderLeft Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <div className="link">Settings</div>
        <div className="link">Tools</div>
      </div>
    </div>
  );
}

export default HeaderOptions;
