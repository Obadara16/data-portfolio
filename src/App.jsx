import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { content } from './data'
import Project from './components/Project'
import Contents from './components/Contents'

// const client = sanityClient({
//   projectId: 'your_project_id_here',
//   dataset: 'your_dataset_name_here',
//   useCdn: true // Enable caching
// })




const App = () => {
  return (
    <div className='w-full'>
      <Nav/>
      <Header/>
      <About/>
      <Contents contentData={content}/>
      <Project />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App