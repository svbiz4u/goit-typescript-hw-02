
import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css'
import { HiOutlineSearch } from 'react-icons/hi';


const SearchBar = ({ onSearchSubmit }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const value = form.elements.search.value.trim();
      if (value === "") {
        return toast.error("Please enter a search query", {
          duration: 1500,
          position: "top-right",
        });
      }
  
      onSearchSubmit(value);
      form.reset();
    };
  
    return (
      <div className={s.formWrapper}>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
          <button type="submit">
            <HiOutlineSearch />
          </button>
        </form>
        <Toaster />
      </div>
    );
  };
  
  export default SearchBar;

