import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold p-4 m-4'>Contact Us</h1>
      <form>
    <input type='text' placeholder='name' className=' block border  border-black p-2 m-2'/>
    <input type='text' placeholder='message' className=' block border border-black p-2 m-2'/>
    <button className='border border-black p-2 m-2 bg-gray-100 rounded-lg'>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
