import { useNavigate } from 'react-router-dom'

export default function ThankYou() {
  const navigate = useNavigate()

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-16 text-center"
      style={{ background: 'linear-gradient(160deg,#fff7f7 0%,#ffeaea 50%,#fff1f1 100%)' }}
    >
      {/* Success Icon */}
      <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mb-6 shadow-lg">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-10 h-10">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-[28px] font-extrabold text-gray-900 mb-2">
        Thank You!
      </h1>
      <p className="text-[15px] text-gray-600 mb-2 max-w-[300px]">
        Your consultation has been booked successfully.
      </p>
      <p className="text-[13px] text-gray-400 mb-10 max-w-[300px]">
        Our team will contact you shortly to confirm your appointment.
      </p>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 bg-[#dc2626] hover:bg-red-700 active:bg-red-800 transition-colors text-white text-[15px] font-bold px-8 py-3.5 rounded-[14px] shadow-lg"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
          <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Home
      </button>
    </section>
  )
}
