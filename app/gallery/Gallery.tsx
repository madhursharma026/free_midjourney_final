"use client"

import React, { useContext, useEffect, useState } from 'react'
import PageHeader from '../components/layout/PageHeader'
import { Button } from 'react-bootstrap'
import Image from 'next/image'
import Delete from "@/assets/images/delete.svg"
import Download from "@/assets/images/download.svg"
import { deleteImage, getCollection } from '@/utils/api'
import ImageModal from './ImageModal'
import ConfirmationModal from '../components/common/ConfirmationModal'
import NoImageFound from '../components/common/NoImageFound'
import { useRouter } from 'next/navigation'
import PageLoader from '../components/common/PageLoader'
import { userContext } from '../components/UserContextProvider'
import { formatedDate } from '@/utils/helpers'
import Container from '../components/Ui/Container'

const Gallery = () => {
    const [images, setImages] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)
    const { user } = useContext(userContext);
    const router = useRouter();

    const handleDelete = async () => {
        setIsDeleting(true)
        try {
            await deleteImage(deleteId)
            setImages(prev => prev.filter(img => img.id !== deleteId));
            showImageModal && setShowImageModal(false)
            showDeleteModal && setShowDeleteModal(false)
        } catch (err) {
            console.log('error', err)
        } finally {
            setIsDeleting(false)
        }
    }

    const handleDeleteModalOpen = (e: React.MouseEvent<HTMLButtonElement>, imageId: number) => {
        e.stopPropagation();
        setDeleteId(imageId)
        setShowDeleteModal(true)
    }

    const handleDownload = (e: React.MouseEvent<HTMLButtonElement>, img: any) => {
        e.stopPropagation();
        fetch(img.img_url).then(res => res.blob()).then(blob => {
            let blobUrl = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.download = `${img.prompt.slice(0, 50)}.jpg`;
            a.href = blobUrl;
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
    }

    const handleImageModalOpen = (image: any) => {
        setSelectedImage(image);
        setDeleteId(image.id)
        setShowImageModal(true)
    }

    const handleImageModalClose = () => {
        setShowImageModal(false);
    }

    const fetchImages = async () => {
        try {
            const { data } = await getCollection();
            setImages(data.images);
            setIsFetching(false)
        } catch (err) {
            setIsFetching(false)
        }
    }

    const handleMakeVariation = (prompt: string) => {
        router.push(`/?prompt=${prompt}`);
    }

    const handleShare = (imageId: string) => {
        router.push(`/?share_prompt=${imageId}`);
    }

    useEffect(() => {
        if (user?.email) fetchImages();
    }, [user?.email])

    return (
        <div className='image-gallery'>
            <PageHeader title="Gallery" />

            <Container>
                <div className='gallery-wrapper relative min-h-[calc(100vh_-_300px)] my-12'>
                    {!isFetching ? (images?.length ? (
                        <div className='grid grid-cols-4 gap-4'>
                            {images.map((img, i) => <div key={i} className='image group relative' onClick={() => handleImageModalOpen(img)}>
                                <span className='block overflow-hidden rounded-xl max-w-full h-80'>
                                    <Image className='w-full h-full object-cover transition scale-100 group-hover:scale-110' src={img.img_url} width={500} height={300} alt='image' />
                                </span>
                                <div className='content absolute inset-0 w-full h-full p-3 flex flex-col justify-between cursor-pointer transition'>
                                    <div className="flex flex-row items-center justify-end gap-2">
                                        <Button className='p-0 bg-transparent' onClick={(e) => handleDeleteModalOpen(e, img.id)}><Image src={Delete} alt='Delete' className='w-5 h-5' /></Button>
                                        <Button className='p-0 bg-transparent' onClick={(e) => handleDownload(e, img)}><Image src={Download} alt='Download' className='w-5 h-5' /></Button>
                                    </div>

                                    <div className='info flex justify-between items-center'>
                                        <h3 className='tracking-wide text-white text-sm font-Mona_Regular font-normal text-ellipsis w-44 overflow-hidden whitespace-nowrap'>{img.prompt}</h3>
                                        <p className='text-white text-xs tracking-wider'>{formatedDate(img.createdAt)}</p>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    ) : <NoImageFound />) : <PageLoader />}
                </div>
            </Container>

            <ConfirmationModal show={showDeleteModal} isDeleting={isDeleting} onClose={() => setShowDeleteModal(false)} title="Delete Image!" content="Are you sure you want to delete?" handleConfirm={handleDelete} />
            <ImageModal onClose={handleImageModalClose} onDownload={handleDownload} onMakeVariation={handleMakeVariation} onShare={handleShare} image={selectedImage} show={showImageModal} onDelete={() => setShowDeleteModal(true)} />
        </div>
    )
}

export default Gallery