import { CiSearch } from "react-icons/ci";

interface Props {
  onSearch: (value: string) => void;
}
const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <div className="border-2 flex justify-between px-3 py-1 rounded-md">
      <div className="flex items-center gap-2">
        <CiSearch className="text-xl" />
        <input
          onChange={(e) => onSearch(e.target.value)}
          className="outline-none w-full bg-green-100"
          placeholder="Type at least 3 characters"
        />
      </div>

      <button className="p-1 rounded-md bg-red-700 text-white ">Search</button>
    </div>
  );
};

export default SearchBar;
