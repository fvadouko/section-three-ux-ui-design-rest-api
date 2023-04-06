import styles from '../pages/HomepageLandingPage.module.css';

import {
  useFetchDataCountries,
  useFetchDataVenuesTypes,
} from '../app/hooks';
import { CountryItem, VenueTypeItem } from '../interfaces';

export const SearchContainer = () => {
  const { dataCountries } = useFetchDataCountries() as unknown as {
    dataCountries: CountryItem[];
  };

  const { dataVenuesTypes } =
    useFetchDataVenuesTypes() as unknown as {
      dataVenuesTypes: VenueTypeItem[];
    };

  // const items = [
  //   {
  //     id: 0,
  //     name: "Cobol",
  //   },
  //   {
  //     id: 1,
  //     name: "JavaScript",
  //   },
  //   {
  //     id: 2,
  //     name: "Basic",
  //   },
  //   {
  //     id: 3,
  //     name: "PHP",
  //   },
  //   {
  //     id: 4,
  //     name: "Java",
  //   },
  // ];

  // const handleOnSearch = (string, results) => {
  //   // onSearch will have as the first callback parameter
  //   // the string searched and for the second the results.
  //   console.log(string, results);
  // };

  // const handleOnHover = (result) => {
  //   // the item hovered
  //   console.log(result);
  // };

  // const handleOnSelect = (item) => {
  //   // the item selected
  //   console.log(item);
  // };

  // const handleOnFocus = () => {
  //   console.log("Focused");
  // };

  return (
    <>
      <div className={styles.searchBox}>
        <p
          className={styles.searchBoxTitle}
          style={{ marginBottom: '20px' }}
        >
          Book Your Dream Venue Today: Find, Reserve, and Play with
          Ease!
        </p>

        <form action="" className={styles.SearchContainer}>
          {/* <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            styling={{
              searchIconMargin: "10px 12px 0 11px",
              clearIconMargin: "10px 0 8px 0",
              display:"flex"
            }}
          /> */}

          <input
            className={styles.frameInput}
            type="text"
            placeholder="Venue type"
          />
          <input
            type="date"
            name="dateForm"
            id="dateForm"
            className={styles.dateForm}
            placeholder="Date"
          />
          <select name="" id="" className={styles.selectForm}>
            {dataCountries &&
              dataCountries.map((country: CountryItem) => (
                <option key={country.id} value={country.countryCode}>
                  {country.countryName}
                </option>
              ))}
          </select>

          <button className={styles.button6}>
            <span className={styles.getStartedNow}>Search</span>
          </button>
        </form>
      </div>
    </>
  );
};
