import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimited from '../components/RateLimited';
import axios from 'axios';

function HomePage() {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [notes, setNotes] = useState([]);

    // Simulate fetching notes
    useEffect(() => {
        const fetchNotes = async () => {
            console.log('Fetching notes...');
            try {
                const response = await axios.get("http://localhost:3000/api/notes");
                // const data = await response.json();
                const data = response.data;
                console.log('Notes fetched successfully:', data);
                setNotes(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchNotes();
    }, []);

    // useEffect(() => {
    //     if (notes.length > 10) {
    //         setIsRateLimited(true);
    //     }
    // }, [notes]);

    return (
        <div className='min-h-screen'>
            <Navbar />

            {isRateLimited && <RateLimited />}
        </div>
    )
}

export default HomePage
