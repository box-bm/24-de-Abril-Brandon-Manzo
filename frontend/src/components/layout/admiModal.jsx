import PropTypes from 'prop-types';
import { Box, Button, Card, CardActions, CardContent, CardHeader, IconButton, Modal } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const AdminModal = (props) => {
  const { isModalOpen, child, onClose, onPressSave, title, subtitle } = props;

  const closeModal = () => {
    onClose();
  }
  const submitModal = () => {
    onPressSave();
  }

  return (
    <Modal open={isModalOpen}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        maxWidth: 600,
      }}>
        <Card>
          <CardHeader
            title={title}
            subheader={subtitle}
            action={
              <IconButton onClick={closeModal}>
                <CloseIcon />
              </IconButton>
            } />
          <CardContent>
            {child}
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end", gap: 2 }}>
            <Button onClick={closeModal}>Cancelar</Button>
            <Button variant='contained' onClick={submitModal}>Guardar</Button>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
}

AdminModal.propTypes = {
  isModalOpen: PropTypes.bool,
  child: PropTypes.node,
  onClose: PropTypes.func,
  onPressSave: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default AdminModal;