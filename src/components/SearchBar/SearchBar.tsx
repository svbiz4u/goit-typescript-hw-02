
import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css'
import { HiOutlineSearch } from 'react-icons/hi';
import { SearchBarProps } from './SearchBar.types';
import { FormEvent } from 'react';

const SearchBar: React.FC<SearchBarProps>  = ({ onSearchSubmit }) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const searchInput = form.elements.namedItem("search") as HTMLInputElement;
      
      const value = searchInput.value.trim();

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
            placeholder="Search images and photoes"
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

