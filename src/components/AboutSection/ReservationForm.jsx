export function ReservationForm() {
  return (
    <div className="border-2 border-[#EF4444] p-8 rounded-lg">
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Our Rooms</label>
        <select className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#EF4444]">
          <option>Select your Rooms</option>
          <option>Luxury Rooms</option>
          <option>Superior Room</option>
          <option>Corporate Twin Room</option>
          <option>Residences Room</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Check In</label>
          <input
            type="date"
            defaultValue="2026-02-24"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#EF4444]"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Check Out</label>
          <input
            type="date"
            defaultValue="2026-02-25"
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#EF4444]"
          />
        </div>
      </div>

      <button className="w-full bg-[#EF4444] text-white py-4 font-bold hover:bg-[#DC2626] transition-all transform hover:scale-105">
        RESERVE NOW
      </button>
    </div>
  );
}
