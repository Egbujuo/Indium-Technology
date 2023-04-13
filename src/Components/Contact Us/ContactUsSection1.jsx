import React from "react";
import img2 from "../../Assests/Mask Group1.png";
import img1 from "../../Assests/Mask Group.png";
import "../../styles/Contact/ContactSection1.css";

const ContactUsSection1 = () => {
  return (
    <div className=" container1 relative contactUs-section1">
      <div className="w-11/12 m-auto max-w-3xl contact-Img relative">
        <img className="contactUs-img2" src={img1} alt="" />
        <img className="md:hidden contactUs-img3 " src={img2} alt="" />
      </div>

      <div className="w-11/12  m-auto contactUs-wrap2">
        <p className="font-bold text-xl md:3xl text-red-600 font-Sans tracking-wider">
          Contact us
        </p>
        <p className="w-11/12 max-w-lg mt-3 m-auto font-normal text-sm text-gray-500 md:text-base ">
          For further questions, including partnership opportunities, please
          email hello@indium-technologies.com or contact using our contact form.
        </p>
        <div className=" max-w-2xl m-auto  md:flex gap-5 w-full md:p-3">
          <div className="grid w-11/12 max-w-3xl m-auto mt-3 ">
            <label htmlFor="" className="text-left">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="py-1 px-1 form-input"
            />
          </div>

          <div className="grid w-11/12 mt-3 max-w-3xl m-auto">
            <label htmlFor="" className="text-left">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="py-1 px-1 form-input"
            />
          </div>
        </div>
        <div className="grid w-11/12 mt-3 max-w-3xl m-auto">
          <label htmlFor="" className="text-left">
            How can we help you?
          </label>
          <textarea
            className="form-input"
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="I want to say that..."
          ></textarea>
        </div>
        <button className="bg-red-700 text-white py-1 px-3 rounded-3xl mt-5">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection1;

// import React from "react";
// import img2 from "../../Assests/Mask Group1.png";
// import img1 from "../../Assests/Mask Group.png";
// import "../../styles/Contact/ContactSection1.css";

// const ContactUsSection1 = () => {
//   return (
//     <div className="relative container1 contactUs-section1">
//       <div className="w-11/12 m-auto max-w-3xl contact-Img relative">
//         <img className="contactUs-img2" src={img1} alt="" />
//         <img className="md:hidden" src={img2} alt="" />
//       </div>

//       <div className=" w-11/12 max-w-3xl m-auto absolute top-0 left-0 right-0 bottom-0 contactUs-wrap2">
//         <p className="font-bold text-xl md:3xl text-red-600 font-Sans tracking-wider">
//           Contact us
//         </p>
//         <p className="w-11/12 max-w-lg mt-3 m-auto font-normal text-sm text-gray-500 md:text-base ">
//           For further questions, including partnership opportunities, please
//           email hello@indium-technologies.com or contact using our contact form.
//         </p>
//         <div className=" w-11/12 m-auto md:flex gap-3">
//           <div className="grid w-11/12 max-w-3xl m-auto mt-3">
//             <label htmlFor="" className="text-left">
//               Full Name
//             </label>
//             <input
//               type="text"
//               placeholder="Full name"
//               className="py-1 px-1 rounded-3xl"
//             />
//           </div>

//           <div className="grid w-11/12 mt-3 max-w-3xl m-auto">
//             <label htmlFor="" className="text-left">
//               Email
//             </label>
//             <input
//               type="text"
//               placeholder="Email"
//               className="py-1 px-1 rounded-3xl"
//             />
//           </div>
//         </div>
//         <div className="grid w-11/12 mt-3 max-w-3xl m-auto">
//           <label htmlFor="" className="text-left">
//             How can we help you?
//           </label>
//           <textarea
//             name=""
//             id=""
//             cols="30"
//             rows="3"
//             placeholder="I want to say that..."
//           ></textarea>
//         </div>
//         <button className="bg-red-700 text-white py-1 px-3 rounded-3xl mt-5">
//           SEND MESSAGE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactUsSection1;
