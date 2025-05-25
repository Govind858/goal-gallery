import React from 'react'

function Footer() {
  return (
        <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-black mb-2">
            <span className="font-extrabold">Goal</span>
            <span className="font-black">Gallery</span>
            <span className="text-lg sm:text-xl font-normal">.com</span>
          </h3>
          <p className="text-sm sm:text-base font-medium text-gray-300 mb-4">
            Celebrating the most spectacular goals in football history
          </p>
          <div className="border-t border-gray-600 pt-4">
            <p className="text-xs sm:text-sm font-medium text-gray-400">
              © 2024 GoalGallery.com • All Puskás Award Goals
            </p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer