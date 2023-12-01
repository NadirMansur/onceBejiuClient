import search from "./searchBar.module.css"
//aca voy a necestiar el rubro 
const SearchBar = () => {
  return (
    <div className={search['col-md-6']}>
      <div className={search['header-search']}>
        <form>
          <select className={search['input-select']}>
            <option value='0'>Todas las categorias</option>
            <option value='1'>Category 01</option>
            <option value='1'>Category 02</option>
          </select>
          <input className={search['input']} placeholder='Busque aquí'></input>
          <button className={search['search-btn']}>Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
