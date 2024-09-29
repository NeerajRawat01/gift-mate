import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div
      className={`w-full md:ml-[14.625rem] md:max-w-[calc(100%-14.625rem)]
        h- bg-gray-01`}
    >
      <Outlet />
    </div>
  );
};

export default Content;
