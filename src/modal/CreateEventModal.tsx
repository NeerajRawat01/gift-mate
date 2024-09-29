import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "./Modal";

interface Props {
  visible: boolean;
  handleVisibility: (value: boolean) => void | undefined;
}

const CreateEventModal: React.FC<Props> = ({ handleVisibility, visible }) => {
  // Initial form values
  const initialValues = {
    name: "",
    date: "",
    venue: "",
    description: "",
    contributorName: "",
    contributorEmail: "",
    amount: "",
  };

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Event name is required"),
    date: Yup.date().required("Event date is required").nullable(),
    venue: Yup.string().required("Event venue is required"),
    description: Yup.string().required("Event description is required"),
    contributorName: Yup.string().required("Contributor name is required"),
    contributorEmail: Yup.string()
      .email("Invalid email address")
      .required("Contributor email is required"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .positive("Amount must be positive")
      .required("Amount is required"),
  });

  // Form submission handler
  const handleSubmit = (values: any) => {
    // API call or handling logic to create an event
    console.log("Form values", values);
  };

  return (
    <Modal
      title="Create New Event"
      visible={visible}
      onClose={() => handleVisibility(false)}
    >
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Event Name */}
              <div className="mx-auto rounded-lg p-6 w-[50rem] h-[40rem] scrollbar overflow-auto">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Event Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </div>

                {/* Event Date */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Event Date
                  </label>
                  <Field
                    name="date"
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </div>

                {/* Event Venue */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Event Venue
                  </label>
                  <Field
                    name="venue"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="venue"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </div>

                {/* Event Description */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Event Description
                  </label>
                  <Field
                    name="description"
                    as="textarea"
                    rows="3"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </div>

                {/* Contributor Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Contributor Name
                  </label>
                  <Field
                    name="contributorName"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="contributorName"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </div>

                {/* Contributor Email */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Contributor Email
                  </label>
                  <Field
                    name="contributorEmail"
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="contributorEmail"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </div>

                {/* Gift Amount */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Gift Amount
                  </label>
                  <Field
                    name="amount"
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 mr-5 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  {isSubmitting ? "Submitting..." : "Create Event"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default CreateEventModal;
