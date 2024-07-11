import React, { useEffect, useState } from "react";
import axios from "axios";

const Youtube = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://youtube-v31.p.rapidapi.com/search',
                params: {
                    relatedToVideoId: '7ghhRHRP6t4',
                    part: 'id,snippet',
                    type: 'video',
                    maxResults: '50'
                },
                headers: {
                    'x-rapidapi-key': '1020f2fcefmshcd10abc0ed5265dp12f47djsnd465d8ccd5e1',
                    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setVideos(response.data.items);
                console.log(response.data.items);
            } catch (error) {
                console.error(error);
                // Handle errors
            }
        };

        fetchData();
    }, []); // Empty array as second parameter ensures this effect runs once on component mount

    return (
        <div>
            {videos.map(video => (
                <div style={{ border: '1px solid red', padding: '10px', background: 'pink', display: 'flex', justifyContent: 'center' }}>
                    <h2>{video?.snippet?.title}</h2>
                    <img
                        src={video?.snippet?.thumbnails?.high?.url}
                        width={200}
                        height={200}
                        alt="Thumbnail Images"
                    />
                </div>
            ))}
        </div>
    );
};

export default Youtube;
