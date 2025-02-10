import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      await emailjs.send(
        "service_8j9qalp", // Replace with your EmailJS Service ID
        "template_ijdw5gf", // Replace with your EmailJS Template ID
        templateParams,
        "8qMm03K8cERcNaTAQ" // Replace with your EmailJS Public Key
      );

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        {/* Contact Section */}
        <div className="col-12 col-md-6">
          <h1>Contact</h1>
          <p>I will respond shortly</p>

          <h3>Phone</h3>
          <p>+40720598448</p>

          <h3>Email</h3>
          <p>andreyka.gutsan@gmail.com</p>
        </div>

        {/* Form Section */}
        <div className="col-12 col-md-6">
          {isSuccess && (
            <div className="mb-6 p-4 bg-success text-white rounded-lg">
              Thank you for your message! I'll respond shortly.
            </div>
          )}

          {isError && (
            <div className="mb-6 p-4 bg-danger text-white rounded-lg">
              Oops! Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Row 1: First Name and Last Name */}
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="form-control"
                  />
                  {errors.firstName && (
                    <p className="text-danger">{errors.firstName.message}</p>
                  )}
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="form-control"
                  />
                  {errors.lastName && (
                    <p className="text-danger">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Row 2: Email and Subject */}
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="form-control"
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="form-control"
                  />
                  {errors.subject && (
                    <p className="text-danger">{errors.subject.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Row 3: Message */}
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={4}
                className="form-control"
              />
              {errors.message && (
                <p className="text-danger">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-dark mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
