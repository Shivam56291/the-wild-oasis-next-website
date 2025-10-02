"use client";

import { useFormStatus } from "react-dom";

function UpdateButton({ children, pendingLabel }) {
  const { pending } = useFormStatus(); // ✅ works for parent <form>

  return (
    <button
      type="submit"
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default UpdateButton;
