import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
export const Home=()=>{
    
    return <> 
       <div className="  bg-yellow-500 shadow-lg flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                <img src="https://logos-world.net/wp-content/uploads/2023/07/Medium-Logo.png" className="w-30 h-20" alt="" />
        </Link>
        <div>
        <Link to={`/signin`}>
                <button type="button" className="mr-4 mt-4  hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Sign in</button>
            </Link>
            <Link to={`/signup`}>
                <button type="button" className="mr-4 mt-4 text-white bg-black hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Get Started</button>
            </Link>

        </div>
    </div>
    <hr  className="bg-black h-1"/>
    <div className="bg-gray-50/90 py-12 lg:py-24 pl-40 md:pl-20  bg-yellow-500">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter mt-6 sm:text-5xl">Stay curious</h1>
                <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Discover stories, thinking, and expertise from writers on any topic.
                </p>
              </div>
              <Link
                className="inline-flex w-60 h-10 items-center justify-center rounded-xl bg-black px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                to={`/signup`}
              >
                Get Started
              </Link>
            </div>
            <img
              alt=""
              className="mx-auto aspect-video  overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://images.unsplash.com/photo-1580192270066-bed2e3055024?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
            />
          </div>
        </div>
      </div>
      <div className="container py-12 lg:py-24 px-4 md:px-6 lg:pl-80 md:pl-20">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The All-in-One Solution</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our product is packed with features designed to streamline your workflow and boost your productivity.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Intuitive Interface</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our product features a sleek and user-friendly interface, making it easy to get started.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Collaboration Tools</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Seamlessly collaborate with your team using the integrated suite of communication tools.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Powerful Automation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Automate repetitive tasks and workflows, allowing you to focus on innovation.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Collaboration Tools</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Seamlessly collaborate with your team using the integrated suite of communication tools.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Powerful Automation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Automate repetitive tasks and workflows, allowing you to focus on innovation.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Intuitive Interface</h3>
         
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-12 lg:py-24 ">
                  <div className="flex flex-col justify-center space-y-2 text-center lg:space-y-4 ">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl text-white">Copyright &copy; 2024 tushar-agarwal7 <GitHubIcon/></h2>
            <p className="text-gray-100 dark:text-gray-400">

            </p>
          </div>
          
        </div>
    


    </>
}