import React from 'react'
import css from "./Searchbar.module.css"
import { FaSearch } from 'react-icons/fa';

export default function Searchbar({ submitForm }) {
  const onFormSubmit = (e) =>{
    e.preventDefault()
    submitForm(e.target.search.value);
    
  }

  return (
    <header className={css.Searchbar}>
      <form onSubmit={onFormSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <FaSearch />
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.SearchFormInput}
          name='search'
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
