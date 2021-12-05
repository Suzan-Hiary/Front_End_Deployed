
import React from 'react';
import useResource from '../hooks/useResource';

function CreateForm(props) {
    const {createResource , fetchResource} = useResource()

    function createCookies(e) {
        e.preventDefault();
        let result = {
            location: e.target.location.value,
            average: e.target.average.value,
            MinCustomer: e.target.Mini.value,
            MaxCustomer: e.target.Max.value,
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36, 516]
        }
        props.updateStand(result)
        createResource(result)


    }
    return (

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

                    // onChange={e => setCookies({ ...cookies, location: e.target.value })} 
                    />
                </div>
                <div className="flex justify-between">
                    <div>
                        <label className="text-gray-800 font-medium pt-24">Minimum Custom per Hour</label>
                        <input name="Mini"
                            className="border-solid  border  w-64 h-7 
                                    rounded text-gray-700"

                        // onChange={e => setCookies({ ...cookies, MinCustomers: e.target.value })} 
                        />
                    </div>
                    <div>
                        <label className="text-gray-800 font-medium pt-24">Maximum Custom per Hour</label>
                        <input name="Max"
                            className="border-solid  border  w-64 h-7
                                  rounded text-gray-700"

                        // onChange={e => setCookies({ ...cookies, MaxCustomers: e.target.value })} 
                        />
                    </div>
                    <div>
                        <label className="text-gray-800 font-medium pt-24">Average Cookies per Sale</label>
                        <input name="average"
                            className="border-solid  border  w-64 h-7
                                rounded text-gray-700"

                        // onChange={e => setCookies({ ...cookies, Avgcookies: e.target.value })} 
                        />
                    </div>
                    <button type="submit" className="mt-4 w-1/4 h-14 bg-green-500 border py-3 px-3 font-semibold"
                    >Create</button>

                </div>
            </form>
        </div>
    )
}

export default CreateForm
