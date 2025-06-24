
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
      <div className=" w-full flex flex-col md:flex-row gap-4">
        <div className=' w-full lg:w-1/5 hidden lg:block'>

          <ProfileSideBar />
        </div>
        <div className=' w-full lg:w-3/5'>

          <PostSection />
        </div>
        <div className=' w-full lg:w-1/5 hidden lg:block'>
          <Lower />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
