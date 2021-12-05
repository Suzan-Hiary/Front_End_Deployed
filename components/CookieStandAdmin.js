
import Head from "next/head";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import React, { useState , useEffect  } from 'react'

import { useAuth } from '../contexts/auth'

export default function CookieStandAdmin({cookiesArray}) {
  const [cookies, setCookies] = useState([])
  const { user, login } = useAuth();
    let updateStand=(data)=>{
        
      setCookies([...cookies,data])
    }
    return (
        <div className=" bg-green-100 flex flex-col items-center min-h-screen py-2">
        <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-green-100 align-middle w-screen  ">
          <Header />
          {user ?(
            <Main data={cookies} updateStand={updateStand} />
          ):(
            <div className='m-auto mx-12 font-bold text-center my-36'>
             <LoginForm/>        
          </div>
          )

          }
          
        </main>
       <Footer   reports={cookiesArray}/>
  
      </div>
    )
}