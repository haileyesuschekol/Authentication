const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-green-500" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 rounded-lg border border-green-300 focus:outline-none focus:border-green-700 focus:ring-1 text-black placeholder-gray-700 transition duration-200"
      />
    </div>
  )
}

export default Input
