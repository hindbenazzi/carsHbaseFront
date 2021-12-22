import React, { Fragment } from 'react';

import clsx from 'clsx';
import axios from "axios";
import {
  Grid,
  InputLabel,
  InputAdornment,
  IconButton,
  Card,
  Divider,
  Button,
  FormControl
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import {useParams} from 'react-router-dom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(3)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "90%"
  }
}));
const baseURL = "http://localhost:18080/hbase/car/RowKey/";
const baseURL1 = "http://localhost:18080/hbase/car/";
const LocalUpdate = (props) => {
  const id=useParams();
  const classes = useStyles();
  const cardStyle={
    width: "100%",
    borderRadius: "3%",
    marginLeft:"200px"
  }
  const [values, setValues] = React.useState({
    rowKey:""
});
const [carcs, setCaracs] = React.useState({
      matricule:"mat",
      fuel:"",
      transmission:"",
      nombrePorte:"",
      puissanceFiscale:"",
      kilometrage:""
})
const [model, setModel] = React.useState({
     marque:"",
      model:"",
      annee:""
})
const [proprietaire, setProprietaire] = React.useState({
  nom:"",
  prenom:"",
  phone:""
  })
  React.useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseURL+id.id).then((response)=>{
        setValues({
          rowKey:response.data.rowKey
        })
        setCaracs(response.data.caracteristique)
        setModel(response.data.model)
        setProprietaire(response.data.propietaire)
        console.log(response.data)
      })
  }
  fetchData()
  }, []);
 const updateLocal= async (e) => {
        e.preventDefault()
        await axios.put(baseURL1,{
          rowKey:values.rowKey,
          caracteristique:carcs,
          model:model,
          propietaire:proprietaire
        }).then((response) => {
            console.log(response.data)
          });
    }
    const handleChange = prop => event => {
      if(prop=="rowKey"){
        setValues({ ...values, [prop]: event.target.value });
      }
      
      if(prop=="matricule" || prop=="fuel"|| prop=="transmission" || prop=="nombrePorte" || prop=="puissanceFiscale" ||prop=="kilometrage"){
          setCaracs({ ...carcs, [prop]: event.target.value });
      }
      if(prop=="marque" || prop=="model"|| prop=="annee"){
        setModel({ ...model, [prop]: event.target.value });
      }
      if(prop=="nom" || prop=="prenom"|| prop=="phone"){
        setProprietaire({ ...proprietaire, [prop]: event.target.value });
      }
      
    };


  const { action } = useParams();
  return (
    <Fragment>
      <Grid container spacing={4}>
        
        <Grid item xs={12} lg={6} >
          <Card className="p-4 mb-4" style={cardStyle}>
        <form>
            <Divider className="my-4" />
            <div >
               <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-rowKey">
                rowKey
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-rowKey"
                  value={values.rowKey}
                  onChange={handleChange('rowKey')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                         <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-matricule">
                matricule
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-matricule"
                  value={carcs.matricule}
                  onChange={handleChange('matricule')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>  
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-fuel">
                fuel
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-fuel"
                  value={carcs.fuel}
                  onChange={handleChange('fuel')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={180}
                />
              </FormControl>  
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-transmission">
                transmission
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-transmission"
                  value={carcs.transmission}
                  onChange={handleChange('transmission')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>  
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-nombrePorte">
                nombrePorte
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-nombrePorte"
                  value={carcs.nombrePorte}
                  onChange={handleChange('nombrePorte')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-puissanceFiscale">
                puissanceFiscale
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-puissanceFiscale"
                  value={carcs.puissanceFiscale}
                  onChange={handleChange('puissanceFiscale')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
              </FormControl>
            </div>
            <div >
               <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-kilometrage">
                   kilometrage
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-kilometrage"
                  value={carcs.kilometrage}
                  onChange={handleChange('kilometrage')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                         <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-model">
                model
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-model"
                  value={model.model}
                  onChange={handleChange('model')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>  
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-marque">
                marque
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-marque"
                  value={model.marque}
                  onChange={handleChange('marque')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={180}
                />
              </FormControl>  
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-annee">
                annee
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-annee"
                  value={model.annee}
                  onChange={handleChange('annee')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>  
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-nom">
                nom
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-nom"
                  value={proprietaire.nom}
                  onChange={handleChange('nom')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-prenom">
                prenom
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-prenom"
                  value={proprietaire.prenom}
                  onChange={handleChange('prenom')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
              </FormControl>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-phone">
                phone
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-phone"
                  value={proprietaire.phone}
                  onChange={handleChange('phone')}
                  endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        edge="end">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
              </FormControl>
            </div>
            <Button  variant="contained"
                     size="medium"
                     color="secondary" style={{marginLeft:"57%"}} onClick={updateLocal}>
             Modifier Local
            </Button>
            <br /><br />
        </ form>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LocalUpdate;
