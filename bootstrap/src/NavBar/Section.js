import React from 'react';

export default function Section() {
  return (
    <div className='bg-black py-4'>
      <div className='container-fluid d-flex align-items-center justify-content-evenly p-5'>
        <div>
          <h1 className='fs-2 text-white text-center'>
            Become a <span className='text-warning'>Web Developer</span>
          </h1>
          <div className='align-items-center p-4'>
            <p className='text-center text-white'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged . . .
              
            </p>
          </div>
        </div>
        <img
          src='https://img.freepik.com/premium-vector/young-man-programmer-working-computer-with-code-screen-student-programming-vector-concept_53562-4999.jpg'
          className='img-fluid d-none d-sm-block'
          height='400'
          width='400'
        />
      </div>
      
    </div>
  );
}
