import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let title = 'NDYA Consulting Services Inc.';
  try {
    let url = request.url && new URL(request.url)
    title = url && url.searchParams.get('title') || 'NDYA Consulting Services Inc.'
  } catch (e) {
    console.error(`Error: ${e.message}`, { error: e });
  }

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
