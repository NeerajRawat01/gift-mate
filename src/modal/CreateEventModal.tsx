import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { EventActionType } from "../store/actions/actions.constants";
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
  };

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Event name is required"),
    date: Yup.date().required("Event date is required").nullable(),
    venue: Yup.string().required("Event venue is required"),
    description: Yup.string().required("Event description is required"),
  });

  const dispatch = useDispatch();

  // Form submission handler
  const handleSubmit = (values: any) => {
    dispatch({
      type: EventActionType.CREATE_EVENT,
      payload: values,
    });
    handleVisibility(false);
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
              <div className="mx-auto rounded-lg p-5 md:w-[40rem] md:h-[30rem] scrollbar overflow-auto">
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
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 mr-5 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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
