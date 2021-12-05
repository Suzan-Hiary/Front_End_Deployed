export default function Footer({ reports }) {
    return (
        <footer className="bottom-0 flex items-start w-screen h-12 p-0 font-bold bg-green-500 ">
            <h4 className="p-3 m-auto text-center">{reports ? reports.length : 0} Locations World Wide</h4>
        </footer>
    )
}