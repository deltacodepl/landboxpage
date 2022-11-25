import React, { useState } from "react";

export default function ContactUs() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [promocheck, setPromocheck] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstname.length <= 0) {
      tempErrors["firstname"] = true;
      isValid = false;
    }
    if (lastname.length <= 0) {
      tempErrors["lastname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("http://localhost:8000/message/", {
        body: JSON.stringify({
          email: email,
          first_name: firstname,
          last_name: lastname,
          phone: phone,
          promopack: promocheck,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFirstname("");
        setLastname("");
        setEmail("");
        setMessage("");
        setPhone("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
      setPhone("");
    }
    console.log(firstname, lastname, email, phone, message);
  };
  return (
    <main>
      <header className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 lg:px-40 bg-blue-50 dark:bg-blue-900 md:h-96">
        <div className="mx-auto mb-10 md:mt-20">
         
          <h1 className="text-4xl font-bold mt-4 dark:text-gray-50 text-gray-700">
            Lets talk about your projects.
          </h1>
          <p className="text-sm text-gray-700 mt-4 font-light dark:text-gray-200">
            Fill the form and send in your queries. I will respond as soon as I
            can. Alternatively, You can reach out to me at my email address.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Send a message
          </h1>

          <label
            htmlFor="firstname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            First name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            name="firstname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.firstname && (
            <p className="text-red-500">Firstname cannot be empty.</p>
          )}
          <label
            htmlFor="lastname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Last name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            name="lastname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.firstname && (
            <p className="text-red-500">Lastname cannot be empty.</p>
          )}

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}

          <label
            htmlFor="phone"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />
          {errors?.phone && (
            <p className="text-red-500">Phone cannot be empty.</p>
          )}

          <label
            htmlFor="promopack"
            className=""
          >
            Proszę o promocyjny pakiet pudełek
          </label>
          <input type="checkbox"
            checked={promocheck}
            onChange={(e) => {
              setPromocheck(!promocheck)
            }}
          />

          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          {errors?.message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}
          
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              {buttonText}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </header>
      
    </main>
  );
}
