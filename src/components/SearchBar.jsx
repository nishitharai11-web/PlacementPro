function SearchBar({search,setSearch}){
    return(
        <div className="form-container">
            <h2>🔍Search Appliaction</h2>
            <input 
            type="text"
            placeholder="Search by company..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
