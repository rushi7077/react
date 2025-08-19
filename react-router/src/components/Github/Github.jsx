import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  if (!data) {
    return <h2 className="text-center m-4">Loading...</h2>
  }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers ?? "N/A"}
      <br />
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// Loader function
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/rushi7077')
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data")
  }
  return response.json()
}
