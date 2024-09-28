import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div
      className={`w-full ml-[14.625rem] max-w-[calc(100%-14.625rem)]
       p-8 h- bg-gray-01`}
    >
      <Outlet />
    </div>
  );
};

export default Content;
