import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#0D0D2B] text-white py-12 px-6 md:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand & Social */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">ReCV</h2>
                    <p className="text-sm mb-6 text-gray-300">
                        Transform any profile into a perfect resume with AI-powered simplicity. Your career, beautifully presented.
                    </p>
                    <div className="flex gap-4">
                        <a href="#"><FaLinkedinIn className="hover:text-blue-400" /></a>
                        <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
                        <a href="#"><FaGithub className="hover:text-blue-400" /></a>
                    </div>
                </div>

                {/* Product */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Product</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Templates</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                © 2025 DocV. All rights reserved. Made by yours truly for your career success.
            </div>
        </footer>
    );
}
