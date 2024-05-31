'use client'
import YouTubeCinemaEmbed from "@/components/YouTubeCinemaEmbed";
import ErrorIcon from "@/components/icons/Error";
import { useEffect, useState } from "react"

export default function WatchVideo({ params }: any) {
    const [error, setError] = useState('');
    const [data, setData] : any = useState({});
    useEffect(() => {
        fetch('/api/video', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({videoId: params.id}),
        }).then((data) => data.json())
        .then((resp) => {
            console.log(resp);
            setData(resp.data);
        })
    }, []);
    return (
        <>
            {error ?
                <div role="alert" className="alert alert-error">
                    <ErrorIcon />
                    <span>{error}</span>
                </div>
            : ""}
            <div className="container mx-auto p-4 pt-20 pb-20">
                <div className="mb-8 text-center">
                    <h2 className="mb-5 text-5xl font-bold text-primary"><b className="text-white">{data.title}</b></h2>
                </div>
                <YouTubeCinemaEmbed videoId={params.id} />
            </div>
        </>
    )
}