import React from 'react'
import './review.css'
import profile from '../assets/profile.jpeg';
import ReactStars from 'react-rating-stars-component';
function review() {
     const ratingChanged = (newRating) => {
  console.log(newRating);
     };
     const star=<ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
/>


     return (
          <div className=' border-1 ml-4 rounded-lg '>
               <div className='two bg-gray-200 m-4 z-30 relative'>
                    <div className='one z-10 absolute -top-2 left-0'>
                         <div
                className="
              border-l-[13px] border-l-transparent
              border-b-[8px] border-b-gray-200
              border-r-[13px] border-r-transparent
              "
              ></div>
                     </div>
                    <div className=' mt-4 pt-4 flex flex-row'>
                         <img src={profile} className='  ml-4  rounded-full h-[40px] w-[40px]'></img>
                         <span className=' pl-6 font-bold'>XYZ  Singh<br></br>
                              <div>{star}
                         </div></span>
                    </div>
                    <div className=' flex flex-row'>
                         <h1 className=' ml-20  font-semibold'>Engagement</h1>
                         <span className=' ml-4 mt-[2px]'>
                              <ReactStars
                                 count={5}
                                 onChange={ratingChanged}
                                 size={14}
                                 isHalf={true}
                                 emptyIcon={<i className="far fa-star"></i>}
                                 halfIcon={<i className="fa fa-star-half-alt"></i>}
                                 fullIcon={<i className="fa fa-star"></i>}
                                 activeColor="#ffd700"
                              />
                         </span>
                         <h1 className=' ml-20 font-semibold'>Lead Response</h1>
                              <span className=' ml-4 mt-[2px]'>
                                    <ReactStars
                              count={5}
                               onChange={ratingChanged}
                               size={14}
                               isHalf={true}
                               emptyIcon={<i className="far fa-star"></i>}
                               halfIcon={<i className="fa fa-star-half-alt"></i>}
                               fullIcon={<i className="fa fa-star"></i>}
                               activeColor="#ffd700"
                              />
                         </span>
                         <h1 className=' ml-20 font-semibold'> Target Aud.</h1>
                              <span className=' ml-4 mt-[2px]'>
                                    <ReactStars
                                         count={5}
                                         onChange={ratingChanged}
                                         size={14}
                                         isHalf={true}
                                         emptyIcon={<i className="far fa-star"></i>}
                                         halfIcon={<i className="fa fa-star-half-alt"></i>}
                                         fullIcon={<i className="fa fa-star"></i>}
                                         activeColor="#ffd700"
                              />
                              </span>
                    </div>
                    <div>
                         <figcaption className=' text-light text-justify pl-20 pr-10 mt-2 pb-14'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</figcaption>
                         </div>
               </div>
               </div>

  )
}

export default review
