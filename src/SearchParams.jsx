import { useState } from 'react';
const BREEDS = ["icelandic", "fjord", "arabic", "shetland"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [breed, setBreed] = useState("");
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                Location
                <input onChange={e => setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                    >
                        <option />
                        {BREEDS.map(breed => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;