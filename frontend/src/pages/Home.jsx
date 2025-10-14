import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa"

function Home() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
            <h1 className="text-3xl font-bold mb-2 text-center">What do you need help with?</h1>
            <p className="text-gray-600 mb-6 text-center">Please choose from an option below?</p>

            <Link 
                to="/new-ticket" 
                className="flex items-center justify-center w-full max-w-xs mb-4 px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
                <FaQuestionCircle className="mr-2" /> Create New Ticket
            </Link>

            <Link 
                to="/tickets" 
                className="flex items-center justify-center w-full max-w-xs px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                <FaTicketAlt className="mr-2" /> View My Tickets
            </Link>
        </section>
    )
}

export default Home
