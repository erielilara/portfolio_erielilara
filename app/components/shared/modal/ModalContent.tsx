import Image from "next/image";
import styles from "./modal.module.scss";
import { Heart, MessageCircle } from "react-feather";

type ModalContentProps = {
  imageSrc: string;
  description: string;
  onClose: () => void;
};

export const ModalContent = ({
  imageSrc,
  description,
  onClose,
}: ModalContentProps) => {
  if (!imageSrc) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={description}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.descriptiontitle}>
            <Image
              src="/images/foto_pErieli.jpeg"
              alt="Profile pic"
              width={32}
              height={32}
              className={styles.imageProfile}
            />
            <p>erielilara</p>
            <button className={styles.closeButton} onClick={onClose}>
              X
            </button>
          </div>
          <div className={styles.description}>
            <p>
              erielilara <span>{description}</span>
            </p>
          </div>
          <div className={styles.icons}>
            <Heart className={styles.icon} />
            <MessageCircle className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalContent;
