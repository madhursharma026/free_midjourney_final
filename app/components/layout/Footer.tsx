import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Line from "@/assets/images/Line.svg";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/LOGO-2.png"
import Link from "next/link";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import Container from "@/app/components/Ui/Container";
import FooterCol from "@/app/components/Ui/FooterCol"

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer id="footer">
      <div className="gradient02 px-7">
        <div className={`text-center ${pathname !== "/" ? '' : 'opacity-0'}`}>
          <Image src={Line} alt="line" />
        </div>
        <div className="lg:pt-28 md:pt-20 pb-12">
          <Container>
            <div className="grid lg:grid-cols-5 grid-cols-3">
              <div className="lg:col-span-2 col-span-3 md:pb-10">
                <Image src={Logo} className="max-w-60 mb-6" alt="footer-logo" />
                <p className="text-sm leading-7 mb-4 text-slate-400 pr-6">An enchanted art factory, weaving magic from words. Text prompts unlock portals to visual splendor - scenes and symbols brought to life through an AI's imagination. Let creativity run wild and free.</p>
                
                  <ul className="flex items-center gap-2 m-0 p-0">
                    <li>
                      <a href="https://www.instagram.com/freemidjourneyai/" target="_blank" className="bg-slate-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/freemidjourneyai/" target="_blank" className="bg-slate-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <FaPinterest />
                      </a>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li> */}
                  </ul>
              </div>
            
              <FooterCol title="Company">
                <li>
                  <Link href="/about-us" className="font-Mona_Medium text-sm text-slate-400 hover:text-blue-400">About Us</Link>
                </li>
                <li>
                  <Link href="/pricing" className="font-Mona_Medium text-sm text-slate-400 hover:text-blue-400">Pricing</Link>
                </li>
                <li>
                  <Link href="/contact-us" className="font-Mona_Medium text-sm text-slate-400 hover:text-blue-400">Contact us</Link>
                </li>
              </FooterCol>
            
              <FooterCol title="Policy">
                <li>
                  <Link href="/terms-and-conditions" className="font-Mona_Medium text-sm text-slate-400 hover:text-blue-400">Terms and Condition</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="font-Mona_Medium text-sm text-slate-400 hover:text-blue-400">Privacy Policy</Link>
                </li>
              </FooterCol>
            
              <FooterCol title="Support">
                <li>
                  <Link href="mailto:freemidjourneyai@gmail.com" className="font-Mona_Medium text-sm text-slate-400 hover:text-blue-400">freemidjourneyai@gmail.com</Link>
                </li>
              </FooterCol>
            </div>
          </Container>
        </div>

        <div className="py-[10px] text-center">
          <span className="text-xs text-slate-400">
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. Freemidjourney - Powered by <strong style={{letterSpacing: "1px"}}>Brainstorm AI</strong>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
