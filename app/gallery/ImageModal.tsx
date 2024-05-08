import React, { useState } from 'react'
import Delete from "@/assets/images/delete.svg"
import Download from "@/assets/images/download.svg"
import Image from 'next/image'
import Modal from '../components/common/Modal'
import Lightbox from "yet-another-react-lightbox";

const ImageModal = ({ show, onClose, onDelete, image, onDownload, onMakeVariation, onShare }) => {
    const [showLightBox, setShowLightBox] = useState(false)

  return (
    <Modal show={show} onClose={onClose} className='gallery-popup max-w-screen-lg'>
        <div className='collection-popup-inner'>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    {image?.img_url && <Image className='rounded-xl' onClick={() => setShowLightBox(true)} src={image.img_url} width={500} height={300} alt='image' />}
                </div>

                <div className='content'>
                    <h3 className='text-base text-slate-500'>Prompt</h3>
                    <p className='text-dark text-base font-Mona_Medium leading-6'>{image?.prompt}</p>

                    <div className='my-6 flex flex-wrap space-x-5'>
                        <div className='item'>
                            <h4 className='text-sm text-slate-500'>Image Size</h4>
                            <p className='text-sm text-dark font-Mona_Medium'>1024x1024</p>
                        </div>
                        <div className='item'>
                            <h4 className='text-sm text-slate-500'>Steps</h4>
                            <p className='text-sm text-dark font-Mona_Medium'>30</p>
                        </div>
                        <div className='item'>
                            <h4 className='text-sm text-slate-500'>CFG Scale</h4>
                            <p className='text-sm text-dark font-Mona_Medium'>7</p>
                        </div>
                        <div className='item'>
                            <h4 className='text-sm text-slate-500'>Created On</h4>
                            <p className='text-sm text-dark font-Mona_Medium'>{image?.createdAt}</p>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-2'>
                        <button className="rounded-md text-sm active:scale-95 bg-red-600 hover:bg-red-700 active:bg-red-700 focus:bg-red-700 min-w-12 min-h-10 text-center flex items-center justify-center" onClick={onDelete}><Image className='w-4 h-4' src={Delete} alt='delete' /></button>
                        <button className="rounded-md text-sm active:scale-95 bg-slate-600 hover:bg-slate-700 active:bg-slate-700 focus:bg-slate-700 min-w-12 min-h-10 text-center flex items-center justify-center" onClick={e => onDownload(e, image)}><Image className='w-4 h-4' src={Download} alt='download' /></button>
                        <button className="rounded-md text-sm active:scale-95 px-3 text-white bg-indigo-600 min-w-12 min-h-10 text-center flex items-center justify-center" onClick={() => onMakeVariation(image.prompt)}>Make another variation</button>
                        <button className="rounded-md text-sm active:scale-95 px-3 text-white bg-indigo-600 min-w-12 min-h-10 text-center flex items-center justify-center" onClick={() => onShare(image.id)}>Share</button>
                    </div>
                </div>
            </div>
        </div>
        

        <Lightbox
        open={showLightBox}
        close={() => setShowLightBox(false)}
        slides={[
          { src: image?.img_url },
        ]}
        controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
        }}
      />
    </Modal>
  )
}

export default ImageModal