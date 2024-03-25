import { Link } from "react-router-dom"

export const NotFound=()=>{
    const login=window.localStorage.getItem("token")

    return <div>
         <div className="flex flex-col items-center justify-center w-full min-h-[50vh] py-6 space-y-4 text-center">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">404 - Page Not Found</h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          The page you are looking for does not exist. It may have been moved or deleted.
        </p>
      </div>
      <Link
        className="inline-flex h-10 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 "
        to={login?"/blogs" : "/"}
      >
        Go Back
      </Link>
    </div>
    </div>
}