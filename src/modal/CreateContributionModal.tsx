import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ContributionActionType } from "../store/actions/actions.constants";
import Modal from "./Modal";

interface Props {
  event_id: number;
  hostMessage?: string;
  visible: boolean;
  handleVisibility: (value: boolean) => void | undefined;
}

const CreateContributionModal: React.FC<Props> = ({
  handleVisibility,
  visible,
  event_id,
  hostMessage,
}) => {
  const [success, setSuccess] = useState(false);
  const [submittedAmount, setSubmittedAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false); // For processing state

  // Initial form values
  const initialValues = {
    amount: "",
  };

  // Form validation schema
  const validationSchema = Yup.object({
    amount: Yup.number()
      .required("Amount is required")
      .min(1, "Amount should be at least 1"),
  });

  const dispatch = useDispatch();

  // Form submission handler
  const handleSubmit = (values: any, { resetForm }: any) => {
    // Simulate payment processing (set timeout for now)
    setIsProcessing(true); // Set processing state
    setTimeout(() => {
      dispatch({
        type: ContributionActionType.CREATE_CONTRIBUTION,
        payload: { ...values, event_id },
      });

      // Show congratulatory message
      setSubmittedAmount(values.amount);
      setSuccess(true);
      setIsProcessing(false); // End processing
      resetForm();
    }, 3000); // Simulate a longer delay for payment processing feel
  };

  // Reset success state
  const handleCloseSuccess = () => {
    setSuccess(false);
    handleVisibility(false);
  };

  return (
    <>
      <Modal
        title={success ? "Congratulations!" : "Make Your Contribution"}
        visible={visible}
        onClose={() => handleVisibility(false)}
      >
        {success ? (
          // Congratulatory Message
          <div className="p-4 space-y-6 md:w-[28rem] md:h-[18rem] mx-auto text-center">
            <span className="text-6xl">🎉</span>
            <h2 className="text-xl font-semibold text-green-600">
              Thank you for your contribution!
            </h2>
            <p className="text-gray-700">
              You have successfully contributed{" "}
              <strong>${submittedAmount}</strong>.
            </p>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              onClick={handleCloseSuccess}
            >
              Close
            </button>
          </div>
        ) : (
          // Contribution Form
          <div className="p-4 space-y-6 md:w-[28rem] md:h-[18rem] mx-auto">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  {/* Host Message */}
                  <div className="mb-6">
                    <h1 className="text-xl font-bold text-gray-800 mb-2 md:text-2xl">
                      Message from the Host 
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base leading-5">
                      {hostMessage}
                    </p>
                  </div>

                  {/* Contribution Amount Input */}
                  <div className="mb-6">
                    <label
                      htmlFor="amount"
                      className="block text-gray-700 font-semibold mb-2 md:text-lg"
                    >
                      Contribution Amount
                    </label>
                    <Field
                      name="amount"
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-indigo-600 text-sm md:text-base"
                      placeholder="Enter amount"
                    />
                    <ErrorMessage
                      name="amount"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Simulating Payment Processing */}
                  {isProcessing && (
                    <div className="flex items-center justify-center mb-4">
                      <svg
                        className="animate-spin h-5 w-5 text-indigo-600 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                      <p className="text-indigo-600">
                        Processing your payment...
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => handleVisibility(false)}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors text-sm md:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || isProcessing}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm md:text-base"
                    >
                      {isSubmitting || isProcessing
                        ? "Processing..."
                        : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </Modal>
    </>
  );
};

export default CreateContributionModal;
