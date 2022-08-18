import { Link } from 'react-router-dom';
import UnderMaintenancePhoto from '../assets/img/under-maintenance.svg';

const UnderMaintenance = () => {
  return (
     <main className=" relative bg-white py-32">
{/* 
     <div className="container mx-auto">

       <div className="flex flex-wrap flex-col w-full justify-center items-center">

         <div className="mb-5"><img src={UnderMaintenancePhoto} className="block w-[500px] h-auto max-w-full" alt=""/></div>

         <div className="text-3xl font-bold text-center mb-8">Sorry this page is currently Under Maintenance.</div>

         <div className="mb-8">Browse the main menu to continue browsing.</div>

         <Link to="/" className="min-h-[52px] bg-primary inline-flex items-center justify-center px-6 rounded text-white transition-all hover:bg-secondary">Go Back to home</Link>

       </div>

     </div> */}

     <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row w-full justify-center items-center">

          <div className="w-full lg:w-6/12">

            <div className="mb-8"><img src={UnderMaintenancePhoto} className="block w-[500px] h-auto max-w-full mx-auto" alt=""/></div>

          </div>

          <div className="w-full lg:w-6/12 text-center lg:text-left">

            <div className="text-[30px] tracking-tight font-bold mb-8">Sorry, this page is currently Under Maintenance.</div>

            <div className="mb-8">Browse the main menu to continue browsing.</div>

            <Link to="/" className="min-h-[52px] bg-primary inline-flex items-center justify-center px-6 rounded text-white transition-all hover:bg-secondary">Go Back to home</Link>

          </div>

        </div>

      </div>

   </main>
  );
};

export default UnderMaintenance;
