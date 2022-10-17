import {React  , useState} from 'react'

import userData from '@constants/data'

import {
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon, 
   
  } from 'next-share';

  import {FiPhoneCall} from 'react-icons/fi'


const SocialMedia = () => {
    const [visible, setVisible] = useState(true);

  //   const [showBtn, setShowBtn] = useState(false);
  // useEffect(() => {
  //     window.addEventListener("scroll", () => { 
  //         if (window.scrollY > 300) {
  //             setShowBtn(true);
  //         }
        
  //          else{
  //             setShowBtn(false);
  //         }
  //     });
  // }, []);
  

    return ( 
      <div className="dark:text-white relative ">
        {visible && (  
            <div className="fixed inline transition ease-in-out  bottom-64 md:bottom-34 left-2 bg-transprant  h-7 w-7 lg:h-10  lg:w-10  md:h-2 md:w-2 cursor-pointer   hover:animate-none hover:fill-yellow-300 hover:-translate-y-1 hover:scale-110">
            <div className="" >
   
     
            <button className = "  hover:bg-red-500 rounded-full"
             
              onClick={() => setVisible(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                 class="h-8 w-8 " //transition
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
               className="h-6 w-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* <a  href = "" className='fill-blue-500'
            >
          <FaShare size={28} round />
      
      </a>  */}

      <a  href = "tel:909XXXXXX499 " className='fill-green-500 '>
        <FiPhoneCall className='fill-green-500' size={26} round />
      </a>
     <WhatsappShareButton
     url = {"https://wa.me/91909xxxxx499?text=I want to work on a project with you"}>
        <WhatsappIcon size={32} round />
     </WhatsappShareButton>


      <LinkedinShareButton
     url = {userData.socialLinks.linkedin}>
        <LinkedinIcon size={32} round />
     </LinkedinShareButton>

          </div>
          </div>
          
           
        )} 

        </div>
)}

export default SocialMedia