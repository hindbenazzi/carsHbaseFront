import React from "react";
import { Grid ,Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Link , Redirect} from 'react-router-dom';
// components
import PageTitle from "../../components/PageTitle";
import { Add } from "@material-ui/icons";



const columns = [
  {name: "rowKey", label: "rowKey"},
  {
    
    label: "matricule",
    name: "caracteristique.matricule",
    
  },
  {
    label: "fuel",
    name: "caracteristique.fuel",
    
  },
  {
    label: "transmission",
    name: "caracteristique.transmission",
    
  },
  {
    label: "nombrePorte",
    name: "caracteristique.nombrePorte",
    
  },
  {
    label: "model",
    name: "model.model",
    
  },
  {
    label: "marque",
    name: "model.marque",
    
  },
  {
    label: "annee",
    name: "model.annee",
    
  }
]
const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))
const baseURL = "http://localhost:18080/hbase/car/";
const baseURL1 = "http://localhost:18080/hbase/car/";
export default function Locals(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const fetchData = async () => {
    await axios.get(baseURL).then((response)=>{
      setValues(response.data);
      console.log(response.data)
    })
  }
React.useEffect(() => {
  const fetchData = async () => {
    await axios.get(baseURL).then((response)=>{
      setValues(response.data);
      console.log(response.data)
    })
    

}
fetchData()
 
}, []);
  
const onRowClick = (rowData, rowMeta) => {
  console.log("----RowClick");
  console.log("rowData: ", rowData[0]);
  console.log("rowMeta: ", rowMeta);
  props.history.push({
    pathname: `/app/updateLocal/${rowData[0]}`})
 
  
}
  
  const deleteItem=async (uId)=>{
    axios
  .delete(baseURL1+'RowKey/'+uId)
  .then(() => {
    fetchData()
    
  });
}

  const onRowSelectionChange = (curRowSelected, allRowsSelected) => {
    console.log("All Selected: ", allRowsSelected);
    let ids=[];
    allRowsSelected.map((item)=>{
      ids.push(values[parseInt(item.index)].rowKey)
    })
    setSelected(ids)
    console.log(selected)
  }
  const onRowsDelete= (rowsDeleted, newData) => {
    console.log('rowsDeleted');
    console.log(selected);
    selected.forEach((item,index)=>{
      deleteItem(item)
    })
    console.log(values[rowsDeleted.data[0].index].rowKey)
  }
  const options = {
		filterType: 'checkbox',
		onRowClick: onRowClick,
    enableNestedDataAccess: '.',
		onRowSelectionChange: onRowSelectionChange,
    onRowsDelete:onRowsDelete
    
	};
 
  return (
    <>
      <PageTitle title="List of cars" button={<Link to="/app/addLocal"><Button
      variant="contained"
      size="medium"
      color="secondary"
    ><Add></Add></Button></Link>}/>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Liste des locaux"
            data={values}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </>
  );
}
