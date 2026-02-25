export function ExperienceBadge() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative w-40 h-40 rotatingBadge">
        <div className="absolute inset-0 bg-white rounded-full shadow-2xl border-4 border-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs font-bold text-gray-800 mb-1">
              15 YEARS OF
            </div>
            <div className="text-xs font-bold text-gray-800 mb-1">
              EXPERIENCE
            </div>
            <div className="w-12 h-12 mx-auto my-2">
              <svg viewBox="0 0 48 48" fill="none" className="text-[#8B4513]">
                <path
                  d="M24 8 L28 20 L40 20 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 L20 20 Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className="text-xs font-bold text-gray-800">ATITHI HOUSE</div>
          </div>
        </div>
        <svg
          className="absolute inset-0 w-full h-full rotatingSVG"
          viewBox="0 0 160 160"
        >
          <defs>
            <path
              id="circlePath"
              d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
          </defs>
          <text fill="#8B4513" fontSize="11" fontWeight="bold">
            <textPath href="#circlePath">
              • ATITHI HOUSE • 15 YEARS • EXPERIENCE •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
