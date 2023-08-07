import { Modal } from 'antd'

import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import './ProjectImageToShow.scss'

interface IProjectImageToShow {
  openImageToShow: boolean
  setOpenImageToShow: (value: boolean) => void
  currentImageToShow: number | undefined
  projectImage: ReactImageGalleryItem[]
  projectName?: string
}

const ProjectImageToShow = (props: IProjectImageToShow) => {
  const {
    openImageToShow,
    setOpenImageToShow,
    currentImageToShow,
    projectImage,
    projectName,
  } = props
  return (
    <Modal
      title={projectName}
      footer={false}
      className="image-to-show"
      width="95vw"
      open={openImageToShow}
      onCancel={() => {
        setOpenImageToShow(false)
      }}
    >
      <ImageGallery
        items={projectImage}
        showFullscreenButton={false}
        showPlayButton={false}
        startIndex={currentImageToShow}
      />
    </Modal>
  )
}

export default ProjectImageToShow
