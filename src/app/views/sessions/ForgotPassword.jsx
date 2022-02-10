import React, { useState, useEffect } from "react";
import { Card, Grid, Button } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import url from "../invoice/InvoiceService";
import bcrypt from "bcryptjs";
import { useParams, useHistory } from "react-router-dom";




const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#1A2038",
  },
  card: {
    maxWidth: 800,
    borderRadius: 12,
    margin: "1rem",
  },
}));

const ForgotPassword = () => {
  const [state, setState] = useState({});
  const classes = useStyles();
  const [emails, setEmails] = useState([])
  const [hash, setHash] = useState('')
  const [message, setMessage] = useState('');
  const [color, setColor] = useState(false);
  const history = useHistory();



  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const checkOtp = async (otp, hash) => {

    const isMatch = await bcrypt.compare(otp, hash);
    if (isMatch) {
      history.push("/session/change-password/" + state.email)
    } else {
      setColor(false)
      setMessage('Entered OTP is Wrong')
    }

  }

  const handleFormSubmit = async (event) => {
    if (hash) {
      checkOtp(state.totp, hash)
    } else {
      if (emails.includes(state.email)) {

        await url.post('sendOtp', state)
          .then(function (data) {
            setMessage('A OTP has been sent to ')
            setHash(data.data.message)
            setColor(true)

          })
        const salt = await bcrypt.genSalt(10);
        const token = await bcrypt.hash(hash, salt);
        localStorage.setItem('token', token)


      } else {
        setMessage('Email Not Found')
      }
    }

  };

  useEffect(() => {
    url.get(`getAllEmails`).then(({ data }) => {
      const emails = data.filter(obj => obj.email !== null).map((item, i) => {
        return item.email
      })
      setEmails(emails)
    })

  }, []);


  let { email, totp } = state;

  return (
    <div
      className={clsx(
        "flex justify-center items-center  min-h-full-screen",
        classes.cardHolder
      )}
    >
      <Card className={classes.card}>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div className="p-8 flex justify-center items-center h-full">
              <img
                className="w-full"
                src="/assets/images/illustrations/dreamer.svg"
                alt=""
              />
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <div className="p-8 h-full bg-light-gray relative">
              <ValidatorForm onSubmit={handleFormSubmit}>
                {hash ?
                  <TextValidator
                    className="mb-6 w-full"
                    variant="outlined"
                    label="OTP"
                    onChange={handleChange}
                    type="totp"
                    name="totp"
                    size="small"
                    value={totp || ""}
                    validators={["required"]}
                    errorMessages={[
                      "this field is required",
                    ]}
                  />
                  :
                  <TextValidator
                    className="mb-6 w-full"
                    variant="outlined"
                    label="Email"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    size="small"
                    value={email || ""}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid",
                    ]}
                  />
                }
                {message && <p className={color ? "text-success" : "text-error"}>{message} {color && (<b>{state.email}</b>)}</p>}
                <div className="flex items-center">
                  <Button variant="contained" color="primary" type="submit">
                    {hash ? 'VERIFY OTP' : 'GET OTP'}
                  </Button>
                  <span className="ml-4 mr-2">or</span>
                  <Link to="/session/signin">
                    <Button className="capitalize">Sign in</Button>
                  </Link>
                </div>
              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div >
  );
};

export default ForgotPassword;
