import { Avatar } from '@mui/material';
import  { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Topbar = () => {

    const [avatarImage, setAvatarImage] = useState(
        JSON.parse(localStorage.getItem("is-open")) || null
    );

    const handleAvatarClick = () => {
        // Programmatically trigger the file input click
        document.getElementById('avatar-input').click();
        setAvatarImage(avatarImage);
      };

      const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
          setAvatarImage(e.target.result);
        };
    
        reader.readAsDataURL(file);
      };

      useEffect(() => {
        localStorage.setItem("is-open", JSON.stringify(avatarImage));
    }, [avatarImage])

    return (  
        <section>
             <nav className=''>
                <header className="mx-auto px-4 sm:px-6 lg:px-6">
                    <div className="flex items-center justify-between h-[72px] lg:h-[93px]">
                        <div className="md:ml-12">
                            <Link className="text-4xl font-bold leading-9 text-[#012A4A]" to={"/login"}>BookMania</Link>
                        </div>
                        <div className="cursor-pointer" onClick={handleAvatarClick}>
                            <div className='flex items-center space-x-2 md:mr-12'>
                                {avatarImage ? (
                                <img src={avatarImage} alt="Avatar"  className="w-[42px] h-[42px] rounded-[50%] bg-[#D9D9D9] object-cover"  />
                                ) : (    
                                <span className=''>
                                    <Avatar />
                                </span>
                        
                                )}
                                <h3><span className='text-[#012A4A] text-base font-normal'>Segun</span></h3>
                            </div>  
                        </div>
                        <input
                            id="avatar-input"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                    </div>
                </header>
            </nav>
        </section>

    );
}
 
export default Topbar;