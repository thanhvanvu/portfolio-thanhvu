import { Col, Modal, Row } from 'antd'
import { IProjectList } from './Project'
import '@/components/rightPart/ProjectDetailModal.scss'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { useEffect, useState } from 'react'

interface IProjectDetailModal {
  project: IProjectList | null
  isOpenProjectModal: boolean
  setIsOpenProjectModal: (value: boolean) => void
}

const ProjectDetailModal = (props: IProjectDetailModal) => {
  const { project, isOpenProjectModal, setIsOpenProjectModal } = props
  const [projectImage, setProjectImage] = useState<ReactImageGalleryItem[]>([])

  useEffect(() => {
    if (project?.projectImage) {
      let projectImage = project.projectImage
      setProjectImage(projectImage)
    } else {
      setProjectImage([])
    }
  }, [project])

  return (
    <Modal
      className="project-modal"
      title={` `}
      open={isOpenProjectModal}
      onCancel={() => setIsOpenProjectModal(!isOpenProjectModal)}
      width="80vw"
      footer={false}
    >
      <Row gutter={[8, 8]} className="project-detail-wrapper">
        <Col xxl={13} xl={24} className="project-image">
          <ImageGallery
            items={projectImage}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
          />
        </Col>
        <Col xxl={10} xl={24} className="project-information">
          <div className="project-header">
            <p className="project-name">{project?.projectName}</p>
            <p className="project-date">{project?.projectDate}</p>
          </div>

          <div className="project-github">
            <a href={project?.projectGithub} target="_blank">
              {project?.projectGithub}
            </a>
          </div>
          <div className="project-bullet-point">
            <ul>
              {project &&
                project.projectBulletPoint &&
                project.projectBulletPoint.map((point, index) => {
                  console.log(point)
                  return (
                    <li>
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
