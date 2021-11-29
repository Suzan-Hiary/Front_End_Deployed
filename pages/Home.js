import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'



function Home() {

  const [cookies, setCookies] = useState('')

  function createCookies(e) {
    e.preventDefault();
    const result = { location: e.target.location.value, MinCustomers: e.target.mini.value, MaxCustomers: e.target.max.value, Avgcookies: e.target.avrg.value }


    setCookies(render => [...render, result])




  }
  return (
    
    <div className=" my-16 bg-dark">
      <Head>
        <title>Cookie_Stand_Admin</title>
      </Head>
      <body >
      <Header />
      <main className="bg-white">
        <div className=" mt-8  pl-60 pb-8 pr-0.5 ">

          <form onSubmit={createCookies} className="  pr-2 pb-10 py-10 mt-2 px-1 border bg-green-300 w-4/5 rounded-lg">
            <div className="text-center">
              <label className="text-black  font-semibold text-3xl text-center pb-14">Create Cookies Stand</label>
            </div>
            <div className="flex">
              <label className="text-black-400 font-medium ">Location</label>
              <input
                name="location" type="text"
                className="border-solid  border   w-full h-7
          rounded text-gray-800"
                value={cookies.location}
              // onChange={e => setCookies({ ...cookies, location: e.target.value })} 
              />
            </div>
            <div className="flex justify-between">
              <div>
                <label className="text-gray-800 font-medium pt-24">Minimum Custom per Hour</label>
                <input name="mini"
                  className="border-solid  border  w-64 h-7 
        rounded text-gray-700"
                  value={cookies.MinCustomers}
                // onChange={e => setCookies({ ...cookies, MinCustomers: e.target.value })} 
                />
              </div>
              <div>
                <label className="text-gray-800 font-medium pt-24">Maximum Custom per Hour</label>
                <input name="max"
                  className="border-solid  border  w-64 h-7
        rounded text-gray-700"
                  value={cookies.MaxCustomers}
                // onChange={e => setCookies({ ...cookies, MaxCustomers: e.target.value })} 
                />
              </div>
              <div>
                <label className="text-gray-800 font-medium pt-24">Average Cookies per Sale</label>
                <input name="avrg"
                  className="border-solid  border  w-64 h-7
        rounded text-gray-700"
                  value={cookies.Avgcookies}
                // onChange={e => setCookies({ ...cookies, Avgcookies: e.target.value })} 
                />
              </div>
              <button type="submit" className="mt-4 w-1/4 h-14 bg-green-500 border py-3 px-3 font-semibold"
              >Create</button>

            </div>
          </form>
          <div className="text-center text-gray-600">
            <h2>Report Table Comming Soon....</h2>
            <h2>{JSON.stringify(cookies)}</h2>
          </div>
        </div>

      </main>
      </body>
      <Footer />
    </div>
  )
}
function Header() {
  return <header className="px-8 py-6 bg-green-500 ">
    <h1 className="text-5xl text-black font-semibold	">Cookie Stand Admin</h1>
  </header>
}


function Footer({ copyright }) {
  return (
    <footer className="px-8 py-4 text-black bg-green-400">
      <p>&copy;{copyright}2021</p>
    </footer>
  )
}
export default Home
