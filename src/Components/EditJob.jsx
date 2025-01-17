import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../Components/Nav'

const EditJob = () => {

const [title, setTitle] = useState('');
const [type, setType] = useState('Full-Time');
const [location, setLocation] = useState('');
const [description, setDescription] = useState('');
const [salary, setSalary] = useState('Under $50K');
const [companyName, setCompanyName] = useState('');
const [companyDescription, setCompanyDescription] = useState('Company description');
const [contactEmail, setContactEmail] = useState('company@email.com');
const [contactPhone, setContactPhone] = useState('012345678');

const params = useParams();
const id = params.job_id;

const [job, setJob] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchJob = async () => {
        try {
            const res = await fetch(`http://localhost:5000/jobs/${id}`);
            const data = await res.json();
            setJob(data);
            setTitle(data.title);
            setType(data.type);
            setLocation(data.location); 
            setDescription(data.description);
            setSalary(data.salary);
            setCompanyName(data.company.name);
        } catch (error) {
            console.log('Error fetching job! ', error);
        } 
        finally{
            setLoading(false);
        }
    };

    fetchJob();
}, []); 

// console.log("Job : ", job);

  const navigate = useNavigate();
//   console.log("Job Title : ", job.title);

    const handleFormSubmit = (e) => {
        e.preventDefault();   //alert("Good");
    
        const filledJob = {
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

        // console.log("JOB ", filledJob);

        editJob(filledJob);

    }

    const editJob = async (filledJob) => {
        try {
            const res = await fetch(`http://localhost:5000/jobs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filledJob),
            });
            if(res){ alert('Job Updated Successfully'); }
        } catch (error) {
            console.log("Error updating job: " + error.message);
        }
        
        return navigate(`/jobs/${id}`);
    };


  return (
    <section>
      <Nav />
      <form className="form-div" onSubmit={handleFormSubmit}>
        <h3 className='flex justify-center text-2xl'> Edit Job Form</h3>

        <div className="input-div">
            <label>Job Title</label>
            <input type='text' name='title' id='title' className='input' required
            value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="input-div">
            <label>Type</label>
            <input type='text' name='type' id='type' className='input' required
            value={type} onChange={(e) => setType(e.target.value)} />
        </div>

        <div className="input-div">
            <label>Job description</label>
            <textarea rows={2} name='description' id='description' className='input' required 
            value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
        </div>

        <div className="input-div">
            <label>Job location</label>
            <input type='text' name='location' id='location' className='input' required
            value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="input-div">
            <label>Salary</label>
            <select name='salary' id='salary' className='input' required
            value={salary} onChange={(e) => setSalary(e.target.value)} >
                <option value='Under $50K' selected={false}>Under $50K</option>
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
            <input type='text' name='company' id='company' className='input' required
            value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>

        <div className="input-div !items-end !mt-3">
            <button type="submit" className='btn btn-primary'>Update</button>
        </div>
      </form>
    </section>
  )
}

export default EditJob