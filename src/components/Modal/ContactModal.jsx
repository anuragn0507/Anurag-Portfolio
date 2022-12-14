import React from "react";
import Button from "react-bootstrap/Button";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal } from "@material-ui/core";
import { useForm } from "@formcarry/react";
import "./modal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid #01334b ",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#01334b ",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Call the `useForm` hook in your function component
  const { state, submit } = useForm({
    id: "nPEmMUGhjfN",
  });
  // u4dXKk5fNNv
  // Success message
  if (state.submitted) {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={submit}>
            <div className={classes.paper} style={{ textAlign: "Center" }}>
              <div style={{ color: "#0AABF0" }}>
                Thank you! We received your submission.
              </div>
            </div>
          </form>
        </Fade>
      </Modal>
    );
  }
  return (
    <div>
      <Button
        variant="primary"
        target="_blank"
        data-aos="fade-down"
        onClick={handleOpen}
        style={{ marginTop: "-20px", backgroundColor: "#0AABF0" }}
      >
        Click To Send Messege
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={submit}>
            <div className={classes.paper} style={{ textAlign: "Center" }}>
              <h2 id="transition-modal-title" style={{ color: "white" }}>
                Send Messege
              </h2>
              <div>
                <input
                  type="text"
                  placeholder="Write Your Name"
                  className="input-nilp"
                  required
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Write Your Email"
                  className="input-nilp"
                  required
                />
                <textarea
                  id="message"
                  placeholder="Write here..."
                  name="message"
                  className="input-nilp2"
                  required
                />
                <br /> 
                <Button type="submit" style={{ width: "60%", backgroundColor:"#0AABF0" }}>
                  SUBMIT
                </Button>
              </div>
            </div>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
