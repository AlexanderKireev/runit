import React from 'react';
import { useSelector } from 'react-redux';
import InfoModal from './Info.jsx';
import SignUpModal from './SignUp.jsx';
import SignInModal from './SignIn.jsx';
import ShareRepl from './ShareRepl.jsx';
import NewRepl from './NewRepl.jsx';
import RenameRepl from './RenameRepl.jsx';
import ConfirmationModal from './Confirmation.jsx';
import EditProfile from './EditProfile.jsx';
import ChangePassword from './ChangePassword.jsx';
import SnippetUnavailable from './SnippetUnavailable.jsx';

const modals = {
  gettingInfo: InfoModal,
  signingUp: SignUpModal,
  signingIn: SignInModal,
  sharingRepl: ShareRepl,
  genNewRepl: NewRepl,
  renameRepl: RenameRepl,
  confirmDelete: ConfirmationModal,
  editProfile: EditProfile,
  changePassword: ChangePassword,
  snippetUnavailable: SnippetUnavailable, // #TODO: Remove this modal once proper re-direct is configured on the backend
};

function ModalWindow() {
  const modalType = useSelector((state) => state.modal.type);
  const Modal = modals[modalType];
  if (!Modal) {
    return null;
  }
  return <Modal />;
}

export default ModalWindow;
