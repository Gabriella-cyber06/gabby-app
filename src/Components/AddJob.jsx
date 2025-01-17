import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav'

const AddJob = () => {

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState('Compan Description');
  const [contactEmail, seContactEmail] = useState('Company@email.com');
  const [contactPhone, setContactPhone] = useState('01-243556');

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJob(newJob);
  }

   const addJob = async (newJob) => {
    try{
      const res = await fetch(`http://localhost:5000/jobs/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob),
      });
      if (res) {alert("New job added successfully") }

    } catch(error){
      console.error("Error while adding job ", error);
    } 
    return navigate(`/jobs`);
   }


  return (
    <section>
      <Nav />
      <form className="form-div" onSubmit={handleFormSubmit}>
        <h3 className='flex justify-center text-2xl'> New Job Form</h3>

        <div className="input-div">
            <label> Title</label>
            <input type='text' name='title' id='title' className='input' required value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div className="input-div">
            <label>Type</label>
            <input type='text' name='type' id='type' className='input' required value={type} onChange={(e) => setType(e.target.value)}/>
        </div>

        <div className="input-div">
            <label>Job description</label>
            <textarea rows={2} name='description' id='description' className='input' required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="input-div">
            <label>Job location</label>
            <input type='text' name='location' id='location' className='input' required value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="input-div">
            <label>Salary</label>
            <select name='salary' id='salary' className='input' required >
                <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>$50K - $60K</option>
                <option value='$60K - 70K'>$60K - $70K</option>
                <option value='$70K - 80K'>$70K - $80K</option>
                <option value='$80K - 90K'>$80K - $90K</option>
                <option value='$90K - 100K'>$90K - $100K</option>
                <option value='$100K - 125K'>$100K - $125K</option>
                <option value='$125K - 150K'>$125K - $150K</option>
                <option value='$150K - 175K'>$150K - $175K</option>
                <option value='$175K - 200K'>$175K - $200K</option>
                <option value='Over $200K'>Over $200K</option>
          </select>
        </div>

        <div className="input-div">
            <label>Company Name</label>
            <input type='text' name='company' id='company' className='input' required value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
        </div>

        <div className="input-div !items-end !mt-3">
            <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </section>
  )
}


export default AddJob
