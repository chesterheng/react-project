import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineBell, HiOutlineUserCircle } from 'react-icons/hi';
import { AiOutlineWarning } from 'react-icons/ai';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-16 px-4 flex justify-end border-black border-b-2">
      <div className="flex items-center gap-2 mr-2">
        <AiOutlineWarning
          fontSize="26"
          onClick={() => navigate('/')}
          className="cursor-pointer"
        />
        <HiOutlineBell
          fontSize="26"
          onClick={() => navigate('/notification')}
          className="cursor-pointer"
        />
        <HiOutlineUserCircle
          fontSize="26"
          onClick={() => navigate('/profile')}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
