const TopHeaderSocialItem = ({ path, icon }) => {
     return (
          <div className="top-header-social-item">

               <a href={path} rel="noreferrer" target="_blank" className="top-header-social-link">

                    {icon}

               </a>

          </div>
     );
};

export default TopHeaderSocialItem;
