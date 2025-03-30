export default function Footer() {
  return (
    <footer className="bg-white/50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-gray-600/80">
            © 2024 Your Company. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600/80 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600/80 hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600/80 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 