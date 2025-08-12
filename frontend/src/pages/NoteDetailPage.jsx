import { use, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';

import toast from 'react-hot-toast';
import axios from 'axios';
import api from '../lib/axios';
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react';

function NoteDetailPage() {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await api.get(`/notes/${id}`);
                const data = response.data;
                setNote(data.note);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching note:', error);

                if (error.response && error.response.status === 429) {
                    toast.error('Slow down! You are fetching note too quickly.', { duration: 4000, icon: '⚠️' });
                } else {
                    toast.error('Failed to fetch note');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchNote();
    }, [id]);

    console.log("Note fetched:", note);

    if (loading) {
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <Link to="/" className="btn btn-ghost">
                            <ArrowLeftIcon className="h-5 w-5" />
                            Back to Notes
                        </Link>
                        <button className="btn btn-error btn-outline">
                            <Trash2Icon className="h-5 w-5" />
                            Delete Note
                        </button>
                    </div>

                    <div className="card bg-base-100">
                        <div className="card-body">
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Note title"
                                    className="input input-bordered"
                                    value={note.title}
                                />
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Content</span>
                                </label>
                                <textarea
                                    placeholder="Write your note here..."
                                    className="textarea textarea-bordered h-32"
                                    value={note.content}
                                />
                            </div>

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" disabled={saving}>
                                    {saving ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteDetailPage
