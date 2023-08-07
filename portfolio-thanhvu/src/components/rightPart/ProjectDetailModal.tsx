import { Col, Modal, Row } from 'antd'
import { IProjectList } from './Project'
import '@/components/rightPart/ProjectDetailModal.scss'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { useEffect, useRef, useState } from 'react'
import ProjectImageToShow from './ProjectImageToShow'

interface IProjectDetailModal {
  project: IProjectList | null
  isOpenProjectModal: boolean
  setIsOpenProjectModal: (value: boolean) => void
}

const ProjectDetailModal = (props: IProjectDetailModal) => {
  const { project, isOpenProjectModal, setIsOpenProjectModal } = props
  const [projectImage, setProjectImage] = useState<ReactImageGalleryItem[]>([])
  const [openImageToShow, setOpenImageToShow] = useState<boolean>(false)
  const [currentImageToShow, setCurrentImageToShow] = useState<
    number | undefined
  >(undefined)
  const refGallery = useRef<ImageGallery>(null)

  useEffect(() => {
    if (project?.projectImage) {
      let projectImage = project.projectImage
      setProjectImage(projectImage)
    } else {
      setProjectImage([])
    }
  }, [project])

  const handleShowImage = () => {
    if (refGallery.current) {
      const imageIndex = refGallery.current.getCurrentIndex()
      setOpenImageToShow(true)
      setCurrentImageToShow(imageIndex)
    }
  }

  return (
    <Modal
      className="project-modal"
      title={` `}
      open={isOpenProjectModal}
      onCancel={() => setIsOpenProjectModal(!isOpenProjectModal)}
      width="80vw"
      footer={false}
    >
      <ProjectImageToShow
        setOpenImageToShow={setOpenImageToShow}
        openImageToShow={openImageToShow}
        currentImageToShow={currentImageToShow}
        projectImage={projectImage}
        projectName={project?.projectName}
      />

      <Row gutter={[8, 8]} className="project-detail-wrapper">
        <Col xxl={13} xl={24} className="project-image">
          <ImageGallery
            ref={refGallery}
            items={projectImage}
            showFullscreenButton={true}
            showPlayButton={false}
            showThumbnails={false}
            onClick={handleShowImage}
          />
        </Col>
        <Col xxl={10} xl={24} className="project-information">
          <div className="project-header">
            <p className="project-name">{project?.projectName}</p>
            <p className="project-date">{project?.projectDate}</p>
          </div>

          <div className="project-github">
            <span>GitHub: </span>
            <a href={project?.projectGithub} target="_blank">
              {project?.projectGithub?.replace('https://github.com/', '')}
            </a>
          </div>
          <div className="project-demo">
            {project?.projectDemo === undefined ? (
              <></>
            ) : (
              <>
                <span>Demo: </span>
                <a href={project?.projectDemo} target="_blank">
                  {project?.projectDemo.replace('https://', '')}
                </a>
              </>
            )}
          </div>
          <div className="project-bullet-point">
            <ul>
              {project &&
                project.projectBulletPoint &&
                project.projectBulletPoint.map((point, index) => {
                  return (
                    <li key={index}>
                      <p>{point}</p>
                    </li>
                  )
                })}
            </ul>
          </div>
        </Col>
      </Row>
    </Modal>
  )
}

export default ProjectDetailModal
