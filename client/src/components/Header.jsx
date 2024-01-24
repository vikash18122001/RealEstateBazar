import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        console.log(searchTerm, ' ', searchQuery);
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

    return (
        <header className="bg-teal-800 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to="/" className="text-3xl font-bold text-white">
                    R-Est<span className="text-yellow-400">Bazaar</span>
                </Link>
                <form onSubmit={handleSubmit} className="bg-white p-3 rounded-lg flex items-center">
                    <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search.."
                        value={searchTerm}
                        className="bg-transparent focus:outline-none w-64"
                    />
                    <button className="ml-2">
                        <FaSearch className="text-teal-800" />
                    </button>
                </form>
                <ul className="flex gap-4">
                    <Link to="/" className="text-white hover:text-yellow-400">
                        Home
                    </Link>
                    <Link to="/about" className="text-white hover:text-yellow-400">
                        About
                    </Link>
                    <Link to="/profile" className="text-white hover:text-yellow-400">
                        {currentUser ? (
                            <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
                        ) : (
                            "Sign In"
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;
