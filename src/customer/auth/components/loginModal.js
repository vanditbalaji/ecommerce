// import { Fragment, useRef, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import Login from "./login";

// export default function LoginModal({ closeModal, openModal }) {
  
//   const cancelButtonRef = useRef(null);
//   const [open, setopen] = useState(false);
//   const handleClose = () => {
//     setopen(false);
//   };

//   return (
//     <Transition.Root
//       show={openModal !== undefined ? openModal : open}
//       as={Fragment}
//     >
//       <Dialog
//         as="div"
//         className="relative z-10"
//         initialFocus={cancelButtonRef}
//         onClose={closeModal !== undefined ? closeModal : handleClose}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
//         </Transition.Child>

//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex items-end justify-center min-h-full p-4 text-center mt-11 sm:items-center sm:p-0">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
//                 <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
//                   <div className="block sm:items-start">
//                     <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                       <Dialog.Title
//                         as="h3"
//                         className="text-base font-semibold leading-6 text-gray-900"
//                       ></Dialog.Title>
//                       <div className="mt-2">
//                         <Login handleClose={handleClose} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                     onClick={
//                       closeModal !== undefined ? closeModal : handleClose
//                     }
//                     ref={cancelButtonRef}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }
