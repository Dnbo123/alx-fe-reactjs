import React, {useState} from 'react'
import {fetchUserData} from '../services/githubService.js'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);


    try{
        const response = await fetchUserData(searchTerm);
          setUserData(response);
          setLoading(false);
          } catch (error) {
            setError('Looks like we cant find the user');
          } finally {
            setLoading(false);
          } 

    };



    return(
        <div>
            <h2>Search GitHub User</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 value={searchTerm}
                  onChange={handleInputChange}/>

         <button type="submit">Search</button>
            </form>

            {Loading && <div>Loading...</div> }
            {error && <div>{error}</div> }
            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={userData.login}></img>
                    <h3>{userData.name}</h3>
                    <p>Username: {userData.login}</p>
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </p>
                </div>
            )}
        </div>

    );
};

export default Search;