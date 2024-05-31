import { NextResponse } from "next/server";

const videoData = [ 
  {
    "id": "algorithm",
    "url": "6qpudAhYhpc",
    "title": "ALGORITHM: The Hacker Movie"
  }
]

export async function POST(req: Request) {
  const data = await req.json();
  const videoId = data.videoId;
  try {
    const dataResponse = videoData.find(video => video.id === videoId);
    if (dataResponse) {
      return NextResponse.json({ data: dataResponse })
    } else {
      return NextResponse.json({ message: 'videoId is not found' })
    }
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}