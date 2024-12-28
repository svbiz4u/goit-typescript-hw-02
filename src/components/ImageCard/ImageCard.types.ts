import { Urls, User } from "../../services/api.types";
import { ModalContent } from "../App/App.types";

export interface ImageCardProps {
    description: string;
    likes: number;
    urls: Urls;
    user: User;
    handleOpenModal: (content: ModalContent) => void;
  }