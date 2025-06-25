
import './App.css'
import Navbar from './components/Header/Navbar'
import Lower from './components/Lower-Section-Routes'
import PostSection from './components/PosteSection/PostSection'
import ProfileSideBar from './components/Profile/ProfileSideBar'

function App() {


  return (
    <>
      <div className='w-full'>

        <Navbar />
        <div className=" w-full flex flex-col md:flex-row gap-4 p-4">
          <div className=' w-full lg:w-1/5 md:block md:w-2/5'>

            <ProfileSideBar />
          </div>

          <div className=' w-full lg:w-4/5 flex flex-col lg:flex-row'>

            <div className=' w-full lg:w-3/4 '>

              <PostSection />
            </div>
            <div className=' w-full lg:w-1/4'>
              <Lower />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
