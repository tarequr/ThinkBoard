import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimited from '../components/RateLimited';
import axios from 'axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';

function HomePage() {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [notes, setNotes] = useState([]);

    // Fetch notes from the backend
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await api.get("/notes");
                const data = response.data;

                // console.log("Fetched notes:", data);
                setNotes(data.notes || []); // Ensure notes is an array
                setIsRateLimited(false); // Reset rate limit status
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
                if (error.response && error.response.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed to fetch notes. Please try again later.");
                }
            } finally {
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
    // console.log("Notes fetched:", notes);


    return (
        <div className='min-h-screen'>
            <Navbar />

            {isRateLimited && <RateLimited />}

            <div className='max-w-7xl mx-auto p-4 mt-6'>
                {isLoading && <div className='text-center text-primary py-10'>Loading notes... ⌛</div>}

                {notes.length > 0 && !isRateLimited && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {notes.map(note => (
                            <NoteCard key={note._id} note={note} setNotes={setNotes} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage
