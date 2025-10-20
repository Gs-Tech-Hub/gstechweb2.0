import LinesEllipsis from 'react-lines-ellipsis'
import Link from "next/link"

const ProjectOnboarding = ({ allProjects }) => {
    return (
        <div className=' w-[95vw]  mx-[auto] overflow-x-auto'>
            <table className='m-[auto] max-[755px]:w-[55rem]  mx-[auto] max-[755px]:overflow-x-auto'>
                <thead>
                    <tr >
                        <th>No</th><th>Company Name</th><th>Contact Person</th><th>Project Type</th><th>Date</th><th>Status</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProjects.map((item, i) => {
                            return <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>
                                    <LinesEllipsis
                                        text={item.companyName}
                                        maxLine='1'
                                        ellipsis='..'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </td>
                                <td>{item.contactPerson}</td>
                                <td>
                                    <LinesEllipsis
                                        text={item.projectType}
                                        maxLine='1'
                                        ellipsis='..'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </td>

                                <td>{item.createdAt}</td>
                                <td>{item.status}</td>
                                <td className='cursor-pointer hover:text-[orange]'><button><Link href={`/Admin/ProjectOnboarding/${item.id}`}>view</Link></button></td>
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default ProjectOnboarding