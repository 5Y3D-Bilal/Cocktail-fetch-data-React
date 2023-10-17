import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

function Coctail() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
  const [search, setSearch] = useState("");
  const [coktails, setCoktails] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const responce = await fetch(url);
      const data01 = await responce.json();
      console.log(data01);
      setCoktails(data01.drinks);
    }
    fetchdata();
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    const url2 = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;

    try {
      const res = await fetch(url2);
      const data = await res.json();
      console.log(data);
      setCoktails(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" bg-red-200 py-2 sticky top-0">
        <div className="bg-white w-1/5 rounded-md mx-auto py-2 flex items-center">
          <input
          placeholder="Search"
            className="px-5 mx-2 outline-none "
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}

            // onKeyUp={handleClick}
          />
          <button className="bul" onClick={handleClick}>
            <CiSearch size='20' />
          </button>
        </div>
      </div>

      <div>
        <div
         className="bg-red-300 p-7"
        >
          <div
          className=""
            style={{
              display: "grid",
              gridTemplate: "repeat(1,60vh)/ repeat(5,17.75vw)",
              gap: "20px",
              width: "",
              overflowX: "hidden",

            }}
          >
            {coktails?.length > 0 ? (
              coktails?.map((pack) => {
                const { idDrink, strDrink, strDrinkThumb } = pack;
                return (
                  <div key={idDrink} className="hover:scale-105 duration-700">
                    <img
                    className="border-gray-100 border"
                      style={{
                        height: "270px",
                        width: "250px",
                        objectFit: "fill",
                        borderRadius: "8px",
                      }}
                      src={strDrinkThumb}
                      alt="/"
                    />
                        <div
                        className="text-md"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                            marginTop: "10px",
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          {strDrink.slice(0, 20)}...
                        </div>
                  </div>
                );
              })
            ) : (
              <div>No Result Found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Coctail;
