import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#001F3D] text-[#00B4D8] py-12 px-6 w-full mt-auto">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Building the future. Together.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Motto */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-32 h-12 relative mb-2">
              <Image 
                src="/logo-no-bg.png" 
                alt="Zephyron Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-sm italic">Code Beyond Time</p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@zephyron.tech" className="flex items-center hover:text-white transition-colors">
                  <FaEnvelope className="mr-2" />
                  info@zephyron.tech
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/zephyron" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/zephyron" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors">
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/technology" className="text-white hover:underline">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-white hover:underline">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Certification */}
          <div>
            <h3 className="text-lg font-bold mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              <div className="w-16 h-16 relative bg-white p-1 rounded">
                <Image 
                  src="/iso27001.png" 
                  alt="ISO 27001 Certification" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="w-16 h-16 relative bg-white p-1 rounded">
                <Image 
                  src="/aws-partner.png" 
                  alt="AWS Partner" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#003366] mt-8 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} Zephyron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
