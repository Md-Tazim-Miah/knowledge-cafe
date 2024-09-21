import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mt-4 mb-10 border-b-2'>
            <h1 className="text-[#111111] text-[40px] font-bold leading-[64px]">Knowledge Cafe</h1>
            <img src={profile}></img>
        </div>
    );
};

export default Header;