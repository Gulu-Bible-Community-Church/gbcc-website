

const SingleInsight = () => {
  return (
    <>
      <main className='relative w-full '>
        <section className=''>
          <div className="absolute top-0 left-0 bottom-0  right-0">
            <div className="px-2 text-black z-[2] md:mt-48 mt-24 flex items-center flex-col">
            </div>
          </div>
          <img src='' alt="" className='md:h-[300px] h-[150px] w-full flex-1' />
        </section>
        {/* main body */}
        <section className='mt-4'>
          <div className='lg:mx-32 md:mx-10 mx-1 md:font-extrabold font-bold flex lg:flex-row flex-col items-center gap-4	mb-4'>
            <h1 className='bg-yellow-600 lg:p-2 md:p-2 p-1 lg:px-4 md:px-4 px-20 rounded text-white lg:text-xl md:text-xl text-sm'>insight.category </h1>
            <p className='lg:text-3xl md:text-xl text-center'>insight.name</p>
          </div>
          <div className='flex lg:flex-row flex-col justify-center gap-36 items-center'>
            {/*big image here */}
            <div className='mx-32 flex justify-between flex-col'>
              {/* {insight.image && insight.image.length > 0 && ( */}
              <img
                src='https://res.cloudinary.com/dgfsgfzee/image/upload/v1697954186/s7sxz2vlkzxn44x5caku.jpg'
                alt="hello"
                className="w-[70rem] rounded shadow-md shadow-orange-600"
              />
              {/* )} */}
              <div className='flex flex-row items-center justify-between mt-4 relative'>
                <div className='flex items-center gap-1 cursor-pointer'>
                  {/* <AiFillLike size={25} /> */}
                  <p className='font-bold'>
                    {/* {insight.comment.length()} */}
                  </p>
                  <p>Likes</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                  {/* <FcLike size={25} /> */}
                  <p className='font-bold'>0</p>
                  <p>Love</p>
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                  {/* <p className='font-bold'>{insight.comments?.length}</p> */}
                  <p>Comment</p>
                </div>
              </div>
            </div>
            {/* other images */}

            <div className='hidden lg:flex flex-col items-center gap-4 relative duration-100 transition-all mx-10'>
              {/* {insight?.image?.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt="" className='w-[350px] hover:scale-110 hover:overflow-hidden cursor-pointer' />
            ))} */}
            </div>
          </div>
          {/* main body */}
          <div className="lg:mx-32 md:mx-10 mx-4 mt-4">
            <h1 className='hidden lg:flex font-bold md:text-3xl text-lg'>insight.name</h1>
            <div className=''>
              {/* {insight.message &&
              insight.message.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))} */}

            </div>
            {/* <div className="mt-4">
            <p>{insight.message}</p>
          </div> */}
          </div>

          {/* comment section */}
          {/* view comment */}

          {/* post comment */}
          <div className="mt-4 lg:mx-32 md:mx-8 mx-4 lg:mb-6 mb-4">
            <div className='font-bold md:text-2xl text-xl'>
              <h1>Post your comment</h1>
            </div>
            {/* <div className='bg-slate-200  lg:w-1/2 w-full rounded-sm md:p-8 p-2 relative'>
            <form className='px-4 p-2' onSubmit={handlePostComment}>
              <div className=' gap-3 items-center md:mb-10 mb-4'>
                <p className='text-lg'>Name:</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='px-2 p-[2px] w-full outline-none'
                />
              </div>
              <div className='gap-3 items-center'>
                <p className='text-lg'>Comment:</p>
                <textarea
                  name=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id=""
                  cols="10"
                  rows="10"
                  className='w-full outline-none px-2'
                >

                </textarea>
              </div>
              <button className='bg-[#D67315] px-10  text-center justify-center text-white mt-2 p-2 rounded-lg lg:w-auto w-full' type='submit'>Send</button>
            </form>
          </div> */}
          </div>
        </section>
      </main>
    </>
  )
}

export default SingleInsight