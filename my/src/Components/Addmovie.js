import React,{useState} from 'react'
import{Button,Modal} from 'react-bootstrap';

const Addmovie = ({addMovie})=> {
  const [show, setShow] = useState(false);
  const [newmovie,setNewmovie]=useState(
    {
      Titl : "",
      Poster : "",
      Description : "",
      Rate : "",
      Year : "",
  
    }
  )

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlechange = (e)=> {
    setNewmovie({...newmovie,[e.target.name]:e.target.value})};
  return (
    <div>
    <Button variant="primary" onClick={handleShow} style={{margin : '20px'}} >
Add movie    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add movies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
     <li> <input  type='text' className ='col col-sm-4'   name='Titl' placeholder=' Title'  value={newmovie.Titl}
       onChange={handlechange} /></li>
     <li>  <input  type='text' className ='col col-sm-4'   name='Description' placeholder=' Description'  value={newmovie.Description }  
         onChange={handlechange} /></li>
      <li> <input type='text' className ='col col-sm-4'  name='Poster'  placeholder=' Poster'  value={newmovie.Poster}
       onChange={handlechange} /></li>
      <li> <input type='number' className ='col col-sm-4' name='Year'   placeholder=' Year'  value={newmovie.Year}
       onChange={handlechange} /></li>
     <li>  <input type='number' className ='col col-sm-4'  name='Rate'  placeholder=' Rate'  value={newmovie.Rate}
       onChange={handlechange} /></li>
       </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick= {()=> {
          addMovie(newmovie);
          setNewmovie({
            Titl : "",
            Poster : "",
            Description : "",
            Rate : "",
            Year : "",
          });console.log(newmovie);
          handleClose()}}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </div>

  )
}

export default Addmovie