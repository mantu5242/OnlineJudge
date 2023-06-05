// // const InputField = (props) => {
// export default function InputField() {
//   return (
//     <div>
//       <label
//         htmlFor="handle"
//         className="block text-sm font-medium dark:text-gray-300"
//       >
//         Codeforces username
//       </label>
//       <div className="mt-1">
//         <input
//           type="text"
//           id="handle"
//           className="shadow-sm px-4 py-2 border focus:outline-none focus:ring-1 dark:text-gray-300 dark:bg-gray-600  dark:focus:border-purple-600 dark:focus:ring-purple-600 flex-1 block w-full rounded-md sm:text-sm  dark:border-gray-500 "
//           placeholder="coder_ravan"
//           required
//         //   {...props}
//         />
//       </div>
//     </div>
//   );
// }


const InputField = (props) => {
  return (
    <div>
      <label
        htmlFor="handle"
        className="block text-sm font-medium text-gray-300"
      >
        Codeforces username
      </label>
      <div className="mt-1">
        <input
          type="text"
          id="handle"
          className="shadow-sm handle px-4 py-2 border focus:outline-none focus:ring-1 text-gray-300 bg-gray-600  focus:border-purple-600 focus:ring-purple-600 flex-1 block w-full rounded-md sm:text-sm border-gray-500 "
          placeholder="username"
          required
          {...props}
        />
      </div>
    </div>
  );
};

export default InputField;