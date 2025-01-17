import { useEffect, useState } from "react";
import JobsCard from "./JobsCard"
import Nav from "./Nav";
import JobCard from "./skeleton/JobCard";

const Jobs = () => {

    const [jobs, setsJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch(`http://localhost:5000/jobs`);
                const data = await res.json();
                setsJobs(data);
            } catch (error) {
                console.log("Error fetching jobs", error);
            }
            finally{
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    console.log("Jobs ", jobs);

  return ( 
    <>
        <Nav />
    
        <section className="px-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 min-lg:grid-cols-3 gap-8 p-4 rounded-lg"> 
                    {
                    loading ? 
                        (
                            <>
                                <JobCard /> <JobCard /> <JobCard /> <JobCard /> <JobCard /> <JobCard />
                            </>
                        ) 
                        :
                            <>
                                {jobs.map((job) => (
                                <JobsCard key={job.id} job={job} />
                                ))}
                            </> 
                    } 
                    
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Jobs