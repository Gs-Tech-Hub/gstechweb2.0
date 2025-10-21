import LinesEllipsis from 'react-lines-ellipsis'
import Link from "next/link"

const ContactCard = ({ allContacts }) => {
    return (
        <div className=' w-[95vw]  mx-[auto] overflow-x-auto'>
            <table className='m-[auto] max-[755px]:w-[55rem]  mx-[auto] max-[755px]:overflow-x-auto'>
                <thead>
                    <tr >
                        <th>No</th><th>Name</th><th>email</th><th>phone</th><th>message</th><th>Date</th><th>Status</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allContacts.map((item, i) => {
                            return <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>
                                    <LinesEllipsis
                                        text={item.name}
                                        maxLine='1'
                                        ellipsis='..'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </td>
                                <td>
                                    <LinesEllipsis
                                        text={item.email}
                                        maxLine='1'
                                        ellipsis='..'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </td>
                                <td>
                                    <LinesEllipsis
                                        text={item.phone === null ? 'unavailable' : item.phone}
                                        maxLine='1'
                                        ellipsis='..'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </td>
                                <td>
                                    <LinesEllipsis
                                        text={item.message}
                                        maxLine='1'
                                        ellipsis='..'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </td>
                                <td>{item.createdAt}</td>
                                <td>{item.status}</td>
                                <td className='cursor-pointer hover:text-[orange]'><button><Link href={`/Admin/Contact/${item.id}`}>view</Link></button></td>
                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default ContactCard