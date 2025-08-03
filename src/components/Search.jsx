
function Search( { query, setQuery }) {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" value={query} onChange={(e => setQuery(e.target.value))} />
    </div>
  );
}

export default Search;