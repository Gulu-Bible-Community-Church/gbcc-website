import { useState } from "react";
import { AiOutlineMail, AiFillYoutube } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { TiLocationOutline } from 'react-icons/ti';
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  // Handle form input state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isLoading, setIsLoading] = useState(false)




  const handleNewMessage = (e: any) => {
    e.preventDefault()
    try {

      if (!name) {
        toast.error('Please enter your name');
        return; // Prevent form submission if any field is empty
      }
      if (!email) {
        toast.error('Please enter your email address');
        return; // Prevent form submission if any field is empty
      }
      if (!telephone) {
        toast.error('Please enter your telephone');
        return; // Prevent form submission if any field is empty
      }
      if (!message) {
        toast.error('Please enter your message');
        return; // Prevent form submission if any field is empty
      }

      const userData = {
        email,
        name,
        telephone,
        message,
        subject,
      }
      // dispatch(PostNewMessage(userData));
      toast.success(`Thanks ${email} for submitting your messages`)
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      setSubject("")
    }
    catch (error) {
      console.log(error)
    }
    finally {
      isLoading; // Set loading back to false when the request is done or when an error occurs
    }
  }
  useEffect(() => {
    // Set the title when the component mounts
    document.title = 'Contact Us -- GBCC'; // Replace 'New Page Title' with your desired title
    return () => {
      // Reset the title when the component unmounts
      document.title = 'Gulu Bible Community Church'; // Set the default title
    };
  }, []); // Empty dependency array ensures this effect runs only once (on mount)


  return (
    <>
      <section className=' '>
        <div className="absolute top-0 left-0 bottom-0 right-0">
          <div className="px-2 text-black z-[2] md:mt-48 mt-24 flex items-center flex-col">
            <h1 className="md:text-4xl text-xl font-semibold shadow-white">Reach Us</h1>
            <p className="md:text-md text-xs">
              <Link to='/' className='hover:font-bold underline'>Home</Link>
              /Contact Us
            </p>
          </div>
        </div>
        <img src='/contactbanner.jpg' alt="" className='md:h-[300px] h-[150px] w-full flex-1' />
      </section>
      <main className="flex flex-1 md:flex-row flex-col justify-evenly w-full space-x-2 -mt-1 bg-sky-50">
        <div className="md:mx-1 mx-3 md:mt-14 mt-8">
          {/* Email Address */}
          <div className="bg-slate-200 px-4 p-4 flex items-center gap-2 mb-10">
            {/* icon */}
            <div className="hidden lg:flex">
              <AiOutlineMail size={30} color="blue" />
            </div>
            {/* list */}
            <div className="flex flex-col">
              <h1 className="font-bold text-[#D67315] text-xl flex items-center gap-2"><span className="lg:hidden"><AiOutlineMail size={30} color="blue" /></span>Email on: </h1>
              <a href="mailto:leadpastor@gulubcc.org" className="relative "> <span className="font-bold">Overseer</span> leadpastor@gulubcc.org </a>
              <a href="mailto:administrator@gulubcc.org" className="relative "><span className="font-bold">Admin</span> administrator@gulubcc.org </a>
              <a href="mailto:finance@gulubcc.org" className="relative "> <span className="font-bold">Finance Department</span>finance@gulubcc.org </a>
              <a href="mailto:media@gulubcc.org" className="relative "> <span className="font-bold">Media & IT </span>media@gulubcc.org </a>
              <a href="mailto:mission@gulubcc.org" className="relative "> <span className="font-bold">Mission </span>mission@gulubcc.org </a>
            </div>
          </div>
          {/* Phone Number */}
          <div className="bg-slate-200 px-4 p-4 flex items-center gap-2 mb-10">
            {/* icon */}
            <div>
              <AiFillYoutube size={30} color='red' />
            </div>
            {/* list */}
            <div>
              <h1>Subscribe Our Youtube Channel:</h1>
              <a href="https://www.youtube.com/@gulubiblecommunitychurch7832" target="_blank" className="relative cursor-pointer text-black font-semibold">Gulu Bible Community Church</a>
            </div>
          </div>
          {/* Phone Number */}
          <div className="bg-slate-200 px-4 p-4 flex items-center gap-2 mb-10">
            {/* icon */}
            <div>
              <BiPhoneCall size={30} color="green" />
            </div>
            {/* list */}
            <div>
              <h1>Call Us:</h1>
              <a href="tel:+256778444772" className="relative cursor-pointer flex items-center gap-2 ">
                {/* <span><MdAddIcCall size={20} /></span> */}
                +256(7) 7844 4772</a>
              <a href="tel:+256772449491" className="relative cursor-pointer flex items-center gap-2 ">
                {/* <span><AiOutlineWhatsApp size={20} color="green" /></span> */}
                +256(7) 7244 9491</a>
            </div>
          </div>
          {/* Location */}
          <div className="bg-slate-200 px-4 p-4 flex items-center gap-2 mb-10">
            {/* icon */}
            <div>
              <TiLocationOutline size={30} color="green" />
            </div>
            {/* list */}
            <div>
              <h1>Location:</h1>
              <p>Airfield road, Opposite Gulu Independent Hospital</p>
              <p>Gulu City, Uganda</p>
            </div>
          </div>
        </div>

        <div className="md:mt-14 mt-0 bg-white px-4 p-4 mb-10">
          <div className="flex flex-col items-center justify-center font-bold text-3xl pt-3 pb-16">
            <h1>Get In Touch With Us</h1>
            <div className="h-2 w-56 bg-[#D67315]"></div>

          </div>
          <p className="px-10 flex text-start justify-start mt-3 text-sm font-normal"></p>
          <form onSubmit={handleNewMessage}>
            <div className="md:flex md:items-center w-full md:gap-10 gap-24 md:px-10 ">
              {/* name field */}
              <div className="relative flex flex-col md:mb-auto mb-4">
                <label htmlFor="name">Name: <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  id="name"
                  placeholder=""
                  className="bg-gray-200 rounded px-4 p-1 outline-none"
                />
              </div>
              <div className="relative flex flex-col md:mb-auto mb-4  ">
                <label htmlFor="email">Email: <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  id="email"
                  placeholder=""
                  className="bg-gray-200 rounded px-4 p-1 outline-none"
                />
              </div>
            </div>
            <div className="md:flex items-center w-full gap-10 md:px-10 mt-4">
              {/* phone number field */}
              <div className="relative flex flex-col md:mb-auto mb-4">
                <label htmlFor="phone">Phone: <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="phone"
                  value={telephone}
                  onChange={e => setPhone(e.target.value)}
                  id="phone"
                  placeholder=""
                  className="bg-gray-200 rounded px-4 p-1 outline-none"
                />
              </div>
              <div className="relative flex flex-col md:mb-auto mb-4">
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  id="subject"
                  placeholder=""
                  className="bg-gray-200 rounded px-4 p-1 outline-none"
                />
              </div>
            </div>
            <div className="md:mx-10 relative flex flex-col mt-4">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                rows={8}
                className="bg-gray-200 outline-none px-2 p-1"
              />
            </div>
            <div className="md:mx-10 mt-4">
              <button
                className="bg-[#D67315] px-10 uppercase text-white animate-pulse p-2 rounded-lg  w-full"
                type="submit"
              >
                {isLoading ? 'Processing...' : 'Send'}
              </button>


              {/* <div>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
              <button onClick={uploadImage}>Upload</button>
              </div> */}
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Contact;