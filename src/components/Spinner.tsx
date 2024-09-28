const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-400 border-opacity-50 border-t-blue-700"></div>
    </div>
  );
};

export default Spinner;