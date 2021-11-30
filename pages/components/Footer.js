import React from 'react'

function Footer({ copyright }) {
    return (
        <div>
            <footer className="px-8 py-4 text-black bg-green-400">
                <p>&copy;{copyright}2021</p>
            </footer>
        </div>
    )
}

export default Footer
