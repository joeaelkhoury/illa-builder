import IconHotSpot from "@illa-public/icon-hot-spot"
import { TextLink } from "@illa-public/text-link"
import { FC } from "react"
import { createPortal } from "react-dom"
import { Trans, useTranslation } from "react-i18next"
import { AddIcon, CloseIcon, Modal, getColor } from "@illa-design/react"
import { openDiscord } from "@/utils/navigate"
import {
  closeIconStyle,
  containerStyle,
  createOptionsContainerStyle,
  descStyle,
  headerStyle,
  iconStyle,
  operateContainerStyle,
  titleStyle,
} from "./style"

interface CreateModalProps {
  closeGuideCreateAppModal: () => void
  openCreateFromResourceModal: () => void
  openCreateFromTemplateModal: () => void
}

const CreateModal: FC<CreateModalProps> = ({
  closeGuideCreateAppModal,
  openCreateFromResourceModal,
  openCreateFromTemplateModal,
}) => {
  const { t } = useTranslation()
  return createPortal(
    <Modal
      visible
      footer={false}
      minW="464px"
      w="464px"
      closable
      onCancel={closeGuideCreateAppModal}
      withoutPadding
    >
      <div css={containerStyle}>
        <span css={closeIconStyle}>
          <IconHotSpot onClick={closeGuideCreateAppModal}>
            <CloseIcon size="12px" color={getColor("grayBlue", "02")} />
          </IconHotSpot>
        </span>
        <div css={headerStyle}>
          <span css={titleStyle}>
            {t("editor.tutorial.panel.onboarding_app.congratulations_title")}
          </span>
          <span css={descStyle}>
            <Trans
              i18nKey={
                "editor.tutorial.panel.onboarding_app.congratulations_description"
              }
              t={t}
              components={[
                <TextLink key="openDiscord" onClick={openDiscord} />,
              ]}
            />
          </span>
        </div>
        <div css={operateContainerStyle}>
          <div
            css={createOptionsContainerStyle(getColor("techPurple", "03"))}
            onClick={openCreateFromTemplateModal}
          >
            <span css={iconStyle}>
              <AddIcon size="16px" />
            </span>
            <span>{t("Create from template")}</span>
          </div>
          <div
            css={createOptionsContainerStyle("#1AB0F1")}
            onClick={openCreateFromResourceModal}
          >
            <span css={iconStyle}>
              <AddIcon size="16px" />
            </span>
            <span>{t("new_dashboard.create_new.generate_crud_short")}</span>
          </div>
        </div>
      </div>
    </Modal>,
    document.body,
  )
}

export default CreateModal
