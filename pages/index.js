import React from 'react'
import CookieStandAdmin from '../components/CookieStandAdmin'
import 'tailwindcss/tailwind.css'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import { useAuth } from "../contexts/auth";
import useResource from '../hooks/useResource'

function Home() {

    const { user, login, logout } = useAuth();
    const { resources, loading, createResource, deleteResource } = useResource();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Header>
                <title>Cookie Stand Admin</title>
            </Header>
            {user ? <CookieStandAdmin
                cookiesArray={resources}
                createResource={createResource}
                logout={logout}
                deleteResource={deleteResource}

            /> : <LoginForm login={login} user={user} />
            }

        </div>
    )
}

export default Home
