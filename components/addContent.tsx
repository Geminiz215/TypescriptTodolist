import { Fragment, useState } from "react";
import NewLandingLayout from "./landingLayout";
import clsx from "clsx";
import { Formik, Field, Form } from "formik";
import Input from "./Input";
import axios from "axios";

interface ChildProps {
  // Define props for the child component
  sendDataToParent: (data: boolean) => void;
}

export default function AddContent({ sendDataToParent }: ChildProps) {
  const [InsertOpen, setInsertOpen] = useState(false);
  const handler = () => {
    setInsertOpen(!InsertOpen);
  };

  return (
    <Fragment>
      <button
        className="bg-transparents hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handler}
      >
        Button
      </button>

      <div
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0 transition-all duration-500 bg-gray-500 bg-opacity-50",
          InsertOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center h-full max-w-[400px] mx-auto">
          <Formik
            initialValues={{
              todo: "",
              name: "",
              startDate: "",
              endDate: "",
              description: "",
            }}
            onSubmit={async (values, action) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              axios
                .post("/api/hello", values)
                .then(() => {
                  action.setValues({
                    todo: "",
                    name: "",
                    description: "",
                    startDate: "",
                    endDate: "",
                  });
                  sendDataToParent(true);
                  handler();
                })
                .catch((error: any) => {
                  alert("Error making POST request: " + error.message);
                });
            }}
          >
            <Form className="bg-white relative w-full p-3">
              <label className="font-mono pl-1">please insert ur name</label>
              <Field
                name="name"
                as={Input}
                type="text"
                placeholder="Name"
                required
              />
              <label className="font-mono pl-1">insert what u want todo</label>
              <Field
                name="todo"
                as={Input}
                type="text"
                className="block my-5"
                placeholder="Todo"
                required
              />
              <label className="font-mono pl-1">description</label>
              <Field
                name="description"
                as={Input}
                type="text"
                className="block my-5"
                placeholder="Description"
              />
              <label className="font-mono pl-1">startDate</label>
              <Field
                name="startDate"
                as={Input}
                type="date"
                className="block my-5"
                placeholder="StartDate"
              />
              <label className="font-mono pl-1">endDate</label>
              <Field
                name="endDate"
                as={Input}
                type="date"
                className="block my-5"
                placeholder="EndDate"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block"
                // onClick={handler}
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
}
