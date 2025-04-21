import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full bg-[#f7f7f7] min-h-[462px] py-40 px-6 md:px-12'>
            <div className="lg:container mx-auto">
                {/* Footer top */}
                <div className="grid md:grid-cols-4 gap-6">
                    {/* Wrapper one */}
                    <div>
                        <Link to={'/'}><h3 className='text-2xl text-[#1e1e1e] capitalize font-bold mb-8'>Panto</h3></Link>
                        <p className='text-base text-[#1e1e1e] font-medium'>
                            The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.
                        </p>
                    </div>

                    {/* Wrapper two */}
                    <div className="mx-auto">
                        <h4 className='text-lg text-[#f6973f] font-medium capitalize mb-5'>services</h4>
                        <ul className='space-y-5'>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize'>email marketing</Link></li>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize'>campaigns</Link></li>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize'>branding</Link></li>
                        </ul>
                    </div>

                    {/* Wrapper three */}
                    <div className="mx-auto">
                        <h4 className='text-lg text-[#f6973f] font-medium capitalize mb-5'>Furniture</h4>
                        <ul className='space-y-5'>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize'>beds</Link></li>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize'>chair</Link></li>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize'>all</Link></li>
                        </ul>
                    </div>

                    {/* Wrapper four */}
                    <div className="mx-auto">
                        <h4 className='text-lg text-[#f6973f] font-medium capitalize mb-5'>follow us</h4>
                        <ul className='space-y-5'>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize flex items-center gap-3'><FaFacebookF size={'1rem'} /> facebook</Link></li>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize flex items-center gap-3'><FaTwitter size={'1rem'} /> twitter</Link></li>
                            <li><Link className='text-sm text-[#1e1e1e] font-normal capitalize flex items-center gap-3'><FaInstagram size={'1rem'} /> instagram</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-12">
                    <p className='text-sm text-[#1e2833] font-normal'>Copyright &copy; 2025</p>
                    <ul className='flex items-center gap-6 mt-4 md:mt-0'>
                        <li><Link className='text-sm text-[#1e1e1e] font-medium capitalize'>Terms & Conditions</Link></li>
                        <li><Link className='text-sm text-[#1e1e1e] font-medium capitalize'>Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
