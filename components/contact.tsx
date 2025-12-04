import React from 'react'


const ContactMe = () => {
  return (
    <div className='h-screen flex flex-col bg-white text-center gap-2'>
        <h1 className='text-3xl  tracking-tight '>Contact Me</h1> 

        <p className='text-lg text-gray-500'>I'm currently looking for opportunities. If you have any questions or want to connect, feel free to reach out!</p>
        
        <input type="email" placeholder="Name"  className='flex rounded-md border-3 border-black p-2 m-auto' 
        />
        
        <div className='max-w-2xl mx-auto w-full px-4 py-8'>
          <form className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label htmlFor='name' className='text-sm font-medium text-gray-700 text-left block'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='John Doe'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none'
                />
              </div>
              
              <div className='space-y-2'>
                <label htmlFor='email' className='text-sm font-medium text-gray-700 text-left block'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='john@example.com'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none'
                />
              </div>
            </div>
            
            <div className='space-y-2'>
              <label htmlFor='subject' className='text-sm font-medium text-gray-700 text-left block'>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                placeholder='Project Inquiry'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none'
              />
            </div>
            
            <div className='space-y-2'>
              <label htmlFor='message' className='text-sm font-medium text-gray-700 text-left block'>
                Message
              </label>
              <textarea
                id='message'
                rows={6}
                placeholder='Tell me about your project...'
                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none'
              />
            </div>
            
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl'
            >
              Send Message
            </button>
          </form>
        </div>
       
        
    </div>
  )
}

export default ContactMe