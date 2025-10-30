import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";

type ModalProps = {
  setIsModalOpened: Dispatch<SetStateAction<boolean>>;
  connectWallet: string;
};

const Modal: FC<PropsWithChildren<ModalProps>> = () => {
  return <div>Model</div>;
};

export default Modal;
