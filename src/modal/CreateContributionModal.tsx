import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ContributionActionType } from "../store/actions/actions.constants";
import Modal from "./Modal";

interface Props {
  event_id: number;
  hostMessage: string;
  visible: boolean;
  handleVisibility: (value: boolean) => void | undefined;
}

const CreateContributionModal: React.FC<Props> = ({
  handleVisibility,
  visible,
  event_id,
  hostMessage,
}) => {
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
  const handleSubmit = (values: any) => {
    dispatch({
      type: ContributionActionType.CREATE_CONTRIBUTION,
      payload: { ...values, event_id },
    });
    handleVisibility(false);
  };

  return (
    <Modal
      title="Make Your Contribution"
      visible={visible}
      onClose={() => handleVisibility(false)}
    >
      <div className="p-6 space-y-6 md:w-[25rem] md:h-[16rem]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Host Message */}
              <div className="mb-6">
                <h1 className="text-lg font-semibold text-gray-700 mb-2">
                  Message from the Host
                </h1>
                <p className="text-gray-600">{hostMessage}</p>
              </div>

              {/* Contribution Amount Input */}
              <div className="mb-6">
                <label
                  htmlFor="amount"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Contribution Amount
                </label>
                <Field
                  name="amount"
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
                  placeholder="Enter amount"
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => handleVisibility(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
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

export default CreateContributionModal;
