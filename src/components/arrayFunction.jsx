// function to sort

function compare(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }
  
  /**
   * Funtion to filter movies for either
   * SERIES or MOVIES type
   *
   * {SERIES or MOVIE}  type
   * {Array of movies} moviesData
   */
  
  function getDataType(type, moviesData) {
      return moviesData.filter((data) => data.programType === type && data.releaseYear >= 2010);

  }
  
  
  //  function to slice, sort, and filter
  
  
  export async function arrayFunction(type, moviesData) {
    if (moviesData) {
      const dataType = await getDataType(type, moviesData);
      return [...dataType.sort(compare).slice(0, 21)];
    }
  
    return [];
  }