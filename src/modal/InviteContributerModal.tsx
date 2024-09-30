import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { InvitationActionType } from "../store/actions/actions.constants";
import Modal from "./Modal";

interface Props {
  event_id: number;
  visible: boolean;
  handleVisibility: (value: boolean) => void | undefined;
}

const InviteContributerModal: React.FC<Props> = ({
  handleVisibility,
  visible,
  event_id,
}) => {
  // Initial form values
  const initialValues = {
    email: "",
    message: "",
  };

  // Form validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const dispatch = useDispatch();

  // Form submission handler
  const handleSubmit = (values: any) => {
    dispatch({
      type: InvitationActionType.SEND_INVITE,
      payload: { ...values, eventId: event_id },
    });
    handleVisibility(false);
  };

  return (
    <Modal
      title="Invite Contributor"
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
              <div className="mx-auto rounded-lg p-6 md:w-[25rem] md:h-[20rem] scrollbar overflow-auto">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Contributor Email
                  </label>
                  <Field
                    name="email"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Message for Contributor
                  </label>
                  <Field
                    name="message"
                    as="textarea"
                    rows="3"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  <ErrorMessage
                    name="message"
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

export default InviteContributerModal;
