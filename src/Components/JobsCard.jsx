import { Link } from "react-router-dom"

const JobsCard = ({ job }) => {
  return (
    <div className="card">
        <h4 className="text-md font-light text-gray-500"> { job.type } </h4>
        <h2 className="text-2xl font-semibold line-clamp-1">{ job.title }</h2>
        
        <p className="text-slate-600 line-clamp-2"> { job.description } </p>

        <span className="text-sm font-light text-indigo-400"> { job.salary }/year </span>
        <span className="text-md font-light text-emerald-700">{ job.location }</span>

        <Link className="btn btn-primary w-full text-center" to={`/jobs/${job.id}`}>Read More</Link>
    </div>
  )
}

export default JobsCard